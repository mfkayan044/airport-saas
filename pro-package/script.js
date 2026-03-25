document.addEventListener('DOMContentLoaded', () => {
    // Language Toggle
    const btnTr = document.getElementById('btn-tr');
    const btnEn = document.getElementById('btn-en');
    const translatableElements = document.querySelectorAll('[data-tr]');

    const setLanguage = (lang) => {
        translatableElements.forEach(el => {
            if (lang === 'tr') {
                el.textContent = el.getAttribute('data-tr');
                if (el.hasAttribute('data-tr-placeholder')) {
                    el.setAttribute('placeholder', el.getAttribute('data-tr-placeholder'));
                }
            } else {
                el.textContent = el.getAttribute('data-en');
                if (el.hasAttribute('data-en-placeholder')) {
                    el.setAttribute('placeholder', el.getAttribute('data-en-placeholder'));
                }
            }
        });
        
        // Handle active button state
        if (lang === 'tr') {
            btnTr.classList.add('active');
            btnEn.classList.remove('active');
            document.documentElement.lang = 'tr';
        } else {
            btnEn.classList.add('active');
            btnTr.classList.remove('active');
            document.documentElement.lang = 'en';
        }
    };

    btnTr.addEventListener('click', () => setLanguage('tr'));
    btnEn.addEventListener('click', () => setLanguage('en'));

    // Chat Toggle
    const chatToggle = document.getElementById('chat-toggle');
    const chatBox = document.getElementById('chat-box');
    const chatClose = document.getElementById('chat-close');

    chatToggle.addEventListener('click', () => {
        chatBox.style.display = chatBox.style.display === 'block' ? 'none' : 'block';
    });

    chatClose.addEventListener('click', () => {
        chatBox.style.display = 'none';
    });

    // Sticky Header Scroll Effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
            navbar.style.height = '70px';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.9)';
            navbar.style.boxShadow = 'none';
            navbar.style.height = '90px';
        }
    });

    // Form Submission Mock
    const bookingForm = document.querySelector('.booking-form-row');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = bookingForm.querySelector('button');
            const originalText = btn.textContent;
            
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            btn.disabled = true;

            setTimeout(() => {
                btn.innerHTML = '✓ Rezervasyon Başarılı';
                btn.style.background = '#10b981';
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.style.background = '';
                    btn.disabled = false;
                }, 3000);
            }, 1500);
        });
    }

    // Admin Concept Preview (Hidden shortcut)
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'q') {
            document.getElementById('admin-concept').style.display = 'block';
        }
    });
});
