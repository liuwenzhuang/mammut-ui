#!/bin/sh

if [ "`git status -s`" ]
then
    echo "The working directory is dirty. Please commit any pending changes."
    exit 1;
fi

echo "Deleting old documents"
rm -rf documents
mkdir documents
git worktree prune
rm -rf .git/worktrees/documents/

echo "Checking out gh-pages branch into documents"
git worktree add -B gh-pages documents origin/gh-pages

echo "Removing existing files"
rm -rf documents/*

echo "Generating site"
yarn build:doc

echo "Updating gh-pages branch"
cd documents && git add --all && git commit -m "Publishing to gh-pages (publish.sh)"

echo "Pushing to github"
git push --all