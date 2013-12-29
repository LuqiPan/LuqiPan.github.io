---
layout: post
title: "Vim write down"
description: ""
category: "Vim"
tags: []
---

##Modes
:help usr_toc #Table of contents of the reference manual

:help index

###Insert mode

:help inserting

:help replacing

###Switching modes

:help mode-switching

##Moving around

###Jump within window

H- ('h'igh)first line of the window

M- Middle of the window

L- ('l'ow)last line of the window

###Word-motions

:help word-motions

###Sentence wise

')'- next sentence

'('- previous sentence

###Paragraph wise
'}'- next paragraph

'{'- previous paragraph

:help cursor-motions

###Mark

m(a-zA-Z)- create a mark

'(a-zA-Z)- jump to the mark

###Jump around
ctrl-o- jump back to previous location

ctrl-i- jump forward to next location

###Parts of the text

v ap- visual select a paragraph

~- flip the case

aw- a word

a"- a quoted string

ab- a block

####help
:help object-motions

:help text-objects

:help various-motions

:help motion

