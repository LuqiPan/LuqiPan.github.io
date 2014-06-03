---
layout: post
title: "Ruby in 100 Minutes"
description: ""
category: "the odin project"
tags: []
---

####string gotcha

Ruby can't do ```string + num```

Use ```.to_s``` to get around it

Or maybe use this:

{% highlight ruby %}
number = 4
puts "print a number: #{number}"
{% endhighlight %}

####Symbols

- Starts with a colon then one or more letters
- Less methods than Strings

####Iterating

Use ```times``` method to repeat an instruction

{% highlight ruby %}
5.times do
  ...
end
{% endhighlight %}

####Arrays

- Return ```nil``` when index out of range
- ```<<``` operator for appending a signle element
- Elements don't need to be of same type

####Hashes

- ```{ key => value ... }```
- methods: ```keys```, ```values```
- simplified syntax when all keys are symbols:
    
    ```{ symbol: value ... }```

    (for Ruby 1.9 and higher)

####Conditionals

method name ending in a ```?```: return ```true``` or ```false```

####chomp

- get rid of the ```Enter```
- ```gets.chomp```

####exponentiation

```**```

    5**2

####random

- rand(1) always produce 0
- rand(101): 0-100
- srand
- srand 0 seed with current time in ms

####block as a parameter

- precede the parameter with an ampersand(&)

####global variable

- preced the variable with $
