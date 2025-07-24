// Animate navbar slide-in with staggered logo and nav links
window.addEventListener('DOMContentLoaded', () => {
  // Navbar slide-in (navbar itself)
  gsap.to('.navbar', { y: 0, opacity: 1, duration: 1.1, ease: 'power3.out' });

  // Stagger logo and nav links inside navbar-inner
  gsap.from(['.navbar-inner .logo', '.navbar-inner .nav-links li'], {
    y: -30,
    opacity: 0,
    stagger: 0.13,
    delay: 0.4,
    duration: 0.7,
    ease: 'power2.out'
  });

  // Hero content fade-in (scroll-triggered)
  gsap.to('.hero-content', {
    opacity: 1,
    y: 0,
    duration: 1.2,
    delay: 0.7,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.hero-content',
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });

  // Button pulse (infinite, with bounce)
  gsap.to('.cta-btn', {
    scale: 1.12,
    boxShadow: '0 0 40px 10px #00c6ff88',
    repeat: -1,
    yoyo: true,
    duration: 0.6,
    ease: 'power1.inOut',
    delay: 1.2
  });

  // Scroll-triggered fade-ins for all .fade-in elements
  gsap.utils.toArray('.fade-in').forEach(el => {
    gsap.fromTo(el,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
  });
});
  