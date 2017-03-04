Experimental CSS properties are typically implemented using vendor prefixes until the final behavior has been established and agreed upon. Most CSS3 properties have vendor-prefixed equivalents for multiple vendors, including Firefox (`-moz`), Safari/Chrome (`-webkit`), Opera (`-o`), and Internet Explorer (`-ms`).  It's easy to forget to include the vendor prefixed version of a property when there are so many to keep track of.

The following properties have multiple vendor-prefixed versions:

* `animation`
* `animation-delay`
* `animation-direction`
* `animation-duration`
* `animation-fill-mode`
* `animation-iteration-count`
* `animation-name`
* `animation-play-state`
* `animation-timing-function`
* `appearance`
* `border-end`
* `border-end-color`
* `border-end-style`
* `border-end-width`
* `border-image`
* `border-radius`
* `border-start`
* `border-start-color`
* `border-start-style`
* `border-start-width`
* `box-align`
* `box-direction`
* `box-flex`
* `box-lines`
* `box-ordinal-group`
* `box-orient`
* `box-pack`
* `box-sizing`
* `box-shadow`
* `column-count`
* `column-gap`
* `column-rule`
* `column-rule-color`
* `column-rule-style`
* `column-rule-width`
* `column-width`
* `hyphens`
* `line-break`
* `margin-end`
* `margin-start`
* `marquee-speed`
* `marquee-style`
* `padding-end`
* `padding-start`
* `tab-size`
* `text-size-adjust`
* `transform`
* `transform-origin`
* `transition`
* `transition-delay`
* `transition-duration`
* `transition-property`
* `transition-timing-function`
* `user-modify`
* `user-select`
* `word-break`
* `writing-mode`

If you want the same CSS effects across all browsers, then it's important to remember the vendor-prefixed properties for all supporting browsers.

## Rule Details
    
Rule ID: `compatible-vendor-prefixes`

This rule is intended to warn when a vendor-prefixed property is missing. The supported properties are listed in the previous section.

The following patterns are considered warnings:

```css
/* Missing -moz, -ms, and -o */
.mybox {
    -webkit-transform: translate(50px, 100px);
}

/* Missing -webkit */
.mybox {
    -moz-border-radius: 5px;
}
```