---
layout: post
title: "Dynamic Programming"
description: ""
category: "Algorithm"
tags: []
---

###Features:

-   Overlapping subproblems(memoization)
-   Solving small subproblems helps solving bigger subproblems

###3M:

-   Meaning(of each engry) 
-   Method(to fill the table)
-   Meat(How to retrieve the answer)

###Proof:

1. Consider the optimal way to...
2. Consider the last step to that optimal ...

###Order:

The order to fill the table is also related to the architecture of the computer.

###Algorithms:

####Edit distane

####Graph Algorithm(shortest path)

1. Bellman-Ford

    Halt at depth n.

        dist(s, t, depth):
            if depth = n: halt;
            return min_i{ length(s, i) + dist(i, t, depth+1) }

    Watch out for negative edge.

2. Floyd-Warshall

    Table entry: "best path from i to j using 1...k nodes as intermediates"

        dist(i, j, k+1) = 
        min{ dist(i, j, k), dist(i, k+1, k) + dist(k+1, j, k) }

3. Dijkstra(non-DP)

