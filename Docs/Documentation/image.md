# Image Styles with 960.css

960.css Grid Lightness Styles provides utility classes for styling and managing images on your website. This guide covers the image-related classes available in the library.

# IMAGES, SVG

Image classes are defined with `[class*="img"]`. Depending on the additional class, a different `object-fit` property is applied:

- `@cn`: `object-fit: contain;`
- `@co`: `object-fit: cover;`
- `@fl`: `object-fit: fill;`
- `@sd`: `object-fit: scale-down;`
- `@in`: `object-fit: inherit;`
- `@n`: `object-fit: none;`

Images and SVGs with the class `.e` have a width of 100%.

Different media sizes are defined for different screen widths:

- Up to 768px: `svg.e@s, img.e@s`
- From 769px: `svg.e@m, img.e@m`
- From 1220px: `svg.e@l, img.e@l`
- From 1600px: `svg.e@xl, img.e@xl`

All have a width of 100%.

`audio`, `video`, and `img` elements have a maximum width of 100%, automatic height, and `box-sizing: border-box;`.

Images have a border of 0.

Images and SVGs with the class `.p` have no maximum width.

Non-root SVGs have `overflow: hidden;`.

## Image Classes

Use the following image classes to customize the appearance of your images:

- `img-fluid`: Make an image responsive (max-width: 100%, height: auto)
- `img-rounded`: Apply rounded corners to an image
- `img-circle`: Create a circular-shaped image
- `img-thumbnail`: Add a border and padding to create a thumbnail-style image
- `img-left`, `img-right`: Float an image to the left or right with spacing

### Example:

```html
<img src="example.jpg" alt="Example Image" class="img-fluid">
<img src="rounded.jpg" alt="Rounded Image" class="img-rounded">
<img src="circle.jpg" alt="Circular Image" class="img-circle">
<img src="thumbnail.jpg" alt="Thumbnail Image" class="img-thumbnail">
<img src="left-float.jpg" alt="Left Float Image" class="img-left">
<img src="right-float.jpg" alt="Right Float Image" class="img-right">
```