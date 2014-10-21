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

Method | advantage | disadvantage
Circuit switching | guaranteed allocation; low space overhead; easy to reason about | failures: must re-establish connection; no graceful degration; waste: allocate for peak; set up time long
Packet switching | high utilization; flexible | unfair; unpredictable; different paths for each packet

##### 03. Physical Layer

Shannon's law

NRZ: Non-Return to Zero

NRZ Drawbacks: no signal is 0; consecutive 1s or 0s are problematic; baseline wander problem; clock recovery problem

NRZI: Non-Return to Zero Inverted; encode 1 with transition, 0 with staying the same

Solve problem of consecutive 1s

Manchester: map 0 to chips 01; 1 to chips 10

Solve clock recovery and baseline wander but transmission rate now in half

4B/5B: every 4 bits encoded as 5 chips; transmit using NRZI

Never get more than 3 consecutive 0s

Encoding goals: page 24

##### Framing

- Sentinels

    - Byte-oriented
    - Bit-oriented
- Length counts
- Clock-based

Byte-oriented: character stuffing

Bit-oriented: bit stuffing

Drawback of sentinel: variable length

Length-based: put length in header

Drawback: length get corrupted

CRC checksum helps detect error

Clock-based: 125 us, encode with NRZ but XOR payload with 127-bit string to ensure lots of transitions
