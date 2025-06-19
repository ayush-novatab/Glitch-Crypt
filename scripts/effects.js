/**
 * Effects Module - Handles visual effects and cursor interactions
 */
export class EffectsManager {
    constructor(animationManager) {
        this.animations = animationManager;
        this.customCursor = null;
        this.cursorGlitch = null;
        this.initializeCursor();
    }

    /**
     * Initialize custom cursor elements
     */
    initializeCursor() {
        this.customCursor = document.createElement('div');
        this.customCursor.classList.add('custom-cursor');
        document.body.appendChild(this.customCursor);

        this.cursorGlitch = document.createElement('div');
        this.cursorGlitch.classList.add('cursor-glitch');
        document.body.appendChild(this.cursorGlitch);
    }

    /**
     * Setup all visual effects
     */
    setupEffects() {
        this.setupMouseEffects();
        this.setupClickEffects();
        this.setupRandomCursorGlitch();
        this.applyGlitchStyling();
    }

    /**
     * Setup mouse movement effects
     */
    setupMouseEffects() {
        document.addEventListener('mousemove', (e) => {
            this.customCursor.style.left = `${e.clientX}px`;
            this.customCursor.style.top = `${e.clientY}px`;

            const offsetX = (Math.random() - 0.5) * 10;
            const offsetY = (Math.random() - 0.5) * 10;

            this.cursorGlitch.style.left = `${e.clientX + offsetX}px`;
            this.cursorGlitch.style.top = `${e.clientY + offsetY}px`;
        });
    }

    /**
     * Setup click effects
     */
    setupClickEffects() {
        document.addEventListener('click', (e) => {
            this.createClickEffect(e.clientX, e.clientY);
            
            // Create multiple glitch particles
            for (let i = 0; i < 5; i++) {
                this.animations.createGlitchParticle(e.clientX, e.clientY);
            }
        });
    }

    /**
     * Setup random cursor glitch effect
     */
    setupRandomCursorGlitch() {
        document.addEventListener('mousemove', (e) => {
            if (Math.random() > 0.98) {
                this.createRandomCursorGlitch(e.clientX, e.clientY);
            }
        });
    }

    /**
     * Create click effect at specified coordinates
     * @param {number} x - X coordinate
     * @param {number} y - Y coordinate
     */
    createClickEffect(x, y) {
        const clickEffect = document.createElement('div');
        clickEffect.classList.add('click-effect');
        clickEffect.style.left = `${x}px`;
        clickEffect.style.top = `${y}px`;
        document.body.appendChild(clickEffect);

        setTimeout(() => {
            document.body.removeChild(clickEffect);
        }, 600);
    }

    /**
     * Create random cursor glitch effect
     * @param {number} x - X coordinate
     * @param {number} y - Y coordinate
     */
    createRandomCursorGlitch(x, y) {
        const cursorGlitch = document.createElement('div');
        cursorGlitch.style.position = 'fixed';
        cursorGlitch.style.width = '10px';
        cursorGlitch.style.height = '10px';
        cursorGlitch.style.background = 'var(--primary-color)';
        cursorGlitch.style.borderRadius = '50%';
        cursorGlitch.style.filter = 'blur(2px)';
        cursorGlitch.style.boxShadow = '0 0 10px var(--primary-color)';
        cursorGlitch.style.pointerEvents = 'none';
        cursorGlitch.style.zIndex = '9999';
        cursorGlitch.style.opacity = '0.7';
        cursorGlitch.style.left = `${x}px`;
        cursorGlitch.style.top = `${y}px`;

        document.body.appendChild(cursorGlitch);

        setTimeout(() => {
            cursorGlitch.style.opacity = '0';
            cursorGlitch.style.transition = 'opacity 0.2s';
            setTimeout(() => {
                document.body.removeChild(cursorGlitch);
            }, 200);
        }, 100);
    }

    /**
     * Apply glitch styling to UI elements
     */
    applyGlitchStyling() {
        const title = document.querySelector('.app-title h1');
        this.wrapInGlitch(title);

        const labels = document.querySelectorAll('.text-area-wrapper label');
        labels.forEach(label => this.wrapInGlitch(label));

        const keyLabel = document.querySelector('.key-container label');
        this.wrapInGlitch(keyLabel);
    }

    /**
     * Wrap element text in glitch effect
     * @param {HTMLElement} element - Element to apply glitch effect to
     */
    wrapInGlitch(element) {
        if (!element || element.querySelector('.glitch-effect')) return;

        const text = element.textContent;
        element.innerHTML = '';
        const glitchSpan = document.createElement('span');
        glitchSpan.className = 'glitch-effect';
        glitchSpan.setAttribute('data-text', text);
        glitchSpan.textContent = text;
        element.appendChild(glitchSpan);
    }
} 