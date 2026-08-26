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
  padSelectedSeconds: 60,
  focusedDay: "monday",
  lastTransitionNotice: null,
  flashTimeout: null
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
  },
  get profile() {
    try {
      return JSON.parse(localStorage.getItem("hybrid_profile") || '{"weight": 75, "height": 178, "logs": []}');
    } catch {
      return { weight: 75, height: 178, logs: [] };
    }
  },
  set profile(v) {
    localStorage.setItem("hybrid_profile", JSON.stringify(v));
  },
  get workouts() {
    try {
      const custom = localStorage.getItem("hybrid_custom_workouts");
      if (custom) return JSON.parse(custom);
    } catch (_) {}
    return JSON.parse(JSON.stringify(WORKOUTS));
  },
  set workouts(v) {
    if (!v) localStorage.removeItem("hybrid_custom_workouts");
    else localStorage.setItem("hybrid_custom_workouts", JSON.stringify(v));
  }
};

function getWorkout(day) {
  const w = store.workouts;
  return w[day] || WORKOUTS[day] || WORKOUTS.monday;
}

function currentWorkout() {
  return getWorkout(state.selectedDay || state.focusedDay || "monday");
}

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
  renderDaySelector();
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
    "workoutSelectionWrapper", "daySelectDropdown", "dayChipsGrid", "selectedDayCard", "recoveryDrawer",
    "recoveryInfo", "sessionPanel", "historyList", "clearHistoryBtn",
    "soundQuickToggle", "soundInput", "testSoundBtn", "vibrationInput", "wakeLockInput",
    "defaultRestInput", "supersetRestInput", "vo2HardInput", "easyRecoveryInput", "equipChangeInput",
    "profileWeightInput", "profileHeightInput", "logWeightBtn", "weightLogHistory", "saveSettingsBtn",
    "openProgramEditorBtn", "programEditorDialog", "editorModalContent", "stepEditDialog", "stepEditModalContent",
    "resetTimersBtn", "exportDataBtn", "importDataInput", "resumeBanner", "installBtn",
    "workoutOverviewDialog", "overviewModalContent",
    "workoutRoadmapDialog", "roadmapModalContent",
    "editTimerDialog", "padTimeDisplay", "saveTimerThisSetBtn", "saveTimerAllSetsBtn", "saveTimerModalBtn", "cancelTimerModalBtn"
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

  // Athlete Profile & Settings Save
  if (els.profileWeightInput) els.profileWeightInput.addEventListener("change", saveProfile);
  if (els.profileHeightInput) els.profileHeightInput.addEventListener("change", saveProfile);
  if (els.logWeightBtn) els.logWeightBtn.addEventListener("click", logWeightCheckin);
  if (els.openProgramEditorBtn) els.openProgramEditorBtn.addEventListener("click", () => openProgramEditor(state.focusedDay || "monday"));
  if (els.saveSettingsBtn) {
    els.saveSettingsBtn.addEventListener("click", () => {
      saveSettings();
      saveProfile();
      alert("✓ Settings and profile saved successfully!");
    });
  }

  // Settings inputs
  [
    "soundInput", "vibrationInput", "wakeLockInput", "defaultRestInput",
    "supersetRestInput", "vo2HardInput", "easyRecoveryInput", "equipChangeInput"
  ].forEach((id) => {
    if (els[id]) els[id].addEventListener("change", saveSettings);
  });

  // Mobile Day Selector Events
  if (els.daySelectDropdown) {
    els.daySelectDropdown.addEventListener("change", (e) => {
      state.focusedDay = e.target.value;
      renderDaySelector();
    });
  }

  document.querySelectorAll(".day-chip-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.focusedDay = btn.dataset.day;
      renderDaySelector();
    });
  });

  // Mobile Timer Pad Events
  if (els.cancelTimerModalBtn) {
    els.cancelTimerModalBtn.addEventListener("click", () => els.editTimerDialog.close());
  }
  if (els.saveTimerThisSetBtn) {
    els.saveTimerThisSetBtn.addEventListener("click", () => applyTimerPad(false));
  }
  if (els.saveTimerAllSetsBtn) {
    els.saveTimerAllSetsBtn.addEventListener("click", () => applyTimerPad(true));
  }
  if (els.saveTimerModalBtn) {
    els.saveTimerModalBtn.addEventListener("click", () => applyTimerPad(false));
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
  // Ascending alert pitches for the final 5 seconds (5 -> 4 -> 3 -> 2 -> 1)
  let freq = 740;
  if (secondsLeft === 5) freq = 587.33; // D5
  else if (secondsLeft === 4) freq = 659.25; // E5
  else if (secondsLeft === 3) freq = 739.99; // F#5
  else if (secondsLeft === 2) freq = 830.61; // G#5
  else if (secondsLeft === 1) freq = 987.77; // B5 (High alert before finish chime)

  playTone(freq, "triangle", 95, 0.16, 0);
  if (store.settings.vibration && navigator.vibrate) {
    try { navigator.vibrate(60); } catch (_) {}
  }
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
  setTimeout(() => playCountdownTick(5), 350);
  setTimeout(() => playCountdownTick(4), 700);
  setTimeout(() => playCountdownTick(3), 1050);
  setTimeout(() => playCountdownTick(2), 1400);
  setTimeout(() => playCountdownTick(1), 1750);
  setTimeout(() => playFinishChime(), 2100);
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
function renderDaySelector() {
  const current = state.focusedDay || "monday";
  if (els.daySelectDropdown) els.daySelectDropdown.value = current;

  document.querySelectorAll(".day-chip-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.day === current);
  });

  renderSelectedDayCard(current);
}

function renderSelectedDayCard(day) {
  const workout = getWorkout(day);
  if (!workout || !els.selectedDayCard) return;

  const equipmentChips = (workout.equipmentNeeded || []).map((eq) => `<span class="equipment-chip">🔧 ${eq}</span>`).join("");
  const totalExercises = (workout.steps || []).length;

  const exerciseSummaryList = (workout.steps || []).map((step) => {
    if (step.type === "exercise") return `<li><strong>${step.name}</strong> · ${step.sets} sets (${step.target})</li>`;
    if (step.type === "superset") return `<li><strong>${step.name}</strong> · ${step.rounds} rounds (${(step.parts || []).filter((p) => p.type === "exercise").map((p) => p.name).join(" + ")})</li>`;
    if (step.type === "intervals") return `<li><strong>${step.name}</strong> · ${step.rounds} rounds (60s sprint / jog recovery)</li>`;
    if (step.type === "timed") return `<li><strong>${step.name}</strong> · ${formatDuration(step.seconds)}</li>`;
    if (step.type === "equipment") return `<li><strong>Convert Gear</strong> · ${step.from} ➔ ${step.to} (${step.seconds || 90}s)</li>`;
    return "";
  }).filter(Boolean).join("");

  els.selectedDayCard.innerHTML = `
    <div class="selected-day-top">
      <div>
        <span class="selected-day-tag">${workout.label} Session</span>
        <h3 class="selected-day-title">${workout.title}</h3>
      </div>
      <span class="selected-day-duration">⏱ ${workout.duration}</span>
    </div>

    <div class="selected-day-actions">
      <button class="primary-btn pulse-glow" id="startSelectedDayBtn" type="button" style="flex: 2;">▶️ Begin ${workout.label}</button>
      <button class="secondary-btn" id="overviewSelectedDayBtn" type="button" style="flex: 1;">📋 Full Plan</button>
      <button class="secondary-btn" id="editSelectedDayBtn" type="button" style="flex: 1;">✏️ Edit</button>
    </div>

    <details class="card-expandable-drawer">
      <summary class="card-drawer-summary">
        <span>ℹ️ Equipment & Routine Details (${totalExercises} Steps)</span>
        <span class="drawer-icon">▾</span>
      </summary>
      <div class="drawer-content-box">
        ${equipmentChips ? `<p style="font-size:0.75rem; font-weight:800; text-transform:uppercase; color:var(--muted); margin:0 0 6px;">Required Equipment</p><div class="equipment-tag-cloud">${equipmentChips}</div>` : ""}
        <p style="font-size:0.75rem; font-weight:800; text-transform:uppercase; color:var(--muted); margin:${equipmentChips ? '12px 0 6px' : '0 0 6px'};">Exercise Sequence</p>
        <ul class="preview-exercise-list">
          ${exerciseSummaryList}
        </ul>
      </div>
    </details>
  `;

  document.getElementById("startSelectedDayBtn")?.addEventListener("click", () => startSession(day));
  document.getElementById("overviewSelectedDayBtn")?.addEventListener("click", () => openDayOverview(day));
  document.getElementById("editSelectedDayBtn")?.addEventListener("click", () => openProgramEditor(day));
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
  const workout = getWorkout(day);
  if (!workout) return;

  const equipmentChips = (workout.equipmentNeeded || []).map((eq) => `<span class="equipment-chip">🔧 ${eq}</span>`).join("");

  const stepsList = workout.steps.map((step, idx) => {
    let title = "";
    let desc = "";
    let ytLink = "";
    if (step.type === "exercise") {
      title = `${idx + 1}. ${step.name}`;
      desc = `${step.sets} sets · Target: ${step.target} · ${step.equipment}`;
      ytLink = `<a class="youtube-link-btn" href="${getExerciseYouTubeUrl(step.name)}" target="_blank" rel="noopener noreferrer">▶ Form</a>`;
    } else if (step.type === "superset") {
      const partsSummary = step.parts.filter((p) => p.type === "exercise").map((p) => `${p.name} <a class="youtube-link-btn" href="${getExerciseYouTubeUrl(p.name)}" target="_blank" rel="noopener noreferrer" style="padding:1px 5px; font-size:0.7rem;">▶</a>`).join(" + ");
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
          <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
            <strong>${title}</strong>
            ${ytLink}
          </div>
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
      <button class="secondary-btn" id="editOverviewRoutineBtn" type="button">✏️ Edit Routine</button>
      <button class="ghost-btn" id="closeOverviewSecondary" type="button">Close</button>
    </div>
  `;

  document.getElementById("closeOverviewBtn").addEventListener("click", () => els.workoutOverviewDialog.close());
  document.getElementById("closeOverviewSecondary").addEventListener("click", () => els.workoutOverviewDialog.close());
  document.getElementById("editOverviewRoutineBtn").addEventListener("click", () => {
    els.workoutOverviewDialog.close();
    openProgramEditor(day);
  });
  document.getElementById("startWorkoutBtn").addEventListener("click", () => {
    els.workoutOverviewDialog.close();
    startSession(day);
  });

  if (typeof els.workoutOverviewDialog.showModal === "function") {
    els.workoutOverviewDialog.showModal();
  }
}

// Program / Routine Editor Functions
function openProgramEditor(day = "monday") {
  state.editorDay = day;
  renderProgramEditorContent();
  if (els.programEditorDialog && typeof els.programEditorDialog.showModal === "function") {
    els.programEditorDialog.showModal();
  }
}

function renderProgramEditorContent() {
  const day = state.editorDay || "monday";
  const workout = getWorkout(day);
  const daysList = [
    { key: "monday", label: "Mon" },
    { key: "tuesday", label: "Tue" },
    { key: "thursday", label: "Thu" },
    { key: "friday", label: "Fri" }
  ];

  const dayTabs = daysList.map((d) => `
    <button class="editor-day-tab ${d.key === day ? "active" : ""}" data-editorday="${d.key}" type="button">${d.label}</button>
  `).join("");

  const stepsHtml = (workout.steps || []).map((step, idx) => {
    let typeBadge = "Exercise";
    let meta = "";
    if (step.type === "exercise") {
      typeBadge = "Exercise";
      meta = `<span>${step.sets} sets</span><span>${step.target}</span><span>Work: ${step.workSeconds || 45}s</span><span>Rest: ${step.restSeconds || 60}s</span><span>🔧 ${step.equipment}</span>`;
    } else if (step.type === "superset") {
      typeBadge = "Superset";
      const count = (step.parts || []).filter((p) => p.type === "exercise").length;
      meta = `<span>${step.rounds} rounds</span><span>${count} movements</span><span>Rest: ${step.restSeconds || 60}s</span>`;
    } else if (step.type === "intervals") {
      typeBadge = "VO2 Intervals";
      meta = `<span>${step.rounds} rounds</span><span>Sprint: ${step.hardSeconds || 60}s</span>`;
    } else if (step.type === "equipment") {
      typeBadge = "Gear Convert";
      meta = `<span>${step.from} ➔ ${step.to}</span><span>⏱ ${step.seconds || 90}s</span>`;
    } else if (step.type === "timed") {
      typeBadge = "Timed Hold";
      meta = `<span>⏱ ${formatDuration(step.seconds || 60)}</span><span>🔧 ${step.equipment}</span>`;
    }

    const isFirst = idx === 0;
    const isLast = idx === (workout.steps.length - 1);

    return `
      <div class="editor-step-card">
        <div class="editor-step-top-row">
          <div class="editor-step-header">
            <span class="badge" style="font-size:0.7rem; min-height:22px; padding:2px 6px;">${idx + 1}. ${typeBadge}</span>
            <span class="editor-step-title">${step.name || "Step"}</span>
          </div>
          <div class="editor-step-actions">
            <button class="editor-action-btn" onclick="moveEditorStep('${day}', ${idx}, -1)" ${isFirst ? "disabled style='opacity:0.3;'" : ""} title="Move Up">⬆️</button>
            <button class="editor-action-btn" onclick="moveEditorStep('${day}', ${idx}, 1)" ${isLast ? "disabled style='opacity:0.3;'" : ""} title="Move Down">⬇️</button>
            <button class="editor-action-btn" onclick="openStepEditModal('${day}', ${idx})" title="Edit timing and details">✏️</button>
            <button class="editor-action-btn btn-delete" onclick="deleteEditorStep('${day}', ${idx})" title="Delete step">🗑</button>
          </div>
        </div>
        <div class="editor-step-meta">${meta}</div>
      </div>
    `;
  }).join("");

  els.editorModalContent.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: flex-start;">
      <div>
        <p class="eyebrow">Custom Routine Builder</p>
        <h3 style="margin: 0 0 2px;">Edit ${workout.label} Program</h3>
        <p class="modal-subtitle">Customize exercise order, sets, targets, work timers & rest periods</p>
      </div>
      <button id="closeEditorBtn" class="danger-link" type="button" style="font-size: 1.25rem;">✕</button>
    </div>

    <div class="editor-day-selector" id="editorDaySelector">
      ${dayTabs}
    </div>

    <div class="editor-steps-container">
      ${stepsHtml || "<p style='color:var(--muted); text-align:center; padding:20px;'>No steps in this workout. Tap ➕ Add Step below.</p>"}
    </div>

    <div style="display:flex; gap:8px; margin-top:14px; flex-wrap:wrap;">
      <button class="primary-btn" onclick="openStepEditModal('${day}', null)" type="button" style="flex:1;">➕ Add Exercise / Step</button>
      <button class="secondary-btn" onclick="resetEditorDayToMaster('${day}')" type="button" style="flex:1;">↺ Reset to Default Plan</button>
    </div>

    <div class="modal-actions" style="margin-top: 12px;">
      <button class="ghost-btn" id="closeEditorSecondary" type="button">Done Editing</button>
    </div>
  `;

  document.getElementById("closeEditorBtn")?.addEventListener("click", () => els.programEditorDialog.close());
  document.getElementById("closeEditorSecondary")?.addEventListener("click", () => els.programEditorDialog.close());

  document.querySelectorAll("[data-editorday]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.editorDay = btn.dataset.editorday;
      renderProgramEditorContent();
    });
  });
}

window.openStepEditModal = function (day, index) {
  const workout = getWorkout(day);
  const isNew = index === null || index === undefined;
  const step = !isNew ? workout.steps[index] : exercise("custom-ex", "New Exercise", "Dumbbells", "3 x 10-12", 3, 45, 60, []);

  els.stepEditModalContent.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
      <h3 style="margin: 0;">${isNew ? "➕ Add New Step" : `✏️ Edit Step ${index + 1}`}</h3>
      <button id="closeStepEditBtn" class="danger-link" type="button" style="font-size: 1.25rem;">✕</button>
    </div>

    <form id="stepEditForm" class="step-edit-form" onsubmit="event.preventDefault(); saveStepEdit('${day}', ${isNew ? 'null' : index});">
      <div class="form-group">
        <label>Step Type</label>
        <select id="editStepType" ${!isNew ? "disabled" : ""}>
          <option value="exercise" ${step.type === "exercise" ? "selected" : ""}>Exercise (Standard / Sets & Reps)</option>
          <option value="equipment" ${step.type === "equipment" ? "selected" : ""}>Convert Gear / Barbell Transition</option>
          <option value="intervals" ${step.type === "intervals" ? "selected" : ""}>VO2 Max Intervals</option>
          <option value="timed" ${step.type === "timed" ? "selected" : ""}>Timed Hold / Carry</option>
        </select>
      </div>

      <div class="form-group">
        <label>Exercise / Step Name</label>
        <input id="editStepName" type="text" required value="${step.name || ''}" placeholder="e.g. Barbell Bent-Over Row">
      </div>

      <div class="form-group">
        <label>Equipment / Load</label>
        <input id="editStepEquip" type="text" value="${step.equipment || ''}" placeholder="e.g. 20 kg barbell, 10 kg DB">
      </div>

      <div class="form-row-2">
        <div class="form-group">
          <label>Target Reps / Time</label>
          <input id="editStepTarget" type="text" value="${step.target || '3 x 10-15'}" placeholder="e.g. 4 x 8-15">
        </div>
        <div class="form-group">
          <label>Number of Sets</label>
          <input id="editStepSets" type="number" min="1" max="20" value="${step.sets || 3}">
        </div>
      </div>

      <div class="form-row-2">
        <div class="form-group">
          <label>Work Timer (Seconds)</label>
          <input id="editStepWorkSec" type="number" min="5" max="600" step="5" value="${step.workSeconds || step.seconds || 45}">
        </div>
        <div class="form-group">
          <label>Rest Timer (Seconds)</label>
          <input id="editStepRestSec" type="number" min="0" max="600" step="5" value="${step.restSeconds || 60}">
        </div>
      </div>

      <div class="form-group">
        <label>Technique Cues (comma or line separated)</label>
        <textarea id="editStepCues" rows="2" placeholder="e.g. Hinge at hips. Neutral spine.">${(step.cues || []).join("\n")}</textarea>
      </div>

      <div class="modal-actions" style="margin-top: 14px;">
        <button class="primary-btn" type="submit">💾 Save Step</button>
        <button class="ghost-btn" id="cancelStepEditBtn" type="button">Cancel</button>
      </div>
    </form>
  `;

  document.getElementById("closeStepEditBtn")?.addEventListener("click", () => els.stepEditDialog.close());
  document.getElementById("cancelStepEditBtn")?.addEventListener("click", () => els.stepEditDialog.close());

  if (typeof els.stepEditDialog.showModal === "function") {
    els.stepEditDialog.showModal();
  }
};

window.saveStepEdit = function (day, index) {
  const type = document.getElementById("editStepType")?.value || "exercise";
  const name = document.getElementById("editStepName")?.value || "Exercise";
  const equipment = document.getElementById("editStepEquip")?.value || "Dumbbells";
  const target = document.getElementById("editStepTarget")?.value || "3 x 10-15";
  const sets = parseInt(document.getElementById("editStepSets")?.value, 10) || 3;
  const workSeconds = parseInt(document.getElementById("editStepWorkSec")?.value, 10) || 45;
  const restSeconds = parseInt(document.getElementById("editStepRestSec")?.value, 10) || 60;
  const cuesRaw = document.getElementById("editStepCues")?.value || "";
  const cues = cuesRaw.split(/[\n,]/).map((c) => c.trim()).filter(Boolean);

  const workouts = store.workouts;
  const workout = workouts[day] || WORKOUTS[day];
  if (!workout.steps) workout.steps = [];

  let stepObj;
  if (type === "equipment") {
    stepObj = { type: "equipment", from: equipment, to: target || "Next Gear", seconds: workSeconds };
  } else if (type === "intervals") {
    stepObj = { type: "intervals", id: "vo2-" + Date.now(), name, rounds: sets, hardSeconds: workSeconds, easySettingKey: "easyRecoverySeconds" };
  } else if (type === "timed") {
    stepObj = { type: "timed", id: "timed-" + Date.now(), name, equipment, seconds: workSeconds, cues };
  } else {
    stepObj = {
      type: "exercise",
      id: "ex-" + Date.now(),
      name,
      equipment,
      target,
      sets,
      workSeconds,
      restSeconds,
      cues,
      unilateral: target.toLowerCase().includes("each") ? "side" : null
    };
  }

  if (index === null || index === undefined) {
    workout.steps.push(stepObj);
  } else {
    const existing = workout.steps[index];
    if (existing.type === "superset") {
      existing.name = name;
      existing.rounds = sets;
      existing.restSeconds = restSeconds;
      stepObj = existing;
    } else {
      stepObj.id = existing.id || stepObj.id;
    }
    workout.steps[index] = stepObj;
  }

  workouts[day] = workout;
  store.workouts = workouts;
  els.stepEditDialog.close();
  renderProgramEditorContent();
  renderSelectedDayCard(day);
};

window.moveEditorStep = function (day, index, delta) {
  const workouts = store.workouts;
  const workout = workouts[day] || WORKOUTS[day];
  const targetIdx = index + delta;
  if (targetIdx < 0 || targetIdx >= workout.steps.length) return;

  const temp = workout.steps[index];
  workout.steps[index] = workout.steps[targetIdx];
  workout.steps[targetIdx] = temp;

  workouts[day] = workout;
  store.workouts = workouts;
  renderProgramEditorContent();
  renderSelectedDayCard(day);
};

window.deleteEditorStep = function (day, index) {
  if (!confirm("Are you sure you want to remove this step from the workout?")) return;
  const workouts = store.workouts;
  const workout = workouts[day] || WORKOUTS[day];
  workout.steps.splice(index, 1);
  workouts[day] = workout;
  store.workouts = workouts;
  renderProgramEditorContent();
  renderSelectedDayCard(day);
};

window.resetEditorDayToMaster = function (day) {
  if (!confirm(`Reset ${day.toUpperCase()} back to the official Hybrid 5.2 master specification?`)) return;
  const workouts = store.workouts;
  workouts[day] = JSON.parse(JSON.stringify(WORKOUTS[day]));
  store.workouts = workouts;
  renderProgramEditorContent();
  renderSelectedDayCard(day);
};

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
    let ytLink = "";
    if (step.type === "exercise") {
      title = `${idx + 1}. ${step.name}`;
      desc = isActive ? `Set ${state.setIndex} of ${step.sets} · ${step.equipment}` : `${step.sets} sets · ${step.target}`;
      ytLink = `<a class="youtube-link-btn" href="${getExerciseYouTubeUrl(step.name)}" target="_blank" rel="noopener noreferrer" style="padding:2px 6px; font-size:0.72rem;">▶ Form</a>`;
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
          <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
            <strong>${title} ${isActive ? `<span style="color: var(--accent-2); font-size: 0.8rem;">(Active)</span>` : ""}</strong>
            ${ytLink}
          </div>
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
  if (els.workoutSelectionWrapper) els.workoutSelectionWrapper.classList.add("hidden");
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
  if (els.workoutSelectionWrapper) els.workoutSelectionWrapper.classList.add("hidden");
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
    state.setIndex = state.roundIndex || 1;
    const part = currentPlayable();
    if (!part) return;
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
      <div style="display: flex; gap: 6px;">
        <button class="roadmap-toggle-btn" data-action="prev-step" type="button" title="Rewind to previous set or exercise">⏮ Prev</button>
        <button class="roadmap-toggle-btn" data-action="open-roadmap" type="button">📋 Plan</button>
      </div>
    </div>
    <div class="progress-bar" style="margin: 4px 0 10px; height: 6px;"><div class="progress-fill" style="width:${progressInfo.pct}%"></div></div>
    ${stepCarouselMarkup()}
    ${extra}
  `;
}

// Interactive Sets Table Builder
function getExerciseDefaultWeight(equipment) {
  if (!equipment) return 0;
  const match = equipment.match(/(\d+(?:\.\d+)?)\s*kg/i);
  if (match) return Number(match[1]);
  return 0;
}

function getExerciseYouTubeUrl(exerciseName) {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(exerciseName + " exercise form tutorial")}`;
}

function getProgressiveTarget(baseTarget, setNum, totalSets) {
  if (!baseTarget) return "-";
  const clean = baseTarget.replace(/\d+\s*x\s*/, "").trim();
  const match = clean.match(/(\d+)\s*-\s*(\d+)/);
  if (!match) return clean;
  const minR = parseInt(match[1], 10);
  const maxR = parseInt(match[2], 10);
  if (totalSets <= 1) return `${minR}-${maxR}`;
  
  if (setNum === 1) {
    const freshMin = Math.max(minR, Math.round(minR + (maxR - minR) * 0.5));
    return `${freshMin}-${maxR}`;
  } else if (setNum === totalSets) {
    const fatigueMax = Math.min(maxR, Math.round(minR + (maxR - minR) * 0.5));
    return `${minR}-${fatigueMax}`;
  } else {
    return `${minR + 1}-${maxR - 1}`;
  }
}

function getSuggestedReps(baseTarget, setNum, totalSets, prevSetRecord, exerciseId) {
  if (exerciseId === "suitcase-carry") return 45;
  if (prevSetRecord) {
    if (prevSetRecord.reps !== undefined && prevSetRecord.reps > 0) {
      return Math.max(5, prevSetRecord.reps >= 10 ? prevSetRecord.reps - 1 : prevSetRecord.reps);
    }
    if (prevSetRecord.left !== undefined && prevSetRecord.left > 0) {
      return Math.max(5, prevSetRecord.left >= 10 ? prevSetRecord.left - 1 : prevSetRecord.left);
    }
  }
  const match = (baseTarget || "").match(/(\d+)\s*-\s*(\d+)/);
  if (match) {
    const minR = parseInt(match[1], 10);
    const maxR = parseInt(match[2], 10);
    if (setNum === 1) return maxR;
    if (setNum === 2) return Math.round((minR + maxR) / 2);
    return minR;
  }
  const single = (baseTarget || "").match(/(\d+)/);
  return single ? Number(single[1]) : 10;
}

function setsTableMarkup(ex, last) {
  const isTimeTracking = ex.id === "suitcase-carry";
  const defaultWt = getExerciseDefaultWeight(ex.equipment);
  const isUnilateral = !!ex.unilateral;
  let rows = "";

  for (let s = 1; s <= ex.sets; s++) {
    const isDone = s < state.setIndex;
    const isActive = s === state.setIndex;
    const isUpcoming = s > state.setIndex;

    const todayRecord = state.sessionRecords.find((r) => r.exerciseId === ex.id && r.set === s);
    const prevCompletedSet = state.sessionRecords.filter((r) => r.exerciseId === ex.id && r.set < s).pop();
    const lastRecord = last && last.records && last.records[s - 1];

    const progressiveTarget = getProgressiveTarget(ex.target, s, ex.sets);
    const targetLabel = s === 1
      ? `<span class="target-badge-fresh" title="Fresh baseline set">${progressiveTarget}</span>`
      : (s === ex.sets
          ? `<span class="target-badge-fatigue" title="Fatigue taper">${progressiveTarget}</span>`
          : `<span>${progressiveTarget}</span>`);

    const activeWeightDefault = (todayRecord?.weight !== undefined && todayRecord?.weight !== null)
      ? todayRecord.weight
      : (prevCompletedSet?.weight !== undefined && prevCompletedSet?.weight !== null)
        ? prevCompletedSet.weight
        : defaultWt;

    const targetRepsDefault = getSuggestedReps(ex.target, s, ex.sets, prevCompletedSet, ex.id);

    let lastSummary = "-";
    if (lastRecord) {
      const wtPrefix = (lastRecord.weight !== undefined && lastRecord.weight !== null && lastRecord.weight > 0) ? `${lastRecord.weight}k ` : "";
      if (lastRecord.left !== undefined) {
        lastSummary = isTimeTracking ? `${wtPrefix}${lastRecord.left}s/${lastRecord.right}s` : `${wtPrefix}${lastRecord.left}L/${lastRecord.right}R`;
      } else if (lastRecord.reps !== undefined) {
        lastSummary = isTimeTracking ? `${wtPrefix}${lastRecord.reps}s` : `${wtPrefix}${lastRecord.reps}r`;
      }
    }

    if (isDone) {
      let inputHtml = "";
      if (ex.unilateral) {
        inputHtml = `
          <div class="unilateral-inputs-wrap">
            <input class="set-rep-done" inputmode="numeric" type="number" min="0" max="180" 
              value="${todayRecord?.left ?? ''}" placeholder="L" 
              onchange="updateActiveSetRecord('${ex.id}', ${s}, 'left', this.value)" title="Change Left reps retroactively">
            <input class="set-rep-done" inputmode="numeric" type="number" min="0" max="180" 
              value="${todayRecord?.right ?? ''}" placeholder="R" 
              onchange="updateActiveSetRecord('${ex.id}', ${s}, 'right', this.value)" title="Change Right reps retroactively">
          </div>
        `;
      } else {
        inputHtml = `
          <input class="set-rep-input set-rep-done" inputmode="numeric" type="number" min="0" max="180" 
            value="${todayRecord?.reps ?? ''}" 
            onchange="updateActiveSetRecord('${ex.id}', ${s}, 'reps', this.value)" title="Change reps retroactively">
        `;
      }

      rows += `
        <div class="set-row ${isUnilateral ? "set-row-unilateral" : ""} set-row-done">
          <span class="set-num-badge">${s}</span>
          <div>
            <input class="set-wt-input set-wt-done" inputmode="decimal" type="number" step="0.5" min="0" max="300" 
              value="${todayRecord?.weight ?? (activeWeightDefault || '')}" 
              placeholder="${defaultWt ? defaultWt + 'kg' : '0'}" 
              onchange="updateActiveSetRecord('${ex.id}', ${s}, 'weight', this.value)" title="Change weight retroactively">
          </div>
          <div>${targetLabel}</div>
          <span style="color: var(--muted); font-size: 0.78rem;">${lastSummary}</span>
          <div>${inputHtml}</div>
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
        <div class="set-row ${isUnilateral ? "set-row-unilateral" : ""} set-row-active">
          <span class="set-num-badge">${s}</span>
          <div><input id="setWeight" class="set-wt-input" inputmode="decimal" type="number" step="0.5" min="0" max="300" value="${todayRecord?.weight ?? (activeWeightDefault || "")}" placeholder="${defaultWt ? defaultWt + 'kg' : '0'}"></div>
          <div>${targetLabel}</div>
          <span style="color: var(--muted); font-size: 0.78rem;">${lastSummary}</span>
          <div>${inputHtml}</div>
        </div>
      `;
    } else {
      rows += `
        <div class="set-row ${isUnilateral ? "set-row-unilateral" : ""} set-row-upcoming">
          <span class="set-num-badge">${s}</span>
          <span style="color: var(--muted);">${activeWeightDefault > 0 ? activeWeightDefault + " kg" : (defaultWt > 0 ? defaultWt + " kg" : "-")}</span>
          <div>${targetLabel}</div>
          <span style="color: var(--muted); font-size: 0.78rem;">${lastSummary}</span>
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
      <div class="sets-table-header ${isUnilateral ? "header-unilateral" : ""}">
        <span>Set</span>
        <span>Wt</span>
        <span>Target</span>
        <span>Last</span>
        <span>${colHeader}</span>
      </div>
      ${rows}
      <div class="progressive-overload-card">
        <div style="display:flex; align-items:center; justify-content:space-between; gap:8px;">
          <span style="font-size:0.8rem; font-weight:900; color:var(--accent); text-transform:uppercase; letter-spacing:0.04em;">📈 Progressive Loading</span>
          <span style="font-size:0.75rem; color:var(--muted); font-weight:700;">Fatigue Taper Active</span>
        </div>
        <p style="margin:4px 0 0; font-size:0.78rem; color:var(--muted); line-height:1.4;">
          Set 1 is your fresh baseline (aim for top reps). Target reps naturally taper as fatigue builds while maintaining working weight.
        </p>
      </div>
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
  if (state.restingBetweenSteps) {
    const nextStepObj = currentWorkout().steps[state.stepIndex + 1];
    const nextName = nextStepObj ? nextStepObj.name : "Next Exercise";
    timerLabel = `REST BETWEEN EXERCISES · NEXT: ${nextName.toUpperCase()}`;
  } else if (isResting) {
    timerLabel = `REST · AFTER SET ${Math.max(1, state.setIndex - 1)} OF ${ex.sets}`;
  } else if (state.setIndex === ex.sets) {
    timerLabel = `WORK · SET ${state.setIndex} OF ${ex.sets} (FINAL 🔥)`;
  }

  const phaseClass = isResting ? "phase-rest" : "phase-work";
  const displaySeconds = isResting ? (state.remaining || restTime) : (state.remaining || ex.workSeconds || 45);

  const actionButtonsHtml = `
    <div class="session-actions" style="width: 100%; display: flex; flex-wrap: wrap; gap: 8px;">
      ${!isResting ? `<button class="primary-btn" style="flex: 1 1 100%;" data-action="complete-set" type="button">✓ Complete Set ${state.setIndex} of ${ex.sets} & Rest (${restTime}s)</button>` : ""}
      ${isResting ? `<button class="primary-btn" style="flex: 1 1 100%;" data-action="skip" type="button">${state.restingBetweenSteps ? "Ready for Next Exercise ➔" : `Skip Rest & Start Set ${state.setIndex} of ${ex.sets} ➔`}</button>` : ""}
      <button class="secondary-btn" data-action="prev-step" type="button" style="flex: 1;">⏮ Prev</button>
      <button class="ghost-btn" data-action="end-session" type="button" style="flex: 1;">✕ Exit</button>
    </div>
  `;

  let flashHtml = "";
  if (state.lastTransitionNotice) {
    flashHtml = `<div class="session-flash-banner"><span>${state.lastTransitionNotice}</span></div>`;
  }

  els.sessionPanel.innerHTML = `
    ${statusMarkup(supersetLabel ? `<span class="badge">${supersetLabel}</span>` : "")}
    ${flashHtml}
    <div class="session-layout-grid">
      <div class="session-left-col">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:10px; margin-bottom:4px; width: 100%;">
          <h2 class="exercise-name" style="margin-bottom:0;">${ex.name}</h2>
          <a class="youtube-link-btn" href="${getExerciseYouTubeUrl(ex.name)}" target="_blank" rel="noopener noreferrer" title="Watch exercise tutorial on YouTube">▶ Form Video</a>
        </div>
        <p class="equipment" style="width: 100%;">🔧 ${ex.equipment} · ⏱ ${restTime}s rest</p>
        
        ${activeTimerMarkup(timerLabel, displaySeconds, phaseClass)}
        
        <div class="desktop-actions">
          ${actionButtonsHtml}
        </div>
      </div>

      <div class="session-right-col">
        ${setsTableMarkup(ex, last)}
        
        <div class="mobile-actions">
          ${actionButtonsHtml}
        </div>

        ${upNextMarkup()}
        ${cueMarkup(ex.cues)}
      </div>
    </div>
  `;
  bindSessionButtons(ex);
}

function renderSuperset(step) {
  state.setIndex = state.roundIndex || 1;
  const part = currentPlayable();
  if (!part) return;
  if (part.type === "transition") {
    renderTransition(step, part);
    return;
  }
  renderExercise(part, `${step.name} · Round ${state.roundIndex}/${step.rounds}`);
}

function renderTransition(step, part) {
  const sec = part.seconds || 10;
  const nextPart = step.parts[state.supersetPartIndex + 1];
  const nextName = nextPart ? nextPart.name : "Next Movement";

  const actionButtonsHtml = `
    <div class="session-actions" style="width: 100%; display: flex; flex-wrap: wrap; gap: 8px;">
      <button class="primary-btn" style="flex: 1 1 100%;" data-action="skip" type="button">Ready Now (${nextName}) ➔</button>
      <button class="secondary-btn" data-action="prev-step" type="button" style="flex: 1;">⏮ Prev</button>
      <button class="ghost-btn" data-action="end-session" type="button" style="flex: 1;">✕ Exit</button>
    </div>
  `;

  els.sessionPanel.innerHTML = `
    ${statusMarkup(`<span class="badge badge-easy">${step.name} · Round ${state.roundIndex}/${step.rounds}</span>`)}
    <div class="session-layout-grid">
      <div class="session-left-col">
        <h2 class="exercise-name">Transition</h2>
        <p class="equipment">Switch weights & get ready for <strong>${nextName}</strong></p>
        ${activeTimerMarkup("TRANSITION", sec, "phase-easy")}
        <div class="desktop-actions">
          ${actionButtonsHtml}
        </div>
      </div>

      <div class="session-right-col">
        <div class="mobile-actions">
          ${actionButtonsHtml}
        </div>
        ${upNextMarkup()}
      </div>
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
    <div class="session-actions" style="margin-top: 14px; display: flex; flex-wrap: wrap; gap: 8px;">
      <button class="primary-btn" style="flex: 1 1 100%;" data-action="skip" type="button">Complete ➔</button>
      <button class="secondary-btn" data-action="prev-step" type="button" style="flex: 1;">⏮ Prev</button>
      <button class="ghost-btn" data-action="end-session" type="button" style="flex: 1;">✕ Exit</button>
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
    <div class="session-actions" style="margin-top: 14px; display: flex; flex-wrap: wrap; gap: 8px;">
      <button class="primary-btn" style="flex: 1 1 100%;" data-action="ready-early" type="button">Ready Now ➔</button>
      <button class="secondary-btn" data-action="prev-step" type="button" style="flex: 1;">⏮ Prev</button>
      <button class="ghost-btn" data-action="end-session" type="button" style="flex: 1;">✕ Exit</button>
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
    <div class="session-actions" style="margin-top: 14px; display: flex; flex-wrap: wrap; gap: 8px;">
      <button class="primary-btn" style="flex: 1 1 100%;" data-action="skip" type="button">Next Phase ➔</button>
      <button class="secondary-btn" data-action="prev-step" type="button" style="flex: 1;">⏮ Prev</button>
      <button class="ghost-btn" data-action="end-session" type="button" style="flex: 1;">✕ Exit</button>
    </div>
  `;
  bindSessionButtons(step);
}

// Circular Animated Timer Markup
function activeTimerMarkup(label, seconds, phaseClass = "phase-rest") {
  const shown = state.remaining > 0 ? state.remaining : seconds;
  const totalSec = state.totalTimerSeconds > 0 ? state.totalTimerSeconds : seconds;
  const radius = 88;
  const circumference = 2 * Math.PI * radius;
  const pct = totalSec > 0 ? Math.max(0, Math.min(1, shown / totalSec)) : 1;
  const offset = circumference * (1 - pct);

  let shortPhase = "WORK";
  if (phaseClass.includes("phase-rest")) shortPhase = "REST";
  else if (phaseClass.includes("phase-hard")) shortPhase = "HARD SPRINT";
  else if (phaseClass.includes("phase-easy")) shortPhase = "RECOVERY";
  else if ((label || "").toLowerCase().includes("transition")) shortPhase = "TRANSITION";
  else if ((label || "").toLowerCase().includes("gear")) shortPhase = "CONVERT";

  return `
    <div class="timer-container">
      ${label ? `<div class="timer-stage-title">${label}</div>` : ""}
      
      <div class="timer-ring-wrapper" id="timerCenterClick" title="Tap to adjust timer">
        <svg class="timer-svg" viewBox="0 0 200 200">
          <circle class="timer-svg-track" cx="100" cy="100" r="${radius}"></circle>
          <circle id="timerRingFill" class="timer-svg-fill ${phaseClass}" cx="100" cy="100" r="${radius}"
            style="stroke-dasharray: ${circumference}; stroke-dashoffset: ${offset};"></circle>
        </svg>
        <div class="timer-center-content">
          <span class="timer-phase-pill ${phaseClass}">${shortPhase}</span>
          <div class="timer-time" id="timerTime">${formatTime(shown)}</div>
          <div class="timer-edit-hint">✏️ tap to edit</div>
        </div>
      </div>

      <div class="timer-controls" style="margin-top: 14px; width: 100%;">
        <button class="timer-btn ${!state.running ? "timer-btn-paused" : ""}" data-action="pause" type="button">${state.running ? "⏸ Pause" : "▶ Resume"}</button>
        <button class="timer-btn" data-action="minus" type="button">-15s</button>
        <button class="timer-btn" data-action="plus" type="button">+15s</button>
        <button class="timer-btn" data-action="reset" type="button" title="Reset timer to beginning">↺ Reset</button>
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
  if (action === "prev-step") prevStepUnit();
  if (action === "complete-set") completeSet(context);
  if (action === "end-session") {
    if (confirm("End and save workout now?")) {
      finishSession();
      if (els.workoutSelectionWrapper) els.workoutSelectionWrapper.classList.remove("hidden");
    }
  }
  if (action === "ready-early") {
    if (state.restingBetweenSteps) {
      state.restingBetweenSteps = false;
      stopTimer();
      nextStep();
      return;
    }
    nextStepUnit();
  }
  if (action === "start-interval") startInterval(context);
  if (action === "pause") togglePause();
  if (action === "reset") resetCurrentTimer();
  if (action === "plus") adjustTimer(15);
  if (action === "minus") adjustTimer(-15);
  if (action === "custom-time") openTimerModal();
  if (action === "skip") {
    if (state.restingBetweenSteps) {
      state.restingBetweenSteps = false;
      stopTimer();
      nextStep();
      return;
    }
    if (state.phase === "rest") {
      stopTimer();
      startWork(currentPlayable() || currentStep());
    } else {
      nextStepUnit();
    }
  }
}

function resetCurrentTimer() {
  stopTimer();
  let defaultSec = state.totalTimerSeconds > 0 ? state.totalTimerSeconds : getCurrentStepDefaultDuration();
  if (state.restingBetweenSteps) {
    const step = currentStep();
    defaultSec = step?.restSeconds || store.settings.defaultRest || 60;
  }
  state.remaining = defaultSec;
  state.totalTimerSeconds = defaultSec;
  updateTimerDisplay();
  updatePauseButtons();
  playStartChime();
}

function startWork(ex) {
  state.restingBetweenSteps = false;
  state.phase = "work";
  renderSession();
  startCountdown(ex.workSeconds || 45, () => {
    notifyDone();
    completeSet(ex);
  });
}

function setFlashNotice(msg) {
  state.lastTransitionNotice = msg;
  const existing = document.getElementById("sessionTransitionFlash");
  if (existing) existing.remove();

  const flash = document.createElement("div");
  flash.id = "sessionTransitionFlash";
  flash.className = "session-flash-banner";
  flash.innerHTML = `<span>${msg}</span>`;

  if (els.sessionPanel) {
    els.sessionPanel.prepend(flash);
  }

  if (state.flashTimeout) clearTimeout(state.flashTimeout);
  state.flashTimeout = setTimeout(() => {
    state.lastTransitionNotice = null;
    const el = document.getElementById("sessionTransitionFlash");
    if (el) el.remove();
  }, 4500);
}

function completeSet(ex) {
  stopTimer();
  recordReps(ex);
  const step = currentStep();
  if (step.type === "superset") {
    state.setIndex = state.roundIndex || 1;
    setFlashNotice(`✓ Round ${state.roundIndex} of ${ex.name} logged!`);
    advanceSuperset();
  } else if (state.setIndex < ex.sets) {
    setFlashNotice(`✓ Set ${state.setIndex} of ${ex.name} logged! Rest ${ex.restSeconds || store.settings.defaultRest || 45}s`);
    state.setIndex += 1;
    const restTime = ex.restSeconds || store.settings.defaultRest || 45;
    startRest(restTime);
  } else {
    // Final set of this exercise: provide rest before advancing to the next exercise/step!
    if (state.stepIndex < currentWorkout().steps.length - 1) {
      const restTime = ex.restSeconds || store.settings.defaultRest || 60;
      setFlashNotice(`🏆 ${ex.name} Complete! Rest before next exercise.`);
      startRestBetweenSteps(restTime);
    } else {
      nextStep();
    }
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function recordReps(ex) {
  const defaultWt = getExerciseDefaultWeight(ex.equipment);
  const enteredWt = numberValue("setWeight");
  const step = currentStep();
  const currentSetNum = (step && step.type === "superset") ? (state.roundIndex || 1) : state.setIndex;

  let record = state.sessionRecords.find((r) => r.exerciseId === ex.id && r.set === currentSetNum);
  if (!record) {
    record = {
      date: new Date().toISOString(),
      day: currentWorkout().label,
      exerciseId: ex.id,
      exerciseName: ex.name,
      equipment: ex.equipment,
      set: currentSetNum,
      target: ex.target,
      durationSeconds: elapsedSeconds()
    };
    state.sessionRecords.push(record);
  }
  record.weight = enteredWt !== null ? enteredWt : defaultWt;
  if (ex.unilateral) {
    record.left = numberValue("left");
    record.right = numberValue("right");
  } else {
    record.reps = numberValue("reps");
  }
  saveActiveSession();
}

function numberValue(id) {
  const input = document.getElementById(id);
  if (!input || input.value === "") return null;
  return Number(input.value);
}

window.updateActiveSetRecord = function (exerciseId, setNum, field, value) {
  let record = state.sessionRecords.find((r) => r.exerciseId === exerciseId && r.set === setNum);
  if (!record) {
    const step = currentStep();
    record = {
      date: new Date().toISOString(),
      day: currentWorkout()?.label || "Workout",
      exerciseId,
      exerciseName: step?.name || exerciseId,
      equipment: step?.equipment || "",
      weight: 0,
      set: setNum,
      durationSeconds: elapsedSeconds()
    };
    state.sessionRecords.push(record);
  }
  const parsed = parseFloat(value);
  record[field] = isNaN(parsed) ? 0 : parsed;
  saveActiveSession();
};

function advanceSuperset() {
  const step = currentStep();
  state.supersetPartIndex += 1;
  while (step.parts[state.supersetPartIndex] && step.parts[state.supersetPartIndex].sets < state.roundIndex) {
    state.supersetPartIndex += 1;
  }
  if (state.supersetPartIndex < step.parts.length) {
    state.setIndex = state.roundIndex || 1;
    const part = currentPlayable();
    if (part.type === "transition") {
      state.phase = "transition";
      renderSession();
      startCountdown(part.seconds || 10, nextStepUnit);
    } else {
      setFlashNotice(`🔄 Next: ${part.name} · Round ${state.roundIndex}/${step.rounds}`);
      startWork(part);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  if (state.roundIndex < step.rounds) {
    state.roundIndex += 1;
    state.setIndex = state.roundIndex; // CRITICAL: move setIndex to 2, 3!
    state.supersetPartIndex = 0;
    const restTime = step.restSeconds || store.settings.supersetRest || 60;
    setFlashNotice(`⚡ Round ${state.roundIndex - 1} Complete! Rest ${restTime}s before Round ${state.roundIndex}`);
    startRest(restTime);
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  // Final round of superset completed: rest between activities!
  if (state.stepIndex < currentWorkout().steps.length - 1) {
    const restTime = step.restSeconds || store.settings.supersetRest || 60;
    setFlashNotice(`🏆 ${step.name} Complete! Rest before next exercise.`);
    startRestBetweenSteps(restTime);
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  nextStep();
}

function startRest(seconds) {
  state.restingBetweenSteps = false;
  state.phase = "rest";
  renderSession();
  startCountdown(seconds, () => {
    notifyDone();
    startWork(currentPlayable() || currentStep());
  });
}

function startRestBetweenSteps(seconds) {
  stopTimer();
  state.phase = "rest";
  state.restingBetweenSteps = true;
  renderSession();
  startCountdown(seconds, () => {
    notifyDone();
    state.restingBetweenSteps = false;
    nextStep();
  });
}

function startInterval(step) {
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
  updatePauseButtons();
  playStartChime();

  state.timer = setInterval(() => {
    state.remaining -= 1;
    updateTimerDisplay();

    // 5, 4, 3, 2, 1 Countdown Warning Beeps
    if (state.remaining <= 5 && state.remaining >= 1) {
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
  updatePauseButtons();
}

function togglePause() {
  if (state.running) {
    stopTimer();
  } else {
    if (!state.remaining || state.remaining <= 0) {
      state.remaining = state.totalTimerSeconds > 0 ? state.totalTimerSeconds : getCurrentStepDefaultDuration();
      state.totalTimerSeconds = state.remaining;
    }

    if (!state.timerDone) {
      state.timerDone = getTimerDoneCallback();
    }

    state.running = true;
    updateTimerDisplay();
    updatePauseButtons();
    playStartChime();

    state.timer = setInterval(() => {
      state.remaining -= 1;
      updateTimerDisplay();
      if (state.remaining <= 5 && state.remaining >= 1) {
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
  updatePauseButtons();
}

function updatePauseButtons() {
  const pauseButtons = els.sessionPanel.querySelectorAll("[data-action='pause']");
  pauseButtons.forEach((btn) => {
    btn.innerHTML = state.running ? "⏸ Pause" : "▶ Resume";
    btn.classList.toggle("timer-btn-paused", !state.running);
  });
}

function getCurrentStepDefaultDuration() {
  const step = currentStep();
  if (!step) return 60;
  if (state.restingBetweenSteps) {
    return step.restSeconds || store.settings.defaultRest || 60;
  }
  if (state.phase === "rest") {
    if (step.type === "superset") return step.restSeconds || store.settings.supersetRest || 60;
    const ex = currentPlayable() || step;
    return ex.restSeconds || store.settings.defaultRest || 45;
  }
  if (step.type === "exercise") return step.workSeconds || 45;
  if (step.type === "superset") {
    const part = currentPlayable();
    if (part.type === "transition") return part.seconds || 10;
    return part.workSeconds || 45;
  }
  if (step.type === "intervals") {
    return state.intervalPhase === "hard" ? (store.settings.vo2Hard || 60) : (store.settings.easyRecoverySeconds || 75);
  }
  if (step.type === "timed") return step.seconds || 300;
  if (step.type === "equipment") return store.settings.equipChangeSeconds || step.seconds || 90;
  return 60;
}

function getTimerDoneCallback() {
  const step = currentStep();
  if (!step) return finishSession;

  if (state.restingBetweenSteps) {
    return () => {
      notifyDone();
      state.restingBetweenSteps = false;
      nextStep();
    };
  }

  if (state.phase === "rest") {
    return () => {
      notifyDone();
      startWork(currentPlayable() || currentStep());
    };
  }

  if (step.type === "exercise") {
    return () => {
      notifyDone();
      completeSet(step);
    };
  }

  if (step.type === "superset") {
    const part = currentPlayable();
    if (part.type === "transition") {
      return nextStepUnit;
    }
    return () => {
      notifyDone();
      completeSet(part);
    };
  }

  if (step.type === "intervals") {
    return () => {
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
    };
  }

  return nextStepUnit;
}

function adjustTimer(delta) {
  state.remaining = Math.max(1, (state.remaining || 0) + delta);
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
    const radius = 88;
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

  const step = currentStep();
  const currentItem = currentPlayable() || step;
  const itemName = currentItem?.name || step?.name || "This Exercise";
  const isResting = state.phase === "rest" || state.restingBetweenSteps;

  if (els.saveTimerAllSetsBtn) {
    if (isResting) {
      els.saveTimerAllSetsBtn.innerHTML = `💾 Save as Default Rest (${itemName})`;
    } else {
      els.saveTimerAllSetsBtn.innerHTML = `💾 Save for All Sets of ${itemName}`;
    }
  }

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

function applyTimerPad(applyToAll = false) {
  const total = Math.max(5, state.padSelectedSeconds || 60);
  state.remaining = total;
  state.totalTimerSeconds = total;
  updateTimerDisplay();

  if (applyToAll && state.selectedDay) {
    const workouts = store.workouts;
    const workout = workouts[state.selectedDay];
    if (workout && workout.steps && workout.steps[state.stepIndex]) {
      const step = workout.steps[state.stepIndex];
      const isResting = state.phase === "rest" || state.restingBetweenSteps;

      if (step.type === "exercise") {
        if (isResting) {
          step.restSeconds = total;
        } else {
          step.workSeconds = total;
        }
      } else if (step.type === "superset") {
        if (isResting) {
          step.restSeconds = total;
        } else if (step.parts && step.parts[state.supersetPartIndex]) {
          step.parts[state.supersetPartIndex].workSeconds = total;
        }
      } else if (step.type === "intervals") {
        if (state.intervalPhase === "hard") {
          step.hardSeconds = total;
        } else {
          store.settings = { ...store.settings, easyRecoverySeconds: total };
        }
      } else if (step.type === "equipment") {
        step.seconds = total;
      } else if (step.type === "timed") {
        step.seconds = total;
      }

      workouts[state.selectedDay] = workout;
      store.workouts = workouts;
    }
  }

  if (typeof els.editTimerDialog.close === "function") {
    els.editTimerDialog.close();
  }
  if (!state.running) {
    togglePause();
  } else {
    playStartChime();
  }
}

function prevStepUnit() {
  stopTimer();
  if (state.restingBetweenSteps) {
    state.restingBetweenSteps = false;
    state.phase = "work";
    renderSession();
    startWork(currentPlayable() || currentStep());
    return;
  }

  const step = currentStep();
  if (!step) return;

  if (step.type === "exercise") {
    if (state.phase === "rest") {
      state.phase = "work";
      renderSession();
      startCountdown(step.workSeconds || 45, () => {
        notifyDone();
        completeSet(step);
      });
      return;
    } else if (state.setIndex > 1) {
      state.setIndex -= 1;
      state.phase = "work";
      state.sessionRecords = state.sessionRecords.filter((r) => !(r.exerciseId === step.id && r.set >= state.setIndex));
      renderSession();
      startCountdown(step.workSeconds || 45, () => {
        notifyDone();
        completeSet(step);
      });
      return;
    }
  } else if (step.type === "superset") {
    if (state.phase === "rest") {
      state.phase = "work";
      state.setIndex = state.roundIndex || 1;
      state.supersetPartIndex = step.parts.length - 1;
      renderSession();
      startWork(currentPlayable() || currentStep());
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    } else if (state.supersetPartIndex > 0) {
      state.supersetPartIndex -= 1;
      state.phase = "work";
      state.setIndex = state.roundIndex || 1;
      renderSession();
      startWork(currentPlayable() || currentStep());
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    } else if (state.roundIndex > 1) {
      state.roundIndex -= 1;
      state.setIndex = state.roundIndex;
      state.supersetPartIndex = step.parts.length - 1;
      state.phase = "work";
      renderSession();
      startWork(currentPlayable() || currentStep());
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
  } else if (step.type === "intervals") {
    if (state.intervalPhase === "easy") {
      state.intervalPhase = "hard";
      state.phase = "work";
      renderSession();
      startCountdown(store.settings.vo2Hard || step.hardSeconds || 60, () => {
        notifyDone();
        state.intervalPhase = "easy";
        renderSession();
        const easySec = store.settings.easyRecoverySeconds || 75;
        startCountdown(easySec, () => {
          notifyDone();
          advanceIntervalRound(step);
        });
      });
      return;
    } else if (state.roundIndex > 1) {
      state.roundIndex -= 1;
      state.intervalPhase = "hard";
      state.phase = "work";
      renderSession();
      startCountdown(store.settings.vo2Hard || step.hardSeconds || 60, () => {
        notifyDone();
        state.intervalPhase = "easy";
        renderSession();
        const easySec = store.settings.easyRecoverySeconds || 75;
        startCountdown(easySec, () => {
          notifyDone();
          advanceIntervalRound(step);
        });
      });
      return;
    }
  }

  // Jump to previous step in the workout if available
  if (state.stepIndex > 0) {
    state.stepIndex -= 1;
    const prevStepObj = currentWorkout().steps[state.stepIndex];
    state.setIndex = prevStepObj.sets || 1;
    state.roundIndex = prevStepObj.rounds || 1;
    state.supersetPartIndex = (prevStepObj.parts ? prevStepObj.parts.length - 1 : 0);
    state.phase = "work";
    state.remaining = 0;
    window.scrollTo({ top: 0, behavior: "smooth" });
    startCurrentStepAuto();
  }
}

function nextStepUnit() {
  stopTimer();
  if (state.restingBetweenSteps) {
    state.restingBetweenSteps = false;
    nextStep();
    return;
  }

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
        state.setIndex = state.roundIndex;
        state.supersetPartIndex = 0;
        const restTime = step.restSeconds || store.settings.supersetRest || 60;
        setFlashNotice(`⚡ Round ${state.roundIndex - 1} Complete! Rest ${restTime}s before Round ${state.roundIndex}`);
        startRest(restTime);
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      } else {
        if (state.stepIndex < currentWorkout().steps.length - 1) {
          const restTime = step.restSeconds || store.settings.supersetRest || 60;
          setFlashNotice(`🏆 ${step.name} Complete! Rest before next exercise.`);
          startRestBetweenSteps(restTime);
        } else {
          nextStep();
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
    }
    state.setIndex = state.roundIndex || 1;
    const part = currentPlayable();
    if (part.type === "transition") {
      state.phase = "transition";
      renderSession();
      startCountdown(part.seconds || 10, nextStepUnit);
    } else {
      setFlashNotice(`🔄 Next: ${part.name} · Round ${state.roundIndex}/${step.rounds}`);
      startWork(part);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  nextStep();
}

function nextStep() {
  stopTimer();
  state.restingBetweenSteps = false;
  state.stepIndex += 1;
  state.setIndex = 1;
  state.roundIndex = 1;
  state.supersetPartIndex = 0;
  state.remaining = 0;
  window.scrollTo({ top: 0, behavior: "smooth" });
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

  if (state.selectedDay) {
    const workout = currentWorkout();
    const history = store.history;
    const recordsToSave = (state.sessionRecords && state.sessionRecords.length > 0)
      ? [...state.sessionRecords]
      : [{
          date: new Date().toISOString(),
          day: workout ? workout.label : state.selectedDay,
          exerciseName: workout ? workout.title : "Workout Session",
          set: 1,
          durationSeconds: elapsedSeconds()
        }];

    history.unshift({
      id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
      date: new Date().toISOString(),
      day: workout ? workout.label : state.selectedDay,
      title: workout ? workout.title : "Workout Session",
      durationSeconds: Math.max(1, elapsedSeconds()),
      records: recordsToSave
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
    if (els.workoutSelectionWrapper) els.workoutSelectionWrapper.classList.remove("hidden");
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
  if (!history || !history.length) {
    els.historyList.innerHTML = `
      <div class="history-card" style="text-align: center; padding: 24px 16px;">
        <p style="font-size: 1.1rem; font-weight: 800; color: var(--ink);">No saved workouts yet</p>
        <p style="color: var(--muted); font-size: 0.88rem; margin-top: 6px;">Start any workout and tap complete/exit to record your session here automatically.</p>
      </div>
    `;
    return;
  }

  els.historyList.innerHTML = history.map((session, sIdx) => {
    const formattedDate = new Date(session.date).toLocaleDateString(undefined, {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });

    const records = session.records || [];
    const grouped = {};
    records.forEach((r) => {
      const name = r.exerciseName || "Exercise";
      if (!grouped[name]) grouped[name] = [];
      grouped[name].push(r);
    });

    const exerciseDetailRows = Object.entries(grouped).map(([exName, sets]) => {
      const setRowsHtml = sets.map((s) => {
        const rIdx = records.indexOf(s);
        return `
          <div class="history-set-edit-row">
            <span class="history-set-label">Set ${s.set}:</span>
            <div class="history-inputs-wrap">
              <input type="number" step="0.5" min="0" max="300" class="history-edit-input wt" value="${s.weight ?? ''}" placeholder="0" 
                onchange="updatePastHistoryRecord(${sIdx}, ${rIdx}, 'weight', this.value)" title="Change weight retroactively">
              <span>kg ×</span>
              ${s.left !== undefined ? `
                <input type="number" min="0" max="180" class="history-edit-input rep" value="${s.left ?? ''}" placeholder="L" 
                  onchange="updatePastHistoryRecord(${sIdx}, ${rIdx}, 'left', this.value)" title="Change Left reps">
                <span>L /</span>
                <input type="number" min="0" max="180" class="history-edit-input rep" value="${s.right ?? ''}" placeholder="R" 
                  onchange="updatePastHistoryRecord(${sIdx}, ${rIdx}, 'right', this.value)" title="Change Right reps">
                <span>R</span>
              ` : `
                <input type="number" min="0" max="180" class="history-edit-input rep" value="${s.reps ?? ''}" placeholder="0" 
                  onchange="updatePastHistoryRecord(${sIdx}, ${rIdx}, 'reps', this.value)" title="Change reps retroactively">
                <span>reps</span>
              `}
            </div>
          </div>
        `;
      }).join("");

      return `
        <div style="margin-bottom: 8px;">
          <strong style="color: var(--ink); font-size: 0.85rem; display:block; margin-bottom:4px;">${exName}</strong>
          ${setRowsHtml}
        </div>
      `;
    }).join("");

    return `
      <article class="history-card">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px;">
          <div>
            <span class="badge badge-work" style="margin-bottom: 4px;">${session.day || "Workout"}</span>
            <h3 style="margin: 2px 0 4px; font-size: 1.15rem;">${session.title || "Workout Session"}</h3>
            <p style="color: var(--muted); font-size: 0.8rem; font-weight: 700;">📅 ${formattedDate} · ⏱ ${formatDuration(session.durationSeconds || 0)} · ${records.length} logged sets</p>
          </div>
          <button class="danger-link" onclick="deleteHistoryEntry(${sIdx})" type="button" title="Delete entry" style="font-size: 0.85rem; padding: 4px;">🗑</button>
        </div>

        ${records.length > 0 ? `
          <details class="history-detail-drawer" style="margin-top: 10px;">
            <summary style="cursor: pointer; font-size: 0.82rem; font-weight: 800; color: var(--accent); display:flex; justify-content:space-between; align-items:center;">
              <span>📊 View & Edit Logged Sets (${Object.keys(grouped).length} Exercises)</span>
              <span class="drawer-icon">▾</span>
            </summary>
            <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--line); border-radius: 8px; padding: 10px 12px; margin-top: 8px;">
              ${exerciseDetailRows}
            </div>
          </details>
        ` : ""}
      </article>
    `;
  }).join("");
}

window.updatePastHistoryRecord = function (sIdx, rIdx, field, val) {
  const history = store.history;
  if (history[sIdx] && history[sIdx].records && history[sIdx].records[rIdx]) {
    const parsed = parseFloat(val);
    history[sIdx].records[rIdx][field] = isNaN(parsed) ? 0 : parsed;
    store.history = history;
  }
};

window.deleteHistoryEntry = function (index) {
  if (!confirm("Delete this workout log?")) return;
  const history = store.history;
  history.splice(index, 1);
  store.history = history;
  renderHistory();
};

function summarizeSession(session) {
  const names = [...new Set((session.records || []).map((r) => r.exerciseName))];
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
  renderProfile();
}

function renderProfile() {
  const prof = store.profile;
  if (els.profileWeightInput && prof.weight) els.profileWeightInput.value = prof.weight;
  if (els.profileHeightInput && prof.height) els.profileHeightInput.value = prof.height;
  renderWeightLogs();
}

function saveProfile() {
  const prof = store.profile;
  const w = parseFloat(els.profileWeightInput?.value);
  const h = parseFloat(els.profileHeightInput?.value);
  if (!isNaN(w) && w > 0) prof.weight = w;
  if (!isNaN(h) && h > 0) prof.height = h;
  store.profile = prof;
}

function logWeightCheckin() {
  const w = parseFloat(els.profileWeightInput?.value);
  if (!w || isNaN(w) || w <= 0) {
    alert("Please enter a valid bodyweight in kg first.");
    return;
  }
  const prof = store.profile;
  prof.weight = w;
  const h = parseFloat(els.profileHeightInput?.value);
  if (!isNaN(h) && h > 0) prof.height = h;
  if (!prof.logs) prof.logs = [];
  prof.logs.unshift({
    date: new Date().toISOString(),
    weight: w
  });
  prof.logs = prof.logs.slice(0, 50);
  store.profile = prof;
  renderWeightLogs();
  alert(`Recorded check-in: ${w} kg`);
}

function renderWeightLogs() {
  if (!els.weightLogHistory) return;
  const prof = store.profile;
  const logs = prof.logs || [];
  if (!logs.length) {
    els.weightLogHistory.innerHTML = `<span style="color: var(--muted); font-size: 0.82rem;">No weigh-ins logged yet. Enter your weight and tap Log.</span>`;
    return;
  }
  els.weightLogHistory.innerHTML = logs.slice(0, 10).map((log) => `
    <span class="weight-log-chip">
      <span>${log.weight} kg</span> · ${new Date(log.date).toLocaleDateString(undefined, { month: "short", day: "numeric" })}
    </span>
  `).join("");
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
    settings: store.settings,
    profile: store.profile,
    customWorkouts: store.workouts
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
      if (data.profile && typeof data.profile === "object") {
        store.profile = data.profile;
      }
      if (data.customWorkouts && typeof data.customWorkouts === "object") {
        store.workouts = data.customWorkouts;
      }
      renderHistory();
      renderSettings();
      renderSelectedDayCard(state.focusedDay || "monday");
      alert("Workout data, custom routine, & profile imported successfully!");
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
