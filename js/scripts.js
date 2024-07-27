document.addEventListener('DOMContentLoaded', function () {
    const carousel1 = {
        container: document.getElementById('carousel1'),
        list: document.querySelector('#carousel1 .carousel1-list'),
        items: document.querySelectorAll('#carousel1 .carousel1-item'),
        currentIndex: 0,
        itemsToShow: 3,
        updatePosition: function () {
            const offset = this.currentIndex * (100 / this.itemsToShow);
            this.list.style.transform = `translateX(-${offset}%)`;
        },
        prev: function () {
            if (this.currentIndex > 0) {
                this.currentIndex--;
                this.updatePosition();
            }
        },
        next: function () {
            if (this.currentIndex < this.items.length - this.itemsToShow) {
                this.currentIndex++;
                this.updatePosition();
            }
        }
    };
    carousel1.container.querySelector('.carousel1-button.prev').addEventListener('click', () => carousel1.prev());
    carousel1.container.querySelector('.carousel1-button.next').addEventListener('click', () => carousel1.next());

    // JavaScript cho Carousel 2
    const carousel2 = {
        container: document.getElementById('carousel2'),
        list: document.querySelector('#carousel2 .carousel2-list'),
        items: document.querySelectorAll('#carousel2 .carousel2-item'),
        currentIndex: 0,
        itemsToShow: 4,
        updatePosition: function () {
            const offset = this.currentIndex * (100 / this.itemsToShow);
            this.list.style.transform = `translateX(-${offset}%)`;
        },
        prev: function () {
            if (this.currentIndex > 0) {
                this.currentIndex--;
                this.updatePosition();
            }
        },
        next: function () {
            if (this.currentIndex < this.items.length - this.itemsToShow) {
                this.currentIndex++;
                this.updatePosition();
            }
        }
    };
    carousel2.container.querySelector('.carousel2-button.prev').addEventListener('click', () => carousel2.prev());
    carousel2.container.querySelector('.carousel2-button.next').addEventListener('click', () => carousel2.next());

    let currentIndex = 1;

    function showSlide(index) {
        const slides = document.querySelectorAll('.carousel-itemrs');
        const dots = document.querySelectorAll('.carousel-dotrs');
        const totalSlides = slides.length;

        if (index >= totalSlides) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalSlides - 1;
        } else {
            currentIndex = index;
        }

        slides.forEach((slide, i) => {
            if (i === currentIndex) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });

        dots.forEach((dot, i) => {
            if (i === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });

        const carousel = document.querySelector('.carouselrs');
        const centerOffset = (carousel.offsetWidth / 2) - (slides[currentIndex].offsetWidth / 2);
        const offset = -currentIndex * (100 / slides.length) + centerOffset / (carousel.offsetWidth / 100);
        carousel.style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    document.querySelectorAll('.carousel-itemrs').forEach((item) => {
        item.addEventListener('click', () => {
            showSlide(parseInt(item.dataset.index));
        });
    });

    showSlide(currentIndex);
});
