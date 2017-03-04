Negative text indents are typically used to hide text off-screen for accessibility purposes. Often used as part of an image replacement technique, using a negative text indent ensures that screen readers will read the text even though it appears offscreen. Using `visibility: hidden` or `display: none` causes the text to be skipped by screen readers, so a negative text indent has been deemed as better for accessibility.

The technique usually involves a very large negative number such as `-999px` or `-9999px`, such as:

```css
.mybox {
    background: url(bg.png) no-repeat;
    text-indent: -9999px;
}
```

The intent of this technique is to allow the background image to show through for sighted users while screen readers receive the inline text instead.

Negative text indents are also problematic when used in a right-to-left language page, as the effect may cause a long horizontal scrollbar to appear. This problem can be fixed by adding `direction: ltr` to the rule, such as:

```css
.mybox {
    background: url(bg.png) no-repeat;
    direction: ltr;
    text-indent: -9999px;
}
```

There are mixed opinions about whether or not negative text indents affect a page's search ranking. [Anecdotal accounts ](http://luigimontanez.com/2010/stop-using-text-indent-css-trick/) seems to indicate Google treats negative text indents as a spam technique, but this has not been confirmed. 

## Rule Details
    
Rule ID: `text-indent`

This rule is intended to find problematic uses of `text-indent` in CSS code. It warns when a `text-indent` value of `-99` or similar (i.e., `-100`, `-999`, etc.) is used without the use of `direction: ltr`. The units being used don't matter, so `px`, `em`, etc. are all treated as the same.

The following patterns are considered warnings:

```css

/* missing direction */
.mybox {
    text-indent: -999px;
}

/* missing direction */
.mybox {
    text-indent: -999em;
}

/* direction is rtl */
.mybox {
    direction: rtl;
    text-indent: -999em;
}

```

The following patterns are considered okay and do not cause a warning:

```css
/* direction used */
.mybox {
    direction: ltr;
    text-indent: -999em;
}

/* Not obviously used to hide text */
.mybox {
    text-indent: -1em;
}
```

## Further Reading

* [CSS text-indent: An Excellent Trick To Style Your HTML Form](http://aext.net/2010/02/css-text-indent-style-your-html-form/)
* [Stop Using the text-indent: -9999px Trick](http://luigimontanez.com/2010/stop-using-text-indent-css-trick/)
* [CSS Image Replacement Museum](http://css-tricks.com/examples/ImageReplacement/)