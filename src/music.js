/* ===== NHẠC NỀN "VẸT VECTƠ REMIX" – tự tổng hợp bằng Web Audio, 128 BPM, La thứ =====
   Vòng 16 ô nhịp: 4 ô intro → 4 ô build-up (tiếng trống dồn + tiếng vút) → 8 ô drop.
   Hòa âm Am – F – C – G, kick 4/4, clap phách 2–4, hi-hat lệch phách, bass nảy theo sidechain,
   hợp âm stab siêu cưa, giai điệu chính kèm delay. Bản nhạc gốc, không dùng bài hát có sẵn. */
const Music = (() => {
  const BPM = 128, STEP = 60 / BPM / 4, LOOK = 0.14;
  const CH = [ // [gốc bass (MIDI), hợp âm stab, nốt rải]
    { root: 45, stab: [57, 60, 64], arp: [69, 72, 76, 81] }, // Am
    { root: 41, stab: [57, 60, 65], arp: [65, 69, 72, 77] }, // F
    { root: 48, stab: [55, 60, 64], arp: [67, 72, 76, 79] }, // C
    { root: 43, stab: [55, 59, 62], arp: [67, 71, 74, 79] }, // G
  ];
  // giai điệu chính (16 nốt mỗi ô nhịp, null = nghỉ) cho 4 hợp âm
  const HOOK = [
    [76, null, 76, null, 74, null, 72, null, null, 69, null, 72, null, 74, 76, null],
    [77, null, 77, null, 76, null, 72, null, null, 69, null, 72, null, 74, 72, null],
    [76, null, 76, null, 79, null, 76, null, null, 72, null, 74, null, 76, 79, null],
    [74, null, 74, null, 71, null, 67, null, null, 69, null, 71, null, 74, 79, 81],
  ];
  let ctx = null, master, comp, bus, delay, fb, wet, noise, timer = null, step = 0, next = 0;
  let vol = 0.6, duckLv = 1, playing = false;
  const hz = m => 440 * Math.pow(2, (m - 69) / 12);

  function init() {
    if (ctx) return;
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    comp = ctx.createDynamicsCompressor(); comp.threshold.value = -14; comp.ratio.value = 4; comp.attack.value = .003; comp.release.value = .2;
    master = ctx.createGain(); master.gain.value = 0;
    master.connect(comp).connect(ctx.destination);
    bus = ctx.createGain(); bus.connect(master); // nhánh nhạc cụ có sidechain
    delay = ctx.createDelay(1); delay.delayTime.value = STEP * 3; fb = ctx.createGain(); fb.gain.value = .32; wet = ctx.createGain(); wet.gain.value = .22;
    delay.connect(fb).connect(delay); delay.connect(wet).connect(master);
    const len = ctx.sampleRate; noise = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = noise.getChannelData(0); for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
  }
  const env = (g, t, peak, a, dcy) => { g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(peak, t + a); g.gain.exponentialRampToValueAtTime(.0001, t + a + dcy); };
  function noiseSrc(t, dur) { const s = ctx.createBufferSource(); s.buffer = noise; s.start(t, Math.random() * .5); s.stop(t + dur); return s; }

  function kick(t, v = 1) {
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.frequency.setValueAtTime(165, t); o.frequency.exponentialRampToValueAtTime(42, t + .12);
    env(g, t, .95 * v, .002, .36); o.connect(g).connect(master); o.start(t); o.stop(t + .42);
    // sidechain: nén nhánh nhạc cụ theo nhịp kick
    bus.gain.cancelScheduledValues(t); bus.gain.setValueAtTime(.22, t); bus.gain.linearRampToValueAtTime(1, t + STEP * 3);
  }
  function clap(t, v = 1) {
    for (let k = 0; k < 3; k++) {
      const s = noiseSrc(t + k * .011, .22), f = ctx.createBiquadFilter(), g = ctx.createGain();
      f.type = "bandpass"; f.frequency.value = 1300; f.Q.value = .9;
      env(g, t + k * .011, (k === 2 ? .5 : .35) * v, .001, k === 2 ? .18 : .02); s.connect(f).connect(g).connect(master);
    }
  }
  function snare(t, v) { const s = noiseSrc(t, .12), f = ctx.createBiquadFilter(), g = ctx.createGain(); f.type = "highpass"; f.frequency.value = 1500; env(g, t, .32 * v, .001, .09); s.connect(f).connect(g).connect(master); }
  function hat(t, open, v = 1) {
    const s = noiseSrc(t, open ? .25 : .06), f = ctx.createBiquadFilter(), g = ctx.createGain();
    f.type = "highpass"; f.frequency.value = open ? 7000 : 8500; env(g, t, (open ? .13 : .07) * v, .001, open ? .18 : .035);
    s.connect(f).connect(g).connect(master);
  }
  function bass(t, m, dur) {
    const o = ctx.createOscillator(), o2 = ctx.createOscillator(), f = ctx.createBiquadFilter(), g = ctx.createGain();
    o.type = "sawtooth"; o2.type = "square"; o.frequency.value = hz(m); o2.frequency.value = hz(m - 12);
    f.type = "lowpass"; f.Q.value = 7; f.frequency.setValueAtTime(1900, t); f.frequency.exponentialRampToValueAtTime(380, t + dur);
    env(g, t, .3, .005, dur); o.connect(f); o2.connect(f); f.connect(g).connect(bus);
    o.start(t); o2.start(t); o.stop(t + dur + .05); o2.stop(t + dur + .05);
  }
  function stab(t, notes, dur, peak = .055, cut = 2600) {
    const f = ctx.createBiquadFilter(), g = ctx.createGain();
    f.type = "lowpass"; f.Q.value = 2; f.frequency.setValueAtTime(cut, t); f.frequency.exponentialRampToValueAtTime(700, t + dur);
    env(g, t, peak, .006, dur); f.connect(g); g.connect(bus); g.connect(delay);
    for (const m of notes) for (const det of [-14, 0, 14]) {
      const o = ctx.createOscillator(); o.type = "sawtooth"; o.frequency.value = hz(m); o.detune.value = det;
      o.connect(f); o.start(t); o.stop(t + dur + .05);
    }
  }
  function pad(t, notes, dur) {
    const f = ctx.createBiquadFilter(), g = ctx.createGain(); f.type = "lowpass"; f.frequency.value = 1100;
    g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(.035, t + .35); g.gain.setValueAtTime(.035, t + dur - .3); g.gain.exponentialRampToValueAtTime(.0001, t + dur);
    f.connect(g).connect(bus);
    for (const m of notes) for (const det of [-9, 9]) { const o = ctx.createOscillator(); o.type = "sawtooth"; o.frequency.value = hz(m); o.detune.value = det; o.connect(f); o.start(t); o.stop(t + dur + .05); }
  }
  function pluck(t, m, v = 1, type = "square") {
    const o = ctx.createOscillator(), f = ctx.createBiquadFilter(), g = ctx.createGain();
    o.type = type; o.frequency.value = hz(m); f.type = "lowpass"; f.frequency.setValueAtTime(4200, t); f.frequency.exponentialRampToValueAtTime(900, t + .2);
    env(g, t, .085 * v, .003, .2); o.connect(f).connect(g); g.connect(master); g.connect(delay); o.start(t); o.stop(t + .26);
  }
  function riser(t, dur) {
    const s = noiseSrc(t, dur), f = ctx.createBiquadFilter(), g = ctx.createGain();
    f.type = "bandpass"; f.Q.value = 3; f.frequency.setValueAtTime(400, t); f.frequency.exponentialRampToValueAtTime(7000, t + dur);
    g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(.22, t + dur); s.connect(f).connect(g).connect(master);
  }
  function crash(t) { const s = noiseSrc(t, 1.6), f = ctx.createBiquadFilter(), g = ctx.createGain(); f.type = "highpass"; f.frequency.value = 3500; env(g, t, .2, .002, 1.5); s.connect(f).connect(g).connect(master); }

  function schedule(n, t) {
    const bar = Math.floor(n / 16) % 16, s = n % 16, c = CH[bar % 4];
    const intro = bar < 4, build = bar >= 4 && bar < 8, drop = bar >= 8;
    // trống
    if (s % 4 === 0 && !(bar === 7 && s >= 8)) kick(t, intro && bar < 2 ? .8 : 1);
    if ((build || drop) && (s === 4 || s === 12)) clap(t);
    if (drop) { hat(t, s % 4 === 2, s % 2 ? .7 : 1); }
    else if (s % 2 === 0) hat(t, false, s % 4 === 2 ? 1 : .55);
    if (bar === 7 && s >= 8) snare(t, .4 + (s - 8) * .08);
    if (bar === 6 && s === 0) riser(t, STEP * 32);
    if (bar === 8 && s === 0) crash(t);
    // hòa âm
    if (!drop && s === 0) pad(t, c.stab, STEP * 16);
    if (build && s % 8 === 0) bass(t, c.root, STEP * 6);
    if (drop) {
      if (s % 4 === 2) bass(t, c.root, STEP * 1.7);
      if (s === 14) bass(t, c.root + 12, STEP * 1.5);
      if ([0, 3, 6, 10, 12].includes(s)) stab(t, c.stab, STEP * 1.6);
      const h = HOOK[bar % 4][s]; if (h) pluck(t, h, 1, "sawtooth");
      if (s % 2 === 1) pluck(t, c.arp[(s >> 1) % 4] - 12, .45, "triangle");
    } else {
      pluck(t, c.arp[[0, 1, 2, 3, 2, 1][s % 6] % 4], intro ? .55 : .8, "triangle");
    }
  }
  function tick() {
    while (next < ctx.currentTime + LOOK) { schedule(step, next); next += STEP; step++; }
  }
  function level() { if (!ctx) return; const v = playing ? vol * duckLv * .9 : 0; master.gain.cancelScheduledValues(ctx.currentTime); master.gain.setTargetAtTime(v, ctx.currentTime, .25); }
  document.addEventListener("visibilitychange", () => {
    if (!ctx || !playing) return;
    try { if (document.hidden) ctx.suspend(); else ctx.resume(); } catch (e) {}
  });
  return {
    start() {
      try {
        init(); ctx.resume && ctx.resume();
        if (playing) return; playing = true;
        step = 0; next = ctx.currentTime + .08; timer = setInterval(tick, 25); level();
      } catch (e) {}
    },
    stop() { if (!ctx || !playing) return; playing = false; level(); clearInterval(timer); timer = null; },
    setVolume(v) { vol = Math.max(0, Math.min(1, v)); level(); },
    duck(x) { duckLv = x; level(); },
    get playing() { return playing; },
  };
})();
