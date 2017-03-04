Unqualified attribute selectors, such as `[type=text]`, match all elements first and then check their attributes. This means unqualified attribute selectors have the same performance characteristics as the universal selector (`*`). Similar to the universal selector, unqualified attribute selectors cause performance issues when used as the key part (far-right) of a selector. For example, this type of rule should be avoided:

```css
.mybox [type=text] {
    background: #fff;
    color: #000;
    background: rgba(255, 255, 255, 0.5);
}
```
Browsers evaluate selectors from right-to-left, so this rule begins by first matching every element in the document and then checking the attribute. After that, each of those elements must be inspected to see if it matches the next criteria, which is having an ancestor with the class of `mybox`. The more complex the selector containing unqualified attributes, the slower the evaluation becomes. For this reason, it's recommended to avoid using the unqualified attribute selectors as the key part of a selector.  

## Rule Details

Rule ID: `unqualified-attributes`

This rule is aimed at flagging slow rules due to the use of the unqualified attribute selectors. As such, the rule warns when an unqualified attribute selector is found as the key part of a selector. 

The following patterns are considered warnings:

```css
[type=text] {
    color: red;
}

.selected [type=text] {
    color: red;
}
```

The following patterns are considered okay and do not cause warnings:

```css
/* unqualified attribute selector is not key */
.selected [type=text] a {
    color: red;
}
```