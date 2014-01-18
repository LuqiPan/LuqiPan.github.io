---
layout: post
title: "Divide and Conquer"
description: ""
category: "algorithm"
tags: []
---

###Features:

- Divide
- Conquer
- Merge

The time complexity for each part varies by different problems.

###Algorithms:

1. K-selection problem(similar to quicksort)

    1. Select a random element x
    2. Count how many elements are less than x
    3. Decide which part of list to search

    De-randomize: divide into group of 5, pivot is median of medians

2. FFT

    Group even/odd columns together and reduce the computation.

3. K-th smallest in 2 sorted lists

    Binary search on 2 lists, knock out 1/4 each time.

4. Find the closest pair in a plane

    [Click me](http://en.wikipedia.org/wiki/Closest_pair_of_points_problem)
