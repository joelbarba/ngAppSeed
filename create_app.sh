#!/bin/bash

seedFolder=`pwd`

echo ""
echo ""
echo "Current version of Angular CLI (to create the new app):"
ng --version
echo ""
echo "Type the name (camelCase) of the new app (will be placed at ~/BLUEFACE/ALEXIA/)"
read newAppName
cd ~/BLUEFACE/ALEXIA/
ng new $newAppName --prefix=prefix --routing=true --style=scss --verbose=true
cd $newAppName

echo ""
echo "----------------------------------------------------------"
echo "  - Create Basic app folder structure:"
echo "    ├ SCSS"
echo "    │  ├ color-layer.scss"
echo "    │  ├ globals.scss"
echo "    │  ├ helpers.scss"
echo "    │  ├ layout.scss"
echo "    │  ├ popover.scss"
echo "    │  └ variables.scss"
echo "    │"
echo "    └ APP"
echo "       ├ GLOBALS"
echo "       │  ├ globals.module.ts"
echo "       │  ├ bfPromise.ts"
echo "       │  ├ listHandler.ts"
echo "       │  ├ prototypes.ts"
echo "       │  ├ asyncField.pipe.ts"
echo "       │  ├ translate.service.ts"
echo "       │  ├ globals.service.ts"
echo "       │  └ profile.service.ts"
echo "       │"
echo "       ├ SHELL"
echo "       │  ├ shell.module.ts"
echo "       │  ├ MENU   (C)"
echo "       │  ├ NAVBAR (C)"
echo "       │  └ FOOTER (C)"
echo "       └ PAGES"
echo "          ├ LOGIN (M + C)"
echo "          └ HOME  (M + C)"
echo ""

cp $seedFolder/seed/new_page.sh  ./
cp $seedFolder/seed/src/styles.scss  src/styles.scss
cp -r $seedFolder/seed/src/scss src
cp -r $seedFolder/seed/src/app/ src

echo ""
echo "Install the following dependencies:"
echo "  1. Bootstrap 4   (https://getbootstrap.com/docs/4.3)"
echo "  2. IcoMoon       (https://www.npmjs.com/package/bf-icomoon)"
echo "  3. Ng Bootstrap  (https://github.com/ng-bootstrap/ng-bootstrap)"
echo "  4. bf-ui-lib"
echo ""
echo "------------------------------------------------"
npm install bootstrap@4  --save
npm install bf-icomoon --save
npm install --save @ng-bootstrap/ng-bootstrap
npm install bf-ui-lib

echo "" > .gitmessage.txt
git add -A
git commit -m 'Application file structure + basic dependencies (through ngSeed)'

echo ""
echo "App ready at ----> ~/BLUEFACE/ALEXIA/$newAppName"
echo "App successfully created."
echo ""
echo "Running the server..."
echo ""
ng serve --open



