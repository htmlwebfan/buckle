# Buckle Framework
A Lightweight Front-end Framework

[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)

Buckle is a lightweight CSS and JavaScript framework for building modern, responsive websites with ease. At just ~8.4KB (CSS) and ~2.4KB (JS), it delivers essential components without the bloat, perfect for developers who want flexibility and speed.
Developed by Matthew Way, Buckle powers clean designs like the demo in `index.html`, featuring a full-width hero carousel, rounded images, and a responsive layout.

You can see an example of a simple single page website with a carousel hero, subscribe, services, auto scroll navigation, and more functionality at [Buckle UI Framework](https://buckle.htmlwebfan.com)

## Features
- **Hero Carousel**: Full-width slider with auto-scroll and customizable text overlays (see `index.html`).
- **Testimonials Carousel**: Containerized, mobile-friendly slider for quotes.
- **Responsive Deck**: Card-based layouts for services or pricing.
- **Media Classes**: Support for images and videos, including circular images with `.buckle-media-circle`.
- **Navigation**: Mobile-ready navbar with smooth scroll-to links.
- **Utilities**: Lightweight classes for spacing, colors, and more.
- **Sass-Powered**: Modular styles in `scss/` for easy customization.
- **MIT Licensed**: Free to use, modify, and share.

## Installation
**Clone the Repository**:
```
git clone https://github.com/your-username/buckle.git
cd buckle
```

**Install Sass**
```
npm install -g sass
```

**Compile Sass**
```
sass scss/buckle.scss css/buckle.css
sass scss/sample.scss css/sample.css
sass scss/style-guide.scss css/style-guide.css
```

**Run Locally**
Open index.html in a browser, or use a local server:
```
python3 -m http.server 8000
visit http://localhost:8000
```

## Usage
Include Buckle in your project:
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Buckle Site</title>
  <link rel="stylesheet" href="css/buckle.css">
  <link rel="stylesheet" href="css/sample.css">
</head>
<body>
  <!-- Add components like carousel or deck -->
  <div class="buckle-carousel buckle-carousel-full" data-auto-scroll="true">
    <div class="buckle-carousel-inner">
      <div class="buckle-carousel-item">
        <img src="img/your-image.jpg" alt="Slide" class="buckle-media-image buckle-media-circle">
        <div class="buckle-hero-text buckle-bg-dark-50 buckle-p-3">
          <h1>Welcome</h1>
          <p>Start building with Buckle!</p>
        </div>
      </div>
    </div>
  </div>

  <script src="js/buckle.js"></script>
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      new Buckle();
    });
  </script>
</body>
</html>
```
Check index.html for a full example and style-guide.html for component demos.

## Contributing

Ideas or improvements? Open an issue or submit a pull request! Please follow basic guidelines:
Keep it lightweight.
Test changes with index.html.
Update style-guide.html for new components.

## License
Buckle is licensed under the MIT License (LICENSE). Copyright (c) 2025 Matthew Way.

## Contact
Contact
Built by Matthew Way. Reach out via [Web Design Fusion](https://webdesignfusion.com) or open an issue on GitHub.
