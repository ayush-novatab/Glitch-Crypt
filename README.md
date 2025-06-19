# Glitch Crypt - Modular Architecture

A cyberpunk-themed encryption tool with glitch visual effects, now organized in a modular architecture for better maintainability and scalability.

## 🏗️ Modular Structure

The application has been refactored into a clean, modular architecture with the following structure:

```
GLITCH/
├── index.html              # Main HTML file
├── script.js               # Entry point (imports modular app)
├── styles.css              # CSS styles
├── modules/                # Modular JavaScript components
│   ├── app.js             # Main application orchestrator
│   ├── crypto.js          # Encryption/decryption logic
│   ├── animations.js      # Visual animations and effects
│   ├── ui.js              # User interface interactions
│   └── effects.js         # Visual effects and cursor interactions
└── README.md              # This file
```

## 📦 Module Overview

### `app.js` - Main Application
- **Purpose**: Orchestrates all other modules
- **Responsibilities**: 
  - Initializes all managers
  - Coordinates module interactions
  - Handles application lifecycle

### `crypto.js` - Encryption Module
- **Purpose**: Handles all encryption/decryption operations
- **Key Features**:
  - XOR cipher with salted keys
  - Base64 encoding/decoding
  - Error handling for invalid inputs
- **Class**: `CryptoManager`

### `animations.js` - Animation Module
- **Purpose**: Manages all visual animations and effects
- **Key Features**:
  - Glitch animations
  - Typing effects
  - Particle systems (floating and click particles)
  - Animation loops
- **Class**: `AnimationManager`

### `ui.js` - User Interface Module
- **Purpose**: Handles user interactions and UI events
- **Key Features**:
  - Button event handlers
  - Input field management
  - Instructions panel
  - Form validation
- **Class**: `UIManager`

### `effects.js` - Visual Effects Module
- **Purpose**: Manages visual effects and cursor interactions
- **Key Features**:
  - Custom cursor effects
  - Click effects
  - Glitch styling for UI elements
  - Random cursor glitches
- **Class**: `EffectsManager`

## 🔧 Benefits of Modular Architecture

1. **Separation of Concerns**: Each module has a single, well-defined responsibility
2. **Maintainability**: Easier to locate and fix issues
3. **Testability**: Individual modules can be tested in isolation
4. **Scalability**: New features can be added as separate modules
5. **Reusability**: Modules can be reused in other projects
6. **Code Organization**: Clear structure makes the codebase easier to understand

## 🚀 Usage

The application works exactly the same as before - simply open `index.html` in a modern browser. The modular structure is transparent to the end user.

## 🛠️ Development

To modify or extend the application:

1. **Adding new animations**: Extend the `AnimationManager` class
2. **Adding new crypto features**: Extend the `CryptoManager` class
3. **Adding new UI features**: Extend the `UIManager` class
4. **Adding new visual effects**: Extend the `EffectsManager` class
5. **Adding new modules**: Create a new module and import it in `app.js`

## 📝 Dependencies

- Modern browser with ES6 module support
- No external dependencies required

## 🎨 Features

- **Encryption/Decryption**: XOR cipher with salted keys
- **Visual Effects**: Glitch animations, particles, custom cursor
- **User Experience**: Typing animations, responsive design
- **Security**: Client-side encryption with customizable keys

![Glitch Crypt](https://img.shields.io/badge/Status-Online-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)

## ✨ Features

- **🔒 Secure Encryption**: Custom XOR-based encryption algorithm with salted keys
- **🎨 Cyberpunk UI**: Futuristic design with glassmorphic effects and neon colors
- **⚡ Real-time Effects**: Dynamic glitch animations and particle effects
- **📱 Responsive Design**: Works seamlessly on desktop and mobile devices
- **🎭 Interactive Elements**: Hover effects, typing animations, and visual feedback
- **🔑 Custom Keys**: Set your own encryption keys for enhanced security

## 🚀 Quick Start

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Python 3.x (for local server)

### Installation

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd GLITCH
   ```

2. **Start the local server**
   ```bash
   python3 -m http.server 8000
   ```

3. **Open your browser**
   Navigate to `http://localhost:8000`

## 📖 How to Use

### Encryption
1. Set your encryption key (default: "glitched")
2. Enter your text in the input field
3. Click the **"Encrypt"** button
4. Copy the encrypted output

### Decryption
1. Enter the same encryption key used for encryption
2. Paste the encrypted text in the input field
3. Click the **"Decrypt"** button
4. View your original message

### Tips
- Share both the encrypted text and the encryption key with your recipient
- Use strong, unique keys for better security
- The same key is required for both encryption and decryption

## 🛠️ Technical Details

### Encryption Algorithm
- **Method**: XOR cipher with salted keys
- **Salt**: "p2pGlitchCrypt" + key length
- **Encoding**: Base64 with URL-safe characters
- **Security**: Each character is XORed with a corresponding key character

### Technologies Used
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with CSS Grid and Flexbox
- **Fonts**: Orbitron, Share Tech Mono (Google Fonts)
- **Effects**: CSS animations, transforms, and filters

### Browser Support
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 🎨 Design Features

### Visual Effects
- **Glassmorphism**: Translucent panels with backdrop blur
- **Neon Glow**: Pulsing neon effects on interactive elements
- **Glitch Animations**: Text distortion and visual glitches
- **Particle Effects**: Floating particles and cursor trails
- **Gradient Backgrounds**: Dynamic radial and linear gradients

### Color Scheme
- **Primary**: `#00ffaa` (Cyan)
- **Secondary**: `#ff00ff` (Magenta)
- **Tertiary**: `#0088ff` (Blue)
- **Background**: `#0a0a12` (Dark Navy)
- **Text**: `#ffffff` (White)

### Responsive Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
- **Large Screens**: > 2000px

## 🔧 Customization

### Changing Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #00ffaa;    /* Main accent color */
    --secondary-color: #ff00ff;  /* Secondary accent */
    --dark-bg: #0a0a12;         /* Background color */
    /* ... more variables */
}
```

### Modifying Animations
Adjust animation durations and effects in the CSS:
```css
@keyframes titlePulse {
    /* Modify animation timing and effects */
}
```

### Adding New Effects
Extend the JavaScript functionality in `script.js`:
```javascript
// Add new interactive features
function customEffect() {
    // Your custom code here
}
```

## 🐛 Troubleshooting

### Common Issues

**CSS not loading**
- Ensure `styles.css` is in the same directory as `index.html`
- Check browser console for 404 errors
- Clear browser cache and refresh

**Encryption not working**
- Verify the encryption key matches between encrypt/decrypt
- Check for special characters in the key
- Ensure the encrypted text is copied completely

**Visual effects not showing**
- Update to a modern browser
- Enable JavaScript in your browser
- Check if hardware acceleration is enabled

### Performance Tips
- Close unnecessary browser tabs
- Disable browser extensions if experiencing lag
- Use a dedicated graphics card for better performance

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**AshlynD** - *Initial work*

## 🙏 Acknowledgments

- Google Fonts for the beautiful typography
- CSS Grid and Flexbox for responsive layouts
- The cyberpunk aesthetic community for inspiration

## 📞 Support

If you encounter any issues or have questions:
- Open an issue on GitHub
- Check the troubleshooting section above
- Ensure you're using a supported browser

---

**⚠️ Security Notice**: This tool is for educational and personal use. For critical security needs, use established encryption libraries and protocols.

**🎮 Enjoy the glitch!** 🌟 