!macro customHeader
  RequestExecutionLevel admin
!macroend

!macro customInit
  WriteRegStr HKLM "Software\Microsoft\Windows NT\CurrentVersion\AppCompatFlags\Layers" "$INSTDIR\${PRODUCT_FILENAME}.exe" "RUNASADMIN"
  WriteRegStr HKCU "Software\Microsoft\Windows NT\CurrentVersion\AppCompatFlags\Layers" "$INSTDIR\${PRODUCT_FILENAME}.exe" "RUNASADMIN"
!macroend

!macro customInstall
  WriteRegStr HKCR "canicode" "" "URL:canicode"
  WriteRegStr HKCR "canicode" "URL Protocol" ""
  WriteRegStr HKCR "canicode\shell" "" ""
  WriteRegStr HKCR "canicode\shell\Open" "" ""
  WriteRegStr HKCR "canicode\shell\Open\command" "" "$INSTDIR\${APP_EXECUTABLE_FILENAME} %1"
!macroend

!macro customUnInstall
  DeleteRegKey /ifempty HKCR "canicode"
!macroend