# 🔐 Glitch Crypt

A cyberpunk-themed text encryption and decryption tool with stunning visual effects and glitch animations.

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

## 📁 Project Structure

```
GLITCH/
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # Encryption logic and interactions
└── README.md           # This file
```

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