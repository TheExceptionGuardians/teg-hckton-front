A well-organized site has a small set of font sizes used throughout. These font sizes are often best represented as abstracted classes that can be applied to elements anywhere in the site. When not abstracted, this leads developers to add `font-size` declarations repeatedly in order to get the right size to appear. This is problematic because font sizes can't be changed in one spot if and when the design changes.

You can create some standard font size class such as:

```css
.small {
    font-size: 8px;
}

.medium {
    font-size: 11px;
}

.large {
    font-size: 14px;
}
```
Using classes such as these in your project allows consistent use of font sizes throughout, and also limits the number of times `font-size` appears in your CSS. Now there is one place to go to change font sizes instead of multiple.

## Rule Details

Rule ID: `font-sizes`

This rule is aimed at pointing out opportunities for abstracting font sizes. The rule warns when 10 or more `font-size` declarations are found.
