window.addEventListener('load', () => {

    initializeCarousel();
    const observer = new MutationObserver((mutations, obs) => {
        initializeCarousel();
        obs.disconnect();
        });

    const config = { attributes: true, attributeFilter: ['class'], childList: true, subtree: true };
    observer.observe(document.documentElement, config);

    function initializeCarousel() {
        const isDarkMode = document.documentElement.classList.contains('dark');
        const slides = document.querySelector('.carousel-slides');
        const slideItems = document.querySelectorAll(isDarkMode ? '.carousel-slide:not(.dark\\:hidden)' : '.carousel-slide:not(.hidden)');
        const prevBtn = document.querySelector('.carousel-btn-prev');
        const nextBtn = document.querySelector('.carousel-btn-next');
        const indicators = document.querySelector('.carousel-indicators');

        if (slides && slideItems.length && prevBtn && nextBtn && indicators) {
            let currentSlide = 0;
            const totalSlides = slideItems.length;

            for (let i = 0; i < totalSlides; i++) {
                const indicator = document.createElement('div');
                indicator.classList.add('carousel-indicator');
                if (i === 0) indicator.classList.add('active');
                indicator.addEventListener('click', () => goToSlide(i));
                indicators.appendChild(indicator);
            }

            function goToSlide(n) {
                currentSlide = (n + totalSlides) % totalSlides;
                updateCarousel();
            }

            function updateCarousel() {
                slides.style.transform = `translateX(-${currentSlide * 100}%)`;
                document.querySelectorAll('.carousel-indicator').forEach((ind, i) => {
                    ind.classList.toggle('active', i === currentSlide);
                });
            }

            prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
            nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));
        }
    }
});
