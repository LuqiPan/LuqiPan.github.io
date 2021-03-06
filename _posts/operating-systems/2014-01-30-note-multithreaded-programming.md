---
layout: post
title: "Note: Multithreaded Programming"
description: ""
category: "operating systems"
tags: []
---

####Creating POSIX Threads

```
pthread_create
```

- returns a positive value indicating failure

####Structure pointer approach

**P46**

####Passing arguments to threads

1. copy all arguments to the thread's stack: isn't supported in either POSIX or Win-32
2. pass a pointer to local storage: should make sure this storage doesn't go out of scope until the thread is finished with it
3. pass a pointer to static or global storage: works only if one thread at a time is using the storage
4. pass a pointer to dynamically allocated storage: works only if we can free the storage exactly when the thread is finished with it

####Threads terminate

-       2 ways:
        1. return from its first procedure(a value of type _void*_)
        2. call _pthread_exit_, supplying a _void*_ argument

-       difference:
        1. _pthread_exit_: terminates just the calling thread
        2. _exit_: terminates the entire process, including other threads in the process

####Deadlock conditions

1. a thread can hold an item while waiting for another
2. a thread cannot be forced toyield the items it is holding
3. each container has a finite capacity
4. a circular wait

####Semaphore

- binary semaphores
- counting semaphres

####Conditional variables

- P67: why not
```
if --writers == 0
```
- P70: Now when the waiting threads wake up, they will find the guard false....

####async-signal

- fork
- _exit
- open
- close
- read
- write
- sem_post

####Question

- POSIX cancellation

####Bear in mind

1. it's unsafe to make more than 1 call to _pthread_join_ on any particular thread
2. for each call to _pthread_create_ there should be exactly one call to either _pthread_join_ or _pthread_detach_.
3. _pthread_cleanup_push_ must match exactly with _pthread_cleanup_pop_

***

####Notes during db assignment

- It's a common(if standard) approach to mask the signal you want to handle in the main thread, then create a handler thread, specifically unblocking the signal and waiting for the signal, to handle that signal.
- If you did not ```pthread_detach``` the thread, then you'll have to ```pthread_join``` the thread, or the resources allocated by the thread will not be collected.
- Signal is not that hard at all, just need to figure out the current state.
- **If you cherish your life, stay away from ```pthread_detach```!!!**
