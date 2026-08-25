"use strict";

// Hybrid 5.2 Workout Program Data (No Side Planks)
const WORKOUTS = {
  monday: {
    label: "Monday",
    title: "Upper + Secondary Legs + Abs",
    duration: "40-45 min",
    steps: [
      exercise("barbell-row", "Barbell Bent-Over Row", "20 kg barbell", "4 x 8-15", 4, 45, 85, ["Hinge at hips.", "Neutral spine.", "Pull toward lower ribs/navel.", "Controlled lowering."]),
      exercise("floor-press", "Barbell Floor Press", "20 kg barbell", "4 x 8-15", 4, 45, 85, ["Controlled descent.", "Upper arms gently contact floor.", "Drive upward."]),
      equipment("20 kg barbell", "2 x 10 kg dumbbells", 90),
      superset("Superset A", 3, 60, [
        exercise("bulgarian-split-squat", "Bulgarian Split Squat", "DBs", "3 x 8-12 each leg", 3, 70, 0, ["Rear foot supported.", "Controlled descent.", "Drive through front leg."], "leg"),
        transition(10),
        exercise("arnold-press", "Arnold Press", "2 x 10 kg DB", "3 x 8-12", 3, 40, 0, [])
      ]),
      superset("Superset B", 3, 50, [
        exercise("hammer-curl", "Hammer Curl", "2 x 10 kg DB", "3 x 10-15", 3, 40, 0, ["Palms inward.", "Elbows controlled.", "No swinging."]),
        transition(8),
        exercise("rear-delt-fly", "Rear-Delt Fly", "Appropriate resistance", "3 x 12-20", 3, 40, 0, ["10 kg may be too heavy for strict form."])
      ]),
      superset("Abs Superset", 3, 40, [
        exercise("weighted-crunch", "Weighted Crunch", "DB", "3 x 10-15", 3, 35, 0, ["Bring ribs toward pelvis.", "Don't simply move head forward."]),
        transition(8),
        exercise("dead-bug", "Dead Bug", "Bodyweight", "2 x 8-12 each side", 2, 45, 0, ["Slow movement.", "Maintain trunk control.", "Avoid excessive lower-back arch."], "side")
      ])
    ]
  },
  tuesday: {
    label: "Tuesday",
    title: "VO2 Max + Mobility",
    duration: "25-30 min",
    steps: [
      timed("warmup", "Warm-Up + Mobility", "Easy walk/jog + mobility", 300, ["World's Greatest Stretch.", "Knee-to-wall ankle mobilisation.", "Leg swings.", "2-3 short accelerations."]),
      intervals("vo2", "VO2 Intervals", 8, 60, "easyRecoverySeconds"),
      timed("cooldown", "Cooldown", "Easy walking / relaxed breathing", 300, ["Relax the breathing and bring the heart rate down."])
    ]
  },
  thursday: {
    label: "Thursday",
    title: "Power + Main Legs + Functional Strength",
    duration: "40-45 min",
    steps: [
      exercise("squat-jumps", "Squat Jumps", "Bodyweight", "3 x 3-5", 3, 20, 75, ["Explosive jump.", "Controlled/quiet landing.", "Stop if power noticeably deteriorates."]),
      exercise("zercher-squat", "Zercher Squat", "20 kg barbell", "4 x 8-15", 4, 50, 90, ["Brace.", "Controlled descent.", "Strong drive upward."]),
      exercise("romanian-deadlift", "Romanian Deadlift", "20 kg barbell", "4 x 8-15", 4, 50, 90, ["Push hips backward.", "Keep bar close.", "Controlled spine.", "Stop if it reproduces lower-back pain."]),
      equipment("20 kg barbell", "2 x 10 kg dumbbells", 90),
      superset("Superset A", 3, 60, [
        exercise("lateral-lunge", "Lateral Lunge", "DB", "3 x 8-12 each side", 3, 65, 0, ["Step wide.", "Sit into working hip.", "Controlled return."], "side"),
        transition(10),
        exercise("single-leg-calf-raise", "Single-Leg Calf Raise", "DB + step", "3 x 12-20 each side", 3, 50, 0, ["Full comfortable stretch.", "Strong contraction at top."], "side")
      ]),
      exercise("suitcase-carry", "Suitcase Carry", "10 kg DB", "3 x 30-60 sec each side", 3, 90, 60, ["Carry one-sided.", "Stay tall.", "Resist leaning and twisting.", "Switch sides."], "side")
    ]
  },
  friday: {
    label: "Friday",
    title: "Upper Hypertrophy + Abs + Rotation",
    duration: "35-40 min",
    steps: [
      exercise("dumbbell-bench-press", "Dumbbell Bench Press", "2 x 10 kg DB", "4 x 8-15", 4, 45, 75, ["Controlled descent.", "Full press at top."]),
      exercise("incline-dumbbell-row", "Incline Dumbbell Row", "2 x 10 kg DB", "4 x 8-15", 4, 45, 75, ["Chest supported on incline.", "Pull through elbows."]),
      superset("Superset A", 3, 50, [
        exercise("lateral-raise", "Lateral Raise", "Light DBs / bands", "3 x 12-20", 3, 35, 0, ["Lead with elbows.", "Slight forward lean."]),
        transition(8),
        exercise("overhead-triceps-extension", "Overhead Triceps Extension", "DB", "3 x 10-15", 3, 40, 0, ["Keep elbows relatively fixed.", "Full stretch at bottom."])
      ]),
      superset("Superset B (Core & Rotation)", 3, 45, [
        exercise("hollow-body-hold", "Hollow Body Hold", "Bodyweight", "3 x 20-30 sec", 3, 35, 0, ["Lower back firmly pressed to floor.", "Tuck knees if too difficult."]),
        transition(8),
        exercise("pallof-press", "Pallof Press", "Band / Cable", "3 x 10-12 each side", 3, 40, 0, ["Resist rotational twist.", "Slow controlled press."], "side")
      ])
    ]
  }
};

const RECOVERY = [
  ["Wednesday", "Zone 2 Cardio (45-60 min easy jog/cycle) + Full Body Mobility"],
  ["Saturday", "Zone 2 Active Recovery (30-45 min) or Complete Rest"],
  ["Sunday", "Full Rest & Recovery / Light Walking"]
];

const DEFAULT_SETTINGS = {
  sound: true,
  vibration: true,
  wakeLock: true,
  defaultRest: 45,
  supersetRest: 60,
  vo2Hard: 60,
  easyRecoverySeconds: 75,
  equipChangeSeconds: 90
};

// State & Storage
const state = {
  selectedDay: null,
  mode: "guided",
  stepIndex: 0,
  setIndex: 1,
  roundIndex: 1,
  supersetPartIndex: 0,
  phase: "ready", // ready, work, rest, timer
  intervalPhase: "hard", // hard, easy
  startedAt: null,
  sessionRecords: [],
  timer: null,
  remaining: 0,
  totalTimerSeconds: 0,
  running: false,
  timerDone: null,
  wakeLock: null,
  deferredPrompt: null,
  audioCtx: null
};

const els = {};

const store = {
  get history() {
    try {
      return JSON.parse(localStorage.getItem("hybrid_history") || "[]");
    } catch {
      return [];
    }
  },
  set history(v) {
    localStorage.setItem("hybrid_history", JSON.stringify(v));
  },
  get settings() {
    try {
      return { ...DEFAULT_SETTINGS, ...JSON.parse(localStorage.getItem("hybrid_settings") || "{}") };
    } catch {
      return { ...DEFAULT_SETTINGS };
    }
  },
  set settings(v) {
    localStorage.setItem("hybrid_settings", JSON.stringify(v));
  },
  get activeSession() {
    try {
      return JSON.parse(localStorage.getItem("hybrid_active_session") || "null");
    } catch {
      return null;
    }
  },
  set activeSession(v) {
    if (v === null) localStorage.removeItem("hybrid_active_session");
    else localStorage.setItem("hybrid_active_session", JSON.stringify(v));
  }
};

// Exercise constructors
function exercise(id, name, equipment, target, sets, workSeconds, restSeconds, cues = [], unilateral = null) {
  return { type: "exercise", id, name, equipment, target, sets, workSeconds, restSeconds, cues, unilateral };
}

function superset(name, rounds, restSeconds, parts) {
  return { type: "superset", name, rounds, restSeconds, parts };
}

function transition(seconds) {
  return { type: "transition", seconds };
}

function equipment(from, to, seconds) {
  return { type: "equipment", from, to, seconds };
}

function timed(id, name, equipment, seconds, cues = []) {
  return { type: "timed", id, name, equipment, seconds, cues };
}

function intervals(id, name, rounds, hardSeconds, easySettingKey) {
  return { type: "intervals", id, name, rounds, hardSeconds, easySettingKey };
}

// Initialization
document.addEventListener("DOMContentLoaded", init);

function init() {
  cacheEls();
  renderDays();
  renderRecovery();
  bindGlobalEvents();
  renderHistory();
  renderSettings();
  updateSoundQuickBtn();
  checkResumeBanner();
  registerServiceWorker();
  initStoragePersistence();
}

function cacheEls() {
  [
    "dayGrid", "recoveryInfo", "sessionPanel", "historyList", "clearHistoryBtn",
    "soundQuickToggle", "soundInput", "testSoundBtn", "vibrationInput", "wakeLockInput",
    "defaultRestInput", "supersetRestInput", "vo2HardInput", "easyRecoveryInput", "equipChangeInput",
    "resetTimersBtn", "exportDataBtn", "importDataInput", "resumeBanner", "installBtn",
    "editTimerDialog", "editTimerForm", "customTimerMinutes", "customTimerSeconds", "cancelTimerModalBtn"
  ].forEach((id) => (els[id] = document.getElementById(id)));
}

function bindGlobalEvents() {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => switchScreen(tab.dataset.screen));
  });

  if (els.clearHistoryBtn) els.clearHistoryBtn.addEventListener("click", clearHistory);
  if (els.soundQuickToggle) els.soundQuickToggle.addEventListener("click", toggleSoundQuick);
  if (els.testSoundBtn) els.testSoundBtn.addEventListener("click", testAudio);
  if (els.resetTimersBtn) els.resetTimersBtn.addEventListener("click", resetTimerDefaults);
  if (els.exportDataBtn) els.exportDataBtn.addEventListener("click", exportWorkoutData);
  if (els.importDataInput) els.importDataInput.addEventListener("change", importWorkoutData);

  // Settings inputs
  [
    "soundInput", "vibrationInput", "wakeLockInput", "defaultRestInput",
    "supersetRestInput", "vo2HardInput", "easyRecoveryInput", "equipChangeInput"
  ].forEach((id) => {
    if (els[id]) els[id].addEventListener("change", saveSettings);
  });

  // Modal events
  if (els.cancelTimerModalBtn) {
    els.cancelTimerModalBtn.addEventListener("click", () => els.editTimerDialog.close());
  }
  if (els.editTimerForm) {
    els.editTimerForm.addEventListener("submit", handleTimerModalSave);
  }

  // PWA install
  if (els.installBtn) els.installBtn.addEventListener("click", installApp);
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    state.deferredPrompt = event;
    if (els.installBtn) els.installBtn.classList.remove("hidden");
  });

  // Global touch / click to unlock AudioContext
  document.addEventListener("click", unlockAudio, { once: true });
  document.addEventListener("touchstart", unlockAudio, { once: true });
}

// Audio Engine (Web Audio API Synthesizer)
function getAudioContext() {
  if (!state.audioCtx) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (AudioCtx) state.audioCtx = new AudioCtx();
  }
  if (state.audioCtx && state.audioCtx.state === "suspended") {
    state.audioCtx.resume();
  }
  return state.audioCtx;
}

function unlockAudio() {
  getAudioContext();
}

function playTone(freq, type, durationMs, gainLevel = 0.1, delayMs = 0) {
  if (!store.settings.sound) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  setTimeout(() => {
    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(gainLevel, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + durationMs / 1000);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + durationMs / 1000);
    } catch (_) {}
  }, delayMs);
}

function playStartChime() {
  // Rising 2-tone chime (D5 -> A5)
  playTone(587.33, "sine", 120, 0.12, 0);
  playTone(880.00, "sine", 200, 0.14, 110);
}

function playCountdownTick(secondsLeft) {
  // Warning tick at 3, 2, 1 seconds
  const freq = secondsLeft === 1 ? 880 : 740;
  playTone(freq, "triangle", 90, 0.15, 0);
}

function playFinishChime() {
  // Distinct celebratory double completion chime (A5 -> D6)
  playTone(880.00, "sine", 160, 0.15, 0);
  playTone(1174.66, "triangle", 320, 0.18, 140);
}

function playIntervalCue(isHard) {
  if (isHard) {
    // High energy start alert
    playTone(1046.50, "square", 150, 0.12, 0);
    playTone(1318.51, "sine", 250, 0.14, 120);
  } else {
    // Calming recovery chime
    playTone(659.25, "sine", 180, 0.10, 0);
    playTone(440.00, "sine", 280, 0.10, 140);
  }
}

function testAudio() {
  unlockAudio();
  playStartChime();
  setTimeout(() => playCountdownTick(3), 400);
  setTimeout(() => playCountdownTick(2), 750);
  setTimeout(() => playCountdownTick(1), 1100);
  setTimeout(() => playFinishChime(), 1450);
}

function notifyDone() {
  playFinishChime();
  if (store.settings.vibration && navigator.vibrate) {
    try { navigator.vibrate([200, 100, 200]); } catch (_) {}
  }
}

function toggleSoundQuick() {
  const current = store.settings.sound;
  const next = !current;
  const s = store.settings;
  s.sound = next;
  store.settings = s;
  renderSettings();
  updateSoundQuickBtn();
  if (next) playStartChime();
}

function updateSoundQuickBtn() {
  if (els.soundQuickToggle) {
    els.soundQuickToggle.textContent = store.settings.sound ? "🔊" : "🔇";
    els.soundQuickToggle.title = store.settings.sound ? "Sound Enabled (Tap to mute)" : "Sound Muted (Tap to unmute)";
  }
}

// Navigation & Screen Rendering
function renderDays() {
  els.dayGrid.innerHTML = Object.entries(WORKOUTS).map(([key, workout]) => `
    <button class="day-card" type="button" data-day="${key}">
      <div>
        <strong>${workout.label}</strong>
        <span class="day-title">${workout.title}</span>
      </div>
      <span class="day-duration">⏱ ${workout.duration}</span>
    </button>
  `).join("");
  els.dayGrid.querySelectorAll(".day-card").forEach((card) => {
    card.addEventListener("click", () => startSession(card.dataset.day));
  });
}

function renderRecovery() {
  els.recoveryInfo.innerHTML = RECOVERY.map(([day, text]) => `<div><strong>${day}:</strong> ${text}</div>`).join("");
}

function switchScreen(name) {
  document.querySelectorAll(".tab").forEach((tab) => tab.classList.toggle("active", tab.dataset.screen === name));
  document.querySelectorAll(".screen").forEach((screen) => screen.classList.remove("active-screen"));
  const screenEl = document.getElementById(`${name}Screen`);
  if (screenEl) screenEl.classList.add("active-screen");
  if (name === "history") renderHistory();
  if (name === "settings") renderSettings();
}

// In-Progress Auto-Save & Recovery Banner
function saveActiveSession() {
  if (!state.selectedDay) {
    store.activeSession = null;
    return;
  }
  store.activeSession = {
    selectedDay: state.selectedDay,
    mode: state.mode,
    stepIndex: state.stepIndex,
    setIndex: state.setIndex,
    roundIndex: state.roundIndex,
    supersetPartIndex: state.supersetPartIndex,
    phase: state.phase,
    intervalPhase: state.intervalPhase,
    startedAt: state.startedAt,
    sessionRecords: state.sessionRecords
  };
  checkResumeBanner();
}

function clearActiveSession() {
  store.activeSession = null;
  checkResumeBanner();
}

function checkResumeBanner() {
  const saved = store.activeSession;
  if (!saved || !WORKOUTS[saved.selectedDay] || !els.sessionPanel.classList.contains("hidden")) {
    if (els.resumeBanner) els.resumeBanner.classList.add("hidden");
    return;
  }
  const workout = WORKOUTS[saved.selectedDay];
  els.resumeBanner.innerHTML = `
    <div class="resume-banner-info">
      <strong>🏃 Workout in progress</strong>
      <span>${workout.label} (${workout.title})</span>
    </div>
    <div class="resume-banner-actions">
      <button class="primary-btn small-btn" id="resumeSessionBtn" type="button">Resume</button>
      <button class="ghost-btn small-btn" id="discardSessionBtn" type="button">Discard</button>
    </div>
  `;
  els.resumeBanner.classList.remove("hidden");
  document.getElementById("resumeSessionBtn").addEventListener("click", resumeSavedSession);
  document.getElementById("discardSessionBtn").addEventListener("click", discardSavedSession);
}

function resumeSavedSession() {
  const saved = store.activeSession;
  if (!saved) return;
  stopTimer();
  state.selectedDay = saved.selectedDay;
  state.mode = saved.mode || "guided";
  state.stepIndex = saved.stepIndex || 0;
  state.setIndex = saved.setIndex || 1;
  state.roundIndex = saved.roundIndex || 1;
  state.supersetPartIndex = saved.supersetPartIndex || 0;
  state.phase = saved.phase || "ready";
  state.intervalPhase = saved.intervalPhase || "hard";
  state.startedAt = saved.startedAt || Date.now();
  state.sessionRecords = saved.sessionRecords || [];
  els.sessionPanel.classList.remove("hidden");
  els.resumeBanner.classList.add("hidden");
  requestWakeLock();
  renderSession();
}

function discardSavedSession() {
  clearActiveSession();
}

// Workout Session Flow
function startSession(day) {
  stopTimer();
  state.selectedDay = day;
  state.mode = "guided";
  state.stepIndex = 0;
  state.setIndex = 1;
  state.roundIndex = 1;
  state.supersetPartIndex = 0;
  state.phase = "ready";
  state.intervalPhase = "hard";
  state.startedAt = Date.now();
  state.sessionRecords = [];
  els.sessionPanel.classList.remove("hidden");
  checkResumeBanner();
  saveActiveSession();
  requestWakeLock();
  renderSession();
  playStartChime();
}

function currentWorkout() {
  return WORKOUTS[state.selectedDay];
}

function currentStep() {
  return currentWorkout().steps[state.stepIndex];
}

function currentPlayable() {
  const step = currentStep();
  if (!step) return null;
  if (step.type !== "superset") return step;
  return step.parts[state.supersetPartIndex];
}

function renderSession() {
  saveActiveSession();
  const step = currentStep();
  const total = currentWorkout().steps.length;
  const progress = Math.min(100, Math.round((state.stepIndex / total) * 100));

  if (!step) return finishSession();

  if (step.type === "equipment") return renderEquipment(step, progress, total);
  if (step.type === "intervals") return renderIntervals(step, progress, total);
  if (step.type === "timed") return renderTimed(step, progress, total);
  if (step.type === "superset") return renderSuperset(step, progress, total);
  renderExercise(step, progress, total, null);
}

function statusMarkup(progress, total, extra = "") {
  return `
    <div class="status-row">
      <span>${currentWorkout().label} · Step ${Math.min(state.stepIndex + 1, total)} of ${total}</span>
      <span>${state.mode === "guided" ? "Guided Mode" : "Flow Mode"}</span>
    </div>
    <div class="progress-bar"><div class="progress-fill" style="width:${progress}%"></div></div>
    ${extra}
  `;
}

function renderExercise(ex, progress, total, supersetLabel) {
  const last = getLastExercise(ex.id);
  const restTime = ex.restSeconds || store.settings.defaultRest;
  els.sessionPanel.innerHTML = `
    ${statusMarkup(progress, total, supersetLabel ? `<span class="badge">${supersetLabel}</span>` : "")}
    <h2 class="exercise-name">${ex.name}</h2>
    <p class="equipment">${ex.equipment}</p>
    <div class="target"><strong>Set ${state.setIndex} of ${ex.sets}</strong><br>Target: ${ex.target} · Rest: ${restTime}s</div>
    ${repInputs(ex)}
    ${lastSessionMarkup(ex, last)}
    ${cueMarkup(ex.cues)}
    ${actionMarkup(ex)}
  `;
  bindSessionButtons(ex);
}

function renderSuperset(step, progress, total) {
  const part = currentPlayable();
  if (part.type === "transition") {
    renderTransition(step, part, progress, total);
    return;
  }
  renderExercise(part, progress, total, `${step.name} · Round ${state.roundIndex}/${step.rounds}`);
}

function renderTransition(step, part, progress, total) {
  const sec = part.seconds || 10;
  els.sessionPanel.innerHTML = `
    ${statusMarkup(progress, total, `<span class="badge badge-easy">${step.name} · Round ${state.roundIndex}/${step.rounds}</span>`)}
    <h2 class="exercise-name">Transition</h2>
    <p class="equipment">Move quickly to the next movement.</p>
    ${activeTimerMarkup("TRANSITION", sec, "phase-easy")}
    <div class="session-actions">
      <button class="primary-btn" data-action="start-timer" type="button">${state.running ? "Running..." : "Start"}</button>
      <button class="secondary-btn" data-action="skip" type="button">Skip</button>
    </div>
  `;
  bindSessionButtons(part);
  if (state.mode === "flow" && state.phase !== "timer") startCountdown(sec, nextStepUnit);
}

function renderTimed(step, progress, total) {
  els.sessionPanel.innerHTML = `
    ${statusMarkup(progress, total)}
    <h2 class="exercise-name">${step.name}</h2>
    <p class="equipment">${step.equipment}</p>
    ${activeTimerMarkup("WORK", step.seconds, "phase-work")}
    ${cueMarkup(step.cues)}
    <div class="session-actions">
      <button class="primary-btn" data-action="start-timer" type="button">${state.running ? "Running..." : "Start"}</button>
      <button class="secondary-btn" data-action="skip" type="button">Skip</button>
    </div>
  `;
  bindSessionButtons(step);
}

function renderEquipment(step, progress, total) {
  const sec = store.settings.equipChangeSeconds || step.seconds || 90;
  els.sessionPanel.innerHTML = `
    ${statusMarkup(progress, total)}
    <span class="badge badge-rest">Equipment Change</span>
    <h2 class="exercise-name">Convert Gear</h2>
    <p class="equipment">${step.from} ➔ ${step.to}</p>
    ${activeTimerMarkup("READY TIMER", sec, "phase-rest")}
    <div class="session-actions">
      <button class="primary-btn" data-action="ready-early" type="button">Ready Early</button>
      <button class="secondary-btn" data-action="start-timer" type="button">${state.running ? "Running" : `Start ${sec}s`}</button>
    </div>
  `;
  bindSessionButtons(step);
}

function renderIntervals(step, progress, total) {
  const isHard = state.intervalPhase === "hard";
  const label = isHard ? "HARD EFFORT" : "EASY RECOVERY";
  const phaseClass = isHard ? "phase-hard" : "phase-easy";
  const badgeClass = isHard ? "badge-hard" : "badge-easy";
  const seconds = isHard ? (store.settings.vo2Hard || step.hardSeconds || 60) : (store.settings.easyRecoverySeconds || 75);

  els.sessionPanel.innerHTML = `
    ${statusMarkup(progress, total, `<span class="badge ${badgeClass}">Round ${state.roundIndex} of ${step.rounds} · ${label}</span>`)}
    <h2 class="exercise-name">${step.name}</h2>
    <p class="equipment">${isHard ? "Hard effort 8-9/10 rate of perceived exertion." : "Active recovery walk / gentle breathing jog."}</p>
    ${activeTimerMarkup(label, seconds, phaseClass)}
    <div class="session-actions">
      <button class="primary-btn" data-action="start-interval" type="button">${state.running ? "Pause / Resume" : "Start Interval"}</button>
      <button class="secondary-btn" data-action="skip" type="button">Skip Round</button>
    </div>
  `;
  bindSessionButtons(step);
}

// Circular Animated Timer Markup
function activeTimerMarkup(label, seconds, phaseClass = "phase-rest") {
  const shown = state.remaining > 0 ? state.remaining : seconds;
  const totalSec = state.totalTimerSeconds > 0 ? state.totalTimerSeconds : seconds;
  const radius = 90;
  const circumference = 2 * Math.PI * radius; // ~565.48
  const pct = totalSec > 0 ? Math.max(0, Math.min(1, shown / totalSec)) : 1;
  const offset = circumference * (1 - pct);

  return `
    <div class="timer-container">
      <div class="timer-ring-wrapper">
        <svg class="timer-svg" viewBox="0 0 200 200">
          <circle class="timer-svg-track" cx="100" cy="100" r="${radius}"></circle>
          <circle id="timerRingFill" class="timer-svg-fill ${phaseClass}" cx="100" cy="100" r="${radius}"
            style="stroke-dasharray: ${circumference}; stroke-dashoffset: ${offset};"></circle>
        </svg>
        <div class="timer-center-content" id="timerCenterClick" title="Tap to customize time">
          <div class="timer-label">${label}</div>
          <div class="timer-time" id="timerTime">${formatTime(shown)}</div>
          <div class="timer-edit-hint">✏️ tap to edit</div>
        </div>
      </div>
      <div class="timer-controls" style="margin-top: 14px; width: 100%;">
        <button class="timer-btn" data-action="pause" type="button">${state.running ? "Pause" : "Resume"}</button>
        <button class="timer-btn" data-action="minus" type="button">-15s</button>
        <button class="timer-btn" data-action="plus" type="button">+15s</button>
        <button class="timer-btn" data-action="custom-time" type="button">Edit</button>
      </div>
    </div>
  `;
}

function repInputs(ex) {
  if (ex.unilateral) {
    const labels = ex.unilateral === "arm" ? ["Left", "Right"] : ex.unilateral === "leg" ? ["Left Leg", "Right Leg"] : ["Left Side", "Right Side"];
    return `<div class="rep-grid">${labels.map((label, index) => repField(index === 0 ? "left" : "right", label)).join("")}</div>`;
  }
  return `<div class="rep-grid">${repField("reps", "Actual reps completed")}</div>`;
}

function repField(id, label) {
  return `<div class="rep-field"><label for="${id}">${label}</label><input id="${id}" inputmode="numeric" type="number" min="0" max="99" placeholder="0"></div>`;
}

function actionMarkup(ex) {
  return `
    <div class="session-actions">
      <button class="primary-btn" data-action="complete-set" type="button">✓ Log Set & Rest</button>
      <button class="secondary-btn" data-action="start-work" type="button">${state.mode === "guided" ? "⏱ Work Timer" : "Run Flow"}</button>
      <button class="ghost-btn" data-action="toggle-mode" type="button">${state.mode === "guided" ? "Flow" : "Guided"}</button>
      <button class="ghost-btn" data-action="end-session" type="button">End</button>
    </div>
  `;
}

function cueMarkup(cues = []) {
  if (!cues.length) return "";
  return `<ul class="cue-list">${cues.map((cue) => `<li>${cue}</li>`).join("")}</ul>`;
}

function lastSessionMarkup(ex, last) {
  if (!last) return "";
  const progression = isReadyToProgress(ex, last) ? `<div class="ready">🔥 READY TO PROGRESS (+Weight/Reps)</div>` : "";
  return `
    <div class="last-session">
      <strong>Previous Session:</strong> ${formatRecordSummary(last)}
      ${progression}
    </div>
  `;
}

function bindSessionButtons(context) {
  els.sessionPanel.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", () => handleAction(button.dataset.action, context));
  });
  const center = document.getElementById("timerCenterClick");
  if (center) center.addEventListener("click", openTimerModal);
}

function handleAction(action, context) {
  if (action === "complete-set") completeSet(context);
  if (action === "start-work") startWork(context);
  if (action === "toggle-mode") toggleMode();
  if (action === "end-session") finishSession();
  if (action === "ready-early") nextStepUnit();
  if (action === "start-timer") {
    const sec = context.seconds || context.workSeconds || store.settings.defaultRest;
    startCountdown(sec, nextStepUnit);
  }
  if (action === "start-interval") startInterval(context);
  if (action === "pause") togglePause();
  if (action === "plus") adjustTimer(15);
  if (action === "minus") adjustTimer(-15);
  if (action === "custom-time") openTimerModal();
  if (action === "skip") nextStepUnit();
  if (action === "skip-work") {
    stopTimer();
    renderSession();
  }
}

function startWork(ex) {
  renderWorkTimer(ex);
  if (state.mode === "flow") {
    startCountdown(ex.workSeconds, () => completeSet(ex, true));
    return;
  }
  startCountdown(ex.workSeconds, () => {
    notifyDone();
    renderSession();
  });
}

function renderWorkTimer(ex) {
  els.sessionPanel.innerHTML = `
    ${statusMarkup(Math.round((state.stepIndex / currentWorkout().steps.length) * 100), currentWorkout().steps.length)}
    <h2 class="exercise-name">${ex.name}</h2>
    <p class="equipment">${ex.equipment}</p>
    <div class="target"><strong>Set ${state.setIndex} of ${ex.sets}</strong><br>Target: ${ex.target}</div>
    ${activeTimerMarkup("WORK SET", ex.workSeconds, "phase-work")}
    <div class="session-actions">
      <button class="primary-btn" data-action="complete-set" type="button">✓ Complete Set</button>
      <button class="secondary-btn" data-action="skip-work" type="button">Skip Timer</button>
    </div>
  `;
  bindSessionButtons(ex);
}

function completeSet(ex, fromFlow = false) {
  if (!fromFlow) recordReps(ex);
  const step = currentStep();
  if (step.type === "superset") {
    advanceSuperset();
  } else if (state.setIndex < ex.sets) {
    state.setIndex += 1;
    const restTime = ex.restSeconds || store.settings.defaultRest;
    startRest(restTime);
  } else {
    nextStep();
  }
}

function recordReps(ex) {
  const record = {
    date: new Date().toISOString(),
    day: currentWorkout().label,
    exerciseId: ex.id,
    exerciseName: ex.name,
    equipment: ex.equipment,
    set: state.setIndex,
    target: ex.target,
    durationSeconds: elapsedSeconds()
  };
  if (ex.unilateral) {
    record.left = numberValue("left");
    record.right = numberValue("right");
  } else {
    record.reps = numberValue("reps");
  }
  state.sessionRecords.push(record);
  saveActiveSession();
}

function numberValue(id) {
  const input = document.getElementById(id);
  if (!input || input.value === "") return null;
  return Number(input.value);
}

function advanceSuperset() {
  const step = currentStep();
  state.supersetPartIndex += 1;
  while (step.parts[state.supersetPartIndex] && step.parts[state.supersetPartIndex].sets < state.roundIndex) {
    state.supersetPartIndex += 1;
  }
  if (state.supersetPartIndex < step.parts.length) {
    renderSession();
    if (state.mode === "flow") {
      const next = currentPlayable();
      const seconds = next.type === "transition" ? next.seconds : next.workSeconds;
      startCountdown(seconds, next.type === "transition" ? nextStepUnit : () => completeSet(next, true));
    }
    return;
  }
  if (state.roundIndex < step.rounds) {
    state.roundIndex += 1;
    state.supersetPartIndex = 0;
    const restTime = store.settings.supersetRest || step.restSeconds || 60;
    startRest(restTime);
    return;
  }
  nextStep();
}

function startRest(seconds) {
  state.phase = "rest";
  els.sessionPanel.innerHTML = `
    ${statusMarkup(Math.round((state.stepIndex / currentWorkout().steps.length) * 100), currentWorkout().steps.length)}
    <span class="badge badge-rest">Resting</span>
    <h2 class="exercise-name">Rest & Recover</h2>
    <p class="equipment">Deep breaths. Next set prepares automatically.</p>
    ${activeTimerMarkup("REST", seconds, "phase-rest")}
  `;
  bindSessionButtons({});
  startCountdown(seconds, () => {
    notifyDone();
    renderSession();
    if (state.mode === "flow") {
      const next = currentPlayable();
      if (next && next.type === "exercise") startCountdown(next.workSeconds, () => completeSet(next, true));
    }
  });
}

function startInterval(step) {
  if (state.running) {
    togglePause();
    return;
  }
  const isHard = state.intervalPhase === "hard";
  const seconds = isHard ? (store.settings.vo2Hard || step.hardSeconds || 60) : (store.settings.easyRecoverySeconds || 75);
  playIntervalCue(isHard);

  startCountdown(seconds, () => {
    notifyDone();
    if (state.intervalPhase === "easy") {
      if (state.roundIndex >= step.rounds) {
        nextStep();
        return;
      }
      state.roundIndex += 1;
      state.intervalPhase = "hard";
    } else {
      state.intervalPhase = "easy";
    }
    renderSession();
    startInterval(step);
  });
}

// Timer Core Engine with Audio Beeps & Progress Ring
function startCountdown(seconds, onDone) {
  stopTimer();
  state.remaining = seconds;
  state.totalTimerSeconds = seconds;
  state.running = true;
  state.phase = "timer";
  state.timerDone = onDone;
  updateTimerDisplay();
  playStartChime();

  state.timer = setInterval(() => {
    state.remaining -= 1;
    updateTimerDisplay();

    // 3, 2, 1 Countdown Beeps
    if (state.remaining === 3 || state.remaining === 2 || state.remaining === 1) {
      playCountdownTick(state.remaining);
    }

    if (state.remaining <= 0) {
      stopTimer();
      notifyDone();
      onDone();
    }
  }, 1000);
}

function stopTimer() {
  if (state.timer) clearInterval(state.timer);
  state.timer = null;
  state.running = false;
}

function togglePause() {
  if (state.running) {
    stopTimer();
  } else if (state.remaining > 0) {
    state.running = true;
    playStartChime();
    state.timer = setInterval(() => {
      state.remaining -= 1;
      updateTimerDisplay();
      if (state.remaining === 3 || state.remaining === 2 || state.remaining === 1) {
        playCountdownTick(state.remaining);
      }
      if (state.remaining <= 0) {
        const done = state.timerDone || nextStepUnit;
        stopTimer();
        notifyDone();
        done();
      }
    }, 1000);
  }
  const pauseButton = els.sessionPanel.querySelector("[data-action='pause']");
  if (pauseButton) pauseButton.textContent = state.running ? "Pause" : "Resume";
}

function adjustTimer(delta) {
  state.remaining = Math.max(1, state.remaining + delta);
  if (state.totalTimerSeconds < state.remaining) {
    state.totalTimerSeconds = state.remaining;
  }
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const timeEl = document.getElementById("timerTime");
  if (timeEl) timeEl.textContent = formatTime(state.remaining);

  const ringFill = document.getElementById("timerRingFill");
  if (ringFill && state.totalTimerSeconds > 0) {
    const radius = 90;
    const circumference = 2 * Math.PI * radius;
    const pct = Math.max(0, Math.min(1, state.remaining / state.totalTimerSeconds));
    const offset = circumference * (1 - pct);
    ringFill.style.strokeDashoffset = offset;
  }
}

// Timer Edit Modal Dialog
function openTimerModal() {
  const current = state.remaining > 0 ? state.remaining : 60;
  const mins = Math.floor(current / 60);
  const secs = current % 60;
  els.customTimerMinutes.value = mins;
  els.customTimerSeconds.value = String(secs).padStart(2, "0");
  if (typeof els.editTimerDialog.showModal === "function") {
    els.editTimerDialog.showModal();
  }
}

function handleTimerModalSave(e) {
  e.preventDefault();
  const mins = parseInt(els.customTimerMinutes.value, 10) || 0;
  const secs = parseInt(els.customTimerSeconds.value, 10) || 0;
  const total = Math.max(5, mins * 60 + secs);
  state.remaining = total;
  state.totalTimerSeconds = total;
  updateTimerDisplay();
  els.editTimerDialog.close();
}

function nextStepUnit() {
  stopTimer();
  const step = currentStep();
  if (step.type === "intervals") {
    nextStep();
    return;
  }
  if (step.type === "superset") {
    state.supersetPartIndex += 1;
    if (state.supersetPartIndex >= step.parts.length) {
      if (state.roundIndex < step.rounds) {
        state.roundIndex += 1;
        state.supersetPartIndex = 0;
      } else {
        nextStep();
        return;
      }
    }
    renderSession();
    return;
  }
  nextStep();
}

function nextStep() {
  stopTimer();
  state.stepIndex += 1;
  state.setIndex = 1;
  state.roundIndex = 1;
  state.supersetPartIndex = 0;
  state.remaining = 0;
  if (state.stepIndex >= currentWorkout().steps.length) finishSession();
  else renderSession();
}

function toggleMode() {
  state.mode = state.mode === "guided" ? "flow" : "guided";
  renderSession();
}

function finishSession() {
  stopTimer();
  releaseWakeLock();
  clearActiveSession();

  if (state.selectedDay && state.sessionRecords.length) {
    const history = store.history;
    history.unshift({
      id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
      date: new Date().toISOString(),
      day: currentWorkout().label,
      title: currentWorkout().title,
      durationSeconds: elapsedSeconds(),
      records: state.sessionRecords
    });
    store.history = history.slice(0, 150);
  }
  els.sessionPanel.innerHTML = `
    <span class="badge badge-work">Complete</span>
    <h2 class="exercise-name">Session Complete!</h2>
    <p class="equipment">Great work. Your reps and weights are saved automatically on this device.</p>
    <div class="session-actions">
      <button class="primary-btn" data-action="new-session" type="button">Choose Workout</button>
      <button class="secondary-btn" data-action="history" type="button">View History</button>
    </div>
  `;
  els.sessionPanel.querySelector("[data-action='new-session']").addEventListener("click", () => {
    els.sessionPanel.classList.add("hidden");
    checkResumeBanner();
  });
  els.sessionPanel.querySelector("[data-action='history']").addEventListener("click", () => switchScreen("history"));
  renderHistory();
}

function elapsedSeconds() {
  return state.startedAt ? Math.round((Date.now() - state.startedAt) / 1000) : 0;
}

function renderHistory() {
  const history = store.history;
  if (!history.length) {
    els.historyList.innerHTML = `<div class="history-card"><p>No saved workouts yet. Complete a guided session and it will appear here automatically.</p></div>`;
    return;
  }
  els.historyList.innerHTML = history.map((session) => `
    <article class="history-card">
      <h3>${session.day}: ${session.title}</h3>
      <p>${new Date(session.date).toLocaleString()} · ${formatDuration(session.durationSeconds)} · ${session.records.length} recorded sets</p>
      <p style="color: var(--ink); font-size: 0.88rem;">${summarizeSession(session)}</p>
    </article>
  `).join("");
}

function summarizeSession(session) {
  const names = [...new Set(session.records.map((r) => r.exerciseName))];
  return names.slice(0, 5).join(", ") + (names.length > 5 ? ` + ${names.length - 5} more` : "");
}

function clearHistory() {
  if (!confirm("Clear all saved workout history on this phone?")) return;
  store.history = [];
  renderHistory();
}

function getLastExercise(exerciseId) {
  for (const session of store.history) {
    const records = session.records.filter((record) => record.exerciseId === exerciseId);
    if (records.length) return { session, records };
  }
  return null;
}

function formatRecordSummary(last) {
  return last.records.map((record) => {
    if (record.left !== undefined || record.right !== undefined) return `${record.left ?? "-"}L / ${record.right ?? "-"}R`;
    return `${record.reps ?? "-"} reps`;
  }).join(" · ");
}

function isReadyToProgress(ex, last) {
  const max = targetMax(ex.target);
  if (!max || !last.records.length) return false;
  return last.records.every((record) => {
    if (record.left !== undefined || record.right !== undefined) return Number(record.left) >= max && Number(record.right) >= max;
    return Number(record.reps) >= max;
  });
}

function targetMax(target) {
  const ranges = target.match(/(\d+)\s*-\s*(\d+)/);
  return ranges ? Number(ranges[2]) : null;
}

// Settings & Timers Management
function renderSettings() {
  const settings = store.settings;
  if (els.soundInput) els.soundInput.checked = settings.sound !== false;
  if (els.vibrationInput) els.vibrationInput.checked = settings.vibration !== false;
  if (els.wakeLockInput) els.wakeLockInput.checked = settings.wakeLock !== false;
  if (els.defaultRestInput) els.defaultRestInput.value = settings.defaultRest || 45;
  if (els.supersetRestInput) els.supersetRestInput.value = settings.supersetRest || 60;
  if (els.vo2HardInput) els.vo2HardInput.value = settings.vo2Hard || 60;
  if (els.easyRecoveryInput) els.easyRecoveryInput.value = settings.easyRecoverySeconds || 75;
  if (els.equipChangeInput) els.equipChangeInput.value = settings.equipChangeSeconds || 90;
  updateSoundQuickBtn();
}

function saveSettings() {
  store.settings = {
    sound: els.soundInput ? els.soundInput.checked : true,
    vibration: els.vibrationInput ? els.vibrationInput.checked : true,
    wakeLock: els.wakeLockInput ? els.wakeLockInput.checked : true,
    defaultRest: clamp(Number(els.defaultRestInput?.value) || 45, 15, 300),
    supersetRest: clamp(Number(els.supersetRestInput?.value) || 60, 15, 300),
    vo2Hard: clamp(Number(els.vo2HardInput?.value) || 60, 20, 180),
    easyRecoverySeconds: clamp(Number(els.easyRecoveryInput?.value) || 75, 30, 180),
    equipChangeSeconds: clamp(Number(els.equipChangeInput?.value) || 90, 30, 300)
  };
  renderSettings();
}

function resetTimerDefaults() {
  if (!confirm("Reset all timer durations to program defaults?")) return;
  store.settings = { ...DEFAULT_SETTINGS, sound: store.settings.sound, vibration: store.settings.vibration, wakeLock: store.settings.wakeLock };
  renderSettings();
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

// Backup Export & Import
function exportWorkoutData() {
  const data = {
    app: "Hybrid 5.2 Workout Coach",
    version: "2.0",
    exportDate: new Date().toISOString(),
    history: store.history,
    settings: store.settings
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const dateStr = new Date().toISOString().split("T")[0];
  a.href = url;
  a.download = `hybrid-5-2-workout-backup-${dateStr}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function importWorkoutData(e) {
  const file = e.target.files && e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const data = JSON.parse(event.target.result);
      if (Array.isArray(data.history)) {
        store.history = data.history;
      }
      if (data.settings && typeof data.settings === "object") {
        store.settings = { ...DEFAULT_SETTINGS, ...data.settings };
      }
      renderHistory();
      renderSettings();
      alert("Workout data imported successfully!");
    } catch {
      alert("Invalid backup file format.");
    }
  };
  reader.readAsText(file);
}

// Storage persistence request
async function initStoragePersistence() {
  if (navigator.storage && navigator.storage.persist) {
    try {
      await navigator.storage.persist();
    } catch (_) {}
  }
}

// Wake Lock
async function requestWakeLock() {
  if (!store.settings.wakeLock || !("wakeLock" in navigator)) return;
  try {
    state.wakeLock = await navigator.wakeLock.request("screen");
  } catch (_) {
    state.wakeLock = null;
  }
}

async function releaseWakeLock() {
  if (!state.wakeLock) return;
  try {
    await state.wakeLock.release();
  } catch (_) {}
  state.wakeLock = null;
}

// Helpers
function formatTime(seconds) {
  const safe = Math.max(0, seconds);
  const mins = Math.floor(safe / 60);
  const secs = safe % 60;
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function formatDuration(seconds) {
  const mins = Math.round(seconds / 60);
  return `${mins} min`;
}

// Service Worker & PWA Install
async function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  try {
    await navigator.serviceWorker.register("./service-worker.js");
  } catch (_) {}
}

async function installApp() {
  if (!state.deferredPrompt) return;
  state.deferredPrompt.prompt();
  await state.deferredPrompt.userChoice;
  state.deferredPrompt = null;
  if (els.installBtn) els.installBtn.classList.add("hidden");
}
