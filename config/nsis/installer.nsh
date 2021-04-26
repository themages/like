!macro customInstall
  WriteRegStr HKCR "canicode" "" "URL:canicode"
  WriteRegStr HKCR "canicode" "URL Protocol" ""
  WriteRegStr HKCR "canicode\shell" "" ""
  WriteRegStr HKCR "canicode\shell\Open" "" ""
  WriteRegStr HKCR "canicode\shell\Open\command" "" "$INSTDIR\${APP_EXECUTABLE_FILENAME} %1"
!macroend

!macro customUnInstall
  DeleteRegKey HKCR "canicode"
  DeleteRegKey /ifempty HKCR "canicode"
!macroend