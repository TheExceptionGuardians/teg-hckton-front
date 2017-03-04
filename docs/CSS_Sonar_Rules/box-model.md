The box model is one of the most frequently misunderstood parts of CSS. "Box model" refers to the series of boxes that make up an element visually. This starts with the content, which is the inner-most box. Content is surrounded by padding, which in turn is surrounded by borders. The way these measurements interact, however, is a bit confusing. Consider the following:

```css
.mybox {
    border: 1px solid black;
    padding: 5px;
    width: 100px;
}
```

A new developer might assume that the width of an element with the `mybox` class would be 100 pixels. In fact, the width is 112 pixels because `width` refers to the content box and padding and borders are added on top of that. Frequently when developers include this combination of properties, it is an error because they are expecting different behavior.

You can force most browsers to obey `width` and `height` as the full size of an element by using the `box-sizing` property and setting it to `border-box`, as in this example:

```css
.mybox {
    box-sizing: border-box;
    border: 1px solid black;
    padding: 5px;
    width: 100px;
}
```

Now an element with a class of `mybox` will have an actual width of 100 pixels, and the padding and borders will exist inside of that area, leaving 88 pixels for content instead of 100 pixels. 

## Rule Details

Rule ID: `box-model`

This rule is aimed at eliminating unwanted box model sizing issues. As such, the rule warns when it finds:

1. `width` being used with `border`, `border-left`, `border-right`, `padding`, `padding-left`, or `padding-right`
1. `height` being used with `border`, `border-top`, `border-bottom`, `padding`, `padding-top`, or `padding-bottom`

If the `box-sizing` property is specified, then the rule does not emit any warnings for the above conditions as it assumes you know what you're doing.

The following patterns are considered warnings:

```css

/* width and border */
.mybox {
    border: 1px solid black;
    width: 100px;
}

/* height and padding */
.mybox {
    height: 100px;
    padding: 10px;
}
```

The following patterns are considered okay and do not cause warnings:

```css
/* width and border with box-sizing */
.mybox {
    box-sizing: border-box;
    border: 1px solid black;
    width: 100px;
}

/* width and border-top */
.mybox {
    border-top: 1px solid black;
    width: 100px;
}

/* height and border-top of none */
.mybox {
    border-top: none;
    height: 100px;
}

```

## Further Reading

* [The CSS Box Model](http://css-tricks.com/2841-the-css-box-model/)
* [Understanding the Box Model](http://blog.simonwillison.net/post/58225400497/theboxmodel)