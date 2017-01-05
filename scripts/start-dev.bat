@echo off
cd /d %~dp0\..

:: call :run Compiler cmd /c watchy -w app -- scripts\compile.bat

call :run LiveReloadX /min cmd /c livereloadx -s . -p 8080 --exclude "jspm_packages/" --exclude "node_modules/"

cd server
call :run PouchDBServer /min cmd /c pouchdb-server --port 5984

::call :run Server /min cmd /c scripts\server.bat

:: call :run Babel cmd /c babel -w -m amd -b es6.forOf -s -d _public app


tasklist /fi "windowtitle eq Developer Tools - http://127.0.0.1:8080/" | find "chrome.exe" >nul
if errorlevel 1 start chrome http://127.0.0.1:8080

goto :EOF

:run
setlocal
set title=%1
for /f "tokens=1,* delims= " %%a in ("%*") do set args=%%b
tasklist /fi "windowtitle eq %1" | find "cmd.exe" >nul
if errorlevel 1 start "%title%" %args%
endlocal
goto :EOF
