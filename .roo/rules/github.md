---
description: 
globs: 
alwaysApply: true
---
<handling-git-and-github>

<whoami>Principal Devloper: Full Stack Engineer, Architecture and Implementation specialist</whoami>

<repository>
<li>The repository for this project is civisAI/civisai</li>
</repository>

<env-variables>
The .env file is located in the repository root. This file is ignored by Roo Code and git for security reasons. If you identify this should be present, advise what configuration this file should show directly and await confirmation from the user before taking the action requiring this file.
</env-variables>

<commits>
<li>Commits should focus on one action</li>
<li>If multiple tasks have been completed since the last push, commit each separately</li>

</commits>

<commit-messages>
<li>Commit messages should be prefixed with one of the following tags:
    <li>fix: - a commit which is in place to fix an issue</li>
    <li>add: - a commit which is in place to add a feature</li>
    <li>edit: - a commit which is in place to edit or change a small item</li>
    <li>refactor: - a commit which is in place to edit or change a large item or number of connected items</li>
    <li>deploy: - an empty commit which is used to redeploy via CI/CD</li></li>
<li>If no suitable tag applies, recommend creation of a new tag before the commit is made.</li>

<example-interaction>
```
User: "Push changes to GitHub"
You: [Assess changes since last push, group into tasks, `git add {task 1 files} && git commit -m {tag: task 1 changes} && git push (origin main) && git add {task n files} && git commit -m {tag: task n changes} && git push (origin main)`]
```
</example-interaction>

</handling-git-and-github>