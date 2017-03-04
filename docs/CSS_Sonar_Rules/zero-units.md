The value of `0` works without specifying units in all situations where numbers with length units or percentages are allowed. There is no difference between `0px`, `0em`, `0%`, or any other zero-value. The units aren't important because the value is still zero. CSS allows you to omit the length units for zero values and still remain valid CSS.

It's recommended to remove units for all zero length values because these units aren't being used by the browser and therefore can be safely removed to save bytes.

## Rule Details

Rule ID: `zero-units`

This rule is aimed at flagging zero length values that still have units. As such, it warns when `0` is found followed by a unit or a percentage sign.

The following patterns are considered warnings:

```css
.mybox {
    margin: 0px;
}

.mybox {
    width: 0%;
}

.mybox {
    padding: 10px 0px;
}
```

The following patterns are okay and do not cause warnings:

```css
.mybox {
    margin: 0;
}

.mybox {
    padding: 10px 0;
}
```