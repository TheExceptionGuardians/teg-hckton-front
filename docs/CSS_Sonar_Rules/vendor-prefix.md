Vendor-prefixed properties are created by browser vendors to experiment with new CSS features before the standard has been completed. This allows both developers and browser vendors to find bugs and cross-browser compatibility issues without being locked in to a certain behavior in the future. The standard version of the property usually (but not always) has the same name and syntax as the vendor-prefixed version, providing that there are two or more vendor-prefixed versions with the same syntax.

When using vendor-prefixed properties such as `-moz-border-radius`, you should also include the standard property for future-compatibility. The standard property should come after the vendor-prefixed one to ensure the standard property is used by the browser, such as:

```css
.mybox {
    -moz-border-radius: 5px;
    border-radius: 5px;
}
```

Putting the standard property after the vendor-prefixed property is the best way to ensure your CSS code will continue to work once the standard property is fully adopted (then you can take your time going back and removing the vendor-prefixed properties).

## Rule Details

Rule ID: `vendor-prefix`

This rule is aimed at ensuring standard properties are included whenever vendor-prefixed properties are used. As such, the rule warns when it finds:

1. A vendor-prefixed property without a standard property after it.
1. A vendor-prefixed property with a standard property defined before it.

The following patterns are considered warnings:

```css

/* missing standard property */
.mybox {
    -moz-border-radius: 5px;
}

/* standard property should come after vendor-prefixed property */
.mybox {
    border-radius: 5px;
    -webkit-border-radius: 5px;
}
```

The following patterns are considered okay and do not cause warnings:

```css
/* both vendor-prefix and standard property */
.mybox {
    -moz-border-radius: 5px;
    border-radius: 5px;
}
```

## Further Reading

* [Remember non-vendor-prefixed CSS 3 properties (and put them last)](http://www.456bereastreet.com/archive/201009/remember_non-vendor-prefixed_css_3_properties_and_put_them_last/)