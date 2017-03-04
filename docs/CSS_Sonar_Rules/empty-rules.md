An empty rule is one that doesn't contain any properties, such as:

```css
.foo {
}
```
    
A lot of times, empty rules appear as a result of refactoring without further cleanup. Eliminating empty rules results in smaller file sizes and less style information for the browser to deal with.

## Rule Details

Rule ID: `empty-rules`

This rule warns when an empty rule is found in the CSS. The following patterns are considered warnings:

```css
.mybox { }

.mybox {

}

.mybox {
    /* a comment */
}
```