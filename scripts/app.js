/**
 * Main Application Module - Orchestrates all other modules
 */
import { CryptoManager } from './crypto.js';
import { AnimationManager } from './animations.js';
import { UIManager } from './ui.js';
import { EffectsManager } from './effects.js';

export class GlitchApp {
    constructor() {
        this.crypto = new CryptoManager();
        this.animations = new AnimationManager();
        this.ui = new UIManager(this.crypto, this.animations);
        this.effects = new EffectsManager(this.animations);
    }

    /**
     * Initialize the application
     */
    init() {
        // Initialize UI components
        this.ui.initializeEventListeners();
        
        // Setup visual effects
        this.effects.setupEffects();
        
        // Start animation loops
        this.animations.startFloatingParticles();
        this.animations.startRandomGlitches();
        
        console.log('Glitch App initialized successfully');
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const app = new GlitchApp();
    app.init();
}); 