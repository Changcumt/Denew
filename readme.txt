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
$  git log //show the git log

$  git reset --hard HEAD^  //back the last edition   HEAD~100  the 100st before edition

git版本推入库中
$  git remote add origin https://github.com/Changcumt/Denew.git  //this is your github.git
$  git push -u origin master //push your origin in github  -- 1st time
$  git push origin master
$  git  remote remove origin  //remove your origin


git  clone 
$  git clone https://github.com/Changcumt/Denew.git

