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
5. idleproc-> first process
    
    initproc-> second process

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
2. a lot things missing for do_open
3. vput when error in namev
4. the pairing between *get/ *ref and *put

- vnode->lookup: error -ENOENT
- namev:lookup error -ENOTDIR

####Questions

1. what does it mean if f_pos == -1
2. figure facq and vn_ops->acquire
3. what about vfs_is_in_use
4. readdir
5. how to initialize p_cwd in proc_t
6. deal with const char **
7. how to kmalloc in namev
8. any other elegant way to examine if it's directory
9. dir_namev algorithm
10. About returning EPERM: vfs_test:292
11. vnode->mknod only get the file for special devices, When and how to initialize the corresponding vnode?

###S5FS

####Keep in mind

1. pin and unpin page frames when there's a chance to block

    Even if the blocking operation is not operating on the same page frame

    Guard around blocking operations

2. mark page frame busy when in the middle of a state transitions
3. watch out for the return value from ```pframe_get_resident```
4. pframe_migrate: read it later
5. dirty the page when the content is modified
6. the block acquired from s5_alloc_block is uninitialized
7. watch out for vn_len, it can change when write to the file
8. every time you modify an inode, even it's just modifying the linkcount, dirty it!
9. there's no bug with linkcount!!!
10. always check that the size of dir is a multiple of dirent size
11. I add a panic in s5fs_mkdir when there's no space, it should be removed once I'm sure there is no bugs
12. pinned page is allocated
13. off_t is signed int
14. the contents of block corresponding to s5_alloc_block are undefined
15. block number cannot be 0, but inode number can be 0- it's the root directory

####TODO

1. s5_link: linkcount on inode_child
2. watch out for linkcount: it should always be greater than 1
3. Add lock mechanisms in s5fs.c
4. add more KASSERT for s5fs_mkdir(check the linkcount)
5. check around s5_seek_to_block(it takes in an offset not blocknum and check the offset is not exceeding the file size)
6. the block acquired during seek_to_block of inode is memseted, what about file data block
7. check all funcions that are calling s5_write_file
8. lock the vnode if it will block

- assert at the end of mkdir
- decrement linkcount at s5_remove_dirent

####Questions

1. pframe_alloc: what if the pframe is already resident
2. what's the semantics of pframe_fill
3. what is the layout of vnode, s5fs, mmobj, pframe
4. when should I dirty a page frame?
5. should I pin the pframe in pframe_get when the pf is busy
6. am I doing the right thing when get NULL from pframe_alloc call pageout deamon
7. there's a potential in pframe_get that it falls into infinite loop of calling pageout deamon
8. why pin inodep then dirty_super in s5_alloc_inode
9. what to do in s5_seek_to_block when indirectblock is 0
10. check seekptr valid- should I do it in s5_seek_to_block?
11. how to dirty the page frame that particular inode is residing in
12. nice extension for s5_remove_dirent?
13. can we always assume that vnode->vn_len == inode->s5_size
14. about linkcount, 0 or 1
15. the order of pin, unpin, dirty

###VM

####Questions

1. any other things for vmmap_destroy?
2. vmmap_find_range: page starts at 0?
3. why it's in page resolution instead of byte
4. why unexpected kernel page fault is bad in Weenix

###TODO

1. Review the refcount with anon

####If I have time

- S5_NAME_LEN off by one

