#!/bin/bash
rsync -avz --delete --exclude '/img' --exclude '.*' --exclude '/controle' /mnt/c/Users/guard/Documents/Obsidian/The-Eye-of-Sauron---LAB-SOC/ docs

rsync -avz --delete \
    --exclude="docusaurus.png" \
    --exclude="eyesauron.png:Zone.Identifier" \
    --exclude="undraw_docusaurus_mountain.svg" \
    --exclude="docusaurus-social-card.jpg" \
    --exclude="favicon.ico" \
    --exclude="undraw_docusaurus_react.svg" \
    --exclude="eyesauron.png" \
    --exclude="logo.svg" \
    --exclude="undraw_docusaurus_tree.svg" \
    /mnt/c/Users/guard/Documents/Obsidian/The-Eye-of-Sauron---LAB-SOC/img/ static/img
