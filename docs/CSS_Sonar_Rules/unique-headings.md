Object-Oriented CSS (OOCSS) works by defining reusable objects that can be put into place anywhere on a site and appear exactly the same. The heading elements (`h1`-`h6`) are considered to be built-in objects that should look the same regardless of where they appear. As such, each heading should have exactly one rule defining its appearance. Multiple rules defining the same heading appearance can lead to objects that are hard to use because the context defines the appearance rather than being completely atomic.

## Rule Details

Rule ID: `unique-headings`

This rule is aimed at flagging duplicate heading declarations. As such, a warning occurs when more than one rule defines properties targeted at the same heading.

The following patterns are considered warnings:

```css
/* Two rules for h3 */
h3 {
    font-weight: normal;
}

.box h3 {
    font-weight: bold;
}
```

The following patterns are considered okay and do not cause warnings:

```css
/* :hover doesn't count */
h3 {
    font-weight: normal;
}

h3:hover {
    font-weight: bold;
}
```




## Further Reading

* [Object-Oriented CSS](http://www.slideshare.net/stubbornella/object-oriented-css)