---
layout: post
title: "Note: Processor Management"
description: ""
category: "operating systems"
tags: []
---

###5.1 Threads implementations

####5.1.1 Strategies

#####5.1.1.1 One-Level Model

Each user thread is mapped one-to-one to a kernel thread.

#####5.1.1.2 Two-Level Model

**Single Kernel Thread**

N-to-1 model

**Multiple Kernel Thread**

M-to-N model

#####5.1.1.3 Scheduler Activations

_upcall_: as opposite to system call, going from system code to user code.

####5.1.2 A Simple Threads Implementation

- A global variable: ```CurrentThread```
- A run queue
- Each resource(eg. mutex) has a wait queue

####5.1.3 Multiple Processors

- CAS(atomatically compare and swap)
- spin lock
- block lock
- futex

###5.2 Interrupts

####5.2.1 Interrupt Handlers

#####5.2.1.1 Synchronization and Interrupts

On uniprocessor systems with non-preemptive kernels, things are easy, just mask interrupt when synchronization is needed

Systems with preemptive kernels, trickey.

#####5.2.1.2 Interrupt Threads

####5.2.2 Deferred Work

- Handle more interrupts
- DPC

####5.2.3 Directed Processing

#####5.2.3.1 Asynchronous Procedure Calls

APC

#####5.2.3.2 Unix Signals

- Save all registers on entry to the handler and restore them on return
- Unblock the signal on return

###5.3 Scheduling

####5.3.1 Strategy

#####5.3.1.1 Simple Batch Systems

#####5.3.1.2 Multiprogrammed Batch Systems

#####5.3.1.3 Time-sharing Systems

#####5.3.1.4 Shared Servers

Stride scheduling(use scaled-integer arithmetic)

#####5.3.1.5 Real-time Systems

Priority inheritance(cascading inheritance)

####5.3.2 Tactics

#####5.3.2.1 Handoff Scheduling

#####5.3.2.2 Preemption Control

#####5.3.2.3 Multiprocessor Issues

####5.3.3 Case Studies

#####5.3.3.1 Scheduling in Linux

#####5.3.3.2 Scheduling in Windows
