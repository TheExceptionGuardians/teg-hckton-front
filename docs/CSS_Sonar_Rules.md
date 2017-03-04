## Parsing errors should be fixed

The most important rule, as far as CSS Lint is concerned, is to ensure there are no parsing errors in the CSS. Parsing errors usually mean you mistyped a character and caused the code to become invalid CSS. These errors may cause the browser to drop a property or an entire rule. Parsing errors are always presented as errors by CSSLint, the most important issues to fix. 

## Possible Errors

The following rules point out potential errors in your CSS.

* `box-model`: [[Beware of box model size]]
* `display-property-grouping`: [[Require properties appropriate for display]]
* `duplicate-properties`: [[Disallow duplicate properties]]
* `empty-rules`: [[Disallow empty rules]]
* `known-properties`: [[Require use of known properties]]

## Compatibility

The following rules flag for compatibility problems across browsers and browser settings.

* `adjoining-classes`[link](adjoining-classes.md) : [[Disallow adjoining classes]]
* `box-sizing`: [[Disallow box-sizing]]
* `compatible-vendor-prefixes`: [[Require compatible vendor prefixes]]
* `gradients`: [[Require all gradient definitions]]
* `text-indent`: [[Disallow negative text-indent]]
* `vendor-prefix`: [[Require standard property with vendor prefix]]
* `fallback-colors`: [[Require fallback colors]]
* `star-property-hack`: [[Disallow star hack]]
* `underscore-property-hack`: [[Disallow underscore hack]]
* `bulletproof-font-face`: [[Bulletproof font-face]] (new in v0.9.10)

## Performance

The following rules are aimed at improving CSS performance, including runtime performance and overall code size.

* `font-faces`: [[Don't use too many web fonts]]
* `import`: [[Disallow @import]]
* `regex-selectors`: [[Disallow selectors that look like regular expressions]]
* `universal-selector`: [[Disallow universal selector]]
* `unqualified-attributes`: [[Disallow unqualified attribute selectors]]
* `zero-units`: [[Disallow units for zero values]]
* `overqualified-elements`: [[Disallow overqualified elements]]
* `shorthand`: [[Require shorthand properties]]
* `duplicate-background-images`: [[Disallow duplicate background images]]

## Maintainability & Duplication

These rules help to ensure your code is readable and maintainable by others.

* `floats`: [[Disallow too many floats]]
* `font-sizes`: [[Don't use too many font-size declarations]]
* `ids`: [[Disallow IDs in selectors]]
* `important`: [[Disallow !important]]
* `order-alphabetical`: [[Disallow non alphabetical]]

## Accessibility

These rules are designed to pick out possible accessibility issues.

* `outline-none`: [[Disallow outline:none]]

## OOCSS

These rules are based on the principles of OOCSS.

* `qualified-headings`: [[Disallow qualified headings]]
* `unique-headings`: [[Headings should only be defined once]]

## Translation
* [Read this in Korean](https://github.com/hyunchulkwak/csslint/wiki/%EA%B7%9C%EC%B9%99)