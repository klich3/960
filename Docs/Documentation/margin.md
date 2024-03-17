# Margin Styles with 960.css

960.css Grid Lightness Styles provides utility classes for managing margins on your website. This guide covers the margin-related classes available in the library.

# Margin

This document describes the margin utility classes defined in `margin.scss`.

## Margin Classes

Margin classes are defined for different screen sizes: `s` (small), `m` (medium), `l` (large), `xl` (extra large). Each screen size has classes to set the margin in all directions (top, bottom, left, right) to 0.

For example, for the `m` (medium) screen size, the classes are:

- `.mtn@m`: Sets the top margin to 0.
- `.mbn@m`: Sets the bottom margin to 0.
- `.mln@m`: Sets the left margin to 0.
- `.mrn@m`: Sets the right margin to 0.
- `.mn@m`: Sets all margins to 0.

These classes are defined within a media query that applies the styles only when the browser window width is at least a certain value. For example, for `m`, the styles are applied when the browser window width is at least 1220px.

## Margin Mixin

The `margin.scss` file also defines a mixin called `margin` that generates margin classes for different directions and sizes. This mixin is used to generate the margin classes for the different screen sizes.

## Margin Classes

Use the following margin classes to control the spacing around elements:

- `m-0`, `m-1`, ..., `m-5`: Set margin from 0 to 5 (0, 0.25rem, 0.5rem, ..., 1.25rem)
- `mt-0`, `mt-1`, ..., `mt-5`: Set top margin
- `mb-0`, `mb-1`, ..., `mb-5`: Set bottom margin
- `ml-0`, `ml-1`, ..., `ml-5`: Set left margin
- `mr-0`, `mr-1`, ..., `mr-5`: Set right margin
- `mx-0`, `mx-1`, ..., `mx-5`: Set horizontal margin (left and right)
- `my-0`, `my-1`, ..., `my-5`: Set vertical margin (top and bottom)

### Example:

```html
<div class="m-2">
  <!-- Element with margin of 0.5rem -->
</div>

<div class="mt-3">
  <!-- Element with top margin of 1rem -->
</div>

<div class="mb-4">
  <!-- Element with bottom margin of 1.5rem -->
</div>

<div class="ml-2">
  <!-- Element with left margin of 0.5rem -->
</div>

<div class="mr-3">
  <!-- Element with right margin of 1rem -->
</div>

<div class="mx-4">
  <!-- Element with horizontal margin of 1.5rem -->
</div>

<div class="my-2">
  <!-- Element with vertical margin of 0.5rem -->
</div>
````
