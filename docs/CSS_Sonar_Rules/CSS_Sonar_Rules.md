## Parsing errors should be fixed

The most important rule, as far as CSS Lint is concerned, is to ensure there are no parsing errors in the CSS. Parsing errors usually mean you mistyped a character and caused the code to become invalid CSS. These errors may cause the browser to drop a property or an entire rule. Parsing errors are always presented as errors by CSSLint, the most important issues to fix. 

## Possible Errors

The following rules point out potential errors in your CSS.

* [box-model](box-model.md): [[Beware of box model size]]
* [display-property-grouping](display-property-grouping.md): [[Require properties appropriate for display]]
* [duplicate-properties](duplicate-properties.md): [[Disallow duplicate properties]]
* [empty-rules](empty-rules.md): [[Disallow empty rules]]
* [known-properties](known-properties.md): [[Require use of known properties]]

## Compatibility

The following rules flag for compatibility problems across browsers and browser settings.

* [adjoining-classes](adjoining-classes.md) : [[Disallow adjoining classes]]
* [box-sizing](box-sizing.md): [[Disallow box-sizing]]
* [compatible-vendor-prefixes](compatible-vendor-prefixes.md): [[Require compatible vendor prefixes]]
* [gradients](gradients.md): [[Require all gradient definitions]]
* [text-indent](text-indent.md): [[Disallow negative text-indent]]
* [vendor-prefix](vendor-prefix.md): [[Require standard property with vendor prefix]]
* [fallback-colors](fallback-colors.md): [[Require fallback colors]]
* [star-property-hack](star-property-hack.md): [[Disallow star hack]]
* [underscore-property-hack](underscore-property-hack.md): [[Disallow underscore hack]]
* [bulletproof-font-face](bulletproof-font-face.md): [[Bulletproof font-face]] (new in v0.9.10)

## Performance

The following rules are aimed at improving CSS performance, including runtime performance and overall code size.

* [font-faces](font-faces.md): [[Don't use too many web fonts]]
* [import](import.md): [[Disallow @import]]
* [regex-selectors](regex-selectors.md): [[Disallow selectors that look like regular expressions]]
* [universal-selector](universal-selector.md): [[Disallow universal selector]]
* [unqualified-attributes](unqualified-attributes.md): [[Disallow unqualified attribute selectors]]
* [zero-units](zero-units.md): [[Disallow units for zero values]]
* [overqualified-elements](overqualified-elements.md): [[Disallow overqualified elements]]
* [shorthand](shorthand.md): [[Require shorthand properties]]
* [duplicate-background-images](duplicate-background-images.md): [[Disallow duplicate background images]]

## Maintainability & Duplication

These rules help to ensure your code is readable and maintainable by others.

* [floats](floats.md): [[Disallow too many floats]]
* [font-sizes](font-sizes.md): [[Don't use too many font-size declarations]]
* [ids](ids.md): [[Disallow IDs in selectors]]
* [important](important.md): [[Disallow !important]]
* [order-alphabetical](order-alphabetical.md): [[Disallow non alphabetical]]

## Accessibility

These rules are designed to pick out possible accessibility issues.

* [outline-none](outline-none.md): [[Disallow outline:none]]

## OOCSS

These rules are based on the principles of OOCSS.

* [qualified-headings](qualified-headings.md): [[Disallow qualified headings]]
* [unique-headings](unique-headings.md): [[Headings should only be defined once]]

