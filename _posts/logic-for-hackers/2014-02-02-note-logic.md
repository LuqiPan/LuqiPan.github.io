---
layout: post
title: "Note: Logic"
description: ""
category: "logic for hackers"
tags: []
---

###Different styles

1.  predicate calculus style

    can't express reachability properties
2. navigation expression style
3.  relational calculus style

    no quantifiers

###Atom

A primitive entity that is

- indivisible
- immutable
- uninterpreted

###Relation

A structure that relates atoms

- size: number of rows
- arity: number of columns
- set: a table with one column
- scalar: a table with a single entry
- option: a unary relation with at most one tuple
- singleton relation: a relation containing exactly one tuple

###Expressing structure with relations

###Functional and injective

- functional: a binary relation that maps each atom to at most one other atom
- injective: a binary relation that maps at most one atom to each atom
- injection: traditionally means a relation that is both functional and injective

###question

- P41 why not higher-order
- P55 first paragraph
- P72 univ lone -> lone univ

***

####3.4.1 Constants

- none
- univ
- iden: binary relation from atom to itself

####3.4.2 Set Operators

- ```+``` union
- ```&``` intersection
- ```-``` difference
- ```in``` subset
- ```=``` equality

####3.4.3 Relational Operators

- ```->``` arrow(product)
- ```.``` dot(join)
- ```[]``` box(join)
- ```~``` transpose
- ```^``` transitive closure
- ```*``` reflexive-transitive closure
- ```<:``` domain restriction
- ```:>``` range restriction
- ```++``` override

##### 3.4.3.1 Arrow product

##### 3.4.3.2 Dot join

database join(retain the matching elements):

    id3={a,b,c: univ | a=b and b=c}
    p..q = p.id3.q

##### 3.4.3.3 Box join

- ```e1[e2] is e2.e1```
- dot binds more tightly than box
    
    ```a.b.c[d] is short for d.(a.b.c)```

##### 3.4.3.4 Transpose

*symmetric closure* of r is the smallest relation that contains r and is symmetric, and is equal to ```r+~r```

##### 3.4.3.5 Transitive closure

##### 3.4.3.6 Domain and range restrictions

relation that maps every atom in some set s to itself:

```s <: iden```

##### 3.4.3.7 Override

```p ++ q = p - (domain(q) <: p) + q```

Usage:

- Insertion of a key into a map
- Assignment statement

***

### 3.5 Constraints

####3.5.1 Logical operators

- **not** ```!``` negation
- **and** ```&&``` negation
- **or** ```||``` negation
- **implies** ```=>``` negation
- **iff** ```<=``` negation
- **else** keyword:

        F implies G else H

    is equivalent to

        (F and G) or ((not F) and H)
- nested implications:
        
        C1 implies F1
        else C2 implies F2
        else C3 implies F3    

- conditional expression

        C implies E1 else E2

    or

        C => E1 else E2

####3.5.2 Quantification

- **all**
- **some**
- **no**
- **lone**
- **one**
- **disj**

####3.5.3 Higher-order quantification

```univ lone -> lone univ```

####3.5.4 Let expressions and constraints

    let x = e | A

####3.5.5 Comprehensions

###3.6 Declarations and multiplicity constraints

####3.6.1 Declarations

    relation-name : expression

####3.6.2 Set multiplicities

- **set**   any number
- **one**   exactly one
- **lone**   zero or one
- **some**   one or more

####3.6.3 Relation multiplicities

    r: A m -> n B

####3.6.4 Declaration formulas

declaration formula

####3.6.5 Nested multiplicities

- 

        r: A -> (B m -> n C)

    is equivalent to:

        all a: A | a.r in B m -> n C

- 
    
        r: (A m -> n B) -> C

    is equivalent to:

        all c: C | r.c in A m -> n B

###3.7 Cardinality and Integers

Operators(functions)

- **plus**  addition
- **minus**  subtraction
- **mul**  multiplication
- **div**  division
- **rem**  remainder

Comparing:

- **=**  equals
- **<**  less than
- **>**  greater than
- **=<**  less than or equal to
- **>=**  greater than or equal to

Sum:

```sum x: e | ie```

***

###Feb 3 Class

####Binary relation

- reachable from b:
```
b.^next
```
- reachable from b(including b itself):
```
b.*next
```
- reachable to b(reverse):
```
b.~next
```

####Alloy convention

- Alloy thinks
```
some x: A
```
is
```
some x : one A
```
- Alloy thinks
```
some x: A->B
```
is
```
some x : set A->B
```

####A gotcha

consider
```
^(~next) + ^next
```
and
```
^(~next + next)
```

They mean total different things!

- The former is all ancesters and descendants
- The latter is all valid boards

####Analogy

The concepts underneath Alloy shares a lot in common with relation calculus(in Database)

But the set in Alloy is strictly mathematical set(eg: no duplicates). Whilst the selection operation in SQL does retrieve duplicate result, for the simple reason that de-duplicate is too time-consuming.

***

###Notes during asgn0

- The order or all and some matters

###Feb 5 Class

- When modeling things, don't create the model as you think or imagine, but model exactly as the real system. Or you are verifying the wrong model.
- Eg: some course system may be synced, but some are not. Don't model it as you like, but model it exactly as the real system.
- At the start of modeling, use as few variables as you can: you can always add more when you need it.
- To test a pred, you need to write another pred and put it in assertion.**(question: how)**
- Never believe yourself, especially you have Alloy, such a great checker which can do all the checks automatically for you

###Feb 7 Class

- Domain/range restriction operator
- Use both type and semantics to approach the problem

###Feb 10 Class

- Empty conjunction is always true
    - ```pred True() {}```
    - ```pred False() {!True}```
- For the problem of finding all courses specific student is taking, restrict the domain is not a good idea. Convert all the constraint to restrict the range, which is student.

###Feb 12 Class

- Recursive multiplicity and quantifier make things really complicated and subtle.

###Notes during asgn 1

- When trying to substract something from a set, first make sure this something is IN the set. Or you'll substract nothing from the set.
- When you are using number to model things, stop and think back if there is other ways. Usually there's some other ways to do it.
- When trying to find a way to model a property, compare with things that does not have this property, and find the difference.
- There are many properties implicitly hidden behind the combination of several predicates.

###Feb 14 Class

- There are different formulas to constrain the same thing, but they come with different cost. Some formulas are just friendly to Alloy so it will have better performance.
- Usually the relational style has better performance.
