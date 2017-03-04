Adjoining classes, sometimes also called class chaining, look like `.foo.bar`. While technically allowed in CSS, these aren't handled properly by Internet Explorer 6 and earlier. IE will match the selector as if it were simply '.bar' which means your selector will match more frequently than you intend it to and create cross-browser bugs.

Generally, it's better to define styles based on single classes instead of based on multiple classes being present. Consider the following:

```css
.foo {
    font-weight: bold;
}

.bar {
    padding: 10px;
}

.foo.bar {
    color: red;
}
```

The rule for selector `.foo.bar` can be rewritten as a new class:

```css
.foo {
    font-weight: bold;
}

.bar {
    padding: 10px;
}

.baz {
    color: red;
}
```

That new class, `baz`, must now be added to the original HTML element. This is actually more maintainable because the `.baz` rule may now be reused whereas the `.foo.bar` rule could only be used in that one instance.

## Rule Details
    
Rule ID: `adjoining-classes`

This rule is intended to flag uses of adjoining classes that will fail in Internet Explorer 6 and earlier.

The following patterns are considered warnings:

```css
.foo.bar {
    border: 1px solid black;
}

.first .abc.def {
    color: red;
}
```

The following patterns are considered okay and do not cause a warning:

```css
/* space in between classes */
.foo .bar {
    border: 1px solid black;
}
```

## Further Reading

* [Multiple Classes in IE](http://www.ryanbrill.com/archives/multiple-classes-in-ie/)
* [IE and CSS Class Chaining](http://iamtotti.com/blog/2010/02/ie-and-css-class-chaining/)
* [Multiple CSS Classes & A Little Known IE6 Hack](http://www.oppenheim.com.au/2009/05/24/multiple-css-classes-a-little-known-ie6-hack/)

 