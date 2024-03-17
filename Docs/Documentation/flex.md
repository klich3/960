# Flexbox Styles with 960.css

960.css Grid Lightness Styles includes flexible layout options using Flexbox. This guide provides an overview of how to leverage Flexbox in your projects with the library.

## Sizes:
- `@s`: Small
- `@m`: Medium
- `@l`: Large
- `@xl`: Extra Large


## Alignment Classes

- `@<size>aca`: Aligns content to the start.
- `@<size>ace`: Aligns content to the end.
- `@<size>acc`: Aligns content to the center.
- `@<size>acsb`: Aligns content to the baseline.
- `@<size>acsa`: Aligns content around the space.
- `@<size>acs`: Stretches content to fill the container.

## Self-Alignment Classes

- `@<size>asa`: Automatically aligns the element.
- `@<size>asfs`: Aligns the element to the start of the container.
- `@<size>asfe`: Aligns the element to the end of the container.
- `@<size>asc`: Aligns the element to the center of the container.
- `@<size>asb`: Aligns the element to the baseline of the container.
- `@<size>ass`: Stretches the element to fill the container.

## Order Classes

- `<size>or<i>`: Sets the order of the element to `i`.

## Growth Classes

- `<size>fg<i>`: Sets the growth factor of the element to `i`.

## Shrink Classes

- `<size>fs<i>`: Sets the shrink factor of the element to `i`.

## Base Classes

- `<size>fb<value>`: Sets the base of the element to `<value>`.

## Media Queries

The above classes can be prefixed with "s" for small, "m" for medium, etc., to apply specific styles to different screen sizes.

## Flex Container

To create a flex container, apply the `flex` class to an element:

```html
<div class="flx">
  <!-- Your flex items go here -->
</div>
```

## Flex Items

Add the `flex-item` class to child elements inside a flex container to make them flexible:

```html
<div class="flx">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

## Flex Direction

Change the direction of the flex container using utility classes:

- `flex-row`: Row (default)
- `flex-column`: Column
- `flex-row-reverse`: Row-reverse
- `flex-column-reverse`: Column-reverse

```html
<div class="flx@fdc">
  <!-- Flex items in a column -->
</div>
```

## Flex Justify Content

Adjust the alignment of flex items along the main axis:

- `justify-start`: Start (default)
- `justify-end`: End
- `justify-center`: Center
- `justify-space-between`: Space between
- `justify-space-around`: Space around

```html
<div class="flx@jcc">
  <!-- Flex items centered -->
</div>
```

## Flex Align Items

Align flex items along the cross axis:

- `items-start`: Start
- `items-end`: End
- `items-center`: Center
- `items-baseline`: Baseline
- `items-stretch`: Stretch (default)

```html
<div class="flx@aie">
  <!-- Flex items aligned to the bottom -->
</div>
```

## Flex Wrap

Control whether flex items should wrap to the next line:

- `flex-no-wrap`: No wrap (default)
- `flex-wrap`: Wrap
- `flex-wrap-reverse`: Wrap reverse

```html
<div class="flx@fww">
  <!-- Flex items wrapped to the next line -->
</div>
```
