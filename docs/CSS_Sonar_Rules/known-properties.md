The list of supported CSS properties is growing quite large, and it's very easy to miss a typo in a single property when the property name isn't checked. 

## Rule Details

Rule ID: `known-properties`

This rule checks each property name to make sure that it is a known CSS property. The CSS property list is maintained as part of the CSS parser and this rule uses the parser information to determine whether or not the property has been verified. This list will need to be updated as CSS continues to develop, but is a good start for avoiding errors. The intent of this is to warn when there are misspellings.

All vendor-prefixed properties (those beginning with a `-`) are ignored because vendors may add in their own properties at any point in time, and there are no canonical lists of these properties. This behavior is different than a CSS validator, which warns when a vendor-prefixed property is used.

In addition to checking the property name, this rule also checks the property value against the property name to ensure proper values are being supplied. Not all properties are supported yet, but a large number are.

The following patterns are considered warnings:

```css

/* clr isn't a known property */
a {
    clr: red;
}

/* 'foo' isn't a valid color */
a {
    color: foo;
}
```

The following pattern is considered okay and does not cause a warning:

```css
/* -moz- is a vendor prefix, so ignore */
a {
    -moz-foo: bar;
}
```

