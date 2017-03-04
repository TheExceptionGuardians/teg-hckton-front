When using `@font-face` to declare multiple font types for cross browser compatibility, you can see 404's in old versions of IE due to a bug in the way that IE parses the font declarations.  For example, this syntax:

```css
@font-face {
    font-family: 'MyFontFamily';
    src: url('myfont-webfont.eot') format('embedded-opentype'), 
        url('myfont-webfont.woff') format('woff'), 
        url('myfont-webfont.ttf')  format('truetype'),
        url('myfont-webfont.svg#svgFontName') format('svg');
}
```

Will cause a 404 in IE 6, 7, and 8.  The fix is to add a question mark after the first font URL, so IE sees the rest of the property value as a query string.  This is a correct example:

```css
@font-face {
    font-family: 'MyFontFamily';
    src: url('myfont-webfont.eot?#iefix') format('embedded-opentype'), 
        url('myfont-webfont.woff') format('woff'), 
        url('myfont-webfont.ttf')  format('truetype'),
        url('myfont-webfont.svg#svgFontName') format('svg');
}
```

## Rule Details

Rule ID: `bulletproof-font-face`

This rule is aimed at preventing 404 errors in Internet Explorer 8 and earlier due to a bug in how web font URLs are parsed.

The following patterns are considered warnings:

```css
@font-face {
    font-family: 'MyFontFamily';

    /* First web font is missing query string */
    src: url('myfont-webfont.eot') format('embedded-opentype'), 
        url('myfont-webfont.woff') format('woff'), 
        url('myfont-webfont.ttf')  format('truetype'),
        url('myfont-webfont.svg#svgFontName') format('svg');
}
```

The following patterns are considered okay and do not cause warnings:

```css
@font-face {
    font-family: 'MyFontFamily';
    src: url('myfont-webfont.eot?#iefix') format('embedded-opentype'), 
        url('myfont-webfont.woff') format('woff'), 
        url('myfont-webfont.ttf')  format('truetype'),
        url('myfont-webfont.svg#svgFontName') format('svg');
}
```

This rule requires that the first font declared is a .eot file with a query string, but doesn't check the order of the remaining fonts (which is irrelevant, assuming you have the .eot file first).

This rule was added in v0.9.10.  

## Further Reading

* [The Fontspring Bulletproof @font-face syntax](http://www.fontspring.com/blog/the-new-bulletproof-font-face-syntax)