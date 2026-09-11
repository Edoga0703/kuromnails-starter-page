document.addEventListener('DOMContentLoaded', () => {
    // 1. Carrusel Horizontal con Botones Prev / Next
    const setupCarousel = (wrapperId) => {
        const carousel = document.getElementById(wrapperId);
        if (!carousel) return;
        
        const prevBtn = carousel.parentElement.querySelector('.prev-btn');
        const nextBtn = carousel.parentElement.querySelector('.next-btn');

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                carousel.scrollBy({ left: -320, behavior: 'smooth' });
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                carousel.scrollBy({ left: 320, behavior: 'smooth' });
            });
        }
    };

    setupCarousel('prod-carousel');
    setupCarousel('appt-carousel');

    // 2. Menú Móvil Desplegable (Drawer)
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');
    
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (mainNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Cerrar menú al hacer clic en un enlace
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    // 3. Efecto Header al hacer Scroll
    const header = document.querySelector('.ecommerce-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.7)';
            header.style.background = 'rgba(8, 4, 13, 0.95)';
        } else {
            header.style.boxShadow = 'none';
            header.style.background = 'var(--bg-glass)';
        }
    });

    // 4. Contador Dinámico del Carrito
    let cartItemsCount = 0;
    const cartCountEl = document.getElementById('cart-count');
    const quickAddBtns = document.querySelectorAll('.quick-add');

    quickAddBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            cartItemsCount++;
            if (cartCountEl) {
                cartCountEl.textContent = cartItemsCount;
                cartCountEl.style.transform = 'scale(1.4)';
                setTimeout(() => {
                    cartCountEl.style.transform = 'scale(1)';
                }, 250);
            }

            // Efecto visual momentáneo en el botón
            const icon = btn.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-check');
                btn.style.background = '#25d366';
                btn.style.color = 'white';

                setTimeout(() => {
                    icon.classList.remove('fa-check');
                    icon.classList.add('fa-plus');
                    btn.style.background = '';
                    btn.style.color = '';
                }, 1200);
            }
        });
    });

    // 5. Animación de Aparición al Scroll (Intersection Observer)
    const observerOptions = {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        revealObserver.observe(el);
    });
});
