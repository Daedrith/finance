@echo off
setlocal

cd /d %~dp0\..

if not exist _public mkdir _public
if not exist _public\css mkdir _public\css

:: TODO: junctions to bower dirs?

if not exist "%FILE%" goto :fullCompile

call :fileCompile %file%
goto :EOF

:fullCompile
echo Full compile...
call jade -o _public -P app
if %errorlevel% NEQ 0 echo 
call stylus -o _public\css app\css
if %errorlevel% NEQ 0 echo 
:: call babel -m common -s -d _public app
:: if %errorlevel% NEQ 0 echo 
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

:compilejs
:: echo %1 | find /i ".es6.js"
:: if errorlevel 1 goto :EOF
:: call babel 
goto :EOF