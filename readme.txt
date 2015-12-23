Git 常用命令整理

$  git confing --global user.name "name" //配置用户名
$  git confing --global user.email "email" //配置邮箱

$  git init // create Git repository

$  git add readme.txt //add a new file in repository,then there is no response,that's ok.

$ git commit -m "wrote a readme file"  //commit the files that you added,then,git will show those messages:
[master (root-commit) dfa8b98] wrote a readme file
 1 file changed, 7 insertions(+)
 create mode 100644 readme.txt


$  git status // check the repository status,if changed,then it will warn.
$  git diff //it will show the differences