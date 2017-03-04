Even though you can define any group of properties together in a CSS rule, some of them will be ignored due to the `display` of the element. This leads to extra cruft in your CSS and misunderstandings around how a rule should work.

For `display: inline`, the `width`, `height`, `margin-top`, `margin-bottom`, and `float` properties have no effect because inline elements don't have a formal box with which to apply the styles. The `margin-left` and `margin-right` properties still work reliably for indentation purposes but the other margin settings do not. The `float` property is sometimes used as a fix for the [IE6 double-margin bug](http://www.positioniseverything.net/explorer/doubled-margin.html).

Other general rules based on `display` are:

* `display: inline-block` should not use `float`.
* `display: block` should not use `vertical-align`.
* `display: table-*` should not use `margin` (and all variants) or `float`.

Removing the ignored or problematic properties decreases file size thereby improving performance.

## Rule Details

Rule ID: `display-property-grouping`

This rule is aimed at flagging properties that don't work based with the `display` property being used. The ultimate goal is to produce a smaller, clearer CSS file without unnecessary code. As such, the rule warns when it finds:

* `display: inline` used with `width`, `height`, `margin`, `margin-top`, `margin-bottom`, and `float`.
* `display: inline-block` used with `float`.
* `display: block` used with `vertical-align`.
* `display: table-*` used with `margin` (and all variants) or `float`.

The following patterns are considered warnings:

```css
/* inline with height */
.mybox {
    display: inline;
    height: 25px;
}

/* inline-block with float */
.mybox {
    display: inline-block;
    float: left;
}

/* table-cell and margin */
.mybox {
    display: table-cell;
    margin: 10px;
}
```

The following patterns are considered okay and do not cause warnings:

```css
/* inline with margin-left */
.mybox {
    display: inline;
    margin-left: 10px;
}

/* table and margin */
.mybox {
    display: table;
    margin-bottom: 10px;
}
```

## Further Reading

* [The IE5/IE6 Doubled Float Margin Bug](http://www.positioniseverything.net/explorer/doubled-margin.html)