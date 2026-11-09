/**
 * Sound Manager & Audio Engine
 * Pure Web Audio API + Audio Element Fallback
 * Impeccable Sound Quality: Opt-In, Sub-perceptual, Elegant
 */

const AUDIO_STORAGE_KEY = 'alwaha_audio_enabled';

export class AudioManager {
  constructor() {
    this.isEnabled = localStorage.getItem(AUDIO_STORAGE_KEY) === 'true';
    this.audioCtx = null;
    this.ambientGain = null;
    this.ambientSource = null;
    this.isContextReady = false;
    this.fadeDuration = 1.2;

    this.init();
  }

  init() {
    this.updateToggleUI();
    this.bindEvents();
  }

  setupContext() {
    if (this.isContextReady) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      this.audioCtx = new AudioContext();
      this.isContextReady = true;

      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }

      if (this.isEnabled) {
        this.startAmbient();
      }
    } catch (e) {
      console.warn('Web Audio not supported or blocked:', e);
    }
  }

  toggle() {
    this.isEnabled = !this.isEnabled;
    localStorage.setItem(AUDIO_STORAGE_KEY, this.isEnabled ? 'true' : 'false');

    if (this.isEnabled) {
      if (!this.isContextReady) {
        this.setupContext();
      } else if (this.audioCtx && this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
      this.startAmbient();
      this.playClick();
    } else {
      this.stopAmbient();
    }

    this.updateToggleUI();
  }

  updateToggleUI() {
    const toggles = document.querySelectorAll('.btn-sound-toggle');
    toggles.forEach(toggle => {
      if (this.isEnabled) {
        toggle.classList.add('is-playing');
        toggle.classList.remove('is-muted');
        toggle.setAttribute('aria-label', 'كتم الصوت / Mute Sound');
        toggle.setAttribute('title', 'Sound: Enabled');
      } else {
        toggle.classList.remove('is-playing');
        toggle.classList.add('is-muted');
        toggle.setAttribute('aria-label', 'تشغيل الصوت / Enable Sound');
        toggle.setAttribute('title', 'Sound: Muted');
      }
    });
  }

  startAmbient() {
    if (!this.audioCtx || !this.isEnabled) return;

    try {
      if (this.ambientGain) {
        // fade in
        const now = this.audioCtx.currentTime;
        this.ambientGain.gain.cancelScheduledValues(now);
        this.ambientGain.gain.linearRampToValueAtTime(0.045, now + this.fadeDuration);
        return;
      }

      // Create synthetic warm luxury ambient drone (65.4Hz C2 + 130.8Hz C3)
      const now = this.audioCtx.currentTime;
      this.ambientGain = this.audioCtx.createGain();
      this.ambientGain.gain.setValueAtTime(0.0001, now);
      this.ambientGain.gain.linearRampToValueAtTime(0.045, now + this.fadeDuration);

      const filter = this.audioCtx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 240;

      // Base Oscillator
      const osc1 = this.audioCtx.createOscillator();
      osc1.type = 'sine';
      osc1.frequency.value = 65.41; // C2

      // Subtle Harmonic
      const osc2 = this.audioCtx.createOscillator();
      osc2.type = 'sine';
      osc2.frequency.value = 130.81; // C3

      // LFO for breathing warmth
      const lfo = this.audioCtx.createOscillator();
      lfo.frequency.value = 0.15; // slow breathing rate
      const lfoGain = this.audioCtx.createGain();
      lfoGain.gain.value = 8;
      lfo.connect(lfoGain);
      lfoGain.connect(filter.frequency);

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(this.ambientGain);
      this.ambientGain.connect(this.audioCtx.destination);

      osc1.start();
      osc2.start();
      lfo.start();

      this.ambientSource = { osc1, osc2, lfo };
    } catch (e) {
      // Fallback silently
    }
  }

  stopAmbient() {
    if (!this.ambientGain || !this.audioCtx) return;
    try {
      const now = this.audioCtx.currentTime;
      this.ambientGain.gain.cancelScheduledValues(now);
      this.ambientGain.gain.linearRampToValueAtTime(0.0001, now + 0.8);
    } catch (e) {}
  }

  /**
   * Hover Tick: Sub-perceptual 12ms crisp high-frequency micro-click
   */
  playHover() {
    if (!this.isEnabled) return;
    if (!this.audioCtx) this.setupContext();
    if (!this.audioCtx || this.audioCtx.state === 'suspended') return;

    try {
      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(2200, now);

      gain.gain.setValueAtTime(0.025, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.015);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.016);
    } catch (e) {}
  }

  /**
   * Click Pop: Tactile acoustic down-sweep (25ms)
   */
  playClick() {
    if (!this.isEnabled) return;
    if (!this.audioCtx) this.setupContext();
    if (!this.audioCtx || this.audioCtx.state === 'suspended') return;

    try {
      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(480, now);
      osc.frequency.exponentialRampToValueAtTime(160, now + 0.03);

      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.035);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.036);
    } catch (e) {}
  }

  bindEvents() {
    // Sound Toggle Button
    document.querySelectorAll('.btn-sound-toggle').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggle();
      });
    });

    // Delegated Hover & Click sounds on interactive elements
    const interactiveSelectors = 'a, button, .project-card, .filter-btn, .stat-card, input, select, textarea';

    document.addEventListener('mouseenter', (e) => {
      const target = e.target.closest ? e.target.closest(interactiveSelectors) : null;
      if (target && this.isEnabled) {
        this.playHover();
      }
    }, true);

    document.addEventListener('click', (e) => {
      const target = e.target.closest ? e.target.closest(interactiveSelectors) : null;
      if (target && this.isEnabled) {
        this.playClick();
      }
    }, true);

    // Initialize audio context on first user interaction if enabled
    const unlockAudio = () => {
      if (this.isEnabled && !this.isContextReady) {
        this.setupContext();
      }
      window.removeEventListener('pointerdown', unlockAudio);
      window.removeEventListener('keydown', unlockAudio);
    };

    window.addEventListener('pointerdown', unlockAudio, { once: true });
    window.addEventListener('keydown', unlockAudio, { once: true });
  }
}

