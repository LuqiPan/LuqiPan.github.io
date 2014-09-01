---
layout: page
title: Projects
---

### [Brown CS Approved Course Pairs Visualization](https://luqipan.github.io/course-pairs/)

- Summary: This is a visualization of approved course pairs for AB, ScB, and ScM degrees in Computer Science at Brown
- Tech: Ruby, D3.js
- Detail: I used Ruby to scrape the [Approved Course Pairs page](http://cs.brown.edu/degrees/undergrad/concentrations/approvedpairs.html), then I visualized the result with D3.js

### [NSpec](https://github.com/LuqiPan/NSpec)

- Summary: An alternative syntax for [RSpec](http://rspec.info/).
    It lets you write `expect 3 to be <= 5` instead of `expect(3).to be <= 5`
- Tech: Ruby(treetop gem)
- Detail: I used treetop gem to define the syntax for NSpec, then I defined some rewrite rules to transform statements in NSpec back to RSpec
