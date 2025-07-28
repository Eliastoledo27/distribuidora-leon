// Elementos del DOM
const scrollProgressBar = document.querySelector('.scroll-progress-bar');
const sectionNavBtns = document.querySelectorAll('.section-nav-btn');
const sections = ['hero', 'productos', 'pricing', 'about', 'revendedores', 'footer'];

// Forzar visibilidad inmediata de todas las secciones
document.addEventListener('DOMContentLoaded', function() {
    // Mostrar todas las secciones inmediatamente
    const allSections = document.querySelectorAll('section');
    allSections.forEach(section => {
        section.style.opacity = '1';
        section.style.visibility = 'visible';
        section.style.display = 'block';
        section.style.transform = 'none';
        section.style.animation = 'none';
    });
    
    // Mostrar específicamente la sección de productos
    const productsSection = document.querySelector('.products-section');
    if (productsSection) {
        productsSection.style.opacity = '1';
        productsSection.style.visibility = 'visible';
        productsSection.style.display = 'block';
        productsSection.style.transform = 'none';
        productsSection.style.animation = 'none';
    }
    
    // Mostrar todos los elementos de productos
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.style.opacity = '1';
        card.style.visibility = 'visible';
        card.style.display = 'block';
        card.style.transform = 'none';
        card.style.animation = 'none';
    });
});

// Actualizar barra de progreso
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.offsetHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    scrollProgressBar.style.width = scrollPercent + '%';
});

// Navegación por secciones
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    sections.forEach((sectionId, index) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                sectionNavBtns.forEach(btn => btn.classList.remove('active'));
                if (sectionNavBtns[index]) {
                    sectionNavBtns[index].classList.add('active');
                }
            }
        }
    });
});

// Botones de navegación lateral
sectionNavBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const targetSection = document.getElementById(sections[index]);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}); 