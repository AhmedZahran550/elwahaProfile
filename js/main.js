/**
 * Main Application Orchestrator
 * Alwaha Development (الواحة العقارية)
 */

import { I18nManager, projectsData } from './i18n.js';
import { AudioManager } from './audio.js';
import { CardTiltManager } from './three-projects.js';

class App {
  constructor() {
    this.i18n = null;
    this.audio = null;
    this.tiltManager = null;

    document.addEventListener('DOMContentLoaded', () => this.init());
  }

  init() {
    // 1. Initialize Core Engines
    this.i18n = new I18nManager();
    this.audio = new AudioManager();

    // 2. Initialize Card Tilt
    this.tiltManager = new CardTiltManager();

    // 3. Bind UI Components
    this.setupStickyHeader();
    this.setupMobileMenu();
    this.setupScrollReveal();
    this.setupCounters();
    this.setupProjectFilters();
    this.setupContactForm();
    this.setupProjectDetailsPage();
    this.highlightActiveNavLink();
  }

  /* ==========================================================================
     Sticky Header
     ========================================================================== */
  setupStickyHeader() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    const handleScroll = () => {
      if (window.scrollY > 40) {
        header.classList.add('site-header--scrolled');
      } else {
        header.classList.remove('site-header--scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  /* ==========================================================================
     Mobile Navigation Drawer
     ========================================================================== */
  setupMobileMenu() {
    const toggle = document.querySelector('.menu-toggle');
    const drawer = document.querySelector('.mobile-nav');
    if (!toggle || !drawer) return;

    const toggleMenu = (open) => {
      const isOpen = typeof open === 'boolean' ? open : !drawer.classList.contains('is-open');
      drawer.classList.toggle('is-open', isOpen);
      toggle.classList.toggle('is-active', isOpen);
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    };

    toggle.addEventListener('click', () => toggleMenu());

    // Close when clicking nav links
    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => toggleMenu(false));
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
        toggleMenu(false);
      }
    });
  }

  /* ==========================================================================
     Scroll Reveal Observer
     ========================================================================== */
  setupScrollReveal() {
    const reveals = document.querySelectorAll('[data-reveal]');
    if (!reveals.length) return;

    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      reveals.forEach(el => el.classList.add('is-revealed'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    reveals.forEach(el => observer.observe(el));
  }

  /* ==========================================================================
     Animated Number Counters
     ========================================================================== */
  setupCounters() {
    const counterElements = document.querySelectorAll('[data-counter]');
    if (!counterElements.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const targetNum = parseInt(el.getAttribute('data-counter'), 10);
          const duration = 1600;
          const start = performance.now();

          const updateNumber = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(easeProgress * targetNum);
            el.textContent = current.toLocaleString('ar-EG-u-nu-latn'); // Clean modern numerals

            if (progress < 1) {
              requestAnimationFrame(updateNumber);
            } else {
              el.textContent = targetNum;
            }
          };

          requestAnimationFrame(updateNumber);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.25 });

    counterElements.forEach(el => observer.observe(el));
  }

  /* ==========================================================================
     Project Filter Tabs
     ========================================================================== */
  setupProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.project-card[data-zone]');
    if (!filterButtons.length || !cards.length) return;

    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');

        const filter = btn.getAttribute('data-filter');
        cards.forEach(card => {
          const zone = card.getAttribute('data-zone');
          if (filter === 'all' || zone === filter) {
            card.style.display = 'flex';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 30);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(16px)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 250);
          }
        });
      });
    });
  }

  /* ==========================================================================
     Contact Form Handler & URL Pre-filling
     ========================================================================== */
  setupContactForm() {
    const form = document.getElementById('contact-form');
    const select = document.getElementById('project-select');

    // Populate project options if empty
    if (select && select.options.length <= 1) {
      projectsData.forEach(p => {
        const opt = document.createElement('option');
        opt.value = p.id;
        opt.textContent = `${p.arName} (${p.enName})`;
        select.appendChild(opt);
      });
    }

    // Check for ?project= query string to prefill
    try {
      const params = new URLSearchParams(window.location.search);
      const projParam = params.get('project');
      if (projParam && select) {
        select.value = projParam;
      }
    } catch (e) {}

    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const statusBox = document.getElementById('form-status');
      const submitBtn = form.querySelector('button[type="submit"]');

      const name = form.querySelector('#name')?.value.trim();
      const phone = form.querySelector('#phone')?.value.trim();

      if (!name || !phone || phone.length < 9) {
        if (statusBox) {
          statusBox.className = 'form-status form-status--error';
          statusBox.textContent = this.i18n.t('form_error');
          statusBox.style.display = 'block';
        }
        return;
      }

      // Simulate sending
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = this.i18n.t('form_sending');
      }

      setTimeout(() => {
        if (statusBox) {
          statusBox.className = 'form-status form-status--success';
          statusBox.textContent = this.i18n.t('form_success');
          statusBox.style.display = 'block';
        }
        form.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = this.i18n.t('form_submit');
        }
      }, 700);
    });
  }

  /* ==========================================================================
     Dynamic Project Details Handler (when query ?project= is present)
     ========================================================================== */
  setupProjectDetailsPage() {
    const isProjectDetailsPage = window.location.pathname.includes('project-details.html');
    if (!isProjectDetailsPage) return;

    let projId = 'al-gouri';
    try {
      const params = new URLSearchParams(window.location.search);
      if (params.has('project')) {
        projId = params.get('project');
      }
    } catch (e) {}

    const project = projectsData.find(p => p.id === projId) || projectsData[0];
    if (!project) return;

    const renderDetails = () => {
      const isAr = this.i18n.getLang() === 'ar';
      const name = isAr ? project.arName : project.enName;
      const bldg = isAr ? project.bldgAr : project.bldgEn;
      const flower = isAr ? project.flowerAr : project.flowerEn;
      const desc = isAr ? project.descAr : project.descEn;

      document.title = `${name} | ${this.i18n.t('brand_full')}`;

      // Update badge
      const badge = document.querySelector('.project-details__header .project-card__badge');
      if (badge) badge.textContent = isAr ? `زهرة ${flower}` : `Flower: ${flower}`;

      // Update title
      const title = document.querySelector('.project-details__header .page-hero__title');
      if (title) title.textContent = name;

      // Update subtitle
      const subtitle = document.querySelector('.project-details__header p.text-steel');
      if (subtitle) subtitle.textContent = `${bldg} · ${isAr ? project.enName : project.arName}`;

      // Update images
      const galleryImages = document.querySelectorAll('.project-details__gallery .gallery-portrait img');
      if (galleryImages.length >= 2) {
        const isInsidePages = window.location.pathname.includes('/pages/') || !document.querySelector('link[href^="css/"]');
        const prefix = isInsidePages ? '../' : '';
        galleryImages[0].src = prefix + project.imgPrimary;
        galleryImages[0].alt = `${name} - Façade`;
        galleryImages[1].src = prefix + project.imgHover;
        galleryImages[1].alt = `${name} - Site / Perspective`;
      }

      // Update CTA links
      const ctaBtn = document.querySelector('.project-details__header a.btn--primary');
      if (ctaBtn) ctaBtn.href = `contact.html?project=${project.id}`;

      const inquiryBtn = document.querySelector('.specs-panel + div a.btn--primary');
      if (inquiryBtn) inquiryBtn.href = `contact.html?project=${project.id}`;

      // Update WhatsApp link with prefilled text
      const waBtn = document.querySelector('.specs-panel + div a.btn--secondary');
      if (waBtn) {
        const waMsg = isAr 
          ? `مرحباً، أود الاستفسار عن تفاصيل ${project.arName} بالحي المتميز` 
          : `Hello, I would like to inquire about ${project.enName} in Al Hay Al Motamayez`;
        waBtn.href = `https://wa.me/201113929136?text=${encodeURIComponent(waMsg)}`;
      }

      // Update overview lead
      const overviewLead = document.querySelector('.specs-panel + div p.lead');
      if (overviewLead) overviewLead.textContent = desc;

      // Update spec values
      const specVals = document.querySelectorAll('.spec-box__val');
      if (specVals.length >= 4) {
        specVals[0].textContent = bldg;
        specVals[1].textContent = isAr ? `${project.units} وحدات (خصوصية تامة)` : `${project.units} Exclusive Units`;
        specVals[2].textContent = project.unitArea;
        specVals[3].textContent = project.plotArea;
      }
    };

    renderDetails();
    window.addEventListener('languageChanged', renderDetails);
  }

  /* ==========================================================================
     Active Navigation Link Highlight
     ========================================================================== */
  highlightActiveNavLink() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav__link, .mobile-nav__link');

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      const linkBase = href ? href.split('#')[0].split('?')[0].split('/').pop() : '';
      if (linkBase === currentPath || (currentPath === '' && linkBase === 'index.html')) {
        link.classList.add('is-active');
      } else {
        link.classList.remove('is-active');
      }
    });
  }
}

// Instantiate global app
window.alwahaApp = new App();

