# Variables with 960.css

960.css Grid Lightness Styles utilizes SCSS variables to provide flexibility and customization. This guide covers the variables used in the library.

## SCSS Variables

### `$gridSections`

Defines the number of sections in a grid.

### `$columns`

Defines the number of text columns.

### `$media`

Defines various breakpoints for responsive styles. For example, `small: 768px` means a breakpoint at 768px for small screens.

### `$shortDir`

Defines abbreviations for directions (top, left, bottom, right).

### `$percentages`

Defines a series of percentages as variables for use in other styles.

### `$percentChar`

Defines the percentage character for use in other styles.

### Example:

```scss
$gridSections: 12;
$columns: 4;
$media: (
  small: 768px,
  medium: 992px,
  large: 1200px,
);
$shortDir: (
  t: top,
  l: left,
  b: bottom,
  r: right,
);
$percentages: (
  p25: 25%,
  p50: 50%,
  p75: 75%,
);
$percentChar: '%';
```