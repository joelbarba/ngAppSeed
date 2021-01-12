#!/bin/bash

seedFolder=`pwd`

echo ""
#echo "Current version of Angular CLI (to create the new app):"
#ng --version
echo ""
echo "Type the name (camelCase) of the new app:"
read newAppName

rootFolder="/home/barba/DEV"
echo ""
echo "Folder of the app? ($rootFolder) (A new folder for the app will be created inside)"
read rootFolder
if [ "$rootFolder" = "" ]; then
    rootFolder="/home/barba/DEV"
fi
cd $rootFolder
ng new $newAppName --prefix=jb --routing=true --style=scss --verbose=true
cd $newAppName

echo ""
echo "Copy seed template"
rm -rf ./src
cp -rf $seedFolder/seed/src ./

echo ""
echo "Copy scripts"
cp -rf $seedFolder/seed/new_page.sh ./

echo ""
echo 'Adding to angular.json (projects.app.architect.build.options) --> "stylePreprocessorOptions": { "includePaths": ["src/scss/config"] },'
sed -i '25i          "stylePreprocessorOptions": { "includePaths": ["src/scss/config"] },' angular.json

echo ""
echo "Install npm dependencies"
npm i jb-icomoon
npm i jb-ui-lib
npm i bootstrap@4
npm i @ng-bootstrap/ng-bootstrap
npm i @ngxs/store
npm i @ngx-translate/core
npm i ng5-slider
npm i popper.js
npm i jquery

npm i subsink
npm i @ngxs-labs/select-snapshot
npm i @ngxs/devtools-plugin

git add -A
git commit -m 'App init from ngAppSeed'

echo ""
echo "App ready at ----> $rootFolder / $newAppName"
echo ""

mate-terminal --working-directory=$rootFolder/$newAppName





