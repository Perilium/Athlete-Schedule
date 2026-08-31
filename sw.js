// Ohrsom Hub Service Worker for Background Notifications & PWA
const CACHE_NAME = 'ohrsom-cache-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Handle Background Push Notifications
self.addEventListener('push', (event) => {
  let data = {};
  try {
    data = event.data ? event.data.json() : {};
  } catch (e) {
    data = { title: '🌿 Ohrsom Yom Tov Alert', body: event.data ? event.data.text() : 'Upcoming Yom Tov event reminder.' };
  }

  const title = data.title || '🌿 Ohrsom Yom Tov Alert';
  const options = {
    body: data.body || 'You have an upcoming Yom Tov schedule reminder.',
    icon: 'icons/ohrsom-icon.svg',
    badge: 'icons/ohrsom-icon.svg',
    vibrate: [200, 100, 200],
    data: {
      url: data.url || '/ohrsom-schedule.html'
    },
    actions: [
      { action: 'view', title: '👁️ View Schedule' },
      { action: 'dismiss', title: '✕ Dismiss' }
    ]
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

// Handle Notification Click (Opens the app from lock screen / top bar)
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'dismiss') return;

  const targetUrl = (event.notification.data && event.notification.data.url) ? event.notification.data.url : '/ohrsom-schedule.html';

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if (client.url.includes('ohrsom-schedule') && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(targetUrl);
      }
    })
  );
});
