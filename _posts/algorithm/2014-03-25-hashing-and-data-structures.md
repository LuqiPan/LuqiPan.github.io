---
layout: post
title: "Hashing and Data Structures"
description: ""
category: "algorithm"
tags: []
date: Tue Mar 25 23:55:25 EDT 2014
---

###Problem 1

1. Universal hash function: at most $$\frac{1}{m}$$ of $$\lvert P \rvert$$ parameters cause collision
2. Universal hash functions can have different "effectiveness"
    - 1 parameter: $$\log m$$ bits
    - 2 parameter: $$2\log m$$ bits
3. Linear hash function is easy to break

###Problem 2

- Trade space for time
- Ensuring some invariant, thus the correctness of the algorithm

###Problem 3

- Use data structure as a component for online algorithm
- Use additional infomation to determine if it is possible that answer is inthe subtree

###Problem 4

- Any memory allocation scheme is bad, because it cannot predict the future
- We can only decide to use some scheme based on some assumption or observation on the user
- We can try to be $$X$$-competitive
