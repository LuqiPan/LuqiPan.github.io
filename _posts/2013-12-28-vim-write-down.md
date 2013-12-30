---
layout: post
title: "Vim write down"
description: ""
category: "Vim"
tags: []
---

##Modes
Table of contents of the reference manual

    :help usr_toc 

Index of manual

    :help index

###Insert mode

    :help inserting
    :help replacing

###Switching modes

    :help mode-switching

##Moving around

###Jump within window

('H'igh)first line of the window

    H

Middle of the window

    M

('L'ow)last line of the window

    L

###help-motions

    :help word-motions
    :help cursor-motions

###Sentence wise

next sentence

    )

previous sentence

    (

###Paragraph wise
next paragraph

    }

previous paragraph

    {


###Mark

create a mark

    m(a-zA-Z) 

jump to the mark

    '(a-zA-Z) 

###Jump around
jump back to previous location

    ctrl-o 

jump forward to next location

    ctrl-i 

###Parts of the text

visual select a paragraph

    vap

a word

    aw

a quoted string

    a"

a block

    ab

flip the case

    ~

####Some help
    :help object-motions
    :help text-objects
    :help various-motions
    :help motion

###Help

List of contents of the entire user manual

    :help user-manual

###:helpgrep

    :helpgrep {Beginning of a world}

Navigate

    :cnext 
    :cprev

Whole list

    :clist

###keywordprg

Don't quite know it

    :let &keywordprg=':help'
