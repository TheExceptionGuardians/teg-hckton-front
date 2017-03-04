One of the main rules of performance is to use as few bytes as possible to get the job done. Along those lines, URLs are best used just once inside of CSS. If you have more than one class that needs to use the same background image, then it's better to have one class that uses the URL and simply apply that class to the various elements where it is needed. Consider the following:

```css
.heart-icon {
    background: url(sprite.png) -16px 0 no-repeat;
}

.task-icon {
    background: url(sprite.png) -32px 0 no-repeat;
}
```

The background image is repeated in both classes. That's extra bytes you don't need and also increases the chances that you'll forget to change one should the filename change. An alternative is to define one class that has the URL and be sure to apply that class to the HTML elements where the other classes are used. For example:

```css
.icons {
    background: url(sprite.png) no-repeat;
}

.heart-icon {
    background-position: -16px 0;
}

.task-icon {
    background-position: -32px 0;
}
```
Here, the `icons` class contains the background image while the other classes just change the background position.

## Rule Details

Rule ID: `duplicate-background-images`

This rule is aimed at ensuring the same URLs aren't used more than once in a style sheet.

The following patterns are considered warnings:

```css
/* multiple instances of the same URL */
.heart-icon {
    background: url(sprite.png) -16px 0 no-repeat;
}

.task-icon {
    background: url(sprite.png) -32px 0 no-repeat;
}
```

The following patterns are considered okay and do not cause warnings:

```css
/* single instance of URL */
.icons {
    background: url(sprite.png) no-repeat;
}

.heart-icon {
    background-position: -16px 0;
}

.task-icon {
    background-position: -32px 0;
}
```

