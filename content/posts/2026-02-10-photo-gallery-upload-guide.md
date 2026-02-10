---
title: "Gallery + Team Photos Upload Guide"
date: "2026-02-10"
author: "Sibo"
tags: ["guide", "gallery", "team"]
summary: "How to upload year-based gallery photos and sub-team carousel photos so both /gallery and /team update automatically."
---

## What This Guide Covers

This guide explains how to upload images for:

- `/gallery` (grouped by year)
- `/team` (sub-team carousels)

## Repository

Project repo:  
[github.com/Warwick-Racing/ai/](https://github.com/Warwick-Racing/ai/)

## Folder Structure

Upload images under:

`content/gallery/`

Use this structure:

```text
content/gallery/
  2025/
    <competition photos>
  2026/
    <competition photos>
    ml-ai/
      <ML & AI sub-team photos>
    software/
      <Software sub-team photos>
    hardware/
      <Hardware sub-team photos>
    operations/
      <Team Operations sub-team photos>
```

## Naming Rules

Recommended:

- lowercase letters
- numbers
- hyphen `-`

Examples:

- `content/gallery/2025/autocross-run-01.jpg`
- `content/gallery/2026/software/simulator-pipeline-02.jpg`

## Supported Formats

- `.png`
- `.jpg`
- `.jpeg`
- `.webp`
- `.avif`
- `.gif`
- `.svg`

## Where Images Appear

- `/gallery` reads year sections from `content/gallery/<year>/`
- `/team` sub-team carousels read from `content/gallery/<year>/<subteam>/`
- Valid `<subteam>` values are exactly:
  - `ml-ai`
  - `software`
  - `hardware`
  - `operations`

## Publish Steps

1. Open the repo on GitHub (branch: `main`)
2. Go to the target folder under `content/gallery/`
3. Click `Add file` -> `Upload files`
4. Commit changes to `main`
5. Wait for GitHub Action build/deploy
6. Verify:
   - Open `/gallery` and check year section placement
   - Open `/team` and check sub-team carousel updates

## Notes

- Gallery cards no longer show file names under images.
- If a year or sub-team folder has no images yet, the page shows a "coming soon" placeholder.
