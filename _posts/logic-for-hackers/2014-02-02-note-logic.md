---
layout: post
title: "Note: Logic"
description: ""
category: "logic for hackers"
tags: []
---

###Different styles

1.  predicate calculus style

    can't express reachability properties
2. navigation expression style
3.  relational calculus style

    no quantifiers

###Atom

A primitive entity that is

- indivisible
- immutable
- uninterpreted

###Relation

A structure that relates atoms

- size: number of rows
- arity: number of columns
- set: a table with one column
- scalar: a table with a single entry
- option: a unary relation with at most one tuple
- singleton relation: a relation containing exactly one tuple

###Expressing structure with relations

###Functional and injective

- functional: a binary relation that maps each atom to at most one other atom
- injective: a binary relation that maps at most one atom to each atom
- injection: traditionally means a relation that is both functional and injective

###question

- P41 why not higher-order

***

###Feb 3 Class

####Binary relation

- reachable from b:
```
b.^next
```
- reachable from b(including b itself):
```
b.*next
```
- reachable to b(reverse):
```
b.~next
```

####Alloy convention

- Alloy thinks
```
some x: A
```
is
```
some x : one A
```
- Alloy thinks
```
some x: A->B
```
is
```
some x : set A->B
```

####A gotcha

consider
```
^(~next) + ^next
```
and
```
^(~next + next)
```

They mean total different things!

- The former is all ancesters and descendants
- The latter is all valid boards

####Analogy

The concepts underneath Alloy shares a lot in common with relation calculus(in Database)

But the set in Alloy is strictly mathematical set(eg: no duplicates). Whilst the selection operation in SQL does retrieve duplicate result, for the simple reason that de-duplicate is too time-consuming.
