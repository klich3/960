# Debugging and Development with 960.css

When working with the 960.css Grid Lightness Styles, you may find it helpful to use the debugging features provided by the library. Below are some tips and techniques for debugging and development.

## Debug Class

The library includes a debug class that you can apply to elements for easier debugging. Add the `debug` class to an element to apply a red dashed border of 1px, making it visually stand out.

```html
<div class="debug">
  <!-- Your content here -->
</div>
```

## Media Query Debugging
For debugging media queries and responsive styles, you can leverage the `@media` rules provided in the `debug/debug.scss`file. These rules apply different border colors based on the screen width.

* Red border (max-width: 768px)
* Yellow border (min-width: 769px)
* Green border (min-width: 1220px)
* Blue border (min-width: 1600px)

```css
/* Example of media query debugging */
@media (max-width: 768px) {
  body {
    border: 1px solid red;
  }
}

@media (min-width: 769px) {
  body {
    border: 1px solid yellow;
  }
}

/* Add more rules for larger screens as needed */
```


## Browser Developer Tools

Utilize the browser's developer tools to inspect and debug styles applied by the library. You can inspect elements, check applied styles, and troubleshoot any layout or styling issues.

### Chrome Developer Tools

1) Right-click on an element and select "Inspect" to open the Chrome DevTools.
2) Navigate to the "Elements" tab to inspect HTML structure.
3) Use the "Styles" tab to view and modify applied styles.

### Firefox Developer Tools

1) Right-click on an element and select "Inspect Element" to open the Firefox DevTools.
2) Navigate to the "Inspector" tab to inspect HTML structure.
3) Use the "Rules" tab to view and modify applied styles.

These debugging techniques should help you troubleshoot and optimize your layouts when using 960.css Grid Lightness Styles.