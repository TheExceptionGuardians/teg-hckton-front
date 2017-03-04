The CSS `box-sizing` property is used to define how borders, padding, `width`, and `height` interact with each other. The default value is `content-box`, meaning that `width` and `height` refer to an element's content, and then padding and borders are added around it. Consider the following:

```css
.mybox {
    border: 1px solid black;
    padding: 5px;
    width: 100px;
}
```

The actual width of this box is 112 pixels. That's because the 100 pixels specified by `width` indicates how much area the content should take up, then 5 pixels are added on each side for padding, and 1 pixel on each side for the border.

When you change `box-sizing` to `border-box`, the calculation is done differently:

```css
.mybox {
    box-sizing: border-box;
    border: 1px solid black;
    padding: 5px;
    width: 100px;
}
```

This box has an actual width of 100 pixels while the space available for content is only 88 pixels (100 - 5px padding - 5px padding - 1px border - 1px border). Many consider the `border-box` setting to be more logical and more like how these properties should work.

There is only a problem using `box-sizing` when you need to support Internet Explorer 6 and 7. These browsers do not support `box-sizing` and so will interpret the box model properties differently.

## Rule Details

Rule ID: `box-sizing`

This rule warns when the `box-sizing` property is used. The intent is to ensure that developers realize this property is not supported in older browsers such as Internet Explorer 6 and 7.

The following patterns are considered warnings:

```css
.mybox {
    box-sizing: border-box;
}

.mybox {
    box-sizing: content-box;
}
```

## Further Reading

* [Box Sizing](http://css-tricks.com/7323-box-sizing/)
* https://developer.mozilla.org/En/CSS/Box-sizing
