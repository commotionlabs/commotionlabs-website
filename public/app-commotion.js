// ============================================
// COMMOTION LABS - ENERGY SYSTEM INTERACTIONS
// ============================================

class CommotionLabs {
  constructor() {
    this.mouse = { x: 0, y: 0 };
    this.particles = [];
    this.isLoaded = false;
    this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    this.init();
  }

  init() {
    this.bindEvents();
    this.initEnergyField();
    this.initKineticTypography();
    this.initProcessMotion();
    this.initMagneticField();
    this.initScrollAnimations();
    this.initCounters();
    this.initInteractiveElements();
    
    // Mark as loaded
    setTimeout(() => {
      this.isLoaded = true;
      document.body.classList.add('loaded');
    }, 1000);
  }

  bindEvents() {
    // Mouse tracking for custom cursor and magnetic effects
    document.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
      this.updateCursor(e.clientX, e.clientY);
      this.updateMagneticElements(e.clientX, e.clientY);
    });

    // Resize handler
    window.addEventListener('resize', this.debounce(() => {
      this.handleResize();
    }, 250));

    // Scroll handler for parallax and reveal animations
    window.addEventListener('scroll', this.throttle(() => {
      this.handleScroll();
    }, 16));

    // Focus handlers for accessibility
    document.addEventListener('focusin', (e) => {
      e.target.classList.add('focused');
    });

    document.addEventListener('focusout', (e) => {
      e.target.classList.remove('focused');
    });
  }

  // ============================================
  // ENERGY FIELD BACKGROUND
  // ============================================

  initEnergyField() {
    if (this.reducedMotion) return;

    const canvas = document.getElementById('energy-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      this.particles = [];
      const particleCount = Math.min(50, Math.floor(window.innerWidth / 30));
      
      for (let i = 0; i < particleCount; i++) {
        this.particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.1,
          color: `rgba(${255}, ${Math.random() * 50 + 107}, ${Math.random() * 100 + 53}, ${Math.random() * 0.3 + 0.1})`
        });
      }
    };

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections between nearby particles
      for (let i = 0; i < this.particles.length; i++) {
        for (let j = i + 1; j < this.particles.length; j++) {
          const dx = this.particles[i].x - this.particles[j].x;
          const dy = this.particles[i].y - this.particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.strokeStyle = `rgba(255, 107, 53, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(this.particles[i].x, this.particles[i].y);
            ctx.lineTo(this.particles[j].x, this.particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Update and draw particles
      this.particles.forEach(particle => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Mouse interaction
        const dx = this.mouse.x - particle.x;
        const dy = this.mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          const force = (150 - distance) / 150;
          particle.vx += dx * force * 0.0001;
          particle.vy += dy * force * 0.0001;
        }

        // Draw particle
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(animateParticles);
    };

    resizeCanvas();
    createParticles();
    animateParticles();

    window.addEventListener('resize', () => {
      resizeCanvas();
      createParticles();
    });
  }

  // ============================================
  // KINETIC TYPOGRAPHY
  // ============================================

  initKineticTypography() {
    const kineticTitle = document.querySelector('.kinetic-title');
    if (!kineticTitle || this.reducedMotion) return;

    const chars = kineticTitle.querySelectorAll('.char');
    
    // Animate characters in sequence
    chars.forEach((char, index) => {
      const physics = char.closest('.word-cluster').getAttribute('data-physics');
      
      setTimeout(() => {
        char.style.opacity = '1';
        char.style.transform = 'translateY(0)';
        
        // Apply physics-based animations
        switch (physics) {
          case 'explode':
            this.applyExplodeEffect(char, index);
            break;
          case 'orbit':
            this.applyOrbitEffect(char, index);
            break;
          case 'wave':
            this.applyWaveEffect(char, index);
            break;
          case 'magnetize':
            this.applyMagnetizeEffect(char, index);
            break;
        }
      }, index * 100);
    });

    // Continuous subtle animation
    this.animateFloatingIcons();
  }

  applyExplodeEffect(char, index) {
    const delay = index * 50;
    char.style.animation = `letterExplode 1.5s ease-out ${delay}ms forwards`;
    
    // Add keyframes dynamically
    if (!document.getElementById('explode-keyframes')) {
      const style = document.createElement('style');
      style.id = 'explode-keyframes';
      style.textContent = `
        @keyframes letterExplode {
          0% { transform: translateY(20px) scale(0.8); opacity: 0; }
          50% { transform: translateY(-10px) scale(1.2); opacity: 1; }
          100% { transform: translateY(0) scale(1); opacity: 1; }
        }
      `;
      document.head.appendChild(style);
    }
  }

  applyOrbitEffect(char, index) {
    char.style.animation = `letterOrbit 3s ease-in-out infinite`;
    char.style.animationDelay = `${index * 0.1}s`;
  }

  applyWaveEffect(char, index) {
    char.style.animation = `letterWave 2s ease-in-out infinite`;
    char.style.animationDelay = `${index * 0.1}s`;
  }

  applyMagnetizeEffect(char, index) {
    char.addEventListener('mouseenter', () => {
      char.style.transform = 'scale(1.2) translateY(-5px)';
      char.style.color = '#FF6B35';
    });
    
    char.addEventListener('mouseleave', () => {
      char.style.transform = 'scale(1) translateY(0)';
      char.style.color = '';
    });
  }

  animateFloatingIcons() {
    const floatingIcons = document.querySelectorAll('.floating-icon');
    
    floatingIcons.forEach((icon, index) => {
      const orbit = icon.getAttribute('data-orbit');
      const duration = 15 + (parseInt(orbit) * 2);
      const delay = parseInt(orbit) * 2;
      
      icon.style.animation = `iconFloat ${duration}s ease-in-out infinite`;
      icon.style.animationDelay = `${delay}s`;
    });
  }

  // ============================================
  // PROCESS MOTION
  // ============================================

  initProcessMotion() {
    if (this.reducedMotion) return;

    const processStage = document.querySelector('.process-stage');
    if (!processStage) return;

    // Animate process nodes
    const nodes = document.querySelectorAll('.process-node');
    nodes.forEach((node, index) => {
      const delay = index * 5;
      node.style.animationDelay = `${delay}s`;
      
      // Add hover interactions
      node.addEventListener('mouseenter', () => {
        node.querySelector('.node-content').style.transform = 'scale(1.1)';
        node.querySelector('.node-pulse').style.animationDuration = '0.5s';
      });
      
      node.addEventListener('mouseleave', () => {
        node.querySelector('.node-content').style.transform = 'scale(1)';
        node.querySelector('.node-pulse').style.animationDuration = '1.5s';
      });
    });

    // Generate organic shape path
    this.generateOrganicShape();
  }

  generateOrganicShape() {
    const organicPath = document.getElementById('organic-path');
    if (!organicPath) return;

    const generatePath = () => {
      const points = [];
      const centerX = 200;
      const centerY = 200;
      const baseRadius = 150;
      
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        const radiusVariation = 0.3 + Math.random() * 0.4;
        const radius = baseRadius * radiusVariation;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        points.push({ x, y });
      }
      
      // Create smooth curve
      let path = `M ${points[0].x} ${points[0].y}`;
      for (let i = 1; i < points.length; i++) {
        const current = points[i];
        const next = points[(i + 1) % points.length];
        const cp1x = current.x + (next.x - current.x) * 0.3;
        const cp1y = current.y + (next.y - current.y) * 0.3;
        path += ` Q ${cp1x} ${cp1y} ${next.x} ${next.y}`;
      }
      path += ' Z';
      
      organicPath.setAttribute('d', path);
    };

    generatePath();
    
    // Regenerate shape periodically
    setInterval(generatePath, 8000);
  }

  // ============================================
  // MAGNETIC FIELD INTERACTIONS
  // ============================================

  initMagneticField() {
    if (this.reducedMotion) return;

    const magneticElements = document.querySelectorAll('[data-magnetic]');
    const magneticParticles = document.querySelectorAll('.magnetic-particle');

    // Position particles randomly
    magneticParticles.forEach((particle, index) => {
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
    });

    // Update particle positions based on mouse
    document.addEventListener('mousemove', (e) => {
      const rect = document.querySelector('.magnetic-field')?.getBoundingClientRect();
      if (!rect) return;

      const mouseX = (e.clientX - rect.left) / rect.width;
      const mouseY = (e.clientY - rect.top) / rect.height;

      magneticParticles.forEach((particle, index) => {
        const charge = particle.getAttribute('data-charge');
        const force = charge === 'positive' ? 1 : -1;
        const distance = 100; // pixels

        const deltaX = (mouseX - 0.5) * force * distance;
        const deltaY = (mouseY - 0.5) * force * distance;

        particle.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      });
    });
  }

  updateMagneticElements(mouseX, mouseY) {
    const magneticElements = document.querySelectorAll('[data-magnetic]');
    
    magneticElements.forEach(element => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = mouseX - centerX;
      const deltaY = mouseY - centerY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      
      const magneticStrength = element.getAttribute('data-magnetic');
      const maxDistance = magneticStrength === 'strong' ? 150 : 100;
      
      if (distance < maxDistance) {
        const force = (maxDistance - distance) / maxDistance;
        const moveX = deltaX * force * 0.3;
        const moveY = deltaY * force * 0.3;
        
        element.style.transform = `translate(${moveX}px, ${moveY}px)`;
      } else {
        element.style.transform = 'translate(0, 0)';
      }
    });
  }

  // ============================================
  // SCROLL ANIMATIONS
  // ============================================

  initScrollAnimations() {
    // Intersection Observer for scroll-triggered animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          this.triggerElementAnimation(entry.target);
        }
      });
    }, observerOptions);

    // Observe animated elements
    const animatedElements = document.querySelectorAll(
      '.focus-card, .stat-item, .case-item, .value-item, [data-split]'
    );
    
    animatedElements.forEach(el => {
      observer.observe(el);
    });
  }

  triggerElementAnimation(element) {
    if (element.classList.contains('focus-card')) {
      this.animateFocusCard(element);
    } else if (element.classList.contains('stat-item')) {
      this.animateStatCounter(element);
    } else if (element.classList.contains('case-item')) {
      this.animateCaseStudy(element);
    }
  }

  animateFocusCard(card) {
    const pulse = card.querySelector('.card-pulse');
    const icon = card.querySelector('.card-icon');
    
    setTimeout(() => {
      card.style.transform = 'translateY(0)';
      card.style.opacity = '1';
    }, Math.random() * 300);
    
    if (pulse) {
      pulse.style.animationDelay = '0s';
    }
  }

  animateStatCounter(statItem) {
    const number = statItem.querySelector('.stat-number');
    const countTo = parseInt(number.getAttribute('data-count-to'));
    const energy = statItem.querySelector('.stat-energy');
    
    if (!countTo) return;
    
    let current = 0;
    const increment = countTo / 60; // Animate over ~1 second at 60fps
    
    const counter = () => {
      current += increment;
      if (current >= countTo) {
        current = countTo;
        number.textContent = current.toFixed(0);
        return;
      }
      
      number.textContent = current.toFixed(0);
      requestAnimationFrame(counter);
    };
    
    counter();
    
    if (energy) {
      energy.style.animationDelay = '0s';
    }
  }

  animateCaseStudy(caseItem) {
    const graph = caseItem.querySelector('[data-animate="growth"]');
    if (graph) {
      graph.style.animationDelay = '0s';
    }
  }

  // ============================================
  // INTERACTIVE ELEMENTS
  // ============================================

  initInteractiveElements() {
    // Enhanced hover effects for cards
    const interactiveCards = document.querySelectorAll('.focus-card, .case-item');
    
    interactiveCards.forEach(card => {
      card.addEventListener('mouseenter', (e) => {
        this.createRippleEffect(e, card);
        this.intensifyCardGlow(card);
      });
      
      card.addEventListener('mouseleave', () => {
        this.resetCardGlow(card);
      });
    });

    // Button interactions
    const ctaButtons = document.querySelectorAll('.cta-button, .cta-primary, .cta-secondary');
    
    ctaButtons.forEach(button => {
      button.addEventListener('mouseenter', (e) => {
        this.createButtonEnergy(button);
      });
      
      button.addEventListener('click', (e) => {
        this.createClickWave(e, button);
      });
    });

    // Case study navigation
    this.initCaseNavigation();
  }

  createRippleEffect(event, element) {
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const ripple = document.createElement('div');
    ripple.style.position = 'absolute';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.style.width = '20px';
    ripple.style.height = '20px';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(255, 107, 53, 0.3)';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'ripple 0.6s ease-out forwards';
    ripple.style.pointerEvents = 'none';
    ripple.style.zIndex = '10';
    
    element.appendChild(ripple);
    
    // Add ripple keyframes if not exists
    if (!document.getElementById('ripple-keyframes')) {
      const style = document.createElement('style');
      style.id = 'ripple-keyframes';
      style.textContent = `
        @keyframes ripple {
          to {
            transform: scale(20);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  }

  intensifyCardGlow(card) {
    card.style.boxShadow = '0 25px 80px rgba(255, 107, 53, 0.3)';
    card.style.borderColor = 'rgba(255, 107, 53, 0.4)';
    
    const icon = card.querySelector('.card-icon svg');
    if (icon) {
      icon.style.transform = 'scale(1.1)';
      icon.style.filter = 'drop-shadow(0 0 10px rgba(255, 107, 53, 0.5))';
    }
  }

  resetCardGlow(card) {
    card.style.boxShadow = '';
    card.style.borderColor = '';
    
    const icon = card.querySelector('.card-icon svg');
    if (icon) {
      icon.style.transform = '';
      icon.style.filter = '';
    }
  }

  createButtonEnergy(button) {
    const energy = button.querySelector('.cta-energy');
    if (energy) {
      energy.style.animation = 'none';
      energy.offsetHeight; // Trigger reflow
      energy.style.animation = 'energySweep 0.6s ease-out forwards';
    }
    
    // Add energy sweep keyframes
    if (!document.getElementById('energy-keyframes')) {
      const style = document.createElement('style');
      style.id = 'energy-keyframes';
      style.textContent = `
        @keyframes energySweep {
          0% { left: -100%; }
          100% { left: 100%; }
        }
      `;
      document.head.appendChild(style);
    }
  }

  createClickWave(event, button) {
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    const wave = document.createElement('div');
    wave.style.position = 'absolute';
    wave.style.left = x + 'px';
    wave.style.top = y + 'px';
    wave.style.width = size + 'px';
    wave.style.height = size + 'px';
    wave.style.borderRadius = '50%';
    wave.style.background = 'rgba(255, 255, 255, 0.3)';
    wave.style.transform = 'scale(0)';
    wave.style.animation = 'clickWave 0.4s ease-out forwards';
    wave.style.pointerEvents = 'none';
    
    button.appendChild(wave);
    
    setTimeout(() => {
      wave.remove();
    }, 400);
  }

  initCaseNavigation() {
    const caseDots = document.querySelectorAll('.nav-dot');
    const caseItems = document.querySelectorAll('.case-item');
    
    caseDots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        // Remove active classes
        caseDots.forEach(d => d.classList.remove('active'));
        caseItems.forEach(item => item.classList.remove('active'));
        
        // Add active classes
        dot.classList.add('active');
        if (caseItems[index]) {
          caseItems[index].classList.add('active');
          this.animateCaseStudy(caseItems[index]);
        }
      });
    });
  }

  // ============================================
  // COUNTERS
  // ============================================

  initCounters() {
    const counterElements = document.querySelectorAll('[data-counter="true"]');
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
          entry.target.classList.add('counted');
          this.animateStatCounter(entry.target);
        }
      });
    }, observerOptions);

    counterElements.forEach(el => {
      observer.observe(el);
    });
  }

  // ============================================
  // CUSTOM CURSOR
  // ============================================

  updateCursor(x, y) {
    if (this.reducedMotion) return;
    
    const cursor = document.body;
    cursor.style.setProperty('--cursor-x', x + 'px');
    cursor.style.setProperty('--cursor-y', y + 'px');
    
    // Show cursor
    const cursorElement = cursor.querySelector('::before') || cursor;
    if (cursorElement) {
      document.body.style.setProperty('--cursor-opacity', '1');
    }
  }

  // ============================================
  // UTILITY METHODS
  // ============================================

  handleResize() {
    // Reinitialize canvas-based animations
    if (!this.reducedMotion) {
      this.initEnergyField();
    }
  }

  handleScroll() {
    // Parallax effects
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    parallaxElements.forEach(element => {
      const speed = element.getAttribute('data-parallax') || 0.5;
      const yPos = -(scrolled * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
  }

  debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        timeout = null;
        if (!immediate) func(...args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func(...args);
    };
  }

  throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    }
  }
}

// ============================================
// SIGNATURE WAVE ANIMATION
// ============================================

class SignatureWave {
  constructor() {
    this.path = document.getElementById('signature-path');
    if (!this.path) return;
    
    this.points = [];
    this.amplitude = 50;
    this.frequency = 0.01;
    this.phase = 0;
    
    this.generateWave();
    this.animate();
  }
  
  generateWave() {
    const width = 800;
    const height = 200;
    const centerY = height / 2;
    
    let pathData = `M 0 ${centerY}`;
    
    for (let x = 0; x <= width; x += 5) {
      const y = centerY + Math.sin(x * this.frequency + this.phase) * this.amplitude * Math.sin(x * 0.005);
      pathData += ` L ${x} ${y}`;
    }
    
    this.path.setAttribute('d', pathData);
  }
  
  animate() {
    this.phase += 0.05;
    this.generateWave();
    requestAnimationFrame(() => this.animate());
  }
}

// ============================================
// INITIALIZATION
// ============================================

// Wait for DOM to be ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new CommotionLabs();
    new SignatureWave();
  });
} else {
  new CommotionLabs();
  new SignatureWave();
}

// Update CSS custom properties for JavaScript interactions
document.documentElement.style.setProperty('--cursor-x', '0px');
document.documentElement.style.setProperty('--cursor-y', '0px');
document.documentElement.style.setProperty('--cursor-opacity', '0');

// Add dynamic keyframes for various animations
const dynamicStyles = document.createElement('style');
dynamicStyles.textContent = `
  @keyframes letterOrbit {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    25% { transform: translateY(-5px) rotate(90deg); }
    50% { transform: translateY(0) rotate(180deg); }
    75% { transform: translateY(5px) rotate(270deg); }
  }
  
  @keyframes letterWave {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  
  @keyframes iconFloat {
    0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
    25% { transform: translate(10px, -15px) rotate(90deg) scale(1.05); }
    50% { transform: translate(0, -20px) rotate(180deg) scale(0.95); }
    75% { transform: translate(-10px, -5px) rotate(270deg) scale(1.02); }
  }
  
  @keyframes clickWave {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;

document.head.appendChild(dynamicStyles);