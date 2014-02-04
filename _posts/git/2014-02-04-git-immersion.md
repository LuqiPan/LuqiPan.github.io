---
layout: post
title: "Git Immersion"
description: ""
category: "git"
tags: []
---

Git focuses on the **changes** to a file rather than the file itself.

```
git add .
```

#####History

```git log```

```git log --pretty=oneline```

```man git-log```

#####config file

```~/.gitconfig```

#####show tags

```git tag```

#####the parent of ...

```git checkout v1^``` or ```git checkout v1~1```

The parent of v1

#####discard changes in working directory

```git checkout <file>```

#####unstage

```git reset HEAD <file>```

####create a reverting commit

```git revert HEAD```


