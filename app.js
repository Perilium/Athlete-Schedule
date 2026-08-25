"use strict";

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
      superset("Superset A", 3, 60, [
        exercise("single-arm-db-row", "Single-Arm DB Row", "10 kg DB", "3 x 10-15 each arm", 3, 60, 0, ["Controlled stretch.", "Pull elbow toward hip."], "arm"),
        transition(10),
        exercise("push-ups", "Push-Ups", "Bodyweight", "3 x 10-20", 3, 40, 0, ["Rigid body.", "Comfortable full range."])
      ]),
      superset("Superset B", 3, 50, [
        exercise("lateral-raise", "Lateral Raise", "Light resistance", "3 x 12-20", 3, 40, 0, ["10 kg may be too heavy.", "Do not encourage swinging."]),
        transition(10),
        exercise("incline-db-curl", "Incline DB Curl", "2 x 10 kg DB", "3 x 10-15", 3, 40, 0, ["Arms slightly behind torso.", "Elbows controlled."])
      ]),
      superset("Superset C", 3, 45, [
        exercise("overhead-triceps-extension", "Overhead Triceps Extension", "10 kg DB", "3 x 10-15", 3, 40, 0, []),
        transition(10),
        exercise("reverse-crunch", "Reverse Crunch", "Bodyweight", "3 x 10-15", 3, 35, 0, ["Curl pelvis toward ribs.", "Don't simply swing legs."])
      ]),
      superset("Superset D", 3, 45, [
        exercise("db-woodchopper", "DB Woodchopper", "10 kg DB", "3 x 8-12 each side", 3, 55, 0, ["Controlled rotation.", "Do not violently twist through lower back."], "side"),
        transition(10),
        exercise("front-plank", "Front Plank", "Bodyweight", "2 x 30-60 sec", 2, 45, 0, ["Brace trunk.", "Neutral position.", "Once 60 sec is easy, increase difficulty rather than endlessly increasing duration."])
      ])
    ]
  }
};

const RECOVERY = [
  ["Wednesday", "Full rest or 30-45 min Zone 2 at conversational intensity."],
  ["Saturday", "30-60 min Zone 2: brisk walk, hike, easy cycle, swim, or easy jog."],
  ["Sunday", "Full rest. Normal walking and activity is fine."]
];

const DEFAULT_SETTINGS = {
  easyRecoverySeconds: 75,
  vibration: true,
  wakeLock: true
};

const state = {
  selectedDay: null,
  mode: "guided",
  stepIndex: 0,
  setIndex: 1,
  roundIndex: 1,
  supersetPartIndex: 0,
  phase: "idle",
  intervalPhase: "hard",
  timer: null,
  timerDone: null,
  remaining: 0,
  running: false,
  startedAt: null,
  sessionRecords: [],
  wakeLock: null,
  deferredPrompt: null
};

const els = {};
const store = {
  get history() {
    return JSON.parse(localStorage.getItem("hybrid52.history") || "[]");
  },
  set history(value) {
    localStorage.setItem("hybrid52.history", JSON.stringify(value));
  },
  get settings() {
    return { ...DEFAULT_SETTINGS, ...JSON.parse(localStorage.getItem("hybrid52.settings") || "{}") };
  },
  set settings(value) {
    localStorage.setItem("hybrid52.settings", JSON.stringify(value));
  }
};

function exercise(id, name, equipmentLabel, target, sets, workSeconds, restSeconds, cues = [], unilateral = null) {
  return { type: "exercise", id, name, equipment: equipmentLabel, target, sets, workSeconds, restSeconds, cues, unilateral };
}

function timed(id, name, equipmentLabel, seconds, cues = []) {
  return { type: "timed", id, name, equipment: equipmentLabel, seconds, cues };
}

function equipment(from, to, seconds) {
  return { type: "equipment", id: `equipment-${from}-${to}`.toLowerCase().replace(/[^a-z0-9]+/g, "-"), from, to, seconds };
}

function superset(name, rounds, restSeconds, parts) {
  return { type: "superset", id: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"), name, rounds, restSeconds, parts };
}

function transition(seconds) {
  return { type: "transition", id: `transition-${seconds}`, seconds };
}

function intervals(id, name, rounds, hardSeconds, easySettingKey) {
  return { type: "intervals", id, name, rounds, hardSeconds, easySettingKey };
}

document.addEventListener("DOMContentLoaded", init);

function init() {
  cacheEls();
  renderDays();
  renderRecovery();
  bindGlobalEvents();
  renderHistory();
  renderSettings();
  registerServiceWorker();
}

function cacheEls() {
  [
    "dayGrid", "recoveryInfo", "sessionPanel", "historyList", "clearHistoryBtn",
    "easyRecoveryInput", "vibrationInput", "wakeLockInput", "installBtn"
  ].forEach((id) => els[id] = document.getElementById(id));
}

function bindGlobalEvents() {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => switchScreen(tab.dataset.screen));
  });
  els.clearHistoryBtn.addEventListener("click", clearHistory);
  els.easyRecoveryInput.addEventListener("change", saveSettings);
  els.vibrationInput.addEventListener("change", saveSettings);
  els.wakeLockInput.addEventListener("change", saveSettings);
  els.installBtn.addEventListener("click", installApp);
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    state.deferredPrompt = event;
    els.installBtn.classList.remove("hidden");
  });
}

function renderDays() {
  els.dayGrid.innerHTML = Object.entries(WORKOUTS).map(([key, workout]) => `
    <button class="day-card" type="button" data-day="${key}">
      <strong>${workout.label}</strong>
      <span>${workout.title}</span>
      <span>${workout.duration}</span>
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
  document.getElementById(`${name}Screen`).classList.add("active-screen");
  if (name === "history") renderHistory();
}

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
  requestWakeLock();
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
  if (step.type !== "superset") return step;
  return step.parts[state.supersetPartIndex];
}

function renderSession() {
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
      <span>${state.mode === "guided" ? "Guided" : "Flow"} Mode</span>
    </div>
    <div class="progress-bar"><div class="progress-fill" style="width:${progress}%"></div></div>
    ${extra}
  `;
}

function renderExercise(ex, progress, total, supersetLabel) {
  const last = getLastExercise(ex.id);
  els.sessionPanel.innerHTML = `
    ${statusMarkup(progress, total, supersetLabel ? `<span class="badge">${supersetLabel}</span>` : "")}
    <h2 class="exercise-name">${ex.name}</h2>
    <p class="equipment">${ex.equipment}</p>
    <div class="target"><strong>Set ${state.setIndex} of ${ex.sets}</strong><br>Target: ${ex.target}</div>
    ${timerMarkup("WORK", ex.workSeconds)}
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
  els.sessionPanel.innerHTML = `
    ${statusMarkup(progress, total, `<span class="badge">${step.name} · Round ${state.roundIndex}/${step.rounds}</span>`)}
    <h2 class="exercise-name">Transition</h2>
    <p class="equipment">Move to the next exercise.</p>
    ${activeTimerMarkup("TRANSITION", part.seconds)}
    <div class="session-actions">
      <button class="primary-btn" data-action="start-timer" type="button">Start</button>
      <button class="secondary-btn" data-action="skip" type="button">Skip</button>
    </div>
  `;
  bindSessionButtons(part);
  if (state.mode === "flow" && state.phase !== "timer") startCountdown(part.seconds, nextStepUnit);
}

function renderTimed(step, progress, total) {
  els.sessionPanel.innerHTML = `
    ${statusMarkup(progress, total)}
    <h2 class="exercise-name">${step.name}</h2>
    <p class="equipment">${step.equipment}</p>
    ${activeTimerMarkup("WORK", step.seconds)}
    ${cueMarkup(step.cues)}
    <div class="session-actions">
      <button class="primary-btn" data-action="start-timer" type="button">Start</button>
      <button class="secondary-btn" data-action="skip" type="button">Skip</button>
    </div>
  `;
  bindSessionButtons(step);
}

function renderEquipment(step, progress, total) {
  els.sessionPanel.innerHTML = `
    ${statusMarkup(progress, total)}
    <span class="badge">Equipment Change</span>
    <h2 class="exercise-name">Convert Gear</h2>
    <p class="equipment">${step.from} → ${step.to}</p>
    ${activeTimerMarkup("READY TIMER", step.seconds)}
    <div class="session-actions">
      <button class="primary-btn" data-action="ready-early" type="button">Ready Early</button>
      <button class="secondary-btn" data-action="start-timer" type="button">Start 90 sec</button>
    </div>
  `;
  bindSessionButtons(step);
}

function renderIntervals(step, progress, total) {
  const label = state.intervalPhase === "easy" ? "EASY" : "HARD";
  const seconds = state.intervalPhase === "easy" ? store.settings.easyRecoverySeconds : step.hardSeconds;
  els.sessionPanel.innerHTML = `
    ${statusMarkup(progress, total, `<span class="badge">Round ${state.roundIndex}/${step.rounds}</span>`)}
    <h2 class="exercise-name">${step.name}</h2>
    <p class="equipment">Hard effort 8-9/10. Not an uncontrolled sprint.</p>
    ${activeTimerMarkup(label, seconds)}
    <div class="session-actions">
      <button class="primary-btn" data-action="start-interval" type="button">${state.running ? "Running" : "Start"}</button>
      <button class="secondary-btn" data-action="skip" type="button">Skip</button>
    </div>
  `;
  bindSessionButtons(step);
}

function timerMarkup(label, seconds) {
  return `
    <div class="timer">
      <div class="timer-label">${label}</div>
      <div class="timer-time">${formatTime(seconds)}</div>
    </div>
  `;
}

function activeTimerMarkup(label, seconds) {
  const shown = state.remaining || seconds;
  return `
    <div class="timer">
      <div class="timer-label">${label}</div>
      <div class="timer-time" id="timerTime">${formatTime(shown)}</div>
    </div>
    <div class="timer-controls">
      <button class="timer-btn" data-action="pause" type="button">${state.running ? "Pause" : "Resume"}</button>
      <button class="timer-btn" data-action="minus" type="button">-15 sec</button>
      <button class="timer-btn" data-action="plus" type="button">+15 sec</button>
      <button class="timer-btn" data-action="skip" type="button">Skip</button>
    </div>
  `;
}

function repInputs(ex) {
  if (ex.unilateral) {
    const labels = ex.unilateral === "arm" ? ["Left", "Right"] : ex.unilateral === "leg" ? ["Left Leg", "Right Leg"] : ["Left Side", "Right Side"];
    return `<div class="rep-grid">${labels.map((label, index) => repField(index === 0 ? "left" : "right", label)).join("")}</div>`;
  }
  return `<div class="rep-grid">${repField("reps", "Actual reps")}</div>`;
}

function repField(id, label) {
  return `<div class="rep-field"><label for="${id}">${label}</label><input id="${id}" inputmode="numeric" type="number" min="0" max="99"></div>`;
}

function actionMarkup(ex) {
  return `
    <div class="session-actions">
      <button class="primary-btn" data-action="complete-set" type="button">Complete Set</button>
      <button class="secondary-btn" data-action="start-work" type="button">${state.mode === "guided" ? "Start Work Timer" : "Run Flow"}</button>
      <button class="ghost-btn" data-action="toggle-mode" type="button">Switch to ${state.mode === "guided" ? "Flow" : "Guided"}</button>
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
  const progression = isReadyToProgress(ex, last) ? `<div class="ready">READY TO PROGRESS</div>` : "";
  return `
    <div class="last-session">
      <strong>Last session</strong><br>
      ${formatRecordSummary(last)}
      ${progression}
    </div>
  `;
}

function bindSessionButtons(context) {
  els.sessionPanel.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", () => handleAction(button.dataset.action, context));
  });
}

function handleAction(action, context) {
  if (action === "complete-set") completeSet(context);
  if (action === "start-work") startWork(context);
  if (action === "toggle-mode") toggleMode();
  if (action === "end-session") finishSession();
  if (action === "ready-early") nextStepUnit();
  if (action === "start-timer") startCountdown(context.seconds || context.workSeconds || 45, nextStepUnit);
  if (action === "start-interval") startInterval(context);
  if (action === "pause") togglePause();
  if (action === "plus") adjustTimer(15);
  if (action === "minus") adjustTimer(-15);
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
    ${activeTimerMarkup("WORK", ex.workSeconds)}
    <div class="session-actions">
      <button class="primary-btn" data-action="complete-set" type="button">Complete Set</button>
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
    startRest(ex.restSeconds || 45);
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
    startRest(step.restSeconds);
    return;
  }
  nextStep();
}

function startRest(seconds) {
  state.phase = "rest";
  els.sessionPanel.innerHTML = `
    ${statusMarkup(Math.round((state.stepIndex / currentWorkout().steps.length) * 100), currentWorkout().steps.length)}
    <h2 class="exercise-name">Rest</h2>
    <p class="equipment">Next set will be ready when this finishes.</p>
    ${activeTimerMarkup("REST", seconds)}
  `;
  bindSessionButtons({});
  startCountdown(seconds, () => {
    notifyDone();
    renderSession();
    if (state.mode === "flow") {
      const next = currentPlayable();
      if (next.type === "exercise") startCountdown(next.workSeconds, () => completeSet(next, true));
    }
  });
}

function startInterval(step) {
  const seconds = state.intervalPhase === "easy" ? store.settings.easyRecoverySeconds : step.hardSeconds;
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

function startCountdown(seconds, onDone) {
  stopTimer();
  state.remaining = seconds;
  state.running = true;
  state.phase = "timer";
  state.timerDone = onDone;
  updateTimerDisplay();
  state.timer = setInterval(() => {
    state.remaining -= 1;
    updateTimerDisplay();
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
    state.timer = setInterval(() => {
      state.remaining -= 1;
      updateTimerDisplay();
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
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const el = document.getElementById("timerTime");
  if (el) el.textContent = formatTime(state.remaining);
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
    store.history = history.slice(0, 100);
  }
  els.sessionPanel.innerHTML = `
    <span class="badge">Complete</span>
    <h2 class="exercise-name">Session Saved</h2>
    <p class="equipment">Nice. Your reps are saved on this phone for next time.</p>
    <div class="session-actions">
      <button class="primary-btn" data-action="new-session" type="button">Choose Workout</button>
      <button class="secondary-btn" data-action="history" type="button">View History</button>
    </div>
  `;
  els.sessionPanel.querySelector("[data-action='new-session']").addEventListener("click", () => els.sessionPanel.classList.add("hidden"));
  els.sessionPanel.querySelector("[data-action='history']").addEventListener("click", () => switchScreen("history"));
  renderHistory();
}

function elapsedSeconds() {
  return state.startedAt ? Math.round((Date.now() - state.startedAt) / 1000) : 0;
}

function renderHistory() {
  const history = store.history;
  if (!history.length) {
    els.historyList.innerHTML = `<div class="history-card"><p>No saved workouts yet. Finish a guided session and it will appear here.</p></div>`;
    return;
  }
  els.historyList.innerHTML = history.map((session) => `
    <article class="history-card">
      <h3>${session.day}: ${session.title}</h3>
      <p>${new Date(session.date).toLocaleString()} · ${formatDuration(session.durationSeconds)}</p>
      <p>${session.records.length} recorded sets</p>
      <p>${summarizeSession(session)}</p>
    </article>
  `).join("");
}

function summarizeSession(session) {
  const names = [...new Set(session.records.map((record) => record.exerciseName))];
  return names.slice(0, 4).join(", ") + (names.length > 4 ? ` + ${names.length - 4} more` : "");
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
    return record.reps ?? "-";
  }).join(" / ");
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

function renderSettings() {
  const settings = store.settings;
  els.easyRecoveryInput.value = settings.easyRecoverySeconds;
  els.vibrationInput.checked = settings.vibration;
  els.wakeLockInput.checked = settings.wakeLock;
}

function saveSettings() {
  store.settings = {
    easyRecoverySeconds: clamp(Number(els.easyRecoveryInput.value) || 75, 60, 90),
    vibration: els.vibrationInput.checked,
    wakeLock: els.wakeLockInput.checked
  };
  renderSettings();
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function notifyDone() {
  beep();
  if (store.settings.vibration && navigator.vibrate) navigator.vibrate([180, 80, 180]);
}

function beep() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  const ctx = new AudioContext();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.frequency.value = 880;
  gain.gain.value = 0.08;
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  setTimeout(() => {
    osc.stop();
    ctx.close();
  }, 170);
}

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
  } catch (_) {
    // Wake Lock support varies by browser and battery mode.
  }
  state.wakeLock = null;
}

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

async function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  try {
    await navigator.serviceWorker.register("./service-worker.js");
  } catch (_) {
    // Local file previews do not support service workers; GitHub Pages will.
  }
}

async function installApp() {
  if (!state.deferredPrompt) return;
  state.deferredPrompt.prompt();
  await state.deferredPrompt.userChoice;
  state.deferredPrompt = null;
  els.installBtn.classList.add("hidden");
}
