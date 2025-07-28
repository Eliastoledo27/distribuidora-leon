// Variables globales
let currentSection = 0;
const sections = ['hero', 'products', 'pricing', 'about', 'revendedores', 'footer'];

// Elementos del DOM
const scrollProgressBar = document.querySelector('.scroll-progress-bar');
const sectionNavBtns = document.querySelectorAll('.section-nav-btn');
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuClose = document.querySelector('.mobile-menu-close');
const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-links a');

// Scroll Progress
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.offsetHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    scrollProgressBar.style.width = scrollPercent + '%';
});

// Navegación por secciones (manual)
sectionNavBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const targetSection = document.getElementById(sections[index]);
        if (targetSection) {
            targetSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Actualizar botón activo basado en scroll manual
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    
    sections.forEach((sectionId, index) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                // Remover clase activa de todos los botones
                sectionNavBtns.forEach(btn => btn.classList.remove('active'));
                // Agregar clase activa al botón correspondiente
                if (sectionNavBtns[index]) {
                    sectionNavBtns[index].classList.add('active');
                }
            }
        }
    });
});

// Navegación móvil
mobileMenuToggle.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    mobileMenuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

mobileMenuClose.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    mobileMenuOverlay.classList.remove('active');
    document.body.style.overflow = '';
});

mobileMenuOverlay.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    mobileMenuOverlay.classList.remove('active');
    document.body.style.overflow = '';
});

// Enlaces del menú móvil
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
        
        // Cerrar menú móvil
        mobileMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Intersection Observer para animaciones
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Observar elementos con animaciones
document.querySelectorAll('.hidden, .section-reveal-left, .section-reveal-right').forEach(el => {
    observer.observe(el);
});

// Inicializar primera sección como activa
if (sectionNavBtns.length > 0) {
    sectionNavBtns[0].classList.add('active');
} 