---
layout: post
title: "Note: Weenix"
description: ""
category: "operating systems"
tags: []
---

###Processes and Threads

####Thoughts

1. How different functions interact with each other is really hard to figure out. - First time working on such a large code base.
2. Thread should always be in some queue, or it will never be run again.
3. In our model, _do_exit_ and _kthread_exit_ are the same because we only have one thread each process. Things will change if we have multi-threaded processes.
4. _proc_kill_ and _proc_kill_all_ are only for sys_halt. So maybe we don't care about the return value?

####Keep in mind

1. the thread kthread_destroy destroys should not wait in any queue.
2. when cleanup, just destroy the struct is not enough, need to delete itself from the list.
3. don't forget to use the p_wait queue.(in do_waitpid and exit)
4. test all the features that you had, don't presume that you are doing it right.

####Questions

1. Why the data structure for kernel stack and context in thread are different?
2. retval == NULL?
3. do_exit works now because there is only one thread, what if MTP
4. why can I make myself runnable and switch to other process, the kt_wchan is not NULL and should fail the KASSERT

    When curthr acquire the mutex, it's waitq will contain nothing! It's acturally on the state of KT_RUN. Only when it's waiting for a mutex will it be on some waitq.

5. exit a thread(use return or use kthread_exit)?
6. return value minus?
7. examine in sched_switch if nextthread == currentthread?

###Drivers

####Keep in mind

1. 

####Questions

1. Why is it that if I delete something, the last char kept showing up
    
    Delt with using a different dbgq.

2. How to handle the case about ckdtail and rhead.

    off by 1 issue

3. Why we only need to lock the rlock in n_tty_read?
4. How to deal with full buffer?

    discard the newly inputted character
5. How to acknowledge interrupt?

    dma_reset(see dma.h)

###VFS

####Keep in mind

1. the difference between file_t and fs_t

####Questions

1. what does it mean if f_pos == -1
2. figure facq and vn_ops->acquire
3. what about vfs_is_in_use
4. readdir
