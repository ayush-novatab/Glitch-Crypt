/**
 * UI Module - Handles user interface interactions and event handling
 */
export class UIManager {
    constructor(cryptoManager, animationManager) {
        this.crypto = cryptoManager;
        this.animations = animationManager;
        this.elements = {};
        this.initializeElements();
    }

    /**
     * Initialize DOM element references
     */
    initializeElements() {
        this.elements = {
            inputText: document.getElementById('input-text'),
            outputText: document.getElementById('output-text'),
            encryptBtn: document.getElementById('encrypt-btn'),
            decryptBtn: document.getElementById('decrypt-btn'),
            encryptionKey: document.getElementById('encryption-key'),
            showInstructionsBtn: document.getElementById('show-instructions'),
            dismissInstructionsBtn: document.getElementById('dismiss-instructions'),
            instructionsPanel: document.getElementById('instructions-panel')
        };
    }

    /**
     * Initialize all event listeners
     */
    initializeEventListeners() {
        this.setupButtonHandlers();
        this.setupInputHandlers();
        this.setupInstructionsHandlers();
        this.setupDefaultKey();
    }

    /**
     * Setup encryption/decryption button handlers
     */
    setupButtonHandlers() {
        this.elements.encryptBtn.addEventListener('click', async () => {
            await this.handleEncrypt();
        });

        this.elements.decryptBtn.addEventListener('click', async () => {
            await this.handleDecrypt();
        });
    }

    /**
     * Setup input field handlers
     */
    setupInputHandlers() {
        this.elements.inputText.addEventListener('input', () => {
            this.glitchInputOnType();
        });
    }

    /**
     * Setup instructions panel handlers
     */
    setupInstructionsHandlers() {
        this.elements.showInstructionsBtn.addEventListener('click', () => {
            this.elements.instructionsPanel.classList.add('active');
        });

        this.elements.dismissInstructionsBtn.addEventListener('click', () => {
            this.elements.instructionsPanel.classList.remove('active');
        });
    }

    /**
     * Setup default encryption key
     */
    setupDefaultKey() {
        if (this.elements.encryptionKey.value === '') {
            this.elements.encryptionKey.value = 'glitched';
        }
    }

    /**
     * Handle encryption button click
     */
    async handleEncrypt() {
        const text = this.elements.inputText.value;
        const key = this.elements.encryptionKey.value || 'glitched';

        if (!text) {
            this.elements.outputText.value = '';
            return;
        }

        this.elements.encryptBtn.disabled = true;

        const buttonText = this.elements.encryptBtn.querySelector('.button-text');
        this.animations.applyGlitchAnimation(buttonText);

        setTimeout(async () => {
            const encrypted = this.crypto.encrypt(text, key);
            await this.animations.animateTyping(this.elements.outputText, encrypted, 5);
            this.elements.encryptBtn.disabled = false;
        }, 300);
    }

    /**
     * Handle decryption button click
     */
    async handleDecrypt() {
        const text = this.elements.inputText.value;
        const key = this.elements.encryptionKey.value || 'glitched';

        if (!text) {
            this.elements.outputText.value = '';
            return;
        }

        this.elements.decryptBtn.disabled = true;

        const buttonText = this.elements.decryptBtn.querySelector('.button-text');
        this.animations.applyGlitchAnimation(buttonText);

        setTimeout(async () => {
            const decrypted = this.crypto.decrypt(text, key);
            await this.animations.animateTyping(this.elements.outputText, decrypted, 5);
            this.elements.decryptBtn.disabled = false;
        }, 300);
    }

    /**
     * Create glitch effect on input typing
     */
    glitchInputOnType() {
        const span = document.createElement('span');
        span.textContent = this.elements.inputText.value.charAt(this.elements.inputText.value.length - 1);
        span.style.position = 'absolute';
        span.style.color = 'var(--primary-color)';
        span.style.opacity = '0.7';
        span.style.fontSize = '1.3rem';
        span.style.pointerEvents = 'none';

        const rect = this.elements.inputText.getBoundingClientRect();
        const charWidth = 10; 
        const approxPos = (this.elements.inputText.value.length - 1) % (rect.width / charWidth);

        span.style.left = `${approxPos * charWidth}px`;
        span.style.top = '0';

        document.body.appendChild(span);

        this.animations.applyGlitchAnimation(span);

        setTimeout(() => {
            document.body.removeChild(span);
        }, 300);
    }
} 