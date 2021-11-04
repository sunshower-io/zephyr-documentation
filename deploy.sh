#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run src:build

# navigate into the build output directory
cd docs

# if you are deploying to a custom domain
echo 'zephyr-docs.sunshower.io' > CNAME

#git init
git add -A
#git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
git push -f git@github.com:sunshower-io/zephyr-documentation.git master:master

cd -