# Hybrid 5.2 Workout Coach — Master Program Specification

## Project Overview
- **App Name**: Hybrid 5.2 Workout Coach
- **Repository**: [https://github.com/Perilium/Athlete-Schedule](https://github.com/Perilium/Athlete-Schedule)
- **Live PWA URL**: [https://perilium.github.io/Athlete-Schedule/](https://perilium.github.io/Athlete-Schedule/)
- **Platform**: Mobile-first Android Progressive Web App (PWA), standalone installable, offline-capable.

---

## Equipment Profile
- **Primary Equipment**: 
  - 20 kg Barbell
  - 2 × 10 kg Dumbbells (Dumbbells convert into the barbell)
  - Incline Bench / Flat Bench / Sturdy Step / Floor Mat
  - Light Resistance Band / Cable
- **Equipment Rule**: Barbell-to-dumbbell conversions take time. Workouts are structured to minimize conversions with dedicated ~90s equipment-change screens (with "Ready Early" button).

---

## Core UX & Timing Rules
1. **Pacing & Tempo**: Controlled 2–3s lowering (eccentric) on resistance movements. Lift with intent; 1–3 reps in reserve on working sets.
2. **Unilateral Tracking**: Movements involving one arm or leg record both sides separately (`Left` / `Right` reps or seconds).
3. **Continuous Automatic Timer Flow**:
   - Work Timer (default ~45s) counts down with audio chimes.
   - On completion (or manual log), automatically transitions to the Rest Timer.
   - 3-2-1 countdown ticks and finish chime.
   - Automatically loads and starts the next set or exercise.
   - User can pause, edit duration (+15s / -15s / custom pad), or skip at any moment.
4. **Progression Tracking**: Automatically saves session records to `localStorage` (date, duration, exercise, set, reps/seconds, weight). References last session's performance directly on screen.
5. **No Side Planks Rule**: Side planks are strictly forbidden. The program uses Dead Bugs, Weighted Crunches, Reverse Crunches, Front Planks, and DB Woodchoppers.

---

## Weekly Schedule Breakdown

### MONDAY: Upper + Secondary Legs + Abs (~40–45 min)
1. **Barbell Bent-Over Row** (20 kg Barbell)
   - 4 × 8–15 | Work: 45s | Rest: 85s
   - *Cues*: Hinge at hips, neutral spine, pull to lower ribs/navel, controlled lowering.
2. **Barbell Floor Press** (20 kg Barbell)
   - 4 × 8–15 | Work: 45s | Rest: 85s
   - *Cues*: Controlled descent, upper arms gently touch floor, drive upward.
3. **Equipment Change**: Barbell ➔ 2 × 10 kg Dumbbells (90s, Ready Early allowed).
4. **Superset A** (3 rounds, 60s rest after each round):
   - **Bulgarian Split Squat**: 3 × 8–12 each leg (DBs, ~70s work total — Left leg first ~35s, then Right leg ~35s)
   - *Transition*: 10s
   - **Arnold Press**: 3 × 8–12 (2 × 10 kg DB, ~40s work)
5. **Superset B** (3 rounds, 50s rest after each round):
   - **Hammer Curl**: 3 × 10–15 (2 × 10 kg DB, ~40s work)
   - *Transition*: 8s–10s
   - **Rear-Delt Fly**: 3 × 12–20 (Appropriate resistance, ~40s work)
6. **Abs Superset** (3 rounds, 40s rest after each round):
   - **Weighted Crunch**: 3 × 10–15 (DB, ~35s work)
   - *Transition*: 8s–10s
   - **Dead Bug**: 2 × 8–12 each side (Bodyweight, ~45s work — Left side first, then Right side)

---

### TUESDAY: VO2 Max + Mobility (~25–30 min)
1. **Warm-Up & Mobility**: ~5 min (300s)
   - Easy walk/jog, World's Greatest Stretch, knee-to-wall ankle mobility, leg swings, 2–3 short accelerations.
2. **VO2 Intervals** (8 rounds):
   - **HARD**: 60s (8–9/10 exertion)
   - **EASY**: 75s default (clamp range: 60–90s)
3. **Cooldown**: ~5 min (300s) easy walking and relaxed breathing.

---

### WEDNESDAY: Recovery
- **Option A**: Full rest.
- **Option B**: 30–45 min Zone 2 cardio (walking, cycling, easy jogging) at conversational intensity.

---

### THURSDAY: Power + Main Legs + Functional Strength (~40–45 min)
1. **Squat Jumps** (Bodyweight)
   - 3 × 3–5 | Work: ~20s | Rest: 75s
   - *Cues*: Explosive jump, controlled/quiet landing, stop if power deteriorates.
2. **Zercher Squat** (20 kg Barbell)
   - 4 × 8–15 | Work: 50s | Rest: 90s
   - *Cues*: Brace core tightly, controlled descent, strong drive upward.
3. **Romanian Deadlift** (20 kg Barbell)
   - 4 × 8–15 | Work: 50s | Rest: 90s
   - *Cues*: Push hips backward, keep bar close, neutral spine, stop if lower back pain.
4. **Equipment Change**: Barbell ➔ 2 × 10 kg Dumbbells (90s, Ready Early allowed).
5. **Superset A** (3 rounds, 60s rest after each round):
   - **Lateral Lunge**: 3 × 8–12 each side (DB, ~65s work — Left side first, then Right side)
   - *Transition*: 10s
   - **Single-Leg Calf Raise**: 3 × 12–20 each side (DB + step, ~50s work — Left leg first ~25s, then Right leg ~25s)
6. **Suitcase Carry** (10 kg DB)
   - 3 × 30–60 sec each side | Default: 45s Left (1st) / 45s Right (2nd) (90s total work) | Rest: 60s
   - *Cues*: Carry one-sided, stay tall, resist leaning and twisting, switch sides at halfway beep.

---

### FRIDAY: Upper Hypertrophy + Abs + Rotation (~35–40 min)
*(No barbell conversion required — Dumbbells & Bodyweight only)*
1. **Superset A** (3 rounds, 60s rest):
   - **Single-Arm DB Row**: 3 × 10–15 each arm (10 kg DB, 60s work total — Left arm first ~30s, then Right arm ~30s)
   - *Transition*: 10s
   - **Push-Ups**: 3 × 10–20 (Bodyweight, ~40s work)
2. **Superset B** (3 rounds, 50s rest):
   - **Lateral Raise**: 3 × 12–20 (Light resistance, ~40s work)
   - *Transition*: 10s
   - **Incline DB Curl**: 3 × 10–15 (2 × 10 kg DB, ~40s work)
3. **Superset C** (3 rounds, 45s rest):
   - **Overhead Triceps Extension**: 3 × 10–15 (10 kg DB, ~40s work)
   - *Transition*: 10s
   - **Reverse Crunch**: 3 × 10–15 (Bodyweight, ~35s work)
4. **Superset D** (3 rounds, 45s rest):
   - **DB Woodchopper**: 3 × 8–12 each side (10 kg DB, ~55s work — Left side first, then Right side)
   - *Transition*: 10s
   - **Front Plank**: 2 × 30–60 sec (Bodyweight, 45s default work)
   - *(Zero side planks)*

---

### SATURDAY: Zone 2 / Active Life
- 30–60 min brisk walking, hiking, easy cycling, swimming, or easy jogging (conversational intensity).

---

### SUNDAY: Full Rest
- Full rest; normal walking and daily activity fine.
