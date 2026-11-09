/**
 * Project Cards 3D Tilt & Subtle Depth Dynamics
 * Luxury Micro-Interactions
 */

export class CardTiltManager {
  constructor(cardSelector = '.project-card') {
    this.cards = document.querySelectorAll(cardSelector);
    this.isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (!this.isReducedMotion && !this.isTouch && this.cards.length > 0) {
      this.init();
    }
  }

  init() {
    this.cards.forEach(card => {
      let bounds = null;
      let mouseX = 0;
      let mouseY = 0;
      let currentX = 0;
      let currentY = 0;
      let isHovered = false;
      let rafId = null;

      const updateTransform = () => {
        if (!isHovered && Math.abs(currentX) < 0.05 && Math.abs(currentY) < 0.05) {
          card.style.transform = '';
          return;
        }

        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        // Subtle 3D perspective rotation (max 6deg)
        const rotX = -currentY * 6;
        const rotY = currentX * 6;

        card.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateY(-6px)`;

        rafId = requestAnimationFrame(updateTransform);
      };

      card.addEventListener('mouseenter', () => {
        bounds = card.getBoundingClientRect();
        isHovered = true;
        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(updateTransform);
      });

      card.addEventListener('mousemove', (e) => {
        if (!bounds) bounds = card.getBoundingClientRect();
        const px = (e.clientX - bounds.left) / bounds.width;
        const py = (e.clientY - bounds.top) / bounds.height;
        mouseX = (px - 0.5) * 2;
        mouseY = (py - 0.5) * 2;
      });

      card.addEventListener('mouseleave', () => {
        isHovered = false;
        mouseX = 0;
        mouseY = 0;
      });
    });
  }
}

