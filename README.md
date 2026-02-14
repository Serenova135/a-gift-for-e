# Valentine's Gift Box Website 💝

A beautiful, interactive Valentine's Day gift website featuring a gift box that opens to reveal four special items: a love letter, chocolates, a flower bouquet, and a precious memory photo.

## Features ✨

- **Interactive Gift Box**: Click to open and reveal the gifts inside
- **Beautiful Animations**: Smooth transitions and delightful micro-interactions
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Purple Lavender Theme**: Romantic color palette with elegant gradients
- **Four Gift Pages**:
  - 💌 **Love Letter**: Animated envelope that opens to reveal a heartfelt message
  - 🍫 **Sweet Treats**: Interactive chocolate box with different flavors
  - 💐 **Flower Bouquet**: Beautiful flowers with their symbolic meanings
  - 📸 **Precious Memory**: A framed photo with cherished moments

## Project Structure

```
/gift-box-project
│
├── /html
│   ├── index.html          ← Main gift box page
│   ├── message.html        ← Love letter page
│   ├── picture.html        ← Memory photo page
│   ├── chocolate.html      ← Chocolate box page
│   └── bouquet.html        ← Flower bouquet page
│
├── /css
│   ├── style-index.css     ← Styles for index.html
│   ├── style-message.css   ← Styles for message.html
│   ├── style-picture.css   ← Styles for picture.html
│   ├── style-chocolate.css ← Styles for chocolate.html
│   └── style-bouquet.css   ← Styles for bouquet.html
│
├── /js
│   └── script.js           ← Interactive functionality
│
├── /assets
│   ├── flower.svg          ← Flower bouquet icon
│   ├── chocolate.svg       ← Chocolate box icon
│   ├── envelope.svg        ← Envelope/letter icon
│   ├── picture-frame.svg   ← Picture frame icon
│   └── gift-box.svg        ← Gift box icon
│
└── README.md
```

## How to Use

1. Open `html/index.html` in your web browser
2. Click on the gift box to open it
3. Four gift items will appear with smooth animations
4. Click on any item to explore that specific gift:
   - **Love Letter**: Click the envelope to open and read the message
   - **Sweet Treats**: Interact with different chocolate pieces
   - **Flowers**: Hover over flower cards to see meanings
   - **Memory**: View the framed photo and memory cards
5. Use the "Back to Gifts" button to return to the main page

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Advanced animations, gradients, and transitions
- **JavaScript**: Interactive functionality and animations
- **SVG**: Scalable vector graphics for crisp icons
- **Google Fonts**: 
  - Playfair Display (elegant headers)
  - Cormorant Garamond (body text)
  - Dancing Script, Great Vibes, Parisienne (decorative text)

## Design Features

### Color Palette
- Primary: Purple Lavender (#9b7bb5)
- Light: Lavender Pale (#e8c5ec)
- Dark: Lavender Dark (#6b4c7a)
- Background: Gradient from light to dark lavender

### Animations
- **Gift Box Opening**: 3D transform animation with spring effect
- **Item Reveals**: Staggered fade-in with scale animation
- **Hover Effects**: Smooth transitions with elevation
- **Background Effects**: Floating hearts, falling petals, sparkling stars
- **Page Transitions**: Smooth entrance animations

### Interactive Elements
- Clickable gift box
- Openable envelope
- Interactive chocolate pieces
- Hoverable flower cards
- Animated memory cards
- Parallax mouse effects (desktop only)

## Customization

To personalize the messages:

1. **Love Letter**: Edit the text in `html/message.html`
2. **Chocolate Names**: Modify flavor names in `html/chocolate.html`
3. **Flower Meanings**: Change flower types in `html/bouquet.html`
4. **Memory Cards**: Update memory descriptions in `html/picture.html`

To change colors, update the CSS variables in each stylesheet:
```css
:root {
    --lavender-dark: #6b4c7a;
    --lavender-medium: #9b7bb5;
    --lavender-light: #c9aedb;
    /* etc. */
}
```

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized CSS animations
- Lightweight SVG assets
- Minimal JavaScript
- Fast load times
- Smooth 60fps animations

## Credits

Created with love for Valentine's Day 2026 💜

---

**Note**: This is a frontend-only project. No backend or database is required.
