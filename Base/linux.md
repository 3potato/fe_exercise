加端口号，查看端口被谁占用
lsof -i:端口号


kill -9 <PID>


➜  ~ ln -s "/Applications/WebStorm.app/Contents/MacOS/webstorm" /usr/local/bin/ws
全部配置好发现仍然无法用ws命令打开，这个时候需要配置webstorm，在”Tools” -> “Create Command Line Launcher…” 设置命令