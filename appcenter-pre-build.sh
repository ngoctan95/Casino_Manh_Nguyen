#!/usr/bin/env bash

# change folder to install pod
cd ios
rm -rf Pods
pod install --repo-update
echo "Done install Podfile"
exit 0
