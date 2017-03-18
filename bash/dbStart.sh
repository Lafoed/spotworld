#!/usr/bin/expect -f

set USER "PavelN"
set PATH "/var"
set GIT "https://github.com/Lafoed/spotworld.git"
set PASS "epidemicpassword"
set PASSGIT "*"

set HOST1 "185.98.87.26"


spawn ssh $USER@$HOST1;
expect "assword:";
send "$PASS\r";
expect "#*";
send "cd $PATH\n";
expect "#*";
send "sudo mongod --dbpath spotdb\n";
expect "#*";
interact;








