---
layout: post
title: "Notes: Database Management Systems"
description: ""
category: "database"
tags: []
---

- relational algebra <=> relational calculus
- procedural = imperative
- Datalog adds recursion which relational calculus can't do
- check will be run for every DB update, so think carefully before adding check to database
- cannonical cover algorithm for functional dependencies(search about it)
- materialize
- extension language for SQL(PL/SQL, PL/pgSQL)
- Lossless joins; Dependency preservation; Redundancy Avoidance
- always close PreparedStatement and ResultSet for JDBC when working with Java, or you'll get memory leak
- Calculate closures:

    - Attribute closures
    - Armstrong's axioms

- 3NF? Didn't mention it at all
