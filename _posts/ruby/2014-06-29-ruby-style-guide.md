---
layout: post
title: "Ruby Style Guide"
description: ""
category: "ruby"
tags: []
---

```
%w(literal string array)
```

```
%i(literal symbol array)
```

***

Use ```Hash#fetch```. It will raise a KeyError, making the problem obvious

***

```Object#to_s``` method is invoked automatically when it's interpolated object.

eg: ```message = "This is the #{object}."```

***

Use ```String#<<```, it mutates the original string and is faster

```String#+``` will create a new string

***

Create a symbol with spaces in it ```:"some string"```

***

####Questions

What's the meaning that Ruby 1.9 hashes are ordered
