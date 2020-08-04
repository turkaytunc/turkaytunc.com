#!/bin/bash

npm run build
git add .
git commit -m "update"
git push -u origin master