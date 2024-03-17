---
layout: home

hero:
  name: "960.css Grid Lightness Styles"
  text: "Create responsive grids effortlessly with our lightweight CSS library."
  tagline: "Effortless grid implementation for your site"
  actions:
    - theme: brand
      text: "Getting Started"
      link: "/Documentation/getting-started"
    - theme: alt
      text: "Documentation"
      link: "/Documentation/"
  image:
    src: /public/images/960.png
    alt: 960.css

features:
  - title: Easy Grid Implementation
    details: "Quickly set up responsive grids for your website layout."
  - title: Lightweight and Efficient
    details: "Keep your stylesheets clean with our minimalistic and effective grid styles."
  - title: Customizable and Responsive
    details: "Adapt your grids to different screen sizes with ease."

quicklinks:
  - text: "Getting Started"
    link: "/Documentation/getting-started"
  - text: "Grid Styles"
    link: "/Documentation/grid-styles"
  - text: "Responsive Design"
    link: "/Documentation/responsive-design"
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #3699C5 30%, #ff00aa);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #3699C5 50%, #ccc 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>