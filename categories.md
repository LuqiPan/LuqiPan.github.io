---
layout: page
title: Categories
---

{% comment %}
Thanks to
http://stackoverflow.com/questions/9593788/creating-categories-on-jekyll-driven-site
{% endcomment %}
{% for cat in site.categories %}
  <h3>{{cat[0]}}</h3>
  <ul>
  {% for post in cat[1] %}
  	<li><time>{{ post.date | date: "%b %d" }}</time> - <a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
  </ul>
{% endfor %}
