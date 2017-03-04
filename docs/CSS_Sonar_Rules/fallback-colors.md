In the beginning, there were three ways to specify colors: in hexadecimal format, using either three or six characters, named colors such as `red`, and `rgb()`. CSS3 has since added several new color formats including `rgba()`, `hsl()`, and `hsla()`. While these new color formats bring a remarkable amount of flexibility to how developers define colors and the relationships between them, it can also leave older browsers looking worse than expected.

The problem is that CSS parsers in browsers will skip a property whose name or value is not understood. Older browsers such as Internet Explorer 8 and earlier, do not understand `rgba()`, `hsl()`, or `hsla()`, and as a result will drop any declarations containing them. Consider the following:

```css
.box {
    background: #000;
    color: rgba(100, 100, 200, 0.5);
}
```

Supporting browsers will treat this CSS code as described. Non-supporting browsers will completely drop the `color` property because the value isn't understood. That means the actual `color` used will be inherited from the surrounding context and might actually end up black (the same as the background). To prevent this, you should always include a fallback color in either hexadecimal, named, or `rgb()` format, such as:

```css
.box {
    background: #000;
    color: blue;
    color: rgba(100, 100, 200, 0.5);
}
```

The fallback color should always go before the new color to ensure older browsers see and use it correctly, and that newer browsers continue on to use the newer color format.

## Rule Details

Rule ID: `fallback-colors`

This rule is aimed at ensuring a proper color is displayed for all browsers. As such, the rule warns when it finds:

1. A `color` property with a `rgba()`, `hsl()`, or `hsla()` color without a preceding `color` property that has an older color format.
1. A `background` property with a `rgba()`, `hsl()`, or `hsla()` color without a preceding `background` property that has an older color format.
1. A `background-color` property with a `rgba()`, `hsl()`, or `hsla()` color without a preceding `background-color` property that has an older color format.

The following patterns are considered warnings:

```css

/* missing fallback color */
.mybox {
    color: rgba(100, 200, 100, 0.5);
}

/* missing fallback color */
.mybox {
    background-color: hsla(100, 50%, 100%, 0.5);
}

/* missing fallback color */
.mybox {
    background: hsla(100, 50%, 100%, 0.5) url(foo.png);
}

/* fallback color should be before */
.mybox {
    background-color: hsl(100, 50%, 100%);
    background-color: green;
}
```

The following patterns are considered okay and do not cause warnings:

```css
/* fallback color before newer format */
.mybox {
    color: red;
    color: rgba(255, 0, 0, 0.5);
}
```