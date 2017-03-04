The star hack is a famous (or perhaps infamous) technique for applying CSS properties only to Internet Explorer prior to version 8. By placing an asterisk immediately before the property name, older versions of Internet Explorer treated as if the asterisk isn't there while other browsers simply ignore it. For example:

```css
.mybox {
    border: 1px solid black;
    padding: 5px;
    width: 100px;
    *width: 200px;
}
```

In this example, the `*width` property is treated as if it were `width` by Internet Explorer 7 and earlier, so it uses the value of `200px`; other browsers skip that property and use the value of `100px`.

Star hack relies on an old CSS parser bug in Internet Explorer, and as such, some prefer not to use it.

## Rule Details

Rule ID: `star-property-hack`

This rule is aimed at eliminating the use of the star hack in CSS. As such, the rule warns when it finds a property preceded with an asterisk.

The following patterns are considered warnings:

```css

.mybox {
    border: 1px solid black;
    *width: 100px;
}
```

## Further Reading

* [Star Hack](http://en.wikipedia.org/wiki/CSS_filter#Star_hack)
* [Avoiding CSS Hacks for Internet Explorer](http://24ways.org/2005/avoiding-css-hacks-for-internet-explorer)