---
layout: post
title: "Max Flow and Parallel Algorithms"
description: ""
category: "algorithm"
tags: []
date: Wed Mar 26 17:13:59 EDT 2014
---

###Problem 1

- Enforcing $$\leq max$$ constraint:

                  o --------- o
           max   /             \
        s ----- o ----- o ----- t

###Problem 2

[Edmonds-Karp algorithm](http://en.wikipedia.org/wiki/Edmonds–Karp_algorithm) - Compute maximum flow efficiently

###Problem 3

- Enforcing $$\geq min$$ constraint:

                  o ----- o
           >=min /         \
                s           t
         sum-min \         / 
                  o ----- o

###Problem 4

non-zero-sum game is weird

###Problem 5

- In the end, you'll inevitably hit the bottleneck, one or another.
- In this problem, the bottleneck is memory bandwidth
