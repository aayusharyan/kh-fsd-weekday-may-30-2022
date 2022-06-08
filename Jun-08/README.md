## Jun-08, 2022


### cd
--> Change Directory -> to navigate in the directory structure.
--> To go to parent, we do cd ..
--> 


### mkdir (Make Directory)
--> This will create a new directory inside where you are.
--> Usage (mkdir<space><directory_name>)
--> If we want to create multiple directories, then we can simply put space and another directory name.
--> If we want to give space in the directory name, then use (mkdir<space>"<directory_name_with_space>") (mkdir "New Folder")


### File extension
--> These are defined after the dot in the filename.
--> They are used to determine/describe the type of file.
--> Images (png, jpg, svg, psd, jpeg, etc. etc.)
--> Videos (mp4, mkv, 3gp, mpeg, mov, avi)
--> Music (mp3, wav, aac)
--> Documents (pdf, docx, doc, xlsx, txt, xls, ppt, pptx)
--> Setup (exe, bat, msi, dmg, etc.)
--> It is possible to have a file without any extension.

### vi/vim
--> vim -> vi Improved
--> To open a file, we use (vi <file_name>)
--> To quit, Esc > : > q
--> To save (write), Esc > : > w
--> To do it together :wq
--> To quit without saving :q!


### Modes in VI
--> Default Mode (Anytime when we want to go to default mode, we press Esc).
--> Insert Mode (This can be activated by pressing i key in the default mode).

### clear
--> Clears the terminal

### history
--> Shows the history of commands that you have executed on the terminal.
--> Additionally, if you want to delete, you run history -d <line_number>

## rm
--> remove / delete
--> to delete a file, we run rm <file_name>

## pwd
--> Print Working directory
--> To run this, just pwd

** Help -> Pressing Tab will fill the file/holder name.
** If you type some command and don't want to execute it, press Ctrl + c (Cmd for Mac)

### date
--> Shows the System's Date and Time
Wednesday 08 June 2022 19:34:01 PM IST

What to do for large files?
--> Suppose I have a server and I have logs on that server. Logs are history of that requests came to the server. Over time, this will be a very large file.

### cat / tail
--> Shows the last few lines of any file (specially helpful for large files).
--> This is READ ONLY.


### whatis
--> This tells what is a command
--> Use whatis <command_you_want_to_check>
--> This prints 1 line description of any command.
--> 

### find
--> Allows to find a file.
--> In order to use it, we run find <where_to_search> -name <file_name>


## rm -Rf <directory_name>


nano

Task -> In your home, create a folder of today's date ("Jun 08") and inside that, create a file (sample.txt) and put your name inside it.
Once done. tail the file and show the output.
Also show the history of your commands that you executed.
--> 2 screenshots.