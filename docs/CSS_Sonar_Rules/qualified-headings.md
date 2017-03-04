Heading elements (`h1`-`h6`) should be defined as top-level styles and not scoped to particular areas of the page. The headings are considered to be built-in objects in Object-Oriented CSS, and their appearance should be consistent across an entire site. This allows those styles to be reused across your site for better visual consistency and performance and easier maintenance. For example, this is an example of an overqualified heading:

```css
.foo h1 {
    font-size: 110%;
}
```

## Rule Details

Rule ID: `qualified-headings`

This rule is aimed at finding qualified heading rules, and as such warns when any rule contains a selector where the heading element is last.

The following patterns are considered warnings:

```css
/* qualified heading */
.box h3 {
    font-weight: normal;
}

/* qualified heading */
.item:hover h3 {
    font-weight: bold;
}
```

The following patterns are considered okay and do not cause warnings:

```css
/* Not qualified */
h3 {
    font-weight: normal;
}
```

## Further Reading

* [Object-Oriented CSS](http://www.slideshare.net/stubbornella/object-oriented-css)