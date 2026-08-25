"use strict";

// Hybrid 5.2 Workout Program Data (No Side Planks)
const WORKOUTS = {
  monday: {
    label: "Monday",
    title: "Upper + Secondary Legs + Abs",
    duration: "40-45 min",
    equipmentNeeded: ["20 kg Barbell", "2 x 10 kg Dumbbells", "Flat Bench / Mat"],
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
    equipmentNeeded: ["Running Track / Treadmill / Bike", "Yoga Mat"],
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
    equipmentNeeded: ["20 kg Barbell", "10 kg Dumbbell", "Elevated Step / Box"],
    steps: [
      exercise("squat-jumps", "Squat Jumps", "Bodyweight", "3 x 3-5", 3, 20, 75, ["Explosive jump.", "Controlled/quiet landing.", "Stop if power noticeably deteriorates."]),
      exercise("zercher-squat", "Zercher Squat", "20 kg barbell", "4 x 8-15", 4, 50, 90, ["Brace core tightly.", "Controlled descent.", "Strong drive upward."]),
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
    equipmentNeeded: ["10 kg DB / Dumbbells", "Incline Bench / Mat", "Light Resistance / DBs"],
    steps: [
      superset("Superset A", 3, 60, [
        exercise("single-arm-db-row", "Single-Arm DB Row", "10 kg DB", "3 x 10-15 each arm", 3, 60, 0, ["Support hand/knee on bench.", "Pull elbow toward hip.", "Control eccentric."], "arm"),
        transition(10),
        exercise("push-ups", "Push-Ups", "Bodyweight", "3 x 10-20", 3, 40, 0, ["Plank body line.", "Chest touches mat.", "Full lockout."])
      ]),
      superset("Superset B", 3, 50, [
        exercise("lateral-raise", "Lateral Raise", "Light resistance", "3 x 12-20", 3, 40, 0, ["Lead with elbows.", "Slight forward torso lean."]),
        transition(10),
        exercise("incline-db-curl", "Incline DB Curl", "2 x 10 kg DB", "3 x 10-15", 3, 40, 0, ["Palms forward.", "Elbows pinned.", "Full stretch at bottom."])
      ]),
      superset("Superset C", 3, 45, [
        exercise("overhead-triceps-extension", "Overhead Triceps Extension", "10 kg DB", "3 x 10-15", 3, 40, 0, ["Keep elbows high and relatively fixed.", "Full stretch at bottom."]),
        transition(10),
        exercise("reverse-crunch", "Reverse Crunch", "Bodyweight", "3 x 10-15", 3, 35, 0, ["Curl pelvis off floor.", "Controlled descent.", "No swinging."])
      ]),
      superset("Superset D", 3, 45, [
        exercise("db-woodchopper", "DB Woodchopper", "10 kg DB", "3 x 8-12 each side", 3, 55, 0, ["Pivot through back foot.", "Drive rotation through torso.", "Control descent."], "side"),
        transition(10),
        exercise("front-plank", "Front Plank", "Bodyweight", "2 x 30-60 sec", 2, 45, 0, ["Elbows directly under shoulders.", "Brace glutes and abs.", "Neutral neck."])
      ])
    ]
  }
};

const RECOVERY = [
  ["Wednesday", "Option A: Full rest; Option B: 30-45 min Zone 2, conversational intensity."],
  ["Saturday", "30-60 min Zone 2 / active life: brisk walking, hiking, easy cycling, swimming, or easy jogging."],
  ["Sunday", "Full rest; normal walking/activity fine."]
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
  stepIndex: 0,
  setIndex: 1,
  roundIndex: 1,
  supersetPartIndex: 0,
  phase: "exercise", // exercise, rest, timer
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
  audioCtx: null,
  padSelectedSeconds: 60
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
    "workoutOverviewDialog", "overviewModalContent",
    "workoutRoadmapDialog", "roadmapModalContent",
    "editTimerDialog", "padTimeDisplay", "saveTimerModalBtn", "cancelTimerModalBtn"
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

  // Mobile Timer Pad Events
  if (els.cancelTimerModalBtn) {
    els.cancelTimerModalBtn.addEventListener("click", () => els.editTimerDialog.close());
  }
  if (els.saveTimerModalBtn) {
    els.saveTimerModalBtn.addEventListener("click", applyTimerPad);
  }

  // Presets and Steppers
  document.querySelectorAll(".pad-preset-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.padSelectedSeconds = parseInt(btn.dataset.sec, 10) || 60;
      updatePadDisplay();
    });
  });

  document.querySelectorAll(".pad-stepper-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const delta = parseInt(btn.dataset.delta, 10) || 0;
      state.padSelectedSeconds = Math.max(5, (state.padSelectedSeconds || 60) + delta);
      updatePadDisplay();
    });
  });

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
  playTone(587.33, "sine", 120, 0.12, 0);
  playTone(880.00, "sine", 200, 0.14, 110);
}

function playCountdownTick(secondsLeft) {
  const freq = secondsLeft === 1 ? 880 : 740;
  playTone(freq, "triangle", 90, 0.15, 0);
}

function playFinishChime() {
  playTone(880.00, "sine", 160, 0.15, 0);
  playTone(1174.66, "triangle", 320, 0.18, 140);
}

function playIntervalCue(isHard) {
  if (isHard) {
    playTone(1046.50, "square", 150, 0.12, 0);
    playTone(1318.51, "sine", 250, 0.14, 120);
  } else {
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
      <div class="day-card-meta">
        <span>⏱ ${workout.duration}</span>
        <span class="day-card-preview-btn">Start Workout ➔</span>
      </div>
    </button>
  `).join("");
  els.dayGrid.querySelectorAll(".day-card").forEach((card) => {
    card.addEventListener("click", () => openDayOverview(card.dataset.day));
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

// Day Overview Pre-Workout Modal
function openDayOverview(day) {
  const workout = WORKOUTS[day];
  if (!workout) return;

  const equipmentChips = (workout.equipmentNeeded || []).map((eq) => `<span class="equipment-chip">🔧 ${eq}</span>`).join("");

  const stepsList = workout.steps.map((step, idx) => {
    let title = "";
    let desc = "";
    if (step.type === "exercise") {
      title = `${idx + 1}. ${step.name}`;
      desc = `${step.sets} sets · Target: ${step.target} · ${step.equipment}`;
    } else if (step.type === "superset") {
      const partsSummary = step.parts.filter((p) => p.type === "exercise").map((p) => p.name).join(" + ");
      title = `${idx + 1}. ${step.name} (${step.rounds} rounds)`;
      desc = partsSummary;
    } else if (step.type === "equipment") {
      title = `${idx + 1}. Convert Gear`;
      desc = `${step.from} ➔ ${step.to}`;
    } else if (step.type === "intervals") {
      title = `${idx + 1}. ${step.name}`;
      desc = `${step.rounds} rounds (60s Hard / Recovery)`;
    } else if (step.type === "timed") {
      title = `${idx + 1}. ${step.name}`;
      desc = `${formatDuration(step.seconds)} · ${step.equipment}`;
    }

    return `
      <div class="roadmap-item">
        <div class="roadmap-status-icon">📌</div>
        <div class="roadmap-info">
          <strong>${title}</strong>
          <span>${desc}</span>
        </div>
      </div>
    `;
  }).join("");

  els.overviewModalContent.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: flex-start;">
      <div>
        <p class="eyebrow">${workout.label} Overview</p>
        <h3 style="margin-bottom: 2px;">${workout.title}</h3>
        <p class="modal-subtitle">⏱ Estimated: ${workout.duration} · ${workout.steps.length} Exercises/Steps</p>
      </div>
      <button id="closeOverviewBtn" class="danger-link" type="button" style="font-size: 1.25rem;">✕</button>
    </div>

    ${equipmentChips ? `<div class="equipment-tag-cloud">${equipmentChips}</div>` : ""}

    <div class="roadmap-list" style="max-height: 48vh; overflow-y: auto;">
      ${stepsList}
    </div>

    <div class="modal-actions" style="margin-top: 18px;">
      <button class="primary-btn" id="startWorkoutBtn" type="button">▶️ Begin Workout</button>
      <button class="ghost-btn" id="closeOverviewSecondary" type="button">Close</button>
    </div>
  `;

  document.getElementById("closeOverviewBtn").addEventListener("click", () => els.workoutOverviewDialog.close());
  document.getElementById("closeOverviewSecondary").addEventListener("click", () => els.workoutOverviewDialog.close());
  document.getElementById("startWorkoutBtn").addEventListener("click", () => {
    els.workoutOverviewDialog.close();
    startSession(day);
  });

  if (typeof els.workoutOverviewDialog.showModal === "function") {
    els.workoutOverviewDialog.showModal();
  }
}

// In-Workout Roadmap / Plan Modal
function openWorkoutRoadmap() {
  if (!state.selectedDay) return;
  const workout = currentWorkout();
  const total = workout.steps.length;
  const currentStepNum = state.stepIndex + 1;
  const pct = Math.min(100, Math.round((state.stepIndex / total) * 100));

  const stepsList = workout.steps.map((step, idx) => {
    const isDone = idx < state.stepIndex;
    const isActive = idx === state.stepIndex;
    let statusClass = isDone ? "status-done" : isActive ? "status-active" : "";
    let icon = isDone ? "✅" : isActive ? "📍" : "⏳";

    let title = "";
    let desc = "";
    if (step.type === "exercise") {
      title = `${idx + 1}. ${step.name}`;
      desc = isActive ? `Set ${state.setIndex} of ${step.sets} · ${step.equipment}` : `${step.sets} sets · ${step.target}`;
    } else if (step.type === "superset") {
      const partsSummary = step.parts.filter((p) => p.type === "exercise").map((p) => p.name).join(" + ");
      title = `${idx + 1}. ${step.name}`;
      desc = isActive ? `Round ${state.roundIndex}/${step.rounds} · ${partsSummary}` : `${step.rounds} rounds · ${partsSummary}`;
    } else if (step.type === "equipment") {
      title = `${idx + 1}. Convert Gear`;
      desc = `${step.from} ➔ ${step.to}`;
    } else if (step.type === "intervals") {
      title = `${idx + 1}. ${step.name}`;
      desc = isActive ? `Round ${state.roundIndex}/${step.rounds} (${state.intervalPhase.toUpperCase()})` : `${step.rounds} rounds`;
    } else if (step.type === "timed") {
      title = `${idx + 1}. ${step.name}`;
      desc = `${formatDuration(step.seconds)} · ${step.equipment}`;
    }

    return `
      <div class="roadmap-item ${statusClass}">
        <div class="roadmap-status-icon">${icon}</div>
        <div class="roadmap-info">
          <strong>${title} ${isActive ? `<span style="color: var(--accent-2); font-size: 0.8rem;">(Active)</span>` : ""}</strong>
          <span>${desc}</span>
        </div>
        ${!isActive ? `<button class="roadmap-jump-btn" data-jump="${idx}" type="button">Jump</button>` : ""}
      </div>
    `;
  }).join("");

  els.roadmapModalContent.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: flex-start;">
      <div>
        <p class="eyebrow">${workout.label} Workout Plan</p>
        <h3 style="margin-bottom: 2px;">Workout Roadmap</h3>
        <p class="modal-subtitle">Step ${currentStepNum} of ${total} · ${pct}% Completed</p>
      </div>
      <button id="closeRoadmapBtn" class="danger-link" type="button" style="font-size: 1.25rem;">✕</button>
    </div>

    <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>

    <div class="roadmap-list" style="max-height: 52vh; overflow-y: auto;">
      ${stepsList}
    </div>

    <div class="modal-actions">
      <button class="primary-btn" id="resumeRoadmapBtn" type="button">Continue Workout</button>
    </div>
  `;

  document.getElementById("closeRoadmapBtn").addEventListener("click", () => els.workoutRoadmapDialog.close());
  document.getElementById("resumeRoadmapBtn").addEventListener("click", () => els.workoutRoadmapDialog.close());

  els.roadmapModalContent.querySelectorAll("[data-jump]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetStep = parseInt(btn.dataset.jump, 10);
      jumpToStep(targetStep);
      els.workoutRoadmapDialog.close();
    });
  });

  if (typeof els.workoutRoadmapDialog.showModal === "function") {
    els.workoutRoadmapDialog.showModal();
  }
}

function jumpToStep(targetIdx) {
  stopTimer();
  state.stepIndex = targetIdx;
  state.setIndex = 1;
  state.roundIndex = 1;
  state.supersetPartIndex = 0;
  state.remaining = 0;
  state.phase = "exercise";
  renderSession();
}

// In-Progress Auto-Save & Recovery Banner
function saveActiveSession() {
  if (!state.selectedDay) {
    store.activeSession = null;
    return;
  }
  store.activeSession = {
    selectedDay: state.selectedDay,
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
  state.stepIndex = saved.stepIndex || 0;
  state.setIndex = saved.setIndex || 1;
  state.roundIndex = saved.roundIndex || 1;
  state.supersetPartIndex = saved.supersetPartIndex || 0;
  state.phase = saved.phase || "exercise";
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
  state.stepIndex = 0;
  state.setIndex = 1;
  state.roundIndex = 1;
  state.supersetPartIndex = 0;
  state.phase = "work";
  state.intervalPhase = "hard";
  state.startedAt = Date.now();
  state.sessionRecords = [];
  els.sessionPanel.classList.remove("hidden");
  checkResumeBanner();
  saveActiveSession();
  requestWakeLock();
  startCurrentStepAuto();
}

function startCurrentStepAuto() {
  const step = currentStep();
  if (!step) return finishSession();

  if (step.type === "exercise") {
    startWork(step);
    return;
  }
  if (step.type === "superset") {
    const part = currentPlayable();
    if (part.type === "transition") {
      state.phase = "transition";
      renderSession();
      startCountdown(part.seconds || 10, nextStepUnit);
    } else {
      startWork(part);
    }
    return;
  }
  if (step.type === "equipment") {
    state.phase = "equipment";
    renderSession();
    const sec = store.settings.equipChangeSeconds || step.seconds || 90;
    startCountdown(sec, nextStepUnit);
    return;
  }
  if (step.type === "intervals") {
    startInterval(step);
    return;
  }
  if (step.type === "timed") {
    state.phase = "timed";
    renderSession();
    startCountdown(step.seconds, nextStepUnit);
    return;
  }
  renderSession();
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

// Next Step Preview Helper
function getNextStepPreview() {
  const workout = currentWorkout();
  const step = currentStep();
  if (!step) return null;

  if (step.type === "exercise") {
    if (state.setIndex < step.sets) {
      return {
        title: step.name,
        detail: `Set ${state.setIndex + 1} of ${step.sets} (Target: ${step.target})`,
        equipment: step.equipment
      };
    }
    const nextStepObj = workout.steps[state.stepIndex + 1];
    if (!nextStepObj) return { title: "🎉 Workout Complete", detail: "Save & Finish", equipment: "None" };
    return formatStepSummary(nextStepObj);
  }

  if (step.type === "superset") {
    const nextPartIdx = state.supersetPartIndex + 1;
    if (nextPartIdx < step.parts.length) {
      const nextPart = step.parts[nextPartIdx];
      if (nextPart.type === "transition") {
        const afterTransition = step.parts[nextPartIdx + 1];
        return afterTransition ? formatStepSummary(afterTransition) : { title: "Next Movement", detail: "Superset", equipment: "" };
      }
      return {
        title: nextPart.name,
        detail: `Round ${state.roundIndex}/${step.rounds} · ${nextPart.target || ""}`,
        equipment: nextPart.equipment || ""
      };
    }
    if (state.roundIndex < step.rounds) {
      const firstEx = step.parts[0];
      return {
        title: firstEx.name,
        detail: `Round ${state.roundIndex + 1} of ${step.rounds}`,
        equipment: firstEx.equipment || ""
      };
    }
    const nextStepObj = workout.steps[state.stepIndex + 1];
    if (!nextStepObj) return { title: "🎉 Workout Complete", detail: "Save & Finish", equipment: "None" };
    return formatStepSummary(nextStepObj);
  }

  if (step.type === "intervals") {
    if (state.intervalPhase === "hard") {
      return { title: "Easy Recovery Walk/Jog", detail: `Round ${state.roundIndex} of ${step.rounds}`, equipment: "Active rest" };
    }
    if (state.roundIndex < step.rounds) {
      return { title: "VO2 Max Sprint", detail: `Round ${state.roundIndex + 1} of ${step.rounds}`, equipment: "Hard effort 8-9/10" };
    }
  }

  const nextStepObj = workout.steps[state.stepIndex + 1];
  if (!nextStepObj) return { title: "🎉 Workout Complete", detail: "Save & Finish", equipment: "None" };
  return formatStepSummary(nextStepObj);
}

function formatStepSummary(step) {
  if (step.type === "exercise") {
    return { title: step.name, detail: `${step.sets} sets · ${step.target}`, equipment: step.equipment };
  }
  if (step.type === "superset") {
    const names = step.parts.filter((p) => p.type === "exercise").map((p) => p.name).join(" + ");
    return { title: step.name, detail: `${step.rounds} rounds (${names})`, equipment: "Dumbbells / Mat" };
  }
  if (step.type === "equipment") {
    return { title: "Convert Gear", detail: `${step.from} ➔ ${step.to}`, equipment: "Gear setup" };
  }
  if (step.type === "intervals") {
    return { title: step.name, detail: `${step.rounds} rounds interval sprint`, equipment: "Track/Treadmill" };
  }
  if (step.type === "timed") {
    return { title: step.name, detail: `${formatDuration(step.seconds)}`, equipment: step.equipment };
  }
  return { title: "Next Movement", detail: "", equipment: "" };
}

function upNextMarkup() {
  const next = getNextStepPreview();
  if (!next) return "";
  return `
    <div class="up-next-card">
      <span class="up-next-badge">⏭️ UP NEXT</span>
      <div class="up-next-content">
        <strong class="up-next-title">${next.title}</strong>
        <span class="up-next-detail">${next.detail}${next.equipment ? ` · ${next.equipment}` : ""}</span>
      </div>
    </div>
  `;
}

// Step Pills Strip at Top of Workout Screen
function stepCarouselMarkup() {
  const workout = currentWorkout();
  const pills = workout.steps.map((step, idx) => {
    const isDone = idx < state.stepIndex;
    const isActive = idx === state.stepIndex;
    const cls = isActive ? "step-pill pill-active" : isDone ? "step-pill pill-done" : "step-pill";
    const icon = isDone ? "✓" : `${idx + 1}.`;
    let label = step.name;
    if (step.type === "equipment") label = "Gear Change";
    return `<button class="${cls}" data-jump="${idx}" type="button">${icon} ${label}</button>`;
  }).join("");

  return `<div class="step-carousel-wrapper">${pills}</div>`;
}

// Granular Progress Tracker (Updates with every single set completed)
function getWorkoutProgress() {
  const workout = currentWorkout();
  if (!workout) return { pct: 0, completedUnits: 0, totalUnits: 0 };

  let totalUnits = 0;
  let completedUnits = 0;

  workout.steps.forEach((step, idx) => {
    let stepUnits = 1;
    if (step.type === "exercise") {
      stepUnits = step.sets || 4;
    } else if (step.type === "superset") {
      const exCount = step.parts.filter((p) => p.type === "exercise").length || 2;
      stepUnits = (step.rounds || 3) * exCount;
    } else if (step.type === "intervals") {
      stepUnits = (step.rounds || 8) * 2;
    }

    totalUnits += stepUnits;

    if (idx < state.stepIndex) {
      completedUnits += stepUnits;
    } else if (idx === state.stepIndex) {
      if (step.type === "exercise") {
        completedUnits += Math.max(0, state.setIndex - 1);
      } else if (step.type === "superset") {
        const exCount = step.parts.filter((p) => p.type === "exercise").length || 2;
        const currentExIdx = step.parts.slice(0, state.supersetPartIndex).filter((p) => p.type === "exercise").length;
        completedUnits += Math.max(0, (state.roundIndex - 1) * exCount + currentExIdx);
      } else if (step.type === "intervals") {
        const phaseUnit = state.intervalPhase === "easy" ? 1 : 0;
        completedUnits += Math.max(0, (state.roundIndex - 1) * 2 + phaseUnit);
      }
    }
  });

  const pct = totalUnits > 0 ? Math.min(100, Math.round((completedUnits / totalUnits) * 100)) : 0;
  return { pct, completedUnits, totalUnits };
}

function statusMarkup(extra = "") {
  const workout = currentWorkout();
  const totalSteps = workout.steps.length;
  const progressInfo = getWorkoutProgress();
  const step = currentStep();

  let setDetail = `Step ${state.stepIndex + 1} of ${totalSteps}`;
  if (step.type === "exercise") {
    setDetail = `Ex ${state.stepIndex + 1}/${totalSteps} · Set ${state.setIndex} of ${step.sets}`;
  } else if (step.type === "superset") {
    setDetail = `Superset ${state.stepIndex + 1}/${totalSteps} · Round ${state.roundIndex} of ${step.rounds}`;
  } else if (step.type === "intervals") {
    setDetail = `VO2 Intervals · Round ${state.roundIndex} of ${step.rounds}`;
  }

  return `
    <div class="workout-header-bar">
      <div class="workout-stats-pill">
        <span>${workout.label} · ${setDetail}</span>
        <span class="pct-badge">${progressInfo.pct}% DONE</span>
      </div>
      <button class="roadmap-toggle-btn" data-action="open-roadmap" type="button">📋 Full Plan</button>
    </div>
    <div class="progress-bar" style="margin: 4px 0 10px; height: 6px;"><div class="progress-fill" style="width:${progressInfo.pct}%"></div></div>
    ${stepCarouselMarkup()}
    ${extra}
  `;
}

// Interactive Sets Table Builder
function setsTableMarkup(ex, last) {
  const isTimeTracking = ex.id === "suitcase-carry";
  const targetRepsDefault = defaultTargetReps(ex.target, ex.id);
  let rows = "";

  for (let s = 1; s <= ex.sets; s++) {
    const isDone = s < state.setIndex;
    const isActive = s === state.setIndex;
    const isUpcoming = s > state.setIndex;

    const todayRecord = state.sessionRecords.find((r) => r.exerciseId === ex.id && r.set === s);
    const lastRecord = last && last.records && last.records[s - 1];

    let lastSummary = "-";
    if (lastRecord) {
      if (lastRecord.left !== undefined) {
        lastSummary = isTimeTracking ? `${lastRecord.left}s L / ${lastRecord.right}s R` : `${lastRecord.left}L/${lastRecord.right}R`;
      } else if (lastRecord.reps !== undefined) {
        lastSummary = isTimeTracking ? `${lastRecord.reps}s` : `${lastRecord.reps} reps`;
      }
    }

    if (isDone) {
      let logged = "✓ Done";
      if (todayRecord) {
        if (todayRecord.left !== undefined) {
          logged = isTimeTracking ? `${todayRecord.left}s L / ${todayRecord.right}s R` : `${todayRecord.left}L/${todayRecord.right}R`;
        } else if (todayRecord.reps !== undefined) {
          logged = isTimeTracking ? `${todayRecord.reps}s` : `${todayRecord.reps} reps`;
        }
      }
      rows += `
        <div class="set-row set-row-done">
          <span class="set-num-badge">${s}</span>
          <span>${ex.target.replace(/\d+\s*x\s*/, "")}</span>
          <span style="color: var(--muted); font-size: 0.85rem;">${lastSummary}</span>
          <span style="color: var(--accent-2); font-weight: 800;">${logged} ✅</span>
        </div>
      `;
    } else if (isActive) {
      let inputHtml = "";
      if (ex.unilateral) {
        inputHtml = `
          <div class="unilateral-inputs-wrap">
            <input id="left" inputmode="numeric" type="number" min="0" max="180" value="${todayRecord?.left ?? targetRepsDefault}" placeholder="L">
            <input id="right" inputmode="numeric" type="number" min="0" max="180" value="${todayRecord?.right ?? targetRepsDefault}" placeholder="R">
          </div>
        `;
      } else {
        inputHtml = `<input id="reps" class="set-rep-input" inputmode="numeric" type="number" min="0" max="180" value="${todayRecord?.reps ?? targetRepsDefault}">`;
      }

      rows += `
        <div class="set-row set-row-active">
          <span class="set-num-badge">${s}</span>
          <span>${ex.target.replace(/\d+\s*x\s*/, "")}</span>
          <span style="color: var(--muted); font-size: 0.85rem;">${lastSummary}</span>
          <div>${inputHtml}</div>
        </div>
      `;
    } else {
      rows += `
        <div class="set-row set-row-upcoming">
          <span class="set-num-badge">${s}</span>
          <span>${ex.target.replace(/\d+\s*x\s*/, "")}</span>
          <span style="color: var(--muted); font-size: 0.85rem;">${lastSummary}</span>
          <span style="color: var(--muted);">-</span>
        </div>
      `;
    }
  }

  let colHeader = "Reps";
  if (isTimeTracking) colHeader = "L / R (sec)";
  else if (ex.unilateral) colHeader = "L / R Reps";

  return `
    <div class="sets-table-card">
      <div class="sets-table-header">
        <span>Set</span>
        <span>Target</span>
        <span>Last</span>
        <span>${colHeader}</span>
      </div>
      ${rows}
    </div>
  `;
}

function defaultTargetReps(target, exerciseId) {
  if (exerciseId === "suitcase-carry") return 45;
  const match = (target || "").match(/(\d+)\s*-\s*(\d+)/);
  if (match) return Number(match[1]); // e.g. 8 for 8-15
  const single = (target || "").match(/(\d+)/);
  return single ? Number(single[1]) : 10;
}

function renderSession() {
  saveActiveSession();
  const step = currentStep();
  if (!step) return finishSession();

  if (step.type === "equipment") return renderEquipment(step);
  if (step.type === "intervals") return renderIntervals(step);
  if (step.type === "timed") return renderTimed(step);
  if (step.type === "superset") return renderSuperset(step);
  renderExercise(step, null);
}

function renderExercise(ex, supersetLabel) {
  const last = getLastExercise(ex.id);
  const restTime = ex.restSeconds || store.settings.defaultRest;
  const isResting = state.phase === "rest";

  let timerLabel = `WORK · SET ${state.setIndex} OF ${ex.sets}`;
  if (isResting) {
    timerLabel = `REST · AFTER SET ${Math.max(1, state.setIndex - 1)} OF ${ex.sets}`;
  } else if (state.setIndex === ex.sets) {
    timerLabel = `WORK · SET ${state.setIndex} OF ${ex.sets} (FINAL 🔥)`;
  }

  const phaseClass = isResting ? "phase-rest" : "phase-work";
  const displaySeconds = isResting ? (state.remaining || restTime) : (state.remaining || ex.workSeconds || 45);

  els.sessionPanel.innerHTML = `
    ${statusMarkup(supersetLabel ? `<span class="badge">${supersetLabel}</span>` : "")}
    <h2 class="exercise-name">${ex.name}</h2>
    <p class="equipment">🔧 ${ex.equipment} · ⏱ ${restTime}s rest between sets</p>
    
    ${activeTimerMarkup(timerLabel, displaySeconds, phaseClass)}
    
    ${setsTableMarkup(ex, last)}
    ${upNextMarkup()}
    ${cueMarkup(ex.cues)}
    
    <div class="session-actions" style="margin-top: 18px;">
      ${!isResting ? `<button class="primary-btn" data-action="complete-set" type="button">✓ Complete Set ${state.setIndex} of ${ex.sets} & Rest (${restTime}s)</button>` : ""}
      ${isResting ? `<button class="primary-btn" data-action="skip" type="button">Skip Rest & Start Set ${state.setIndex} of ${ex.sets} ➔</button>` : ""}
      <button class="ghost-btn" data-action="end-session" type="button">✕ Exit</button>
    </div>
  `;
  bindSessionButtons(ex);
}

function renderSuperset(step) {
  const part = currentPlayable();
  if (part.type === "transition") {
    renderTransition(step, part);
    return;
  }
  renderExercise(part, `${step.name} · Round ${state.roundIndex}/${step.rounds}`);
}

function renderTransition(step, part) {
  const sec = part.seconds || 10;
  els.sessionPanel.innerHTML = `
    ${statusMarkup(`<span class="badge badge-easy">${step.name} · Round ${state.roundIndex}/${step.rounds}</span>`)}
    <h2 class="exercise-name">Transition</h2>
    <p class="equipment">Move quickly to the next movement.</p>
    ${activeTimerMarkup("TRANSITION", sec, "phase-easy")}
    ${upNextMarkup()}
    <div class="session-actions" style="margin-top: 14px;">
      <button class="primary-btn" data-action="skip" type="button">Ready Now ➔</button>
    </div>
  `;
  bindSessionButtons(part);
}

function renderTimed(step) {
  els.sessionPanel.innerHTML = `
    ${statusMarkup()}
    <h2 class="exercise-name">${step.name}</h2>
    <p class="equipment">${step.equipment}</p>
    ${activeTimerMarkup("WORK TIMER", step.seconds, "phase-work")}
    ${upNextMarkup()}
    ${cueMarkup(step.cues)}
    <div class="session-actions" style="margin-top: 14px;">
      <button class="primary-btn" data-action="skip" type="button">Complete ➔</button>
    </div>
  `;
  bindSessionButtons(step);
}

function renderEquipment(step) {
  const sec = store.settings.equipChangeSeconds || step.seconds || 90;
  els.sessionPanel.innerHTML = `
    ${statusMarkup()}
    <span class="badge badge-rest">Equipment Change</span>
    <h2 class="exercise-name">Convert Gear</h2>
    <p class="equipment">${step.from} ➔ ${step.to}</p>
    ${activeTimerMarkup("GEAR TIMER", sec, "phase-rest")}
    ${upNextMarkup()}
    <div class="session-actions" style="margin-top: 14px;">
      <button class="primary-btn" data-action="ready-early" type="button">Ready Now ➔</button>
    </div>
  `;
  bindSessionButtons(step);
}

function renderIntervals(step) {
  const isHard = state.intervalPhase === "hard";
  const label = isHard ? "HARD SPRINT" : "EASY RECOVERY";
  const phaseClass = isHard ? "phase-hard" : "phase-easy";
  const badgeClass = isHard ? "badge-hard" : "badge-easy";
  const seconds = isHard ? (store.settings.vo2Hard || step.hardSeconds || 60) : (store.settings.easyRecoverySeconds || 75);

  els.sessionPanel.innerHTML = `
    ${statusMarkup(`<span class="badge ${badgeClass}">Round ${state.roundIndex} of ${step.rounds} · ${label}</span>`)}
    <h2 class="exercise-name">${step.name}</h2>
    <p class="equipment">${isHard ? "⚡ 8-9/10 exertion sprint." : "🚶 Active recovery walk / gentle breathing jog."}</p>
    ${activeTimerMarkup(label, seconds, phaseClass)}
    ${upNextMarkup()}
    <div class="session-actions" style="margin-top: 14px;">
      <button class="primary-btn" data-action="skip" type="button">Next Phase ➔</button>
    </div>
  `;
  bindSessionButtons(step);
}

// Circular Animated Timer Markup
function activeTimerMarkup(label, seconds, phaseClass = "phase-rest") {
  const shown = state.remaining > 0 ? state.remaining : seconds;
  const totalSec = state.totalTimerSeconds > 0 ? state.totalTimerSeconds : seconds;
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
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

function cueMarkup(cues = []) {
  if (!cues.length) return "";
  return `<ul class="cue-list">${cues.map((cue) => `<li>${cue}</li>`).join("")}</ul>`;
}

function bindSessionButtons(context) {
  els.sessionPanel.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", () => handleAction(button.dataset.action, context));
  });
  els.sessionPanel.querySelectorAll("[data-jump]").forEach((button) => {
    button.addEventListener("click", () => jumpToStep(parseInt(button.dataset.jump, 10)));
  });
  const center = document.getElementById("timerCenterClick");
  if (center) center.addEventListener("click", openTimerModal);
}

function handleAction(action, context) {
  if (action === "open-roadmap") openWorkoutRoadmap();
  if (action === "complete-set") completeSet(context);
  if (action === "end-session") {
    if (confirm("End and save workout now?")) finishSession();
  }
  if (action === "ready-early") nextStepUnit();
  if (action === "start-interval") startInterval(context);
  if (action === "pause") togglePause();
  if (action === "plus") adjustTimer(15);
  if (action === "minus") adjustTimer(-15);
  if (action === "custom-time") openTimerModal();
  if (action === "skip") {
    if (state.phase === "rest") {
      stopTimer();
      startWork(currentPlayable() || currentStep());
    } else {
      nextStepUnit();
    }
  }
}

function startWork(ex) {
  state.phase = "work";
  renderSession();
  startCountdown(ex.workSeconds || 45, () => {
    notifyDone();
    completeSet(ex);
  });
}

function completeSet(ex) {
  stopTimer();
  recordReps(ex);
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
    const part = currentPlayable();
    if (part.type === "transition") {
      state.phase = "transition";
      renderSession();
      startCountdown(part.seconds || 10, nextStepUnit);
    } else {
      startWork(part);
    }
    return;
  }
  if (state.roundIndex < step.rounds) {
    state.roundIndex += 1;
    state.supersetPartIndex = 0;
    const restTime = step.restSeconds || store.settings.supersetRest || 60;
    startRest(restTime);
    return;
  }
  nextStep();
}

function startRest(seconds) {
  state.phase = "rest";
  renderSession();
  startCountdown(seconds, () => {
    notifyDone();
    startWork(currentPlayable() || currentStep());
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
      if (onDone) onDone();
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

// Mobile Timer Pad Controller
function openTimerModal() {
  const current = state.remaining > 0 ? state.remaining : (currentStep()?.restSeconds || 60);
  state.padSelectedSeconds = current;
  updatePadDisplay();
  if (typeof els.editTimerDialog.showModal === "function") {
    els.editTimerDialog.showModal();
  }
}

function updatePadDisplay() {
  if (els.padTimeDisplay) {
    els.padTimeDisplay.textContent = formatTime(state.padSelectedSeconds || 60);
  }
  document.querySelectorAll(".pad-preset-btn").forEach((btn) => {
    const sec = parseInt(btn.dataset.sec, 10);
    btn.classList.toggle("active", sec === state.padSelectedSeconds);
  });
}

function applyTimerPad() {
  const total = Math.max(5, state.padSelectedSeconds || 60);
  state.remaining = total;
  state.totalTimerSeconds = total;
  updateTimerDisplay();
  els.editTimerDialog.close();
  playStartChime();
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
        const restTime = step.restSeconds || store.settings.supersetRest || 60;
        startRest(restTime);
        return;
      } else {
        nextStep();
        return;
      }
    }
    const part = currentPlayable();
    if (part.type === "transition") {
      state.phase = "transition";
      renderSession();
      startCountdown(part.seconds || 10, nextStepUnit);
    } else {
      startWork(part);
    }
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
  if (state.stepIndex >= currentWorkout().steps.length) {
    finishSession();
  } else {
    startCurrentStepAuto();
  }
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
    <p class="equipment">Great work. Your reps and workout records are saved automatically.</p>
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
    els.historyList.innerHTML = `<div class="history-card"><p>No saved workouts yet. Complete a session and it will appear here automatically.</p></div>`;
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
    easyRecoverySeconds: clamp(Number(els.easyRecoveryInput?.value) || 75, 60, 90),
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
