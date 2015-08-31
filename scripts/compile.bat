@echo off
setlocal

cd /d %~dp0\..

if not exist _public mkdir _public
if not exist _public\css mkdir _public\css

if exist "%FILE%" call :fileCompile %file% && goto :EOF

call jade -o _public -P app
if %errorlevel% NEQ 0 echo 
call stylus -o _public\css app\css
if %errorlevel% NEQ 0 echo 
goto :EOF

:fileCompile
set ext=%~x1
call :compile%ext:.=%
if %errorlevel% NEQ 0 echo 
goto :EOF

:compilejade
call jade -o _public -P app
goto :EOF

:compilestyl
call stylus -o _public\css app\css
goto :EOF
