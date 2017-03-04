The CSS `outline` property is used to define a border around elements. Unlike the `border` property, the `outline` property does not alter the size or layout of the element. Because of this, browsers frequently use `outline` as the specification for an active state. In Internet Explorer and Firefox, the `outline` of a selected element is a single pixel dotted line when focus has moved to that element. 

The focus outline is important for accessibility because it gives a visual indication as to where the focus is on the page. For keyboard-only users, tracking the focus on a web page is impossible without the visual indication given by the focus outline. Unfortunately, some consider the focus outline to be "ugly" or unappealing, and remove it using code such as :

```css
a {
    outline: none;
}
```

Or:

```css
a {
    outline: 0;
}
```

Both of these will remove the outline from an element, so it won't appear even when focus has moved to that element. This is very bad for accessibility.

Of course, there are times when you may want to provide a custom focus decoration for users instead of the default dotted border. In those instances, it's appropriate to remove the `outline` and add another treatment. The best way to do this is to use `:focus` and provide the alternate treatment along with resetting `outline`, such as:

```css
a:focus {
    border: 1px solid red;
    outline: none;
}
```

## Rule Details

Rule ID: `outline-none`

This rule is aimed at ensuring keyboard-only users have a visual indicator of focus. As such, the rule warns when it finds:

1. `outline: none` or `outline: 0` in any rule whose selectors doesn't contain `:focus`
1. `outline: none` or `outline: 0` in any rule whose selectors contains `:focus` and the rule doesn't contain any other properties

The following patterns are considered warnings:

```css

/* no :focus */
a {
    outline: none;
}

/* no :focus */
a {
    outline: 0;
}

/* :focus but missing a replacement treatment */
a:focus {
    outline: 0;
}
```

The following pattern is considered okay and does not cause a warning:

```css
/* :focus with outline: 0 and provides replacement treatment */
a:focus {
    border: 1px solid red;
    outline: 0;
}
```

## Further Reading

* [Removing the dotted outline](http://css-tricks.com/829-removing-the-dotted-outline/)
* http://outlinenone.com/
