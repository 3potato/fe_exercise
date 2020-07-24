推荐阅读：
 	Node.js开发指南_正版.pdf
第二梯队(排列次序就是推荐次序)：
nodejs 权威指南
node.js 入门经典 
nodejs 开发实战详解
node 学习指南
node 与 express 开发
node 即学即用
目前不推荐阅读，有一定基础之后请阅读：	
 	深入浅出Node.js 朴灵 .pdf
前50%推荐阅读：
 	nodejs入门.pdf
网站：
 	推荐：
 		菜鸟：http://www.runoob.com/nodejs/nodejs-tutorial.html
 	基本：
 		官网：https://nodejs.org/en/
 		社区：http://cnodejs.org/
 		
 		
 		
 		
### 美团云安装node
//进入安装包位置
/usr/local/src
//下载安装包
wget https://nodejs.org/dist/v6.11.4/node-v6.11.4-linux-x64.tar.xz
//解压并进入
tar -xvf node-v6.11.4-linux-x64.tar.xz
//软链接、设置成全局：
ln -s /usr/local/src/node-v6.11.4-linux-x64/bin/node /usr/local/bin/node
ln -s /usr/local/src/node-v6.11.4-linux-x64/bin/npm /usr/local/bin/npm
//查看node版本
node -v