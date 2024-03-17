# Grid Styles with 960.css

960.css Grid Lightness Styles offers a simple and effective grid system for creating responsive layouts on your website. This guide explains the grid classes and how to use them.

## Grid Basics

The grid is based on a 12-column layout. You can divide your content into a maximum of 12 columns, allowing for flexible and responsive designs.


## Width Classes

- `.w310`: Sets the width to 30%.
- `.w710`: Sets the width to 70%.
- `.w910`: Sets the width to 90%.
- `.wa`: Sets the width to auto.
- `.we`: Sets the width to 0 and allows the element to grow to fill the available space.

## Media Queries

The width classes can be applied at different breakpoints using the following media query classes:

- `@include media(small)`: Applies styles for small screens.
- `@include media(middle)`: Applies styles for medium screens.
- `@include media(large)`: Applies styles for large screens.
- `@include media(extraLarge)`: Applies styles for extra large screens.

## Grid Classes

Use the following grid classes to create your layout:

- `g`: Base grid class
- `g@s`: Small screen grid (<= 600px)
- `g@m`: Medium screen grid (>= 601px)
- `g@l`: Large screen grid (>= 1024px)
- `g@xl`: Extra-large screen grid (>= 1440px)

### Example:

```html
<div class="g">
  <!-- Content with base grid -->
</div>

<div class="g@s">
  <!-- Content for small screens -->
</div>

<div class="g@m">
  <!-- Content for medium screens -->
</div>

<div class="g@l">
  <!-- Content for large screens -->
</div>

<div class="g@xl">
  <!-- Content for extra-large screens -->
</div>
```

## Grid Wrapping

Enable grid wrapping with the following classes:

- `g-wrap`: Enable grid wrapping
- `g-nowrap`: Disable grid wrapping (default)

### Example:

```html
<div class="g gw">
  <!-- Content with grid wrapping -->
</div>

<div class="g g">
  <!-- Content without grid wrapping -->
</div>
```

## Grid Gutters

Adjust grid gutters with the following classes:

- `g-gutter`: Default gutter (15px)
- `g-gutter-small`: Small gutter (10px)
- `g-gutter-large`: Large gutter (20px)

### Example:

```html
<div class="g g-gutter">
  <!-- Content with default gutter -->
</div>

<div class="g g-gutter-small">
  <!-- Content with small gutter -->
</div>

<div class="g g-gutter-large">
  <!-- Content with large gutter -->
</div>
```
