The underscore hack is a technique for applying CSS properties only to Internet Explorer prior to version 7. By placing an underscore immediately before the property name, older versions of Internet Explorer treated as if the underscore isn't there while other browsers simply ignore it. For example:

```css
.mybox {
    border: 1px solid black;
    padding: 5px;
    width: 100px;
    _width: 200px;
}
```

In this example, the `_width` property is treated as if it were `width` by Internet Explorer 6 and earlier, so it uses the value of `200px`; other browsers skip that property and use the value of `100px`.

The underscore hack relies on an old CSS parser bug in Internet Explorer, and as such, some prefer not to use it.

## Rule Details

Rule ID: `underscore-property-hack`

This rule is aimed at eliminating the use of the underscore hack in CSS. As such, the rule warns when it finds a property preceded with an underscore.

The following patterns are considered warnings:

```css

.mybox {
    border: 1px solid black;
    _width: 100px;
}
```

## Further Reading

* [Underscore Hack](http://en.wikipedia.org/wiki/CSS_filter#Underscore_hack)
* [Avoiding CSS Hacks for Internet Explorer](http://24ways.org/2005/avoiding-css-hacks-for-internet-explorer)