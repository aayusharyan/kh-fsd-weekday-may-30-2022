## Jun-14, 2022

### git init
--> Initialize a Git repository.
--> This folder where we run git init. This becomes the main folder of your software / project.

### git status
--> Status of the whole repository.
--> It will show the list of files that you have changed.

### git add
--> This means we want to make that file ready for commit.
--> We can add only the files we want to add.
--> Preparing for Commit.
--> For multiple files. Use git add <file1> <file2> <file3>

### git commit -m "<Your Message>"
--> This will create a checkpoint in your history.
--> You cal also say this kind creates a version (smaller one).

### git log
--> This will show the history of the commits that we have made.


           git add
(optional) git status
           git commit -m 
(optional) git log


### git remote
--> This is used to handle the remote locations.
--> in order to add a new remote, we use git remote add <name> <remote_url>
--> To view the added remotes, we use git remote -v
--> -v means view.


### git push
--> This will push your code and everything to the remote.
--> Usage, git push <remote_name>
--> In our case, it will push our code on to Github.

### git clone

Task 1:
--> Create a new Repository (Call it Project2)
--> Create 3 files. (index.html, about.html, contact.html)
--> No need to worry about the content.
--> Push it on the github repository.