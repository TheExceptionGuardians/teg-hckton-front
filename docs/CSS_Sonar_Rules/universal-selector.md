The universal selector (`*`) matches all elements. Though convenient for selecting a group of elements at a time, the universal selector causes performance issues when used as the key part (far-right) of a selector. For example, this type of rule should be avoided:

```css
.mybox * {
    background: #fff;
    color: #000;
    background: rgba(255, 255, 255, 0.5);
}
```
Browsers evaluate selectors from right-to-left, so this rule begins by first matching every element in the document. After that, each of those elements must be inspected to see if it matches the next criteria, which is having an ancestor with the class of `mybox`. The more complex the selector containing `*`, the slower the evaluation becomes. For this reason, it's recommended to avoid using the universal selector as the key part of a selector.  

## Rule Details

Rule ID: `universal-selector`

This rule is aimed at flagging slow rules due to the use of the universal selector. As such, the rule warns when the universal selector is found as the key part of a selector. 

The following patterns are considered warnings:

```css
* {
    color: red;
}

.selected * {
    color: red;
}
```

The following patterns are considered okay and do not cause warnings:

```css
/* universal selector is not key */
.selected * a {
    color: red;
}
```