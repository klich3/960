# Global Styles with 960.css

960.css Grid Lightness Styles includes global styles that can be applied across your entire website. This guide covers the global utility classes available in the library.


## Clearfix:

- `clear`: clearfix
- `clearfix`: clearfix



## Visibility

Control the visibility of elements:

- `hs`: Set as initial dom
- `h`: Hide dom item + hidden
- `hl`: Hide dom intem
- `s`: inline block


```html
<div class="h">
  <!-- Visible element -->
</div>

<div class="s">
  <!-- Invisible element -->
</div>
```



## Overflow

Manage overflow behavior:

- `ofa`: Auto overflow
- `ofh`: Hidden overflow
- `ofs`: Scroll overflow
- `ofsx`: X Scroll visible
- `ofsxh`: X Scroll hide
- `ofsy`: Y Scroll visible
- `ofsyh`: Y Scroll hidde

```html
<div class="ofa">
  <!-- Auto overflow -->
</div>

<div class="ofh">
  <!-- Hidden overflow -->
</div>

<div class="ofs">
  <!-- Scroll overflow -->
</div>

<div class="ofsx">
  <!-- X Scroll visible -->
</div>

<div class="ofsxh">
  <!-- X Scroll hide -->
</div>

<div class="ofsy">
  <!-- Y Scroll visible -->
</div>

<div class="ofsyh">
  <!-- Y Scroll hidden -->
</div>
```

## Color invert

- `color-invert`: ivert colors
- `cldf`: invert colors



```html
<div class="color-invert">
  <!-- Content with color inverted -->
  some text
</div>

<div class="cldf">
  <!-- Content with color inverted using mix-blend-mode and filter -->
  some text
</div>
```