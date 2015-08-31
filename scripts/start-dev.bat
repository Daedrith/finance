@echo off
cd /d %~dp0\..
:: TODO: way to auto-detect when one is already running?

call :run Compiler cmd /c watchy -w app -- scripts\compile.bat

call :run LiveReloadX /min cmd /c livereloadx -s _public

::call :run Server /min cmd /c scripts\server.bat

tasklist /fi "windowtitle eq Finance - Google Chrome" | find "chrome.exe" >nul
if errorlevel 1 start chrome http://localhost:35729

goto :EOF

:run
setlocal
set title=%1
for /f "tokens=1,* delims= " %%a in ("%*") do set args=%%b
tasklist /fi "windowtitle eq %1" | find "cmd.exe" >nul
if errorlevel 1 start "%title%" %args%
endlocal
goto :EOF