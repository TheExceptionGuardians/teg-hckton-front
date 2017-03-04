The `float` property is the most popular method of achieving columnar layouts using CSS. During the course of a project, more and more `float` elements are used to create ever-different layouts throughout a page or site. This leads to fragile CSS that is easy to break if one aspect of the layout changes.

Frequently, using too many `float`s is a sign that your project would benefit from a grid system. CSS grid systems standardize columnar layouts using CSS classes. Some popular grid systems are:

* [960gs](http://960.gs/)
* [Blueprint](http://blueprintcss.org/)
* [OOCSS Grids](http://github.com/stubbornella/oocss/)
* [YUI Grids](http://yuilibrary.com/yui/docs/cssgrids/)
* [Twitter Bootstrap] (http://getbootstrap.com)

Using one of these grid systems can greatly reduce the amount of CSS code you need to write by hand.

## Rule Details

Rule ID: `floats`

This rule is aimed at reducing complexity by watching how many times `float` is used. It warns when `float` has been used more than 10 times. This amount of floats usually indicates that there are a lot of columnar layouts being defined and that a grids system would be a better choice for your CSS.

## Additional Reading

* [Grids improve site performance](http://www.stubbornella.org/content/2011/01/22/grids-improve-site-performance/)