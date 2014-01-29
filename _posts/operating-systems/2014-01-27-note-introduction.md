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
- **What if the size doesn't match up?**
    The new process image will have different address spaces for text, data, BSS, Dynamic and Stack according to the new process.

####File Descriptors

- **How many file descriptor table?**
    Each process have different file descriptor table residing in the shell
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

####execve


```
execve(const char *path, char *const argv[], char*const envp[]);
```

- path is the path to the program
- argv 
    - The first element in argv is the name of the executed program(eg: last component of path, or whatever)
    - The rest elements in args are argumentlist, terminated by NULL
- envp
    - Environment pointer, null-terminated
    - see environ(7)

####Bear in mind: some realations

- Every time you malloc, you have to free
- Every time you open, think about close
