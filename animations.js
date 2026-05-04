gsap.registerPlugin(ScrollTrigger);


gsap.from('.hero-left h1', {
  duration: 1,
  y: 60,
  opacity: 0,
  ease: 'power3.out',
  delay: 0.2
});
gsap.from('.hero-left p', {
  duration: 1,
  y: 40,
  opacity: 0,
  ease: 'power3.out',
  delay: 0.45
});
gsap.from('.btn-primary', {
  duration: 0.8,
  y: 30,
  opacity: 0,
  ease: 'power3.out',
  delay: 0.65
});
gsap.from('.hero-right img', {
  duration: 1.1,
  y: 80,
  opacity: 0,
  ease: 'power3.out',
  delay: 0.4
});
gsap.from('.badge-top', {
  duration: 0.8,
  x: 40,
  opacity: 0,
  ease: 'back.out(1.7)',
  delay: 0.9
});
gsap.from('.badge-bottom', {
  duration: 0.8,
  x: -40,
  opacity: 0,
  ease: 'back.out(1.7)',
  delay: 1.1
});


gsap.from('.features-header h2, .features-header p', {
  scrollTrigger: { trigger: '.features', start: 'top 80%' },
  duration: 0.8,
  y: 40,
  opacity: 0,
  stagger: 0.2,
  ease: 'power3.out'
});
gsap.from('.feature-card', {
  scrollTrigger: { trigger: '.features-grid', start: 'top 85%' },
  duration: 0.7,
  y: 50,
  opacity: 0,
  stagger: 0.12,
  ease: 'power3.out'
});


gsap.from('.connection-left img', {
  scrollTrigger: { trigger: '.connection', start: 'top 80%' },
  duration: 1,
  x: -60,
  opacity: 0,
  ease: 'power3.out'
});
gsap.from('.connection-right h2, .connection-right > p', {
  scrollTrigger: { trigger: '.connection', start: 'top 80%' },
  duration: 0.8,
  x: 60,
  opacity: 0,
  stagger: 0.2,
  ease: 'power3.out'
});
gsap.from('.connection-feature-item', {
  scrollTrigger: { trigger: '.connection-features', start: 'top 85%' },
  duration: 0.7,
  x: 50,
  opacity: 0,
  stagger: 0.15,
  ease: 'power3.out'
});



gsap.from('.install-header h2, .install-header p', {
  scrollTrigger: { trigger: '.install', start: 'top 80%' },
  duration: 0.8,
  y: 40,
  opacity: 0,
  stagger: 0.2,
  ease: 'power3.out'
});
gsap.from('.step-number', {
  scrollTrigger: { trigger: '.install-steps', start: 'top 85%' },
  duration: 0.7,
  scale: 0.5,
  opacity: 0,
  stagger: 0.15,
  ease: 'back.out(1.7)'
});
gsap.from('.install-card', {
  scrollTrigger: { trigger: '.install-cards', start: 'top 85%' },
  duration: 0.7,
  y: 50,
  opacity: 0,
  stagger: 0.15,
  ease: 'power3.out'
});


gsap.from('.donate-left h2, .donate-left p, .btn-donate', {
  scrollTrigger: { trigger: '.donate', start: 'top 80%' },
  duration: 0.8,
  x: -50,
  opacity: 0,
  stagger: 0.18,
  ease: 'power3.out'
});
gsap.from('.donate-phone--front', {
  scrollTrigger: { trigger: '.donate', start: 'top 75%' },
  duration: 1,
  y: 80,
  opacity: 0,
  ease: 'power3.out',
  delay: 0.2
});
gsap.from('.donate-phone--back', {
  scrollTrigger: { trigger: '.donate', start: 'top 75%' },
  duration: 1,
  y: 80,
  opacity: 0,
  ease: 'power3.out',
  delay: 0.4
});



gsap.from('.testimonials-title', {
  scrollTrigger: { trigger: '.testimonials', start: 'top 80%' },
  duration: 0.8,
  y: 40,
  opacity: 0,
  ease: 'power3.out'
});
gsap.from('.review-card', {
  scrollTrigger: { trigger: '.testimonials-grid', start: 'top 85%' },
  duration: 0.7,
  y: 50,
  opacity: 0,
  stagger: 0.1,
  ease: 'power3.out'
});



gsap.from('.footer-cta-left h2, .footer-cta-left p', {
  scrollTrigger: { trigger: '.footer-cta', start: 'top 80%' },
  duration: 0.8,
  y: 40,
  opacity: 0,
  stagger: 0.2,
  ease: 'power3.out'
});
gsap.from('.store-btn', {
  scrollTrigger: { trigger: '.footer-cta-buttons', start: 'top 90%' },
  duration: 0.7,
  y: 30,
  opacity: 0,
  stagger: 0.15,
  ease: 'back.out(1.7)'
});
gsap.from('.footer-phone--front', {
  scrollTrigger: { trigger: '.footer-cta', start: 'top 75%' },
  duration: 1,
  y: 80,
  opacity: 0,
  ease: 'power3.out',
  delay: 0.2
});
gsap.from('.footer-phone--back', {
  scrollTrigger: { trigger: '.footer-cta', start: 'top 75%' },
  duration: 1,
  y: 80,
  opacity: 0,
  ease: 'power3.out',
  delay: 0.4
});