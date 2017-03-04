As of December 2011, there is still no standard CSS gradient implementation, which means using CSS gradients in a cross-browser way requires using many different vendor-prefixed versions. There are currently five different vendor-prefixed versions of CSS gradient:

* `-ms-linear-gradient` and `-ms-radial-gradient` for Internet Explorer 10+
* `-moz-linear-gradient` and `-moz-radial-gradient` for Firefox 3.6+
* `-o-linear-gradient` and `-o-radial-gradient` for Opera 11.10+
* `-webkit-linear-gradient` and `-webkit-radial-gradient` for Safari 5+ and Chrome
* `-webkit-gradient` for Safari 4+ and Chrome (aka "Old WebKit")

Meaning a simple two-color gradient that works across all browsers must look like this:

```
background: -moz-linear-gradient(top,  #1e5799 0%, #7db9e8 100%); /* FF3.6+ */
background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#1e5799), color-stop(100%,#7db9e8)); /* Chrome,Safari4+ */
background: -webkit-linear-gradient(top,  #1e5799 0%,#7db9e8 100%); /* Chrome10+,Safari5.1+ */
background: -o-linear-gradient(top,  #1e5799 0%,#7db9e8 100%); /* Opera 11.10+ */
background: -ms-linear-gradient(top,  #1e5799 0%,#7db9e8 100%); /* IE10+ */
```

It's easy to forget one or more gradient definitions with all of the various vendor prefix gradients available.

## Rule Details
    
Rule ID: `gradients`

This rule warns when one vendor-prefixed gradient is used without all of the others. 

The following patterns are considered warnings:

```css
/* Missing -moz, -ms, and -o */
.mybox {
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#1e5799), color-stop(100%,#7db9e8));
    background: -webkit-linear-gradient(top,  #1e5799 0%,#7db9e8 100%);
}

/* Missing old and new -webkit */
.mybox {
    background: -moz-linear-gradient(top,  #1e5799 0%, #7db9e8 100%); 
    background: -o-linear-gradient(top,  #1e5799 0%,#7db9e8 100%);
    background: -ms-linear-gradient(top,  #1e5799 0%,#7db9e8 100%);
}
```

The following patterns are considered okay and do not cause a warning:

```css
.mybox {
    background: -moz-linear-gradient(top,  #1e5799 0%, #7db9e8 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#1e5799), color-stop(100%,#7db9e8));
    background: -webkit-linear-gradient(top,  #1e5799 0%,#7db9e8 100%);
    background: -o-linear-gradient(top,  #1e5799 0%,#7db9e8 100%);
    background: -ms-linear-gradient(top,  #1e5799 0%,#7db9e8 100%); 
}
```