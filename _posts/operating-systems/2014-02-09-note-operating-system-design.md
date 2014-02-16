---
layout: post
title: "Note: Operating System Design"
description: ""
category: "operating systems"
tags: []
---

###4.1 A simple system

####4.1.1 A framework for devices

####4.1.2 Low-level kernel

#####4.1.2.1 Terminals

#####4.1.2.2 Network communication

####4.1.3 Processes and threads

- PCB: _process control block_
- TCB: _thread control block_

A side note why _pthread_detach_ doesn't free cleanly, a thread cannot free its own stack- it would be using the stack when deallocation take place.

####4.1.4 Storage management

#####4.1.4.1 Managing primary storage

#####4.1.4.2 File systems

###4.2 Rethinking operating-system structure

####4.2.1 Virtual machines

#####4.2.1.1 Processor virtualization

#####4.2.1.2 I/O virtualization

#####4.2.1.3 Paravirtualization

####4.2.2 Microkernels

The whole notion of microkernel seems promising, but too bad that it is never actually in the mainstream because of the performance.

###4.3 Conclusions
