// Nav krijgt een achtergrond zodra je scrolt
const nav = document.querySelector('.nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Zachte reveal bij scrollen
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// Video: als er (nog) geen bestand is, blijft de poster staan
const video = document.querySelector('.film-media');
if (video) video.addEventListener('error', () => video.removeAttribute('autoplay'), true);
