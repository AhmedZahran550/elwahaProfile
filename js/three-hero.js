/**
 * Three.js Luxury Architectural Hero Scene — High Craft Edition
 * Target: Three.js r160 ES Module
 * Designed according to Impeccable & Three.js Fundamentals
 */

import * as THREE from './vendor/three.module.min.js';

/**
 * Generate procedural soft-glow radial texture for luxury gold particles
 */
function createGlowParticleTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');

  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, 'rgba(255, 240, 190, 1.0)');
  gradient.addColorStop(0.2, 'rgba(230, 203, 130, 0.85)');
  gradient.addColorStop(0.5, 'rgba(201, 162, 75, 0.35)');
  gradient.addColorStop(0.8, 'rgba(154, 120, 40, 0.1)');
  gradient.addColorStop(1, 'rgba(14, 26, 42, 0.0)');

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 64, 64);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

export class HeroScene {
  constructor(canvasId = 'hero-canvas') {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;

    this.container = this.canvas.parentElement;
    this.isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.isMobile = window.innerWidth < 768;

    // State
    this.mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    this.scrollProgress = 0;
    this.isVisible = true;
    this.isDisposed = false;

    // Three.js instances
    this.renderer = null;
    this.scene = null;
    this.camera = null;
    this.buildingGroup = null;
    this.orbitRings = null;
    this.particles = null;
    this.embers = null;
    this.keyLight = null;
    this.rimLight = null;
    this.mouseLight = null;
    this.clock = new THREE.Clock();

    if (this.isReducedMotion || !this.checkWebGLSupport()) {
      this.activateFallback();
      return;
    }

    this.init();
  }

  checkWebGLSupport() {
    try {
      const testCanvas = document.createElement('canvas');
      return !!(window.WebGLRenderingContext && 
        (testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl')));
    } catch (e) {
      return false;
    }
  }

  activateFallback() {
    if (this.container) {
      this.container.classList.add('no-webgl');
      const fallback = this.container.querySelector('.hero__canvas-fallback');
      if (fallback) fallback.style.opacity = '1';
    }
  }

  init() {
    try {
      // 1. Scene & Deep Atmosphere
      this.scene = new THREE.Scene();
      this.scene.fog = new THREE.FogExp2(0x0E1A2A, 0.032);

      // 2. Camera Setup (Architectural Perspective)
      const width = this.container.clientWidth;
      const height = this.container.clientHeight;
      const aspect = width / height;
      this.camera = new THREE.PerspectiveCamera(42, aspect, 0.1, 100);
      this.camera.position.set(0, 2.2, 9.5);
      this.camera.lookAt(0, 0.6, 0);

      // 3. Renderer Setup
      this.renderer = new THREE.WebGLRenderer({
        canvas: this.canvas,
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
      });
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      this.renderer.setSize(width, height);
      this.renderer.outputColorSpace = THREE.SRGBColorSpace;
      this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
      this.renderer.toneMappingExposure = 1.18;

      // 4. Lighting Rig
      this.setupLighting();

      // 5. Architectural Building Composition
      this.createArchitecture();

      // 6. Orbital Golden Rings
      this.createOrbitalRings();

      // 7. Golden Particle Nebula & Embers
      this.createGoldDust();

      // 8. Event Listeners & Intersection Observer
      this.bindEvents();
      this.setupIntersectionObserver();

      // Initial placement based on language direction
      this.updateLayoutPosition();

      // 9. Start Animation Loop
      this.renderer.setAnimationLoop(() => this.animate());
    } catch (err) {
      console.warn('Three.js initialization failed, falling back:', err);
      this.activateFallback();
    }
  }

  setupLighting() {
    // Deep Midnight Fill
    const ambientLight = new THREE.AmbientLight(0x0E1A2A, 1.4);
    this.scene.add(ambientLight);

    // Warm Golden-Hour Key Light (casting warm highlights)
    this.keyLight = new THREE.DirectionalLight(0xFFE5B4, 3.2);
    this.keyLight.position.set(6, 9, 6);
    this.scene.add(this.keyLight);

    // Cool Midnight Navy Rim Light (creates architectural edge separation)
    this.rimLight = new THREE.DirectionalLight(0x406B9A, 2.2);
    this.rimLight.position.set(-8, 5, -5);
    this.scene.add(this.rimLight);

    // Dynamic Mouse Spotlight (sweeps across facade with pointer movement)
    this.mouseLight = new THREE.PointLight(0xE6CB82, 2.5, 14);
    this.mouseLight.position.set(2, 3, 5);
    this.scene.add(this.mouseLight);

    // Foundation Base Up-light
    const baseLight = new THREE.PointLight(0xC9A24B, 2.2, 8);
    baseLight.position.set(0, -1.2, 2);
    this.scene.add(baseLight);
  }

  createArchitecture() {
    this.buildingGroup = new THREE.Group();

    // 1. Materials
    const darkNavyFacetMat = new THREE.MeshStandardMaterial({
      color: 0x132338,
      metalness: 0.88,
      roughness: 0.22
    });

    const goldAccentMat = new THREE.MeshStandardMaterial({
      color: 0xC9A24B,
      metalness: 0.95,
      roughness: 0.15
    });

    const warmWindowMat = new THREE.MeshStandardMaterial({
      color: 0xFFE7BA,
      emissive: 0xE6CB82,
      emissiveIntensity: 0.65,
      metalness: 0.2,
      roughness: 0.3
    });

    const glassBalconyMat = new THREE.MeshStandardMaterial({
      color: 0x1B304E,
      metalness: 0.9,
      roughness: 0.08,
      transparent: true,
      opacity: 0.85
    });

    // 2. Multi-tier Building Massing
    const blocks = [
      // Foundation Base / Grand Podium
      { w: 3.2, h: 0.7, d: 2.8, x: 0, y: -0.65, z: 0, mat: darkNavyFacetMat, edge: true },
      // Central Tower - Tier 1
      { w: 2.5, h: 1.5, d: 2.0, x: 0, y: 0.45, z: 0, mat: darkNavyFacetMat, edge: true },
      // Central Tower - Tier 2 (Setback)
      { w: 1.8, h: 1.3, d: 1.6, x: 0, y: 1.85, z: 0, mat: darkNavyFacetMat, edge: true },
      // Penthouse Crown
      { w: 1.2, h: 0.9, d: 1.1, x: 0, y: 2.95, z: 0, mat: darkNavyFacetMat, edge: true },
      
      // West Cantilevered Pavilion
      { w: 1.0, h: 0.9, d: 1.4, x: -1.5, y: 0.7, z: 0.2, mat: darkNavyFacetMat, edge: true },
      // East Terrace Lounge
      { w: 1.1, h: 0.7, d: 1.3, x: 1.45, y: 0.2, z: -0.2, mat: darkNavyFacetMat, edge: true },

      // Horizontal Architectural Gold Slabs & Louvers
      { w: 3.3, h: 0.06, d: 2.9, x: 0, y: -0.3, z: 0, mat: goldAccentMat, edge: false },
      { w: 2.6, h: 0.05, d: 2.1, x: 0, y: 1.2, z: 0, mat: goldAccentMat, edge: false },
      { w: 1.9, h: 0.05, d: 1.7, x: 0, y: 2.5, z: 0, mat: goldAccentMat, edge: false },

      // Glass Balcony Parapets
      { w: 2.52, h: 0.35, d: 0.06, x: 0, y: 0.95, z: 1.05, mat: glassBalconyMat, edge: false },
      { w: 1.82, h: 0.3, d: 0.06, x: 0, y: 2.25, z: 0.85, mat: glassBalconyMat, edge: false }
    ];

    blocks.forEach(b => {
      const geom = new THREE.BoxGeometry(b.w, b.h, b.d);
      const mesh = new THREE.Mesh(geom, b.mat);
      mesh.position.set(b.x, b.y, b.z);
      this.buildingGroup.add(mesh);

      // Gold Linework Edges for Architectural Precision
      if (b.edge) {
        const edgesGeom = new THREE.EdgesGeometry(geom, 22);
        const lineMat = new THREE.LineBasicMaterial({
          color: 0xC9A24B,
          linewidth: 1,
          transparent: true,
          opacity: 0.8
        });
        const line = new THREE.LineSegments(edgesGeom, lineMat);
        mesh.add(line);
      }
    });

    // 3. Warm Illuminated Window Apertures
    const windowConfigs = [
      // Lower Tier Windows
      { w: 0.45, h: 0.7, d: 0.02, x: -0.65, y: 0.45, z: 1.02 },
      { w: 0.45, h: 0.7, d: 0.02, x: 0.65, y: 0.45, z: 1.02 },
      // Mid Tier Windows
      { w: 0.4, h: 0.6, d: 0.02, x: -0.45, y: 1.85, z: 0.82 },
      { w: 0.4, h: 0.6, d: 0.02, x: 0.45, y: 1.85, z: 0.82 },
      // Penthouse Panoramic Aperture
      { w: 0.7, h: 0.4, d: 0.02, x: 0, y: 2.95, z: 0.57 },
      // Side Pavilion Window
      { w: 0.02, h: 0.5, d: 0.6, x: -2.02, y: 0.7, z: 0.2 }
    ];

    windowConfigs.forEach(w => {
      const wGeom = new THREE.BoxGeometry(w.w, w.h, w.d);
      const wMesh = new THREE.Mesh(wGeom, warmWindowMat);
      wMesh.position.set(w.x, w.y, w.z);
      this.buildingGroup.add(wMesh);
    });

    // 4. Ground Plinth & Hotel Portico Columns
    const plinthGeom = new THREE.CylinderGeometry(2.7, 2.9, 0.1, 48);
    const plinthMesh = new THREE.Mesh(plinthGeom, goldAccentMat);
    plinthMesh.position.y = -1.05;
    this.buildingGroup.add(plinthMesh);

    // Columns
    const colGeom = new THREE.CylinderGeometry(0.04, 0.04, 0.6, 16);
    const colPositions = [-1.1, -0.4, 0.4, 1.1];
    colPositions.forEach(cx => {
      const col = new THREE.Mesh(colGeom, goldAccentMat);
      col.position.set(cx, -0.65, 1.25);
      this.buildingGroup.add(col);
    });

    // 5. Crown Finial / Alwaha Floating Emblem
    const crownGeom = new THREE.OctahedronGeometry(0.22, 0);
    const crownMesh = new THREE.Mesh(crownGeom, goldAccentMat);
    crownMesh.position.set(0, 3.65, 0);
    this.buildingGroup.add(crownMesh);

    this.scene.add(this.buildingGroup);
  }

  createOrbitalRings() {
    this.orbitRings = new THREE.Group();

    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0xC9A24B,
      transparent: true,
      opacity: 0.45,
      wireframe: false
    });

    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xE6CB82,
      transparent: true,
      opacity: 0.25
    });

    // Outer Thin Golden Orbit Ring
    const ring1Geom = new THREE.RingGeometry(3.4, 3.42, 64);
    const ring1 = new THREE.Mesh(ring1Geom, ringMat1);
    ring1.rotation.x = Math.PI / 2;
    ring1.position.y = -0.9;
    this.orbitRings.add(ring1);

    // Inner Angled Golden Orbit Ring
    const ring2Geom = new THREE.RingGeometry(3.7, 3.72, 64);
    const ring2 = new THREE.Mesh(ring2Geom, ringMat2);
    ring2.rotation.x = (Math.PI / 2) + 0.15;
    ring2.rotation.y = 0.2;
    ring2.position.y = -0.85;
    this.orbitRings.add(ring2);

    this.buildingGroup.add(this.orbitRings);
  }

  createGoldDust() {
    const particleTexture = createGlowParticleTexture();
    const count = this.isMobile ? 380 : 850;

    // 1. Convective Rising Gold Dust Field
    const dustGeometry = new THREE.BufferGeometry();
    const dustPositions = new Float32Array(count * 3);
    const dustVelocities = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      dustPositions[i * 3 + 0] = (Math.random() - 0.5) * 16;
      dustPositions[i * 3 + 1] = (Math.random() - 0.5) * 12 + 1;
      dustPositions[i * 3 + 2] = (Math.random() - 0.5) * 14;
      dustVelocities[i] = 0.15 + Math.random() * 0.35;
    }

    dustGeometry.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));

    const dustMaterial = new THREE.PointsMaterial({
      color: 0xFFE7BA,
      map: particleTexture,
      size: this.isMobile ? 0.16 : 0.22,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.particles = new THREE.Points(dustGeometry, dustMaterial);
    this.particles.userData = { velocities: dustVelocities };
    this.scene.add(this.particles);

    // 2. Swirling Golden Embers around Architecture
    const emberCount = this.isMobile ? 50 : 120;
    const emberGeometry = new THREE.BufferGeometry();
    const emberPositions = new Float32Array(emberCount * 3);
    const emberAngles = new Float32Array(emberCount);
    const emberRadii = new Float32Array(emberCount);
    const emberSpeeds = new Float32Array(emberCount);

    for (let i = 0; i < emberCount; i++) {
      const r = 2.0 + Math.random() * 3.5;
      const angle = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 6 + 1;

      emberPositions[i * 3 + 0] = Math.cos(angle) * r;
      emberPositions[i * 3 + 1] = y;
      emberPositions[i * 3 + 2] = Math.sin(angle) * r;

      emberRadii[i] = r;
      emberAngles[i] = angle;
      emberSpeeds[i] = (Math.random() * 0.4 + 0.2) * (Math.random() > 0.5 ? 1 : -1);
    }

    emberGeometry.setAttribute('position', new THREE.BufferAttribute(emberPositions, 3));

    const emberMaterial = new THREE.PointsMaterial({
      color: 0xC9A24B,
      map: particleTexture,
      size: 0.32,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.embers = new THREE.Points(emberGeometry, emberMaterial);
    this.embers.userData = { radii: emberRadii, angles: emberAngles, speeds: emberSpeeds };
    this.scene.add(this.embers);
  }

  updateLayoutPosition() {
    if (!this.buildingGroup) return;

    const width = this.container.clientWidth;
    this.isMobile = width < 768;
    const isRtl = document.documentElement.dir === 'rtl';

    if (this.isMobile) {
      this.buildingGroup.position.set(0, -0.6, -1);
      this.buildingGroup.scale.set(0.72, 0.72, 0.72);
    } else {
      // In Arabic RTL, building is shifted to the left (-1.65); in English LTR, shifted to the right (+1.65)
      this.buildingGroup.position.set(isRtl ? -1.65 : 1.65, 0.15, 0);
      this.buildingGroup.scale.set(1.08, 1.08, 1.08);
    }
  }

  bindEvents() {
    // Smooth Mouse/Pointer Tracking
    window.addEventListener('pointermove', (e) => {
      const halfW = window.innerWidth / 2;
      const halfH = window.innerHeight / 2;
      this.mouse.targetX = (e.clientX - halfW) / halfW;
      this.mouse.targetY = (e.clientY - halfH) / halfH;
    }, { passive: true });

    // Scroll Integration
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      const maxScroll = window.innerHeight;
      this.scrollProgress = Math.min(scrolled / maxScroll, 1.5);
    }, { passive: true });

    // Window Resize
    window.addEventListener('resize', () => this.onResize(), { passive: true });

    // Page Visibility
    document.addEventListener('visibilitychange', () => {
      this.isVisible = document.visibilityState === 'visible';
    });

    // Language Direction Switch
    window.addEventListener('languageChanged', () => {
      this.updateLayoutPosition();
    });
  }

  setupIntersectionObserver() {
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          this.isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );

    observer.observe(this.container);
  }

  onResize() {
    if (!this.renderer || !this.camera || !this.container) return;

    const width = this.container.clientWidth;
    const height = this.container.clientHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    this.updateLayoutPosition();
  }

  animate() {
    if (!this.isVisible || this.isDisposed) return;

    const delta = this.clock.getDelta();
    const elapsedTime = this.clock.getElapsedTime();

    // 1. Damped Mouse Parallax Lerping
    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.045;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.045;

    // 2. Architecture Majestic Rotation & Floating
    if (this.buildingGroup) {
      // Slow primary rotation + gentle mouse follow
      this.buildingGroup.rotation.y = elapsedTime * 0.09 + this.mouse.x * 0.38;
      this.buildingGroup.rotation.x = this.mouse.y * 0.14;
      this.buildingGroup.rotation.z = Math.sin(elapsedTime * 0.5) * 0.015;

      // Vertical breathing and scroll-linked sink
      const baseY = this.isMobile ? -0.6 : 0.15;
      this.buildingGroup.position.y = baseY + Math.sin(elapsedTime * 0.8) * 0.06 - this.scrollProgress * 1.6;
    }

    // 3. Counter-Rotating Orbital Rings
    if (this.orbitRings) {
      this.orbitRings.children[0].rotation.z = elapsedTime * 0.2;
      this.orbitRings.children[1].rotation.z = -elapsedTime * 0.15;
    }

    // 4. Moving Mouse Light
    if (this.mouseLight) {
      this.mouseLight.position.x = this.mouse.x * 6 + 1;
      this.mouseLight.position.y = 3 - this.mouse.y * 4;
    }

    // 5. Convective Gold Dust Upward Drift
    if (this.particles) {
      const positions = this.particles.geometry.attributes.position.array;
      const velocities = this.particles.userData.velocities;
      for (let i = 0; i < velocities.length; i++) {
        positions[i * 3 + 1] += delta * velocities[i];
        if (positions[i * 3 + 1] > 7) {
          positions[i * 3 + 1] = -5;
        }
      }
      this.particles.geometry.attributes.position.needsUpdate = true;
      this.particles.rotation.y = elapsedTime * 0.02;
    }

    // 6. Orbital Embers Swirl
    if (this.embers) {
      const positions = this.embers.geometry.attributes.position.array;
      const { radii, angles, speeds } = this.embers.userData;
      for (let i = 0; i < angles.length; i++) {
        angles[i] += delta * speeds[i];
        positions[i * 3 + 0] = Math.cos(angles[i]) * radii[i];
        positions[i * 3 + 2] = Math.sin(angles[i]) * radii[i];
      }
      this.embers.geometry.attributes.position.needsUpdate = true;
    }

    // 7. Subtle Camera Dolly on Scroll & Parallax
    this.camera.position.x = this.mouse.x * 0.55;
    this.camera.position.y = 2.2 - this.mouse.y * 0.35 + this.scrollProgress * 0.7;
    this.camera.lookAt(0, 0.6 - this.scrollProgress * 0.6, 0);

    this.renderer.render(this.scene, this.camera);
  }

  dispose() {
    this.isDisposed = true;
    if (this.renderer) {
      this.renderer.setAnimationLoop(null);
      this.renderer.dispose();
    }

    if (this.scene) {
      this.scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          if (Array.isArray(obj.material)) {
            obj.material.forEach(m => m.dispose());
          } else {
            obj.material.dispose();
          }
        }
      });
    }
  }
}
