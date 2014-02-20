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

####Questions

1. Why the data structure for kernel stack and context in thread are different?
