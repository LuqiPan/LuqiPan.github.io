---
layout: post
title: "Note: jQuery"
description: ""
category: "javascript"
tags: []
---

#### The `.attr()` method

- setter: `$('a').attr('href', 'example.com')`
- getter: `$('a').attr('href')`

#### Selecting Elements

1. By ID: `$('#myId')`
2. By Class Name: `$('.myClass')`
3. Compound: `$('#contents ul.people')`
4. Pseudo-selectors:

    `$('a.external:first')`

##### Does My Selection Contain Any Elements?

```javascript
if ($('div.foo').length) {

}
```

##### Refining & Filtering Selections

```javascript
// Refining selections.
$( "div.foo" ).has( "p" );         // div.foo elements that contain <p> tags
$( "h1" ).not( ".bar" );           // h1 elements that don't have a class of bar
$( "ul li" ).filter( ".current" ); // unordered list items with class of current
$( "ul li" ).first();              // just the first unordered list item
$( "ul li" ).eq( 5 );              // the sixth
```
