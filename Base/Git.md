```markdown
版本回退
git reset —hard <commits id>
强制推送
git push -f

撤销某一次操作
git revert  <commits id>
git commit 
git push

git reset 与 git revert 最大的差别就在于，git reset 会失去后面的提交，而 git revert 是通过反做的方式重新创建一个新的提交，而保留原有的提交。在企业里，应尽量使用 git revert 命令，能不用 git reset 命令尽量不用。

任何还没有PUSH到远端(origin)，但已经被提交到本地(local)的commit，都可以用以下命令回退。
git reset HEAD~1 --hard 

分支重命名
git push origin —delete 旧名称
git branch -m 旧名称 新名称
git push -u origin 新名词

(1)新建分支
git branch 分支名
git checkout -b hotfix
(2)切换分支
git checkout 分支名
查看分支
git branch
查看远程分支
 git ls-remote    首次
git branch -a  非首次
(3)进行项目上传
git add .
git commit -m "提交的信息"
//git remote add origin 远程仓库地址
git push -u origin 分支名 
git push --set-upstream origin hotfix


删除本地分支 
git branch -D <BranchName>
删除远程分支 
git push origin --delete <BranchName>
合并远程分支到本地分支
git branch -u origin develop

合并分支
git merge p master
取消合并
git merge --abort


下载大文件配置

git config --global core.compression 0


```