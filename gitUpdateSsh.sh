#!/usr/bin/expect -f

set USER "PavelN"
set PATH "/var/spotworld"
set GIT "https://github.com/Lafoed/spotworld.git"
set PASS "epidemicpassword"
set PASSGIT "*"

set HOST1 "185.98.87.26"


spawn ssh $USER@$HOST1;
expect "assword:";
send "$PASS\r";
expect "$*";
send "cd $PATH\n";
send "git pull $GIT\r";
expect "$*";
send "NODE_ENV supervisor start app.js";
expect "$*";
send "exit\r";
expect "$*";







