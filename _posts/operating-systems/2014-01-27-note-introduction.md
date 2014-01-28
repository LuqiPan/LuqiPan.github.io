---
layout: post
title: "Note: Introduction"
description: ""
category: "operating systems"
tags: []
---

####Traps

- Invoking the kernel from user code
- Done by system calls
- Handled as part of the program that caused it

####Interrupts

- A request from an external device for a response from the processor.
- Handled independently of any user program

####Address space

- Stack
-    going down
-    going up
- Dynamic
- BSS(block started by symbol)
- Data
- Text

####Process Management

- fork()
- wait(&ReturnCode)
-   exit(n)
-       1. process calls exit- zombie state(PID and return value preserved)
        2. parent process calls wait- released(all traces disappear)
-   parent terminates before the child
    PID 1 inherits the children of terminated processes

####Exec(s)

- creates a new process to replace the program with a new one
- execl(name of file, name of program, command-line arguments terminating with 0)
- **What if the size doesn't match up**

####File Descriptors

- **What if we maliciously change the fd**
- **How many file descriptor table**
- Both file descriptors refer to the same context info

        close(1);
        close(2);
        dup(1);

####Pipe

    int p[2];
    pipe(p);
    // p[0] for read
    // p[1] for write

####Links

- Hard link: link system call or ln
- Symbol link: symlink system call or ln -s
