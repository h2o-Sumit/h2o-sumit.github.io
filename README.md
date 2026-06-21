# 💒 Sumit & Sonam - Wedding Invitation Website

A beautiful, interactive wedding invitation website with scrollable pages, scratch-off date reveal, and background music.

## ✨ Features

- **4 Beautiful Scroll Pages:**
  - Page 1: Welcome screen with names
  - Page 2: Invitation quote and couple names
  - Page 3: Venue details and celebration schedule
  - Page 4: Interactive scratch-off date reveal

- **Floral & Garden Theme**: Beautiful pastel colors with floating flower decorations
- **Bilingual Support**: English and Hindi text
- **Interactive Elements:**
  - Music toggle button 🔊
  - Scratch-off effect to reveal wedding date
  - Smooth animations and transitions
  - Responsive design for all devices

- **Music**: Background wedding music plays throughout
- **Mobile Friendly**: Works perfectly on all screen sizes

## 📋 Files Included

- `index.html` - Main HTML structure
- `style.css` - Beautiful styling and animations
- `script.js` - Interactive functionality (music toggle, scratch effect)
- `README.md` - This file

## 🎵 Adding Background Music

To add background music:

1. Find a royalty-free wedding instrumental music (mp3 format)
2. Download or record the music file
3. Name it `wedding-music.mp3`
4. Place it in the same folder as `index.html`

**Recommended royalty-free music sources:**
- [Pixabay Music](https://pixabay.com/music/)
- [YouTube Audio Library](https://www.youtube.com/audiolibrary/)
- [Freepik Music](https://music.freepik.com/)
- [Bensound](https://www.bensound.com/)

**Suggested searches:** "Wedding Instrumental", "Romantic Piano", "Soft Violin"

## 🚀 Deployment to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click on **New** to create a new repository
3. Name it: `yourusername.github.io`
   - Replace `yourusername` with your actual GitHub username
4. Make sure it's **Public**
5. Click **Create repository**

### Step 2: Upload Files to GitHub

**Option A: Using Git (Recommended)**

```bash
# Navigate to your project folder
cd wedding-invitation

# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Wedding invitation website"

# Add remote repository (replace USERNAME with your GitHub username)
git remote add origin https://github.com/USERNAME/USERNAME.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Option B: Upload via GitHub Website**

1. Go to your repository: `https://github.com/USERNAME/USERNAME.github.io`
2. Click **Add file** → **Upload files**
3. Drag and drop all files (index.html, style.css, script.js, wedding-music.mp3)
4. Click **Commit changes**

### Step 3: Access Your Website

Your wedding invitation will be live at:
```
https://yourusername.github.io
```

## 📱 Customization

### Change Colors

Edit `style.css` and modify these variables:

```css
:root {
    --primary-color: #8B5A8E;      /* Purple */
    --secondary-color: #D4A5D4;    /* Light Purple */
    --accent-color: #E8C5E8;       /* Very Light Purple */
    --gold: #D4AF37;               /* Gold accents */
}
```

### Change Text

Edit `index.html`:
- Couple names: Search for "Sumit & Sonam"
- Venue details: Update the venue section in Page 3
- Dates: Modify in the script and Page 4

### Change Flowers/Emojis

In `index.html`, find the `<div class="floral-decoration">` sections and replace:
- 🌸 🌺 🌼 🌻 🌷 🌹 🥀 🏵️ (or use any emoji)

## 📖 How It Works

1. **First Page**: Displays couple names with animation
2. **Scroll Down**: See invitation quote and couple names
3. **Continue Scrolling**: View venue details and schedule
4. **Final Page**: Scratch the card to reveal wedding date
5. **Music**: Click the speaker icon (top right) to toggle background music

## 🎨 Design Features

- **Gradient backgrounds**: Soft pink and purple tones
- **Floating animations**: Flower decorations float up and down
- **Smooth transitions**: Pages fade in as you scroll
- **Interactive scratch card**: Canvas-based scratch-off effect
- **Responsive**: Looks great on desktop, tablet, and mobile

## 💡 Tips

- Test on different devices (mobile, tablet, desktop)
- Make sure `wedding-music.mp3` is added for complete experience
- Customize all text before sharing
- Share the link with guests: `https://yourusername.github.io`

## 🛠️ Technical Details

- **HTML5**: Semantic structure
- **CSS3**: Animations, gradients, and responsive design
- **JavaScript**: Music toggle, scratch effect, scroll animations
- **Canvas API**: Used for scratch-off effect
- **Intersection Observer**: For scroll-triggered animations

## 📞 Troubleshooting

**Music not playing?**
- Ensure `wedding-music.mp3` is in the same folder as `index.html`
- Check browser console for errors (F12)
- Some browsers require user interaction to play audio

**Scratch card not working?**
- Works best on desktop with mouse
- On mobile, use touch to scratch
- Make sure JavaScript is enabled

**Website not showing?**
- Wait 1-2 minutes for GitHub Pages to deploy
- Clear browser cache (Ctrl+Shift+Del)
- Check repository is set to public
- Ensure repository name is `yourusername.github.io`

## 📝 License

This project is provided as-is for personal use.

## 🎉 Enjoy!

Have a wonderful wedding! 💕

---

**Created with ❤️ for Sumit & Sonam**
