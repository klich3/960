# Text Styles with 960.css

960.css Grid Lightness Styles provides utility classes for styling text on your website. This guide covers the text-related classes available in the library.

# This is a title with left alignment
{: .txt@l }

This is a paragraph with justified alignment and text transformation to uppercase.
{: .txt@aj .txt@tu }

This is a text with text overflow ellipsis.
{: .txt@e }

This is a text with underline text decoration.
{: .txt@du }

## Text Classes

Use the following text classes to style your text:

- `txt@l`: Align text to the left
- `txt@c`: Center-align text
- `txt@r`: Align text to the right
- `txt@aj`: Justify text
- `txt@tu`: Transform text to uppercase
- `txt@tl`: Transform text to lowercase
- `txt@tc`: Capitalize the first letter of each word
- `txt@wn`: Prevent text from wrapping to the next line
- `txt@e`: Truncate text with an ellipsis (...) when it overflows

### Example:

```html
<p class="txt@l">This is a title with left alignment</p>
<p class="txt@aj txt@tu">This is a paragraph with justified alignment and text transformation to uppercase.</p>
<p class="txt@e">This is a text with text overflow ellipsis.</p>
<p class="txt@du">This is a text with underline text decoration.</p>
```
