---
layout: post
title: "NP Hardness"
description: ""
category: "algorithm"
tags: []
date: Wed Mar 26 16:41:28 EDT 2014
---

- Only a small tweak to the problem will make a huge difference(1->2)
- Decision problem is easier to phrase and solve than search problem, but in NP sense, they are tantamount

###Problem 1

- The divide between NP and P is hard to find
- Greedy algorithm sometimes is pretty good, it can be simple, efficient and correct(or approximately correct)

###Problem 2

- The idea of using greedy algorithm to get approximate solution of NP hard problem
- Find some subset violating the rules, forbid all of them instead of carefully determine(time-consuming) which is the OPT
- Find special structure of the problem and do something about it

###Problem 3

- Make sure the dictionary length is different, or it won't work
- When trying to reduce from a NP problem to your problem, usually you only get to reduce to a specific instance of your problem. But you don't know if your problem is overall equally hard
- The guarantee that all instances of the problem is equally hard is what cryptography is looking for

###Problem 4

Make tweak to an original problem | Make tweak to the reduction

Duplicate the constraint
