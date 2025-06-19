/**
 * Animations Module - Handles all visual animations and effects
 */
export class AnimationManager {
    constructor() {
        this.glitchDuration = 300;
        this.typingDelay = 20;
    }

    /**
     * Apply glitch animation to an element
     * @param {HTMLElement} element - Element to animate
     */
    applyGlitchAnimation(element) {
        element.classList.add('glitching');
        setTimeout(() => {
            element.classList.remove('glitching');
        }, this.glitchDuration);
    }

    /**
     * Create glitch text element
     * @param {string} text - Text content
     * @returns {HTMLElement} - Glitch text span element
     */
    createGlitchText(text) {
        const span = document.createElement('span');
        span.className = 'glitch-text';
        span.setAttribute('data-text', text);
        span.textContent = text;
        return span;
    }

    /**
     * Animate typing effect on an element
     * @param {HTMLElement} element - Element to type into
     * @param {string} text - Text to type
     * @param {number} delay - Delay between characters
     * @returns {Promise} - Promise that resolves when typing is complete
     */
    async animateTyping(element, text, delay = this.typingDelay) {
        element.value = ''; 
        let displayText = '';

        return new Promise(resolve => {
            let index = 0;
            const chars = text.split('');

            function typeNextChar() {
                if (index < chars.length) {
                    displayText += chars[index];
                    element.value = displayText; 
                    index++;
                    setTimeout(typeNextChar, delay);
                } else {
                    setTimeout(resolve, 100);
                }
            }

            typeNextChar();
        });
    }

    /**
     * Create floating particle effect
     */
    createFloatingParticle() {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = `${Math.random() * 4}px`;
        particle.style.height = particle.style.width;
        particle.style.background = 'var(--primary-color)';
        particle.style.borderRadius = '50%';
        particle.style.filter = 'blur(1px)';
        particle.style.opacity = `${Math.random() * 0.5}`;
        particle.style.pointerEvents = 'none';

        const startPos = Math.random() * 100;
        particle.style.left = `${startPos}vw`;
        particle.style.top = '100%';

        const duration = 5 + Math.random() * 15;
        particle.style.animation = `floatUp ${duration}s linear forwards`;

        const style = document.createElement('style');
        style.textContent = `
            @keyframes floatUp {
                0% {
                    transform: translateY(0) rotate(0deg);
                }
                100% {
                    transform: translateY(-100vh) rotate(${Math.random() * 360}deg);
                }
            }
        `;
        document.head.appendChild(style);

        const container = document.querySelector('.app-container');
        if (container) {
            container.appendChild(particle);
        }

        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
            if (style.parentNode) {
                style.parentNode.removeChild(style);
            }
        }, duration * 1000);
    }

    /**
     * Create glitch particle effect at click position
     * @param {number} x - X coordinate
     * @param {number} y - Y coordinate
     */
    createGlitchParticle(x, y) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.width = `${Math.random() * 10 + 5}px`;
        particle.style.height = `${Math.random() * 10 + 5}px`;
        particle.style.background = Math.random() > 0.5 ? 
            'var(--primary-color)' : 'var(--secondary-color)';
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.borderRadius = Math.random() > 0.7 ? '50%' : '0';
        particle.style.filter = 'blur(2px)';
        particle.style.opacity = '0.8';
        particle.style.zIndex = '9000';
        particle.style.pointerEvents = 'none';

        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 100 + 50;
        const vx = Math.cos(angle) * speed;
        const vy = Math.sin(angle) * speed;

        particle.style.transform = 'translate(-50%, -50%)';

        document.body.appendChild(particle);

        const startTime = performance.now();
        const duration = Math.random() * 600 + 300;

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            if (elapsed < duration) {
                const progress = elapsed / duration;
                const x_pos = x + vx * progress;
                const y_pos = y + vy * progress;
                const scale = 1 - progress;
                const opacity = 1 - progress;

                particle.style.left = `${x_pos}px`;
                particle.style.top = `${y_pos}px`;
                particle.style.transform = `translate(-50%, -50%) scale(${scale})`;
                particle.style.opacity = opacity;

                requestAnimationFrame(animate);
            } else {
                if (particle.parentNode) {
                    document.body.removeChild(particle);
                }
            }
        };

        requestAnimationFrame(animate);
    }

    /**
     * Start floating particle animation loop
     */
    startFloatingParticles() {
        setInterval(() => this.createFloatingParticle(), 1000);
    }

    /**
     * Start random glitch animation loop
     */
    startRandomGlitches() {
        setInterval(() => {
            const elements = [
                document.querySelector('.app-title h1'),
                document.querySelector('.status-indicator'),
                document.querySelector('.created-by span')
            ];

            const randomElement = elements[Math.floor(Math.random() * elements.length)];
            if (randomElement) {
                this.applyGlitchAnimation(randomElement);
            }
        }, 5000);
    }
} 