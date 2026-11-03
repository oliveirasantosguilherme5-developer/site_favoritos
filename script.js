// ========== Partículas de fundo ==========
function createParticles() {
    const container = document.getElementById('particles');
    const particleCount = 35;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        const size = Math.random() * 6 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${Math.random() * 15 + 10}s`;
        particle.style.animationDelay = `${Math.random() * 10}s`;

        container.appendChild(particle);
    }
}

// ========== Efeito tilt nos cards ==========
function initTiltEffect() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -4;
            const rotateY = ((x - centerX) / centerX) * 4;

            card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px) scale(1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(600px) rotateX(0) rotateY(0) translateY(0) scale(1)';
        });
    });
}

// ========== Animação de entrada ao scroll ==========
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card').forEach(card => {
        observer.observe(card);
    });
}

// ========== Hora de boas-vindas ==========
function updateGreeting() {
    const subtitle = document.querySelector('.subtitle');
    const hour = new Date().getHours();
    let greeting;

    if (hour >= 5 && hour < 12) {
        greeting = '☀️ Bom dia! Confira meus sites favoritos';
    } else if (hour >= 12 && hour < 18) {
        greeting = '🌤️ Boa tarde! Confira meus sites favoritos';
    } else {
        greeting = '🌙 Boa noite! Confira meus sites favoritos';
    }

    subtitle.textContent = greeting;
}

// ========== Inicialização ==========
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    initTiltEffect();
    initScrollReveal();
    updateGreeting();
});
