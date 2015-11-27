@echo off
cd /d %~dp0\..
start http://127.0.0.1:8080
:start
call livereloadx -s . -p 8080
::call jspm-server --no-browser --ignore-exts=md
::call node server/server.js
if %errorlevel% NEQ 0 echo ^G
echo Press any key to restart server (use ctrl+C and answer Y to quit)...
pause >nul
goto start