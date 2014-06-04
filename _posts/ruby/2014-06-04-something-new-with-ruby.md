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
