---
layout: post
title: "Edwin: notes"
description: ""
category: "emacs"
tags: []
---

####C and M

- C(Control) ```ctrl```
- M(Meta) ```command```

####Screen navigation

- Move forward ```C-v```
- Move backward ```M-v```
- Clear screen ```C-l```

####Cursor navigation

- Previous line ```C-p```
- Next line ```C-n```
- Backward one character ```C-b```
- Forward one character ```C-f```
- Backward one word ```M-b```
- Forward one word ```M-f```
- Line start ```C-a```
- Line end ```C-e```
- Sentence start ```M-a```
- Sentence end ```M-e```
- File start ```M-<```
- File end ```M->```

####Usually the Rule

- Meta commands are for English text
- Control commands are for basic textual units

####Repeat command

```C-u <times> [command]```

####Stopping Edwin

- ```C-g``` quit what it was doing
- ```C-c C-c``` cancel a Scheme evaluation

####Deletion

- <Delete> delete the character just before the cursor
- ```C-d``` delete the next character after the cursor
- ```M-<Delete>``` kill the word immediately before the cursor
- ```M-d``` kill the next word after the cursor
- ```C-k``` kill from the cursor position to end of line
- ```M-k``` kill to the end of the current sentence

####Yank

Use ```C-y```

- ```C-y``` get the most recent kill
- ```M-y``` get the previous kill

####Evaluating Scheme Expressions

- get into an evaluation buffer ```C-x b *scheme*```
- ```C-x C-e``` evaluate the expression(point is after the closing parenthesis)
- ```M-p``` to access the history
- ```C-x b TUTORIAL```

####Undo

```C-x u``` or ```C-_```

####Files

- Find a file ```C-x C-f```
- Save the file ```C-x C-s```

####Buffers

- List buffers ```C-x C-b```
- get rid of the buffer list ```C-x 1```
- Save all changed buffers ```C-x s```

####eXtend command

- C-x Character eXtend. Followed by one character
- M-x Named command eXtend. Followed by a long name

####C-x commands

- C-x C-f   Find file
- C-x C-s   Save file
- C-x C-b   List buffers
- C-x C-c   Quit Emacs
- C-x u     Undo

####Named eXtended command("functions")

- M-x replace-string
- M-x scheme-mode

####Modes

- C-h m documentation on current mode

####Searching

- Forward search ```C-s```
- Reverse search ```C-r```

####Recursive editing levels

- M-x top-level
- In doubt?

####Windows

- C-x 1 One window

####Getting help

- C-h
- C-h ?
- C-h c brief description
- C-h k documentation of the function
- C-h f <function name> describe a function
- C-h a Command Apropos

###Misc

- C-u C-v to bring current line up
