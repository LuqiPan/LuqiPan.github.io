---
layout: post
title: "SICP: Chapter 1. Building Abstractions with Procedures"
description: ""
category: "Structure and Interpretation of Computer Programs"
tags: []
---

###1.1 The Elements of Programming

####1.1.1 Expressions

Prefix notation

####1.1.2 Naming and the Environment

    (define [name] [value])

Defines environment(global environment)

####1.1.3 Evaluating Combinations

####1.1.4 Compound Procedures

    (define (square x) (* x x))

####1.1.5 The Substitution Model for Procedure Application

Applicative order versus normal order

- normal order: fully expand and then reduce(lazy approach?)
- applicative order: (eager approach?)

####1.1.6 Conditional Expressions and Predicates

    (cond (<p1> <e1>)
          (<p2> <e2>)
          ...
          (<pn> <en>))

or

    (cond (<p1> <e1>)
          ...
          (else <en>))

if statement

    (if <predicate> <consequent> <alternative>)

logical composition operations:

- and
- or
- not

####1.1.7 Example: Square Roots by Newton's Method

- In mathematics we are usually concerned with declarative (what is) descriptions
- In CS we are usually concerned with imperative (how to) descriptions

###Questions

1. Is normal order vs applicative order same as lazy evaluation vs eager evaluation
2. Exercise 1.7
