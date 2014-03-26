---
layout: post
title: "Linear Programming"
description: ""
category: "algorithm"
tags: []
date: Wed Mar 26 16:50:42 EDT 2014
---

###Problem 1

- Dual gives an lower bound on how you can minimize it, proving the primal

###Problem 2

- $$y=\lvert x\rvert$$ is not a convex region, but $$y\geq\lvert x\rvert$$ is!
- Introducing extra variables for constraints is a very useful technique

###Problem 3

Integral constraints naturally guarantee that the variables are integers

###Problem 4

Another method for convex optimization: Recursive Golden Selection

###Relation with optimization

- Linear programming relaxation gives a lower bound of OPT
- Optimization gives an upper bound of OPT
- They are approaching OPT from different direction
- relaxation -> OPT <- optimization
