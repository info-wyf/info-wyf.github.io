document.addEventListener('DOMContentLoaded', function() {
    // 菜单切换功能（用于 index.html, cv.html, teachers_feedback.html）
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuToggle && mobileMenu) {
        // 切换菜单
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });

        // 点击空白区域隐藏菜单
        document.addEventListener('click', function(event) {
            const target = event.target;
            const isClickInsideMenu = mobileMenu.contains(target);
            const isClickInsideToggle = target.closest('#menu-toggle');
            if (!isClickInsideMenu && !isClickInsideToggle && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        });

        // 按 Escape 键关闭菜单
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        });

        // 滑动隐藏菜单
        let touchStartY = 0;
        let touchEndY = 0;

        document.addEventListener('touchstart', function(event) {
            touchStartY = event.touches[0].clientY;
        });

        document.addEventListener('touchmove', function(event) {
            touchEndY = event.touches[0].clientY;
            const deltaY = touchEndY - touchStartY;
            if (deltaY > 50 && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        });
    } else {
        console.warn('菜单切换按钮或菜单元素未找到，请检查 HTML 结构中的 ID "menu-toggle" 和 "mobile-menu"。');
    }

    // 轮播图功能（用于 teachers_feedback.html）
    const swiperElement = document.querySelector('.swiper');
    if (swiperElement) {
        const swiper = new Swiper('.swiper', {
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            loop: true,
            navigation: {
                nextEl: '.next',
                prevEl: '.prev',
            },
            slidesPerView: 1,
            spaceBetween: 0,
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

        // 暴露函数到全局作用域，以便 HTML 使用
        window.openModal = openModal;
        window.closeModal = closeModal;

        // 按 Escape 键关闭模态框
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && modal.style.display === 'flex') {
                closeModal();
            }
        });
    }
});