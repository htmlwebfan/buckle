# Buckle Framework User Guide

Welcome to the Buckle Framework, a lightweight (~8.4KB CSS, ~2.4KB JS) toolkit for building modern, responsive websites. Developed by Matthew Way, Buckle offers flexible components like carousels, card decks, and circular images, all powered by modular Sass and vanilla JavaScript. This guide walks you through setup, core components, and customization to get you building fast.

---

## Table of Contents

- [Getting Started](#getting-started)
- [Core Components](#core-components)
  - [Carousel](#carousel)
  - [Deck](#deck)
  - [Media](#media)
  - [Navbar](#navbar)
  - [Utilities](#utilities)
- [Customization](#customization)
- [Examples](#examples)
- [License](#license)
- [Support](#support)

---

## Getting Started

### Prerequisites
- [Sass](https://sass-lang.com/install) for compiling `.scss` to `.css`.
- A browser or local server (e.g., `python3 -m http.server`).

### Installation
Clone the repo:
```
git clone https://github.com/your-username/buckle.git
cd buckle
```
Compile Sass
```
sass scss/buckle.scss css/buckle.css
sass scss/sample.scss css/sample.css
```
Open index.html in a browser or server locally
```
python3 -m http.server 8000
```

Visit http://localhost:8000.

See README.md for detailed setup.

## Core Components

### Carousel

Create full-width or containerized sliders for hero sections or testimonials.

- **Classes**
	- `.buckle-carousel`: Base carousel.
	- `.buckle-carousel-full`: Full-width (100vw).
	- `.buckle-carousel-contained`: Max-width (e.g., 1200px).
	- `.buckle-hero-text`: Text overlay for slides.

- **Attributes**
	- data-auto-scroll="true": Enables 5-second auto-scroll, pauses on hover.

- **Example (Hero Carousel)**
```
<div class="buckle-carousel buckle-carousel-full" data-auto-scroll="true">
  <div class="buckle-carousel-inner">
    <div class="buckle-carousel-item">
      <img src="img/slide.jpg" alt="Slide" class="buckle-media-image">
      <div class="buckle-hero-text buckle-bg-dark-50 buckle-p-3">
        <h1>Welcome</h1>
        <p>Explore Buckle!</p>
        <a href="#" class="buckle-btn primary">Get Started</a>
      </div>
    </div>
  </div>
  <button class="buckle-carousel-prev">❮</button>
  <button class="buckle-carousel-next">❯</button>
</div>
```

- **Notes**
	- Buttons use `font-size: 2rem` for visibility.
	- Customize in scss/_carousel.scss.

### Deck

Display card-based layouts for services, pricing, or features.

- **Classes**
	- `.buckle-deck`: Container for cards.
	- `.buckle-deck-card`: Individual card.
	- `.buckle-deck-media`: Image or video in card.
	- `.buckle-deck-body`: Card content.

- **Example (Services)**
```
<div class="buckle-deck">
  <div class="buckle-deck-card">
    <img src="img/service.jpg" alt="Service" class="buckle-deck-media buckle-media buckle-media-image buckle-media-circle">
    <div class="buckle-deck-body">
      <h3 class="buckle-deck-title">Service</h3>
      <p class="buckle-deck-text">Lorem ipsum...</p>
      <a href="#" class="buckle-btn primary">Learn More</a>
    </div>
  </div>
</div>
```

- **Notes**

	- Responsive grid via CSS Flexbox.
	- See scss/_deck.scss for styling.

### Media

Style images and videos, including circular images.

- **Classes**
	- `.buckle-media`: Base for images/videos.
	- `.buckle-media-image`: For `<img>`, ensures responsive sizing.
	- `.buckle-media-video`: For `<video>`, adds subtle rounded corners.
	- `.buckle-media-circle`: Circular media (`border-radius: 50%`).

- **Example (Circular Image)**
```
<img src="img/avatar.jpg" alt="Avatar" class="buckle-media buckle-media-image buckle-media-circle">
```

- **Example (Video)** 
```
<video class="buckle-media buckle-media-video" controls>
  <source src="video.mp4" type="video/mp4">
</video>
```

- **Notes**
	- Use square images for `.buckle-media-circle` to avoid distortion.
	- Customize in scss/_media.scss.

### Navbar

Create a responsive navigation bar with smooth scrolling.

- **Classes**

    - `.buckle-nav`: Main nav container.
    - `.buckle-nav-list`: Menu items.
    - `.buckle-nav-toggle`: Mobile menu button.

- **Example**
```
<nav class="buckle-nav">
  <div class="buckle-nav-container">
    <div class="buckle-nav-logo">
      <img src="img/logo.png" alt="Logo">
    </div>
    <ul class="buckle-nav-list">
      <li><a href="#home" data-scroll-to="#home">Home</a></li>
      <li><a href="#services" data-scroll-to="#services">Services</a></li>
    </ul>
    <button class="buckle-nav-toggle">☰</button>
  </div>
</nav>
```

- **Notes**
    - Mobile-friendly, toggles via JS.
    - See scss/_navbar.scss for styles.

### Utilities
Apply spacing, colors, layout, and styling with helper classes for rapid development.

- **Classes**:
  - `.buckle-p-0` to `.buckle-p-5`: Padding (0px, 4px, 8px, 16px, 24px, 32px) on all sides.
  - `.buckle-m-0` to `.buckle-m-5`: Margin (0px, 4px, 8px, 16px, 24px, 32px) on all sides.
  - `.buckle-px-0` to `.buckle-px-5`: Horizontal padding (e.g., `.buckle-px-3` for 16px left/right).
  - `.buckle-py-0` to `.buckle-py-5`: Vertical padding (e.g., `.buckle-py-4` for 32px top/bottom).
  - `.buckle-mx-0` to `.buckle-mx-5`: Horizontal margin.
  - `.buckle-my-0` to `.buckle-my-5`: Vertical margin.
  - `.buckle-bg-primary`: Background color using `$primary-color` (e.g., #007bff).
  - `.buckle-bg-dark-50`: Semi-transparent dark background (50% opacity).
  - `.buckle-text-primary`: Text color using `$primary-color`.
  - `.buckle-flex`: Enables Flexbox container.
  - `.buckle-flex-column`: Flexbox with column direction.
  - `.buckle-justify-center`: Centers content along main axis.
  - `.buckle-align-center`: Centers content along cross axis.
  - `.buckle-rounded`: Subtle rounded corners (e.g., 4px, per `$border-radius`).
  - `.buckle-shadow`: Adds light box-shadow (e.g., for cards).
  - `.buckle-hidden`: Hides element (`display: none`).

- **Example**:
```html
  <div class="buckle-flex buckle-justify-center buckle-p-3 buckle-bg-primary buckle-rounded">
    <p class="buckle-text-primary">Centered content with padding and color</p>
  </div>
```

- **Notes**
	- Check scss/_utilities.scss for full list.
	- Combine with components (e.g., `.buckle-btn primary`).

## Customization
- Buckle’s Sass files are modular for easy tweaks:
    - Variables (scss/_variables.scss):
        - Change colors, spacing, or border-radius:

            `$primary-color: #007bff;`

            `$border-radius: 8px;`

- **Component Styles:**
    - Edit scss/_carousel.scss for carousel (e.g., button size).
    - Modify scss/_media.scss for image/video styles.
		
- **Compile:**
```
sass scss/buckle.scss css/buckle.css
```
- **Extend:**

Add new components in scss/ and import to buckle.scss.

See [sample.scss](https://github.com/htmlwebfan/buckle/blob/main/scss/sample.scss) for a real-world example.

## Examples

- **Full Demo:** 

Open [index.html](https://github.com/htmlwebfan/buckle/blob/main/index.html) for a complete site with hero carousel, services deck, testimonials, and CTA.

Component Demos: 

Check [style-guide.html](https://github.com/htmlwebfan/buckle/blob/main/style-guide.html) for isolated examples of all components.

Snippet (Testimonials Carousel):
```
<div class="buckle-carousel buckle-carousel-contained">
  <div class="buckle-carousel-inner">
    <div class="buckle-carousel-item buckle-testimonial-item">
      <p>"Great framework!"</p>
      <p><strong>Jane Doe</strong></p>
    </div>
  </div>
  <button class="buckle-carousel-prev">❮</button>
  <button class="buckle-carousel-next">❯</button>
</div>
```

## License

Buckle is licensed under the MIT License (LICENSE). Copyright (c) 2025 Matthew Way. Use, modify, and share freely, keeping the copyright notice.

## Support

Issues: Report bugs or suggest features on [GitHub](https://github.com/htmlwebfan/buckle/issues).
Contact: Reach out via [WebDesignFusion](https://webdesignfusion.com).

Happy building with Buckle!

