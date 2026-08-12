<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

definePageMeta({
  layout: false,
  pageTransition: { name: "fade", mode: "out-in" },
});

useHead({
  title: "Para Michu",
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
    { name: "robots", content: "noindex, nofollow" },
    { name: "theme-color", content: "#0b1026" },
  ],
});

// ── Estado del clima / hora en Chile ──────────────────────────────
// Coordenadas de la Sexta Región de Chile (Rancagua). Open-Meteo es
// gratis, sin API key y con CORS. Devuelve la hora local ya calculada.
const LAT = -34.17;
const LON = -70.74;
const TZ = "America/Santiago";

const weather = ref(null); // { code, isDay, temp }
const chileTime = ref("");
const loaded = ref(false);

function chileNow() {
  try {
    return new Intl.DateTimeFormat("es-CL", {
      timeZone: TZ,
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(new Date());
  } catch {
    return "";
  }
}

function chileHour() {
  try {
    const h = new Intl.DateTimeFormat("en-US", {
      timeZone: TZ,
      hour: "2-digit",
      hour12: false,
    }).format(new Date());
    return parseInt(h, 10);
  } catch {
    return new Date().getHours();
  }
}

async function fetchWeather() {
  try {
    const url =
      `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}` +
      `&current=temperature_2m,weather_code,is_day&timezone=${encodeURIComponent(TZ)}`;
    const res = await fetch(url);
    const data = await res.json();
    const c = data?.current;
    if (c) {
      weather.value = {
        code: c.weather_code,
        isDay: c.is_day === 1,
        temp: Math.round(c.temperature_2m),
      };
    }
  } catch {
    // Sin conexión: caemos a un cielo según la hora local.
    const h = chileHour();
    weather.value = { code: 0, isDay: h >= 7 && h < 20, temp: null };
  } finally {
    loaded.value = true;
  }
}

// ── Interpretación del clima (códigos WMO) ────────────────────────
// 0 despejado · 1-3 nubes · 45/48 niebla · 51-67 lluvia/llovizna
// 71-77 nieve · 80-82 chubascos · 95-99 tormenta
const scene = computed(() => {
  const w = weather.value;
  if (!w) return "night-clear";
  const c = w.code;
  const day = w.isDay;
  let kind = "clear";
  if (c === 45 || c === 48) kind = "fog";
  else if ((c >= 51 && c <= 67) || (c >= 80 && c <= 82)) kind = "rain";
  else if (c >= 71 && c <= 77) kind = "snow";
  else if (c >= 95) kind = "storm";
  else if (c >= 1 && c <= 3) kind = "cloudy";
  return `${day ? "day" : "night"}-${kind}`;
});

const isNight = computed(() => scene.value.startsWith("night"));
const isRaining = computed(() => /rain|storm/.test(scene.value));
const isStorm = computed(() => /storm/.test(scene.value));
const isSnowing = computed(() => /snow/.test(scene.value));
const isCloudy = computed(() => /cloud|fog|rain|storm|snow/.test(scene.value));
const isClear = computed(() => /clear/.test(scene.value));
const showSun = computed(() => scene.value === "day-clear");
const showMoon = computed(() => scene.value === "night-clear");
const showStars = computed(() => isNight.value && !isRaining.value && !isSnowing.value);

const sceneLabel = computed(() => {
  const map = {
    "day-clear": "Despejado",
    "night-clear": "Noche despejada",
    "day-cloudy": "Nublado",
    "night-cloudy": "Nublado",
    "day-rain": "Lluvia",
    "night-rain": "Lluvia",
    "day-storm": "Tormenta",
    "night-storm": "Tormenta",
    "day-snow": "Nieve",
    "night-snow": "Nieve",
    "day-fog": "Niebla",
    "night-fog": "Niebla",
  };
  return map[scene.value] || "";
});

// Partículas de lluvia / nieve (deterministas para SSR estable).
const drops = Array.from({ length: 60 }, (_, i) => ({
  left: (i * 37) % 100,
  delay: ((i * 13) % 20) / 10,
  duration: 0.5 + ((i * 7) % 10) / 10,
  opacity: 0.25 + ((i * 11) % 6) / 10,
}));

const flakes = Array.from({ length: 40 }, (_, i) => ({
  left: (i * 41) % 100,
  delay: ((i * 17) % 30) / 5,
  duration: 6 + ((i * 5) % 8),
  size: 3 + ((i * 3) % 5),
  drift: ((i % 5) - 2) * 20,
}));

const stars = Array.from({ length: 70 }, (_, i) => ({
  left: (i * 53) % 100,
  top: (i * 29) % 65,
  size: 1 + ((i * 7) % 3),
  delay: ((i * 19) % 40) / 10,
  duration: 2 + ((i * 3) % 4),
}));

let clock;
onMounted(() => {
  chileTime.value = chileNow();
  fetchWeather();
  clock = setInterval(() => {
    chileTime.value = chileNow();
  }, 30_000);
  // Refrescar el clima cada 10 min por si cambia mientras la vela sigue.
  const weatherTimer = setInterval(fetchWeather, 600_000);
  onUnmounted(() => clearInterval(weatherTimer));
});
onUnmounted(() => clearInterval(clock));
</script>

<template>
  <div class="michu" :class="[`s-${scene}`, { night: isNight }]">
    <!-- Capas de cielo -->
    <div class="sky"></div>
    <div class="sky-glow"></div>

    <!-- Sol / Luna -->
    <div v-if="showSun" class="sun"></div>
    <div v-if="showMoon" class="moon"><span class="moon-shadow"></span></div>

    <!-- Estrellas -->
    <div v-if="showStars" class="stars">
      <span
        v-for="(s, i) in stars"
        :key="i"
        class="star"
        :style="{
          left: s.left + '%',
          top: s.top + '%',
          width: s.size + 'px',
          height: s.size + 'px',
          animationDelay: s.delay + 's',
          animationDuration: s.duration + 's',
        }"
      />
    </div>

    <!-- Nubes -->
    <div v-if="isCloudy" class="clouds">
      <span class="cloud c1"></span>
      <span class="cloud c2"></span>
      <span class="cloud c3"></span>
    </div>

    <!-- Lluvia -->
    <div v-if="isRaining" class="rain">
      <span
        v-for="(d, i) in drops"
        :key="i"
        class="drop"
        :style="{
          left: d.left + '%',
          animationDelay: d.delay + 's',
          animationDuration: d.duration + 's',
          opacity: d.opacity,
        }"
      />
    </div>

    <!-- Nieve -->
    <div v-if="isSnowing" class="snow">
      <span
        v-for="(f, i) in flakes"
        :key="i"
        class="flake"
        :style="{
          left: f.left + '%',
          width: f.size + 'px',
          height: f.size + 'px',
          animationDelay: f.delay + 's',
          animationDuration: f.duration + 's',
          '--drift': f.drift + 'px',
        }"
      />
    </div>

    <!-- Relámpago -->
    <div v-if="isStorm" class="lightning"></div>

    <!-- Contenido -->
    <main class="content">
      <p class="hola">Para Michu</p>

      <!-- Vela -->
      <div class="candle-scene">
        <div class="halo"></div>
        <div class="flame">
          <div class="flame-glow"></div>
          <div class="flame-outer"></div>
          <div class="flame-inner"></div>
        </div>
        <div class="wick"></div>
        <div class="candle-body">
          <div class="wax-top"></div>
          <div class="drip d1"></div>
          <div class="drip d2"></div>
        </div>
        <div class="candle-base"></div>
        <div class="candle-light"></div>
      </div>

      <blockquote class="quote">
        “Mientras esta vela esté encendida, mi corazón aún está aprendiendo a
        soltarte. Cuando se apague, no será porque dejé de quererte, sino porque
        aprendí a quererte sin necesitarte cerca.”
      </blockquote>

      <p class="cursi">¿Qué cursi no?</p>

      <p class="sign">Siempre tuyo, tu Guille</p>
    </main>
  </div>
</template>

<style scoped>
/* ── Base ─────────────────────────────────────────────────────── */
.michu {
  position: fixed;
  inset: 0;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  color: #fff;
  transition: color 1.2s ease;
  -webkit-font-smoothing: antialiased;
}

.sky,
.sky-glow {
  position: absolute;
  inset: 0;
  transition: background 2s ease, opacity 2s ease;
}

/* Cielos por escena. Transiciones suaves de 2s. */
.s-day-clear .sky {
  background: linear-gradient(180deg, #4a90d9 0%, #8ec5e8 45%, #f3d9a8 100%);
}
.s-day-cloudy .sky,
.s-day-fog .sky {
  background: linear-gradient(180deg, #8b98a6 0%, #b7c0c9 60%, #d7dbdf 100%);
}
.s-day-rain .sky,
.s-day-storm .sky {
  background: linear-gradient(180deg, #4a5560 0%, #6b7580 60%, #8a919a 100%);
}
.s-day-snow .sky {
  background: linear-gradient(180deg, #9fb0c0 0%, #c4d0da 60%, #e8eef3 100%);
}
.s-night-clear .sky {
  background: linear-gradient(180deg, #05070f 0%, #0b1026 50%, #1a1f45 100%);
}
.s-night-cloudy .sky,
.s-night-fog .sky {
  background: linear-gradient(180deg, #0a0d16 0%, #1a2030 60%, #2a3244 100%);
}
.s-night-rain .sky,
.s-night-storm .sky {
  background: linear-gradient(180deg, #05070d 0%, #10141f 60%, #1c2230 100%);
}
.s-night-snow .sky {
  background: linear-gradient(180deg, #0a0f1a 0%, #1c2740 60%, #33415c 100%);
}

/* Resplandor cálido de la vela sobre la escena */
.sky-glow {
  background: radial-gradient(
    60% 45% at 50% 78%,
    rgba(255, 176, 90, 0.35),
    transparent 70%
  );
  opacity: 0.9;
  mix-blend-mode: screen;
}
.night .sky-glow {
  opacity: 1;
}

/* ── Sol ──────────────────────────────────────────────────────── */
.sun {
  position: absolute;
  top: 12%;
  right: 16%;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: radial-gradient(circle, #fff6d8 0%, #ffe08a 55%, #ffcf5e 100%);
  box-shadow: 0 0 80px 30px rgba(255, 214, 120, 0.55);
  animation: sun-pulse 6s ease-in-out infinite;
}
@keyframes sun-pulse {
  50% {
    box-shadow: 0 0 100px 40px rgba(255, 214, 120, 0.7);
  }
}

/* ── Luna ─────────────────────────────────────────────────────── */
.moon {
  position: absolute;
  top: 11%;
  right: 16%;
  width: 74px;
  height: 74px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, #fdfbf3, #d8dbe6 70%, #b9bccb);
  box-shadow: 0 0 60px 18px rgba(220, 226, 245, 0.35);
}
.moon-shadow {
  position: absolute;
  top: -6px;
  right: -10px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: transparent;
  box-shadow: -14px 12px 0 4px rgba(255, 255, 255, 0.06);
}

/* ── Estrellas ────────────────────────────────────────────────── */
.stars {
  position: absolute;
  inset: 0;
}
.star {
  position: absolute;
  background: #fff;
  border-radius: 50%;
  animation: twinkle ease-in-out infinite;
}
@keyframes twinkle {
  0%,
  100% {
    opacity: 0.15;
  }
  50% {
    opacity: 0.95;
  }
}

/* ── Nubes ────────────────────────────────────────────────────── */
.clouds {
  position: absolute;
  inset: 0;
}
.cloud {
  position: absolute;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.85);
  filter: blur(6px);
  opacity: 0.75;
  animation: drift linear infinite;
}
.night .cloud {
  background: rgba(120, 130, 150, 0.5);
}
.cloud::before,
.cloud::after {
  content: "";
  position: absolute;
  background: inherit;
  border-radius: 50%;
}
.c1 {
  top: 14%;
  width: 160px;
  height: 46px;
  animation-duration: 60s;
}
.c1::before {
  width: 70px;
  height: 70px;
  top: -30px;
  left: 24px;
}
.c1::after {
  width: 90px;
  height: 90px;
  top: -44px;
  right: 26px;
}
.c2 {
  top: 26%;
  width: 120px;
  height: 36px;
  animation-duration: 85s;
  animation-delay: -20s;
  opacity: 0.55;
}
.c2::before {
  width: 56px;
  height: 56px;
  top: -24px;
  left: 18px;
}
.c2::after {
  width: 70px;
  height: 70px;
  top: -34px;
  right: 20px;
}
.c3 {
  top: 8%;
  width: 200px;
  height: 54px;
  animation-duration: 100s;
  animation-delay: -50s;
  opacity: 0.5;
}
.c3::before {
  width: 84px;
  height: 84px;
  top: -36px;
  left: 30px;
}
.c3::after {
  width: 110px;
  height: 110px;
  top: -54px;
  right: 30px;
}
@keyframes drift {
  from {
    transform: translateX(-260px);
  }
  to {
    transform: translateX(calc(100vw + 260px));
  }
}

/* ── Lluvia ───────────────────────────────────────────────────── */
.rain {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.drop {
  position: absolute;
  top: -10%;
  width: 1.5px;
  height: 60px;
  background: linear-gradient(
    transparent,
    rgba(190, 210, 235, 0.8)
  );
  animation: fall linear infinite;
}
@keyframes fall {
  to {
    transform: translateY(120vh);
  }
}

/* ── Nieve ────────────────────────────────────────────────────── */
.snow {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.flake {
  position: absolute;
  top: -5%;
  background: #fff;
  border-radius: 50%;
  opacity: 0.9;
  animation: snowfall linear infinite;
}
@keyframes snowfall {
  to {
    transform: translate(var(--drift), 110vh);
  }
}

/* ── Relámpago ────────────────────────────────────────────────── */
.lightning {
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.9);
  opacity: 0;
  pointer-events: none;
  animation: flash 9s linear infinite;
}
@keyframes flash {
  0%,
  93%,
  100% {
    opacity: 0;
  }
  94% {
    opacity: 0.55;
  }
  95% {
    opacity: 0;
  }
  96% {
    opacity: 0.75;
  }
  97% {
    opacity: 0;
  }
}

/* ── Contenido ────────────────────────────────────────────────── */
.content {
  position: relative;
  z-index: 5;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: max(28px, env(safe-area-inset-top)) 24px
    max(28px, env(safe-area-inset-bottom));
  gap: 6px;
}
.hola {
  font-size: 15px;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  opacity: 0.75;
  margin-bottom: 8px;
}

/* ── Vela ─────────────────────────────────────────────────────── */
.candle-scene {
  position: relative;
  width: 120px;
  height: 230px;
  margin: 10px 0 22px;
}
.halo {
  position: absolute;
  left: 50%;
  top: 30px;
  width: 320px;
  height: 320px;
  transform: translate(-50%, -40%);
  background: radial-gradient(
    circle,
    rgba(255, 170, 80, 0.28) 0%,
    rgba(255, 150, 60, 0.12) 35%,
    transparent 68%
  );
  animation: halo-breathe 4s ease-in-out infinite;
  pointer-events: none;
}
@keyframes halo-breathe {
  50% {
    opacity: 0.7;
    transform: translate(-50%, -40%) scale(1.08);
  }
}

.flame {
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  width: 34px;
  height: 78px;
  transform-origin: bottom center;
  animation: flicker 0.28s ease-in-out infinite alternate;
}
.flame-glow {
  position: absolute;
  inset: -18px;
  background: radial-gradient(circle, rgba(255, 190, 90, 0.6), transparent 65%);
  filter: blur(6px);
}
.flame-outer,
.flame-inner {
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
}
.flame-outer {
  width: 30px;
  height: 74px;
  background: linear-gradient(180deg, #ffd25e 0%, #ff9d33 45%, #ff5e2e 100%);
  border-radius: 50% 50% 35% 35% / 65% 65% 40% 40%;
  box-shadow: 0 -6px 14px rgba(255, 130, 50, 0.6);
  clip-path: polygon(50% 0, 78% 30%, 88% 62%, 72% 92%, 50% 100%, 28% 92%, 12% 62%, 22% 30%);
}
.flame-inner {
  width: 15px;
  height: 44px;
  background: linear-gradient(180deg, #fff6d0 0%, #ffd25e 60%, #ffae4d 100%);
  clip-path: polygon(50% 0, 75% 35%, 82% 66%, 50% 100%, 18% 66%, 25% 35%);
  animation: inner-dance 0.32s ease-in-out infinite alternate;
}
@keyframes flicker {
  0% {
    transform: translateX(-50%) rotate(-2deg) scaleY(1);
  }
  100% {
    transform: translateX(-50%) rotate(2deg) scaleY(1.06);
  }
}
@keyframes inner-dance {
  0% {
    transform: translateX(-50%) scaleY(0.94);
  }
  100% {
    transform: translateX(-50%) scaleY(1.05);
  }
}

.wick {
  position: absolute;
  left: 50%;
  top: 72px;
  transform: translateX(-50%);
  width: 4px;
  height: 12px;
  background: linear-gradient(#3a2b22, #14100d);
  border-radius: 2px;
  z-index: 2;
}

.candle-body {
  position: absolute;
  left: 50%;
  top: 82px;
  transform: translateX(-50%);
  width: 84px;
  height: 130px;
  border-radius: 12px 12px 8px 8px;
  background: linear-gradient(
    90deg,
    #e9d8c2 0%,
    #fbf3e7 30%,
    #fff 45%,
    #f3e6d3 70%,
    #d9c6ab 100%
  );
  box-shadow: inset 0 0 22px rgba(255, 200, 140, 0.35),
    inset -10px 0 18px rgba(150, 120, 90, 0.25);
  overflow: hidden;
}
.wax-top {
  position: absolute;
  top: -7px;
  left: 50%;
  transform: translateX(-50%);
  width: 90px;
  height: 20px;
  border-radius: 50%;
  background: radial-gradient(
    circle at 50% 40%,
    #6b5136 0%,
    #b89a74 22%,
    #f6ecdb 55%,
    #efe0cc 100%
  );
  box-shadow: inset 0 3px 6px rgba(90, 60, 30, 0.5);
}
.drip {
  position: absolute;
  top: 8px;
  width: 12px;
  background: linear-gradient(#fff, #ece0cd);
  border-radius: 0 0 8px 8px;
  opacity: 0.9;
}
.d1 {
  left: 14px;
  height: 46px;
}
.d2 {
  right: 18px;
  height: 30px;
}
.candle-base {
  position: absolute;
  left: 50%;
  top: 206px;
  transform: translateX(-50%);
  width: 104px;
  height: 16px;
  border-radius: 50%;
  background: radial-gradient(circle, #d8c6ac 0%, #b49b7c 70%, #8a745a 100%);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
}
.candle-light {
  position: absolute;
  left: 50%;
  top: 78px;
  transform: translateX(-50%);
  width: 130px;
  height: 130px;
  background: radial-gradient(circle, rgba(255, 210, 140, 0.5), transparent 60%);
  animation: light-flicker 0.3s ease-in-out infinite alternate;
  pointer-events: none;
}
@keyframes light-flicker {
  0% {
    opacity: 0.75;
  }
  100% {
    opacity: 1;
  }
}

/* ── Texto ────────────────────────────────────────────────────── */
.quote {
  max-width: 520px;
  margin: 6px auto 0;
  font-size: 17px;
  line-height: 1.7;
  font-style: italic;
  font-weight: 300;
  text-wrap: balance;
  text-shadow: 0 1px 12px rgba(0, 0, 0, 0.45);
}
.cursi {
  margin-top: 16px;
  font-size: 15px;
  font-style: italic;
  opacity: 0.7;
}
.sign {
  margin-top: 18px;
  font-size: 14px;
  letter-spacing: 0.05em;
  opacity: 0.8;
}

/* Escenas de día → texto oscuro para contraste */
.s-day-clear,
.s-day-cloudy,
.s-day-fog,
.s-day-snow {
  color: #23303b;
}
.s-day-clear .quote,
.s-day-cloudy .quote,
.s-day-fog .quote,
.s-day-snow .quote {
  text-shadow: 0 1px 12px rgba(255, 255, 255, 0.5);
}
@media (min-width: 640px) {
  .quote {
    font-size: 19px;
  }
  .candle-scene {
    transform: scale(1.08);
    margin-bottom: 30px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .flame,
  .flame-inner,
  .candle-light,
  .halo,
  .sun,
  .lightning {
    animation: none !important;
  }
}
</style>
