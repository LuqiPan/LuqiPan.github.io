---
layout: post
title: "Note: Rails best practice"
description: ""
category: "rails"
tags: []
---

#### update_attribute

Watch out for ```update_attribute```, it doesn't run model validations. But ```update_attributes``` does.

#### #count, #length and #size for ActiveRecord

- Use #size
- Use #length if you'll need to load the real records immediately
