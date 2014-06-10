---
layout: post
title: "RSpec: Level 1"
description: ""
category: "ruby"
tags: []
---

####Modifier vs Matcher

Modifier eg: should, should_not
Matcher eg: <, ==, >

####Predicate matcher

    class Zombie
      def hungry?
        true
      end
    end

    Zombie.new.should be_hungry

####Pending

    it "nothing"

    xit "something" do
      # ...
    end

    it "something" do
      pending
      # ...
    end
