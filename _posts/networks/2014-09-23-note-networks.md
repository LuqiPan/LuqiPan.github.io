---
layout: post
title: "Note: Networks"
description: ""
category: "networks"
tags: []
---

#### Questions

- What about hard-coded maxlen for now
- what is relay in hardware
- IP packet header length: in 32-bit units
- Fragment offset?
- delete when metric = 16?
- IGP EGP BGP?
- Mixed use of Printf.printf and Lwt_io.printf

#### Midterm Review

##### 01. Intro

Circuit switching vs Packet switching

STDM: waste capacity; doesn't degrade gracefully; illusion of direct link

Statistical Multiplexing: maximizes link utilization; unfair; unpredictable; packet may take different paths; more overhead(additional information like destination address)

Address for link layer: MAC address; Address for IP: IP address

##### 02. Layers

Circuit switching: guaranteed allocation; low space overhead; easy to reason about | failures: must re-establish connection; no graceful degration; waste: allocate for peak; set up time long

Packet switching: high utilization; flexible | unfair; unpredictable; different paths for each packet
