@echo off
cd /d %~dp0\..
:start
call jspm-server --no-browser --ignore-exts=md
::call node server/server.js
if %errorlevel% NEQ 0 echo ^G
echo Press any key to restart server (use ctrl+C and answer Y to quit)...
pause >nul
goto start