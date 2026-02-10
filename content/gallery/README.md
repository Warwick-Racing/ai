# Gallery + Team Photo Upload Folder

Use this structure for all images:

```text
content/gallery/
  2025/
    <competition photos>
  2026/
    <competition photos>
    ml-ai/
      <sub-team photos>
    software/
      <sub-team photos>
    hardware/
      <sub-team photos>
    operations/
      <sub-team photos>
```

Supported formats: `.png`, `.jpg`, `.jpeg`, `.webp`, `.avif`, `.gif`, `.svg`

Rules:
- Gallery page reads year sections from `content/gallery/<year>/`
- Team page sub-team carousels read from `content/gallery/<year>/<subteam>/`
- Sub-team folder names must be exactly: `ml-ai`, `software`, `hardware`, `operations`
- URL-safe filenames are recommended (lowercase letters, numbers, and `-`)
- Example: `content/gallery/2026/ml-ai/cone-detection-test-01.jpg`
