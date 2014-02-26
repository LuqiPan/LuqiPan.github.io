---
layout: post
title: "Note: Language"
description: ""
category: "Logic for hackers"
tags: []
---

###4.1 An example: self-grandpas

###4.2 Signatures and Fields

####4.2.1 Signatures

- _extends_: extension or subsignature, mutually disjoint
- _abstract_: no elements of itself
- _univ_: can be viewed as an implicit abstract signature that all top-level signatures extend
- _in_: not necessarily mutually disjoint
- union of sets

        sig C in A + B {}

    the union is the only operator can appear in a sig declaration

- multiplicity keyword before sig

        m sig A {}

    enumeration

        abstract sig T {}
        one sig A, B, C extents T {}

####4.2.2 Basic Field Declarations

####4.2.3 Grouping Disjoint Fields

###4.4 Types and Type Checking

####4.4.1 Basic Types

####4.4.2 Relational Types

####4.4.3 Type Errors

####4.4.4 Field Overloading

***

###Questions:

1. P111 what exactly is _overapproximation_?
2. P113 _Example_ alias?
3. all this: Course and some this: Course

***

###Notes during asgn 2

- I've never thought that we can use Alloy to model something like songs or lyrics. I guess it's because sentence contains logic, and Alloy can model the logic.

###Feb 21 Class

- Alloy only runs within the scope, so it's never exhaustive to the whole searching space. This should always be kept in mind.
- But, bugs tend to appear with smaller scope.(not always)

###Feb 26 Class

####Skolemization

#####Skolem Depth:(my experiment) 

- It counts ```all x: S| all y: S``` as one depth
- Same quantifiers in sequence is 1 depth
- top level is 0 depth

#####Useful for:

Debugging

#####Tradeoff:

![Chart showing with and without Skolemization](/public/Skolem.png "With or without skolemization")

Skolem| No| Yes
Constraints| Same| Less(some are shifted to Skolem variable)
Fields| Same| More(to represent some constraints)
