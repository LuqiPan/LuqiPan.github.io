---
layout: post
title: "Greedy Algorithms"
description: ""
category: "algorithm"
tags: []
---

#####Entropy is the optimal(best we can do) of infomation compression

####About greedy algorithm

- You don't have to show that your greedy algorithm beats OPT, you just need to show that it's as good as the OPT
- Proving greedy algorithm:
    - Induction
    - Extreme

###Problem 1

To disprove it, just try find counterexamples

###Problem 2

Greedy algorithm is not always the solution, if it's the case, try some other algorithms

###Problem 3

When swap into OPT, make sure that it's at least as good as OPT

###Problem 4

- Shannon-Fano is not good, you need to modify it to make it actually work
- If encoding individually is not good, try encoding grouply
- Proof technique: use contradiction when it's not easy to quantitize the constraints
- Lempel-Ziv is a good compression algorithm

###Problem 5

- Huffman encoding is guaranteed to be within range $$1$$ of $$H(p)$$
- For infomation with low entropy, use Huffman combined with run-length
