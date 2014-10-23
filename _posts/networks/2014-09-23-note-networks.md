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

#### 04.Link Layer

##### Metrics

Throughput | number of bits received per unit of time
Good put | Useful bits received per unit of time
Latency | How long for message to cross network (Process+Queue+Transmit+Propagation)
Jitter | variation in latency

##### At Least Once Semantics

Stop and Wait Protocol | Duplicate data; Duplicate acks; Slow; Timeout hard to set

Duplicate data: add sequence numbers

##### At Most Once Semantics

Uniquely identify each packet

##### Sliding Window Protocol

How big is the window? "Bandwidth-Delay Product" BW B/s x RTT s

Sender:

- send window size (SWS)
- last acknowledgment received (LAR)
- last frame sent (LFS)

- Invariant LFS - LAR <= SWS
- Advance LAR when ACK arrives
- Buffer up to SWS frames

Receiver:

- receive window size (RWS)
- largest acceptable frame (LAF)
- last frame received (LFR)

- Invariant LAF - LFR <= RWS
- cumulative ACKs

Tuning send window

SWS- fill the pipe
RWS- 1 <= RWS <= SWS
SWS <= max valid seq# / 2

##### Error Detection

##### Hamming distance

If min HD between valid codewords is d:

- can detect d-1 bit error
- can correct _(d-1)/2_ bit error (round down)

2-D Parity

##### IP Checksum

n-bit code should capture all but 2^-n fraction of errors- Why?

##### CRC - Error Detection with Polynomials

#### 05. Switching

##### Media Access Control

- Partitioned Access
- Random Access

##### Ethernet

Addressing: MAC address

Collision detection

10Base2:

- Manchester encoding- for constant average voltage so that it can be detected
- if collision, jam for 32 bits
- transmission time >= 2 x propagation delay
- exponential backoff nth time k x 51.2us, for k = 0 .. 2^min(n,10)-1
- capture effect

Token Ring

- Interface Cards: Hardware relay

##### Switching

- Virtual circuit switching
- Datagram Switching
- Source Routing

##### Virtual circuit switching

- Explicit set-up and tear down phases
- connection-oriented model
- one RTT before sending first packet

##### Datagram switching

- connectionless model
- no delay for connection setup

##### Source routing

- packets carry entire route: ports

##### Bridging

Learning Bridges

bridges | same broadcast domain | copy frames
repeaters | same broadcast and collision domain | copy signals

##### Dealing with loops

Spanning Tree Protocol

- Doesn't scale
- Broadcast doesn't scale
- no way to route around congested links

##### VLAN

Topology doesn't have to mirror physical locations

##### Switch architecture

Cut-through | decrease latency | can waste transmission(optimistic approach)
Store and forward | high latency | pessimistic approach

##### Buffering

- head-of-line blocking

#### 07. IP

##### ARP- address resolution protocol

##### DHCP- dynamic host configuration protocol: for obtaining host IP addresses

##### NAT- network address translation

##### ICMP- internet control message protocol

A protocol runs on top of IP

#### 08. Intra-domain Routing

#### 09. Inter-domain Routing
