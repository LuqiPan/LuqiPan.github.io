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
