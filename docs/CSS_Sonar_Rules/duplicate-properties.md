Early on in web development, including the same CSS property twice was certainly an error, especially if there were two different values. For example:

```css
.mybox {
    width: 100px;
    width: 120px;
}
```

Anyone looking at this code would think that this is clearly an error. Recently, however, including duplicate properties is used as a way to deal with varying levels of browser support for CSS properties. For example, some browsers support RGBA color while others do not, so it's quite common to see patterns such as:

```css
.mybox {
    background: #fff;
    background: rgba(255, 255, 255, 0.5);
}
```

This is quite clearly intentional. The developer wants to use RGBA when available but wants to fall back to a regular color when not available. 

## Rule Details
    
Rule ID: `duplicate-properties`

This rule is intended to find errors of duplication in CSS code. It warns when:

1. A property is included twice and contains the same value.
1. A property is included twice and is separated by at least one other property.

The following patterns are considered warnings:

```css

/* properties with the same value */
.mybox {
    border: 1px solid black;
    border: 1px solid black;
}

/* properties separated by another property */
.mybox {
    border: 1px solid black;
    color: green;
    border: 1px solid red;
}
```

The following patterns are considered okay and do not cause a warning:

```css

/* one after another with different values */
.mybox {
    border: 1px solid black;
    border: 1px solid red;
}
```