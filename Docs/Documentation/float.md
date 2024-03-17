# Float Styles with 960.css

960.css Grid Lightness Styles provides utility classes for controlling the float property, allowing you to achieve specific layout designs. This guide outlines how to use float styles in your projects.

# Floats

Floats are a CSS property that allows elements to float to the left or right, or not float at all.

## Classes

- `.fl`: Makes the element float to the left.
- `.fr`: Makes the element float to the right.
- `.fn`: Makes the element not float.

## Media Queries

Float classes can also be modified for different screen sizes using media queries.

- `.fl@s`: Makes the element float to the left on small screens.
- `.fr@s`: Makes the element float to the right on small screens.
- `.fn@s`: Makes the element not float on small screens.

- `.fl@m`: Makes the element float to the left on medium screens.
- `.fr@m`: Makes the element float to the right on medium screens.
- `.fn@m`: Makes the element not float on medium screens.

- `.fl@l`: Makes the element float to the left on large screens.
- `.fr@l`: Makes the element float to the right on large screens.
- `.fn@l`: Makes the element not float on large screens.

- `.fl@xl`: Makes the element float to the left on extra large screens.
- `.fr@xl`: Makes the element float to the right on extra large screens.
- `.fn@xl`: Makes the element not float on extra large screens.

## Float Classes

Apply the following float classes to elements:

- `fl`: Float left
- `fr`: Float right
- `fn`: No float (default)

```
<div class="fl">
  <!-- Content floated to the left -->
</div>

<div class="fr">
  <!-- Content floated to the right -->
</div>

<div class="fn">
  <!-- Content with no float -->
</div>
```
