---
layout: post
title: "UNIX Programming Environment"
description: ""
category: "Linux"
tags: []
---
##Chapter.1 Beginners

###1.1 Getting started

RETURN key: 

    CTRL-m

no more input: 

    CTRL-d

rings the bell: 

    CTRL-g

backspace:

    CTRL-h

tab:

    CTRL-i

break:

    CTRL-c

which terminal:

    who am i

erase one word:

    CTRL-w

erase the entire line:

    CTRL-u

Stop output:

    CTRL-s

resume

    CTRL-q

###1.2 Files and common commands

ls

    -t  #time order
    -l  #long listing
    -u  #when is used
    -r  #reverse the order

word count

    wc

compare

    cmp
    diff

###1.4 Shell

####Filename shorthand
any string of characters:

    *

range of letters or digits

    [1-46-9]
    [a-z]

any single character

    ?

turn off the special meaning

    ls '?'
    ls \?

####Input-output redirection

output to file

    command >filename   #overwritting
    command >>filename  #appending

take input from a file

    command <filename

####Processes

no hangup:

    nohup command &

lower priority

    nice command &

start command at some time

    at <time>   #2130 930pm
    command1
    command2
    ...
    CTRL-d

##Chapter.2 The File System

octal dump

    od -c   #character
    od -b   #octal numbers
    od -x   #hex numbers


