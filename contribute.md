# Contributing to FLOSScoach project
FLOSScoach is built as an academic effort to provide better organization to support newcomers.
We appreciate any community support, helping us with the following steps, interesting ideas,
bug fixing, document improvement. In summary, there are many ways you can support our community.
First, if you found something or had an idea:
- [File an issue (bug report or new feature request)](#file-an-issue)

If you want to fix something already reported. You may first [find an issues to work with](#find-an-issue). You may find tasks related to:
- [Work on GitLab documentation](#work-on-documentation)
- [Help us coding: adding features or fixing bugs](#help-us-with-code)

## File an issue
- Did you find any problem while using FLOSScoach?
- Do you have any great idea of new feature that would make FLOSScoach nicer? 

Don't keep it to yourself. Please let us know! Reporting issues and providing feature requests are one of the things that makes Open Source amazing. 
Please help us by creating a new issue report in our GitLab repository (either bug report or feature request). 

To do so:
1. go to the [issue list](https://gitlab.com/mariamgui/flosscoach-ia/issues) in our GitLab page 
2. create a "New Issue" (Green button in the top left) and 
3. provide as much details as you can in your report. 

Remember to stay tuned in your issue to provide more details as requested by other members in the follow up comments.

## Find an issue
If you want to contribute fixing something that has already been reported, you should:

1. Take a look in our [issue list](https://gitlab.com/mariamgui/flosscoach-ia/issues)
2. Look for labels to guide you (bug, documentation, good for newcomers, etc.)
3. Find something that fits your goals or is appropriate for you
4. Ask for more details or inform the commuinity that you are interested in working with the issue (as a comment)

## Work on documentation 
Another nice and easy way to start contributing to the project is by fixing issues or adding information to our documentation. 
To do so, you just need to 
1. navigate to the desired file (in this project they are usually markdown -- .md -- files); 
2. edit in the GitLab editor (clicking the "Edit" button in the top-left corner of the file content);
    - You will probably be requested to create a fork. Go ahead and do that (want to learn more about forks? It is a copy of the repository to your account. More? [Click here](https://docs.gitlab.com/ee/gitlab-basics/fork-project.html#how-to-fork-a-project))
3. edit the file and submit your merge request following the GitLab workflow (want to know more about the merge request workflow? [Click here](https://docs.gitlab.com/ee/gitlab-basics/add-merge-request.html)
4. your changes will be reviewed before going to production (and some changes may be required later)


## Help us with code

Hi! if you're willing to contribute with code to  **FLOSScoach**, 
in addition to [find a task to contribute to](#find-an-issue), you will need to
**set up the project workspace on your local machine**, so you can make the appropriate
changes to the codebase.

We provide a simple set of steps you must follow to get your local machine ready for development. 
Choose your Operating System:

- [Linux](workspace_setup_linux.md)
- [Mac](workspace_setup_mac.md)
- Windows -- Not available (Want to help us? Fix the [issue 149](https://gitlab.com/mariamgui/flosscoach-ia/issues/149), creating a step-by-step for setting up FLOSScoach in a Windows box)

**Though easy and simple, these steps are estimated to take up to 30min.**

After that, hands on! Make your changes locally...

### Submitting your changes
After you have finished writting some code, or changings so these are the steps for adding your contribution to FLOSScoach:

#### Add changes to git
```bash
#cd to the project directory
cd flossccoach
#Add your local changes (. will add all changes done)
git add .
#Create a new commit
git commit -m "Insert commit message here"
#And then send it to the Gitlab repository 
git push origin development
#You will be prompted to insert your Gitlab login credentials then
```
### Merging changes
To merge the changes you've done to the master branch of FLOSScoach project you can follow the excelent instructions 
from [Gitlab official docs](https://docs.gitlab.com/ee/gitlab-basics/add-merge-request.html).
It's quite simple to be done.

