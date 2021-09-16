#!/bin/sh
work_path=$(cd `dirname $0`; pwd)
setIconImage(){
    echo "开始生成图标······"
    sips -z 16 16     "${work_path}/app@2x.png" --out "${work_path}/icons.iconset/icon_16x16.png"
    sips -z 32 32     "${work_path}/app@2x.png" --out "${work_path}/icons.iconset/icon_16x16@2x.png"
    sips -z 32 32     "${work_path}/app@2x.png" --out "${work_path}/icons.iconset/icon_32x32.png"
    sips -z 64 64     "${work_path}/app@2x.png" --out "${work_path}/icons.iconset/icon_32x32@2x.png"
    sips -z 64 64     "${work_path}/app@2x.png" --out "${work_path}/icons.iconset/icon_64x64.png"
    sips -z 128 128   "${work_path}/app@2x.png" --out "${work_path}/icons.iconset/icon_64x64@2x.png"
    sips -z 128 128   "${work_path}/app@2x.png" --out "${work_path}/icons.iconset/icon_128x128.png"
    sips -z 256 256   "${work_path}/app@2x.png" --out "${work_path}/icons.iconset/icon_128x128@2x.png"
    sips -z 256 256   "${work_path}/app@2x.png" --out "${work_path}/icons.iconset/icon_256x256.png"
    sips -z 512 512   "${work_path}/app@2x.png" --out "${work_path}/icons.iconset/icon_256x256@2x.png"
    sips -z 512 512   "${work_path}/app@2x.png" --out "${work_path}/icons.iconset/icon_512x512.png"
    sips -z 1024 1024   "${work_path}/app@2x.png" --out "${work_path}/icons.iconset/icon_512x512@2x.png"
    sips -z 1024 1024   "${work_path}/app@2x.png" --out "${work_path}/icons.iconset/icon_1024x1024.png"
    sips -z 2048 2048   "${work_path}/app@2x.png" --out "${work_path}/icons.iconset/icon_1024x1024@2x.png"
    echo "全部图标生成······"
}
cd $work_path
mkdir icons.iconset
setIconImage
iconutil -c icns "${work_path}/icons.iconset" -o "${work_path}/app.icns"