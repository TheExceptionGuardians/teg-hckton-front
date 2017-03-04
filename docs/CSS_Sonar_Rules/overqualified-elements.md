Writing selectors such as `li.active` are unnecessary unless the element name causes the class to behave differently. In most cases, it's safe to remove the element name from the selector, both reducing the size of the CSS as well as improving the selector performance (doesn't have to match the element anymore). 

Removing the element name also loosens the coupling between your CSS and your HTML, allowing you to change the element on which the class is used without also needing to update the CSS.

## Rule Details

Rule ID: `overqualified-elements`

This rule is aimed at decreasing byte count by removing extra unnecessary qualifiers from selectors. As such, it warns when an element and class name are used together (i.e., `li.active`). It will not warn if two different elements are found with the same class name (i.e., `li.active` in one rule and `p.active` in another). 

The following patterns are considered warnings:

```css
div.mybox {
    color: red;   
}

.mybox li.active {
    background: red;
}
```
The following patterns are considered okay and do not cause warnings:
```css

/* Two different elements in different rules with the same class */
li.active {
    color: red;
}

p.active {
    color: green;
}
```