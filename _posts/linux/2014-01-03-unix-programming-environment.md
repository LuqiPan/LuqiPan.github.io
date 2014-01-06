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

###2.1 Basics of files
octal dump

    od -c   #character
    od -b   #octal numbers
    od -x   #hex numbers

###2.2 What's in a file
###2.3 Directories and filenames

disc space used(listing all the files in current directory, pipe it to grep to find a specific file)

    du
    du -a   #all files in a directory

###2.4 Permissions
3 kinds of permissions:

    read, write, execute

different people:

    you, group, others

permission string:

    -   indicates it's an ordinary file
    d   indicates it's a directory
    rws s: when the command is run, it is to be given the permissions corresponding to the file owner

directory permission:

    r   "read" e.g. ls
    w   "write" create and delete files in this dir
        even if you don't have write permission to that file, you can delete it
    x   "search" 
    
chmod
    
    octal:  4 for read, 2 for write and 1 for execute
    +:      turns a permission on
    -:      turns a permission off
    
changing permissions on the directory doesn't change its modification date

###2.5 Inodes  
three times:

    modified(written) time, used(read or executed) time, (permission) changed time

more on ls

    ls -t   #sorts the file according to time(default last modification)
    -u      #used time
    -c      #changed time
    ls -i   #the i-number in decimal

###2.6 The directory hierarchy
###2.7 Device

permission string:
    
    c   #stands for character
    b   #stands for block

disc free space:

    df

the black hole:

    /dev/null

##Chapter.3 Using the Shell

###3.1 Command line structure

tee command: save intermediate output to a file

A timer:

    (sleep 300; echo Tea is ready) &    # echo in 5 mins

###3.2 Metacharcters

    *   #any string
    ?   #any single character
    [0-9a-z]    #character from range

    `command`   output replaces `command`
    (command)   run command in a sub-shell
    {command}   run command in current shell
    
    $1, $2  first, second argument
    
    '...'   literally
    "..."   literally after $, `...` and \ interpreted

    p1 && p2    run p1; if successful, run p2
    p1 || p2    run p1; if unsuccessful, run p2

###3.3 Creating new commands

###3.4 Command arguments and parameters

###3.5 Program output as arguments

###3.6 Shell variables
