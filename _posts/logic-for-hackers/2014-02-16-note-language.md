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



***

###Notes during asgn 2

- I've never thought that we can use Alloy to model something like songs or lyrics. I guess it's because sentence contains logic, and Alloy can model the logic.
