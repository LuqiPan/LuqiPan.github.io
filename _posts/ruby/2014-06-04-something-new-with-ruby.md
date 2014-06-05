---
layout: post
title: "Something New With Ruby"
description: ""
category: "ruby"
tags: []
---

####Lambda Literals

    succ = lambda {|x| x+1}
    succ = ->(x){ x+1 }
    succ = ->x { x+1 }

####Porc Equality

    lambda {|x| x+1 } == lambda {|x| x+1 } # false

    p = lambda {|x| x+1 }
    q = p.dup
    p == q #true
    p.object_id == q.object_id #false

####Shorthand for string list

    %w{word1 word2 etc}

####Warning Mode

    irb -w
    ruby -w

####Annotation

- TODO
- FIXME
- OPTIMIZE

    rake notes

####Hash

Basically use fetch instead of square brackets- it will raise error if it's nil.

####String

Flexible quoting:

- $(string)
- %!string!
- %{string}

Shovel(<<) operator modifies the original string, while += doesn't

####Symbol

String.to_sym

####Questions?

arr = [1,2,3,4]
why arr[4..0] == []
but arr[5..0] == nil

bonus question @about_hashes.rb:43

what's with single quotes **sometimes** interpret escape characters

@about_symbols.rb:34

@about_regular_expressions.rb:35
