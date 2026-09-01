const fs = require('fs');

// 1. Update next.config.ts
let nextConfig = fs.readFileSync('../perilium-crm-web/next.config.ts', 'utf8');
if (!nextConfig.includes('/ohrsom-schedule')) {
  nextConfig = nextConfig.replace(
    "{ source: '/ohrsom-flowchart', destination: '/ohrsom-flowchart.html' },",
    "{ source: '/ohrsom-flowchart', destination: '/ohrsom-flowchart.html' },\n      { source: '/ohrsom-schedule', destination: '/ohrsom-schedule.html' },\n      { source: '/ohrsom-events', destination: '/ohrsom-events.html' },"
  );
  fs.writeFileSync('../perilium-crm-web/next.config.ts', nextConfig, 'utf8');
  console.log('Updated next.config.ts');
}

// 2. Update src/proxy.ts
let proxy = fs.readFileSync('../perilium-crm-web/src/proxy.ts', 'utf8');
if (!proxy.includes('/ohrsom-schedule')) {
  proxy = proxy.replace(
    "'/ohrsom-flowchart.html',",
    "'/ohrsom-flowchart.html',\n  '/ohrsom-schedule',\n  '/ohrsom-schedule.html',\n  '/ohrsom-events',\n  '/ohrsom-events.html',"
  );
  proxy = proxy.replace(
    "pathname === '/ohrsom-flowchart.html' ||",
    "pathname === '/ohrsom-flowchart.html' ||\n    pathname === '/ohrsom-schedule' ||\n    pathname === '/ohrsom-schedule.html' ||\n    pathname === '/ohrsom-events' ||\n    pathname === '/ohrsom-events.html' ||"
  );
  proxy = proxy.replace(
    "|ohrsom-proposal.html|ohrsom-proposal).*)",
    "|ohrsom-proposal.html|ohrsom-proposal|ohrsom-schedule.html|ohrsom-schedule|ohrsom-events.html|ohrsom-events).*)"
  );
  fs.writeFileSync('../perilium-crm-web/src/proxy.ts', proxy, 'utf8');
  console.log('Updated src/proxy.ts');
}
