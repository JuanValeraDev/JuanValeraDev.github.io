
window.addEventListener('load', () => {

    const observer = new MutationObserver((mutations, obs) => {
        const slides = document.querySelector('.carousel-slides');
        const slideItems = document.querySelectorAll('.carousel-slide');
        const prevBtn = document.querySelector('.carousel-btn-prev');
        const nextBtn = document.querySelector('.carousel-btn-next');
        const indicators = document.querySelector('.carousel-indicators');

        if (slides && slideItems.length && prevBtn && nextBtn && indicators) {

            let currentSlide = 0;
            const totalSlides = slideItems.length;

            // Crear indicadores
            for (let i = 0; i < totalSlides; i++) {
                const indicator = document.createElement('div');
                indicator.classList.add('carousel-indicator');
                if (i === 0) indicator.classList.add('active');
                indicator.addEventListener('click', () => goToSlide(i));
                indicators.appendChild(indicator);
            }

            // Función para ir a una diapositiva específica
            function goToSlide(n) {
                currentSlide = (n + totalSlides) % totalSlides;
                updateCarousel();
            }

            // Actualizar el carrusel
            function updateCarousel() {
                slides.style.transform = `translateX(-${currentSlide * 100}%)`;
                document.querySelectorAll('.carousel-indicator').forEach((ind, i) => {
                    ind.classList.toggle('active', i === currentSlide);
                });
            }

            // Event listeners para los botones
            prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
            nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));

            obs.disconnect(); // Deja de observar una vez que los elementos han sido encontrados
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});
