document.addEventListener('DOMContentLoaded', function () {
    // 菜单切换功能（用于 index.html, cv.html, teachers_feedback.html, project_y10_bluetooth.html）
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const nav = document.querySelector('nav');

    if (menuToggle && mobileMenu && nav) {
        // 切换菜单
        menuToggle.addEventListener('click', function (event) {
            mobileMenu.classList.toggle('hidden');
            nav.classList.toggle('active');
            event.stopPropagation();
        });

        // 点击空白区域隐藏菜单（仅在手机模式下生效）
        document.addEventListener('click', function (event) {
            const target = event.target;
            const isClickInsideMenu = mobileMenu.contains(target);
            const isClickInsideToggle = target.closest('#menu-toggle');
            const isMobile = window.innerWidth <= 768; // 判断是否为手机模式
            const isMenuVisible = nav.classList.contains('active'); // 使用 nav.active 判断菜单是否可见

            if (isMobile && !isClickInsideMenu && !isClickInsideToggle && isMenuVisible) {
                mobileMenu.classList.add('hidden');
                nav.classList.remove('active');
            }
        });

        // 按 Escape 键关闭菜单（仅在手机模式下生效）
        document.addEventListener('keydown', function (event) {
            const isMobile = window.innerWidth <= 768;
            const isMenuVisible = nav.classList.contains('active');

            if (isMobile && event.key === 'Escape' && isMenuVisible) {
                mobileMenu.classList.add('hidden');
                nav.classList.remove('active');
            }
        });

        // 滑动隐藏菜单（仅在手机模式下生效）
        let touchStartY = 0;
        let touchEndY = 0;

        document.addEventListener('touchstart', function (event) {
            touchStartY = event.touches[0].clientY;
        });

        document.addEventListener('touchmove', function (event) {
            const isMobile = window.innerWidth <= 768;
            const isMenuVisible = nav.classList.contains('active');

            touchEndY = event.touches[0].clientY;
            const deltaY = touchEndY - touchStartY;
            if (isMobile && deltaY > 50 && isMenuVisible) {
                mobileMenu.classList.add('hidden');
                nav.classList.remove('active');
            }
        });
    } else {
        console.warn('菜单切换按钮或菜单元素未找到，请检查 HTML 结构中的 ID "menu-toggle" 和 "mobile-menu"。');
    }

    // 轮播图功能（用于 index.html, teachers_feedback.html）
    const swiperElement = document.querySelector('.swiper');
    if (swiperElement) {
        const swiper = new Swiper('.swiper', {
            slidesPerView: 1,
            spaceBetween: 20,
            speed: 1000,
            loop: true,
            simulateTouch: true,
            touchRatio: 1,
            grabCursor: true,
            effect: 'coverflow',
            coverflowEffect: {
                rotate: 30,
                stretch: 50,
                depth: 100,
                modifier: 1,
                slideShadows: true
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
            },
        });

        // 模态框功能
        function openModal(src) {
            const modal = document.getElementById('imageModal');
            const modalImage = document.getElementById('modalImage');
            if (modal && modalImage) {
                modalImage.src = src;
                modal.style.display = 'flex';
                swiper.autoplay.stop();
            }
        }

        function closeModal() {
            const modal = document.getElementById('imageModal');
            if (modal) {
                modal.style.display = 'none';
                swiper.autoplay.start();
            }
        }

        window.openModal = openModal;
        window.closeModal = closeModal;

        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape' && modal.style.display === 'flex') {
                closeModal();
            }
        });
    }

    // 自定义 Carousel 轮播图（用于 project_y10_bluetooth.html）
    const carouselElement = document.querySelector('.carousel');
    if (carouselElement) {
        const carouselInner = document.querySelector('.carousel-inner');
        const images = document.querySelectorAll('.carousel-inner img');
        const prevButton = document.querySelector('.prev');
        const nextButton = document.querySelector('.next');
        const paginationContainer = document.querySelector('.carousel-pagination');
        let currentIndex = 0;
        let autoplayInterval;

        // 创建分页点
        images.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', function (event) {
                currentIndex = index;
                updateCarousel();
                stopAutoplay();
                startAutoplay();
                event.stopPropagation();
            });
            paginationContainer.appendChild(dot);
        });

        const dots = document.querySelectorAll('.carousel-pagination .dot');

        function updateCarousel() {
            // 移除所有类
            images.forEach((img, index) => {
                img.classList.remove('active');
                dots[index].classList.remove('active');
            });

            // 设置当前活跃幻灯片
            images[currentIndex].classList.add('active');

            // 更新分页点
            dots[currentIndex].classList.add('active');
        }

        function startAutoplay() {
            stopAutoplay();
            autoplayInterval = setInterval(() => {
                currentIndex = (currentIndex + 1) % images.length;
                updateCarousel();
            }, 3000);
        }

        function stopAutoplay() {
            clearInterval(autoplayInterval);
        }

        prevButton.addEventListener('click', function (event) {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateCarousel();
            stopAutoplay();
            startAutoplay();
            event.stopPropagation();
        });

        nextButton.addEventListener('click', function (event) {
            currentIndex = (currentIndex + 1) % images.length;
            updateCarousel();
            stopAutoplay();
            startAutoplay();
            event.stopPropagation();
        });

        // 鼠标悬停暂停自动播放
        carouselElement.addEventListener('mouseenter', stopAutoplay);
        carouselElement.addEventListener('mouseleave', startAutoplay);

        // 初始更新并启动自动播放
        updateCarousel();
        startAutoplay();

        // 模态框功能
        function openModal(src) {
            const modal = document.getElementById('imageModal');
            const modalImage = document.getElementById('modalImage');
            if (modal && modalImage) {
                modalImage.src = src;
                modal.style.display = 'flex';
                stopAutoplay();
            }
        }

        function closeModal() {
            const modal = document.getElementById('imageModal');
            if (modal) {
                modal.style.display = 'none';
                startAutoplay();
            }
        }

        window.openModal = openModal;
        window.closeModal = closeModal;

        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape' && modal.style.display === 'flex') {
                closeModal();
            }
        });
    }
    tailwind.config = {
        theme: {
            extend: {
                colors: {
                    'tech-blue': '#1E40AF',
                    'tech-dark': '#1F2937',
                    'tech-accent': '#60A5FA',
                    'gray-light': '#F3F4F6',
                    'blue-pale': '#DBEAFE',
                    'blue-medium': '#93C5FD',
                    'gray-medium': '#D1D5DB',
                    'blue-darker': '#BFDBFE',
                    'sky-light': '#E0F7FA',
                    'sky-medium': '#B3E5FC',
                    'sky-dark': '#4FC3F7',
                },
                fontFamily: {
                    'poppins': ['Poppins', 'sans-serif'],
                    'inter': ['Inter', 'sans-serif'],
                },
            },
        },
    }
});