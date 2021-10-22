!macro customInstall
  DeleteRegKey HKCR "likelive"
  WriteRegStr HKCR "likelive" "" "URL:likelive"
  WriteRegStr HKCR "likelive" "URL Protocol" ""
  WriteRegStr HKCR "likelive\shell" "" ""
  WriteRegStr HKCR "likelive\shell\Open" "" ""
  WriteRegStr HKCR "likelive\shell\Open\command" "" "$INSTDIR\${APP_EXECUTABLE_FILENAME} %1"
!macroend

!macro customUnInstall
  DeleteRegKey HKCR "likelive"
  DeleteRegKey /ifempty HKCR "likelive"
!macroend