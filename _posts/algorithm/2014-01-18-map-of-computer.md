---
layout: post
title: "Map of Computer"
description: ""
category: "algorithm"
tags: []
---

###Components

- Memory: size, latency, bandwidth
- Cache
- Cpu Pipeline - branch prediction

[Latency Numbers Every Programmer Should Know](http://www.eecs.berkeley.edu/~rcs/research/interactive_latency.html)

###Example

####Binary search vs. Linear search

#####Binary search:

    if a[i] < key:
        go left
    else:
        go right

The if statement is likely to fail 

Runtime: $$\frac{B}{2}*\log n$$

$$B$$ is the cost of incorrect prediction

#####Linear search

    for i = 1 : n
        if a[i] = key:
            return i;

The if statement will only fail 1 time when it actually find the element. (Assumption: if branch prediction act like we want)

Runtime: $$ \frac{n}{2}+B $$

***

![Chart showing Binary vs Linear search](/public/MoC-1.png "Binary vs Linear search")
[Picture source](http://letsalgorithm.blogspot.com/2012/02/intersecting-two-sorted-integer-arrays.html)
