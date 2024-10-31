---
title: "Public Release 4.3 Beta 2"
date: 2024-10-31T10:00:00Z
index: 1
description: Redot has launched its 4.3 Beta 2 update, showcasing a fresh rebranding, user interface improvements, and
  platform-specific fixes. Key features include an enhanced CanvasItemEditor and ColorPicker, streamlined build handling,
  and multiple bug fixes. With contributions from the community, Redot promises a refined experience for developers.

image: /img/news/release-4.3-beta-2.avif
alt: Screenshot of new feature
ogImage: /img/news/release-4.3-beta-2.avif
tags: ["Releases"]
type: "post"
author: "Redot"
authorImage: /img/authors/redot.avif
published: true
---
We're excited to announce the release of our latest version, featuring a host of enhancements and fixes. Here's what's new:

### Enhancements & Features:

- Rebranding: We've updated our branding across various components to reflect our new identity. This includes renaming and rebranding assets like icons and references within the software, now aligning with "Redot" instead of "Godot".
- User Interface Improvements:
  - Editor Enhancements: Overhauled the CanvasItemEditor with improved snap line drawing, unified duplicate hovering behavior, and fixed redraw issues on key echo.
  - ColorPicker Overhaul: Added overbright color picking, fixed various UI janks, unified color mode drawing, and removed unnecessary containers for a cleaner interface.
- Build and Versioning:
  - Updated the build system to correctly handle versioning, including status versioning for better release tracking.
- Platform Specific Fixes:
  - Addressed issues with Linux desktop files and macOS icon handling, ensuring consistent application appearance and functionality across platforms.
  
### Bug Fixes:
- Fixed various minor bugs including:
- Godot references in copyright headers and update URLs.
- Issues with the EditorSpinSlider and ScrollBar grabbers.
- Corrected behavior in the ColorPicker related to overbright indicators and sample resets.
- Resolved versioning issues that were ignoring status versioning.
- Miscellaneous fixes for macOS export plugins and temporary mono SDK references.

### Special Thanks:
A big thank you to our contributors for their pull requests and fixes which have significantly improved this release. Your contributions are what make this project thrive.

### Instructions for the templates:

We tried to make the process of using the templates in the editor easier this time.
Navigate to one of these locations depending on your system:

- Windows: %APPDATA%\Redot\export_templates
- macOS: ~/Library/Application Support/Redot/export_templates
- Linux: ~/.local/share/redot/export_templates

Unzip the template files directly into the export_template folder or unzip and drag that unzipped folder there.

Redot should now see all release templates when you try to add one.

We hope you enjoy this update and look forward to your feedback. Happy coding!