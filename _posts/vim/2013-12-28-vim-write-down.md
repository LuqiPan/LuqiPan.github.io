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

    CTRL-o 

jump forward to next location

    CTRL-i 

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

    CTRL-w <motion key>   #w means 'w'indows

cycle between windows

    CTRL-w CTRL-w

same file, different parts

    :sp     #'sp'lit window
    CTRL-w s

vertical split

    :vsp
    CTRL-w v

'r'otate the windows

    CTRL-w r

move current window to the topmost position

    CTRL-w K

resize to num lines long

    :resize num

make current window as big as possible

    CTRL-w _

make all windows 'equal' in height again

    CTRL-w =

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

##Scripting

###Macros

    q(a-zA-Z)   #record a macro
    @(a-zA-Z)   #replay a macro

###Scripts

List of available functions

    :help function-list

List of features

    :help feature-list

Help manuals

    :help eval
    :help python-commands
    :help perl-using
    :help ruby-commands

##Plugins

###Syntax scheme

manuals when writing syntax scheme

    :help syntax
    :help usr_44.txt
    :help group-name
    :help pattern-overview
    :help mysyntaxfile
    :help new-filetype

redraw the screen

    CTRL-L

###Compiler plugin

help

    :help write-compiler-plugin
    :help quickfix

###Disabling plugin

    vim -u NONE
    vim -u your-minimal-initialization.vim

help

    :help -u
    :help starting

##Programmes Editor

###Syntax highlighting

pipe Unix shell output to Vim

    cmd | vim -R -
    # end dash tells Vim to read from standard input

###Bounce
jump to corresponding curly bracket, or between the start and end of a block

    %

###Shell

access a full-fledged shell

    :sh

run external filters for current text

    :%!sort
    # sort current content

###Jumping around

open the file(position your cursor on a file name)

    gf

go to the local definition of the variable(cursor on variable name)

    gd

go to the global declaration

    gD

next { in the first column

    ]]

display all lines that contain the keyword under the cursor

    [I

help

    :help object-motions
    :help 29.3
    :help 29.4
    :help 29.5

###Browsing code

####File system

    :Vex
    :Sex

####ctags

open taglist window

    :TlistToggle
    
jump to definition of 

    :tag foo
    
jump to definition of symbol under the cursor

    CTRL-]

return to previous code you were reading

    CTRL-t

jump to definition in a split window

    CTRL-w ]

move between matching tags

    :tnext
    :tprev
    :tfirst
    :tlast

help

    :help taglist-intro

##More

###Modeline

enforce pure tabs within certain file

    # vim: noexpandtab
    (put within the first 2 lines or last 2 lines)

###Dr.Chip's plugins

Need to apply it

###Community

[mailing list](http://www.vim.org/maillist.php#vim)

[tips](http://vim.wikia.com/wiki/Vim_Tips_Wiki)

##What next

[Best of Vim Tips](http://rayninfo.co.uk/vimtips.html)

    :help user-manual
    :help new-7

***
###Some tricks

Cancel search highlight

    :noh

###Vim/Cscope

search: ```CTRL-<space> s```

command line search: ```:scscope find symbol foo``` or ```:scs f s foo```

go back: ```CTRL-t```

####types of search

- ```s```find all uses of symbol
- ```g```global definition
- ```c```all calls to a function
- ```f```opens the filename under the cursor
