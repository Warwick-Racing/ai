---
title: "Photo Gallery Upload Quick Guide"
date: "2026-02-10"
author: "Sibo"
tags: ["guide"]
summary: "How to add new photos to the gallery by uploading files to a fixed folder in main."
---

## What This Is

This is a quick guide for adding photos to the `/gallery` page.

## Upload Path

You can find the project repository here:  
[github.com/Warwick-Racing/ai/](https://github.com/Warwick-Racing/ai/)

Put image files in:

`content/gallery/`

## File Naming

Use clean, URL-safe names (recommended):

- lowercase letters
- numbers
- hyphen `-`

Example:

`2026-02-10-track-test-01.jpg`

The filename (without extension) is used as the image description automatically.

## Supported Formats

- `.png`
- `.jpg`
- `.jpeg`
- `.webp`
- `.avif`
- `.gif`
- `.svg`

## Publish Steps

1. Open the repo on GitHub (branch: `main`)
2. Go to `content/gallery/`
3. Click `Add file` -> `Upload files`
4. Commit changes to `main`
5. Wait for GitHub Action build/deploy
6. Open `/gallery` to verify

## Notes

- The gallery is no longer fixed to 6 images.
- It renders all images found in `content/gallery/` at build time.
