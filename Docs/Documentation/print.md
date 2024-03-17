# Print Styles with 960.css

960.css Grid Lightness Styles includes utility classes for styling the print version of your website. This guide covers the print-related classes available in the library.

## Print Classes

Use the following print classes to customize the appearance when printing:

- `print-visible`: Make an element visible when printing (initially hidden)
- `print-invisible`: Hide an element when printing (initially visible)
- `print-block`: Set the display property to block when printing
- `print-inline`: Set the display property to inline when printing
- `print-inline-block`: Set the display property to inline-block when printing

### Example:

```html
<div class="print-visible">
  <!-- Element visible when printing -->
</div>

<div class="print-invisible">
  <!-- Element hidden when printing -->
</div>

<div class="print-block">
  <!-- Element with display: block when printing -->
</div>

<div class="print-inline">
  <!-- Element with display: inline when printing -->
</div>

<div class="print-inline-block">
  <!-- Element with display: inline-block when printing -->
</div>
```