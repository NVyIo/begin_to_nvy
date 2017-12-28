# Nvy.io Instructions for GitHub

Created by NiKole Maxwell

## Purpose

This document identifies the steps to maintain GitHub Repositories and source data files on GitHub for Nvy.io operations.

## Step by Step 

### Verify Existing Credentials

From the terminal, type the following:

-- use `git config --list` to view current configuration settings

** Add [as needed]: **
`- git config --global user.name "NiKole Maxwell"`

`- git config --global user.email "nvymaxwell@outlook.com"`

### Create the GitHub Repository (Manual Procedure)

The following tasks are to be completed directly on GitHub [www..github..com/maxnvy OR www.github.com/nvyio]

### Steps to Create A Repository Manually

From within Github:

1. Select `New Repository` [upper right corner]
1. Enter Repository Name and a Description
1. Choose Appropriate Options
    1. Public
    2. Add a readme
    3. Select gitignore
    4. Select the appropriae License [match to npm | default is MIT]
1. Do not add a readme
1. Review setup

**Note the Repository Url

    This will be used later to link the repository and the project.
        -- Example Url ( 'https://github.com/NvyMax/nvy_widgets.git' )

## Link the Source and Repo

Create a link from the Editor to the repo

### Add files to .ignore [Internal Files and Folders]

In Visual Studio Code:

    1.  Create the .ignore folder
    2. Add any files needed to the .gitignore file or folder

### Initialize the Repo [Terminal]

From the Terminal Type:

```git
git init
```

### Link to Remote Repository [Terminal]

1. Type `git remote`, this starts the git remote listener
1. Type `git remote add origin +  https://github.com/NvyMax/NAME.git` Name = the name of your repo. 
    -- This should be the project URL.
1. Type `git remote` again (git should report "origin")

### Add existing files to Git

1. Type `git status` to review adds and files being suppressed
1. Type `git add .`  to add all files you want tracked to the staging area, if there are files that need to be added to .gitignore do so.
1. Type `git status` review the files being added and suppressed

### Commit files from the Staging Area to the Master

Type `git commit -m` + " Message to be displayed on Github regarding the commit" example: "Initial commit: Create Repo"

1. You can type `git commit  "comment"`
1. This can also be used to update tickets from the ISSUE tracker.

**Example:**  *Type Closed + the ticket number to automatically update*

### Push Files to Master (Terminal Push to GitHub)

1. Type `git push -u origin master`
1. Update the readme if necessary

## Handling Changes

### To Process Changes to Origin

Small changes are commits.  (a package of changes, generally representing a patch (major or minor).

To update commits for projects, they will be tracked directly by Visual Studio Code(VSC). 
When ready to commit them:

1. Update/any files that don't need to be tracked
1. Save all open files
1. Click the Github button on VSC
1. Check the number of changes to confirm accuracy
    - You can use the links on the GH tool to change tasks (like make changes, merge pull etc.]
1. Press the `+` button to **stage** all changes
1. Push the Git checkmark[at tthe top]  to update all of the commits to GH
1. Input a change comment about the updates
1. Confirm completion in the terminal. Updates will be will be pushed for viewing in the repo

### To  Add or Update Versioning

 git tag -a [version] -m "[version message]
 git tag -a v1.2.0 -m "Awesome Library v1.2.0 "

### DELETE a committed but unpushed change

If you have NOT pushed your changes to remote:

```git

git reset HEAD~1

```

Check if the working copy is clean by running ```git status```
Unless you have pushed your changes to remote:

```git

git revert HEAD

```

Use `git Reset`
--t o reset the current unpushed commit:

```git

git reset --hard origin/master

```
