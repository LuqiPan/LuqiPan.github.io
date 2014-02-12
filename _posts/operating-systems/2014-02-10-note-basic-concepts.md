---
layout: post
title: "Note: Basic Concepts"
description: ""
category: "operating systems"
tags: []
---

###3.1.1 Procedures

####3.1.1.1 Intel x86 stack frames

#####Values in stack frame:

- args
- eip(instruction pointer)
- ebp(caller's frame pointer)
- saved registers
- local variables

#####Registers:

- _eip_ instruction pointer

- _esp_ stack pointer

- _ebp_ frame pointer

- _eax_ 

    - register: return value of procedures
    - expected to be modified across calls, not saved in frame

####3.1.1.2 SPARC stack frames

###3.1.2 Threads and coroutines

_thread control block_ register state such as current value of the stack pointer




