---
layout: post
title: "Note: Vimcast"
description: ""
category: "vim"
tags: []
---

#### Converting between tabs and spaces

    :retab!

#### Delete blank lines

    :g/^$/d

#### Close all other windows

    :on[ly]

#### Move windows

    ctrl-w r    " rotate all windows
    ctrl-w R    " reversely rotate
    ctrl-w x    " extrange current window with its neighbour
    ctrl-w [HJKL]

#### Command-T auto flush

    ctrl-f

#### Pathogen + Git submodules

    git submodule init
    git submodule update

#### Changelist

    g; " jump back
    g, " jump forwards
    :changes

#### Jumplist

    ctrl-o " back
    ctrl-i " forward
    ctrl-] " follow link in help

#### Visual Block

    ctrl-v " like visual mode but select a block
    :s/\%V_/ /g " match only on the selected block

#### Modal Editing

Implicit motion command | Longhand equivalent
c{motion} | d{motion}i
C | d$a
s | xi
S | ^C
I | ^i

#### File Explorer

lazy | open file explorer
`:e.` | at current working directory
`:E` | at directory of current file

##### Manipulating the filesystem

command | action
% | create a new file
d | create a new directory
R | rename the file/directory
D | delete the file/directory
