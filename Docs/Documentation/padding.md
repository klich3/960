# Padding Styles with 960.css

960.css Grid Lightness Styles provides utility classes for managing padding on your website. This guide covers the padding-related classes available in the library.

El archivo `padding.scss` contiene una clase de utilidad para aplicar estilos de relleno (padding) en diferentes direcciones.

El código:

```scss
.p#{$short}#{$i}#{$size} {
    padding-#{$direction}: #{$i}#{$percentChar};
}
```

Genera una serie de clases de utilidad para el relleno. Las variables $short, $i, $size, $direction y $percentChar se utilizan para generar nombres de clase y valores de relleno dinámicos.

.p#{$short}#{$i}#{$size}: Esta es la sintaxis para generar el nombre de la clase. $short representa la dirección del relleno (por ejemplo, 't' para top, 'b' para bottom, 'l' para left, 'r' para right), $i es el valor del relleno y $size puede ser utilizado para indicar diferentes tamaños de relleno.
padding-#{$direction}: #{$i}#{$percentChar};: Esta es la declaración de estilo que se aplica a la clase. $direction indica la dirección del relleno, $i es el valor del relleno y $percentChar puede ser un valor en porcentaje o en píxeles, dependiendo de cómo se configure.
Por ejemplo, si $short es 't', $i es '10', $size es 'lg' y $direction es 'top', $percentChar es '%', entonces la clase generada sería .pt10lg y aplicaría un relleno superior del 10%.

## Padding Classes

Use the following padding classes to control the spacing inside elements:

- `p-0`, `p-1`, ..., `p-5`: Set padding from 0 to 5 (0, 0.25rem, 0.5rem, ..., 1.25rem)
- `pt-0`, `pt-1`, ..., `pt-5`: Set top padding
- `pb-0`, `pb-1`, ..., `pb-5`: Set bottom padding
- `pl-0`, `pl-1`, ..., `pl-5`: Set left padding
- `pr-0`, `pr-1`, ..., `pr-5`: Set right padding
- `px-0`, `px-1`, ..., `px-5`: Set horizontal padding (left and right)
- `py-0`, `py-1`, ..., `py-5`: Set vertical padding (top and bottom)

### Example:

```html
<div class="p-2">
  <!-- Element with padding of 0.5rem -->
</div>

<div class="pt-3">
  <!-- Element with top padding of 1rem -->
</div>

<div class="pb-4">
  <!-- Element with bottom padding of 1.5rem -->
</div>

<div class="pl-2">
  <!-- Element with left padding of 0.5rem -->
</div>

<div class="pr-3">
  <!-- Element with right padding of 1rem -->
</div>

<div class="px-4">
  <!-- Element with horizontal padding of 1.5rem -->
</div>

<div class="py-2">
  <!-- Element with vertical padding of 0.5rem -->
</div>
```