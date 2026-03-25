document.addEventListener('DOMContentLoaded', () => {
    // Custom Cursor
    const cursorDot = document.querySelector('.cursor-dot');
    document.addEventListener('mousemove', (e) => {
        cursorDot.style.left = e.clientX + 'px';
        cursorDot.style.top = e.clientY + 'px';
        
        // Dynamic scaling on hover
        if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.classList.contains('vehicle-card')) {
            cursorDot.style.transform = 'scale(6)';
            cursorDot.style.background = 'rgba(212, 175, 55, 0.2)';
            cursorDot.style.border = '0.5px solid #d4af37';
        } else {
            cursorDot.style.transform = 'scale(1)';
            cursorDot.style.background = '#d4af37';
            cursorDot.style.border = 'none';
        }
    });

    // Reveal on Scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            document.body.classList.add('scrolled');
        } else {
            document.body.classList.remove('scrolled');
        }
    });

    // Booking System: Vehicle Selection
    const vehicleCards = document.querySelectorAll('.vehicle-card');
    const totalPriceDisplay = document.querySelector('.total-box h2');
    const basePrice = 45; // Base price for distance

    vehicleCards.forEach(card => {
        card.addEventListener('click', () => {
            // Remove selection from others
            vehicleCards.forEach(v => v.classList.remove('selected'));
            // Add selection to clicked
            card.classList.add('selected');
            
            // Get price from card
            const priceText = card.querySelector('p').textContent;
            const priceValue = parseFloat(priceText.replace('€', '').replace('.00', ''));
            
            // Update summary
            totalPriceDisplay.innerHTML = `€${priceValue.toFixed(2)}`;
            
            // Animate price update
            totalPriceDisplay.style.transform = 'scale(1.1)';
            setTimeout(() => {
                totalPriceDisplay.style.transform = 'scale(1)';
            }, 200);
        });
    });

    // Smooth Scroll Parallax (Simple version)
    window.onscroll = () => {
        const hero = document.querySelector('.premium-hero');
        const scrollPos = window.pageYOffset;
        hero.style.backgroundPositionY = scrollPos * 0.5 + 'px';
    };

    // Simulated Dashboard Login (Admin / User concept)
    const dashboardLink = document.querySelector('.dashboard-link');
    if (dashboardLink) {
        dashboardLink.addEventListener('click', () => {
            // This is just a UI concept simulation
            const modal = document.createElement('div');
            modal.style.cssText = `
                position: fixed; inset: 0; background: rgba(0,0,0,0.95); z-index: 3000;
                display: flex; align-items: center; justify-content: center;
                backdrop-filter: blur(10px);
            `;
            modal.innerHTML = `
                <div style="background: #111; border: 1px solid #d4af37; padding: 60px; border-radius: 12px; max-width: 500px; width: 90%; text-align: center;">
                    <h2 style="font-family:'Playfair Display'; color:#d4af37; margin-bottom: 30px;">ULTIMA PORTAL</h2>
                    <p style="opacity:0.6; margin-bottom: 30px; font-size: 0.9rem;">Please authenticate to access your exclusive concierge dashboard.</p>
                    <input type="text" placeholder="Access Key" style="background:#000; border:1px solid #333; padding: 15px; width: 100%; border-radius: 4px; color: white; margin-bottom: 20px;">
                    <button class="premium-cta" style="width: 100%;">AUTHENTICATE</button>
                    <p style="margin-top: 20px; font-size: 0.7rem; cursor: pointer; opacity: 0.5;" onclick="this.parentElement.parentElement.remove()">CLOSE</p>
                </div>
            `;
            document.body.appendChild(modal);
        });
    }
});
