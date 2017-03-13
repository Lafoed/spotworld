#!/usr/bin/expect -f

set USER "PavelN"
set PATH "/data/www/apps/flowers"
set GIT "https://github.com/Lafoed/spotworld.git"
set PASS "3f)J5a%Y"
set PASSGIT "PN1q2w3e4r"

set HOST1 "185.98.87.26"


spawn ssh $USER@$HOST1;
expect "assword:";
send "$PASS\r";
expect "$*";
send "cd $PATH\n";
send "git pull $GIT\r";
expect "$*";
send "supervisor start app.js";
expect "$*";
send "exit\r";
expect "$*";







