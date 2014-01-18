---
layout: post
title: "Competitive Analysis and Online Algorithm"
description: ""
category: "algorithm"
tags: []
date: Sat Jan 18 16:25:21 EST 2014
---

###Competitive Analysis

OPT is not possible (eg. you cannot predict the future), but you want to be as close to OPT as possible. How do you benchmark it?- Competitve Analysis!

Try to performance within some constant range of OPT no matter how bad things were. (Try to perform as good as wizard no matter how evil the devil is.)

###Online Algorithm

You have to make decisions on the fly. And you have no idea what's coming next.

###Algorithm

- Ski Rental

    - Buy(500) or rent(50)?

    - The first 9 visits, rent; after 10th, buy.

- Multiplicative weights update

    - Wrong experts get punished.

    - Try to be within a factor of the best single expert.

- LRU

    The least recently used gets thrown out when the cache is full.
