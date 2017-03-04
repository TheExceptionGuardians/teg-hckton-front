Sometimes when editing a rule you may end up defining multiple properties that can better be represented using shorthand. For example:

```css
.mybox {
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 20px;
    margin-bottom: 30px;
}
```

These four properties can actually be combined into a single `margin` property, such as:

```css
.mybox {
    margin: 20px 10px 30px;
}
```

Using shorthand properties where possible helps to decrease the overall size of the CSS.

## Rule Details

Rule ID: `shorthand`

This rule is aimed at decreasing file size by finding properties that can be combined into one. As such, it warns in the following cases:

1. When `margin-left`, `margin-right`, `margin-top`, and `margin-bottom` are used together in a single rule.
1. When `padding-left`, `padding-right`, `padding-top`, and `padding-bottom` are used together in a single rule.

The following patterns are considered warnings:

```css
.mybox {
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 20px;
    margin-bottom: 30px;
}

.mybox {
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 20px;
    padding-bottom: 30px;
}
```
The following patterns are considered okay and do not cause warnings:

```css

/* only two margin properties*/
.mybox {
    margin-left: 10px;
    margin-right: 10px;

}

/* only two padding properties */
.mybox {
    padding-right: 10px;
    padding-top: 20px;
}
```