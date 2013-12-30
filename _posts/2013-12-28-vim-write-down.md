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

'H'igh- first line of the window

    H

Middle of the window

    M

'L'ow- last line of the window

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

##Editing Basics

###Swap

    :help swap-file

###Directory

Change Vim directory

    :cd

Print Vim working directory

    :pwd

###Swap tricks

Swap 2 characters

    xp

Swap 2 words

    dwwP

###Time machine

Travel between time

    :earlier 4m
    :later 45s
    :undo 5
    :undolist

manual for it
    :help :undolist
    :help undo-redo
    :help usr_32.txt

###Search

search for exact word

    /\<word\>

search for number

    /\d   #1 digit
    /\d\+ #1 or more digits
    /\d\* #0 or more digits

manual

    :help pattern

##Multiplicity

###Fold

    :set foldmethod=indent
    :nnoremap <space> za
    :help folding

###Buffer

open file

    :e filename #open file
    :b num      #switch to buffer 1

buffer list

    :buffers
    :ls

delete buffer

    :bd num

help

    :help buffer-list

###Window

switch between windows

    ctrl-w <motion key>   #w means 'w'indows

cycle between windows

    ctrl-w ctrl-w

same file, different parts

    :sp     #'sp'lit window
    ctrl-w s

vertical split

    :vsp
    ctrl-w v

'r'otate the windows

    ctrl-w r

move current window to the topmost position

    ctrl-w K

resize to num lines long

    :resize num

make current window as big as possible

    ctrl-w _

make all windows 'equal' in height again

    ctrl-w =

help manual

    :help windows

###Tabs

open a new tab

    :tabnew

switch between tabs
    
    gt    #'g'o to the next 't'ab
    gT    #opposite direction

close a tab

    :tabc
    :q

open text in a new tab instead

    :help tabpage
    =>:tab help tabpage

tab reorder

    :tabmove <num>

help manual

    :help tabpage
