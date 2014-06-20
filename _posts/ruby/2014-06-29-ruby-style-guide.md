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

####Questions

What's the meaning that Ruby 1.9 hashes are ordered
