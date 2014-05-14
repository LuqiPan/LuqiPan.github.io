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
