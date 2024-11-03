---
title: "Release Notes for Redot 4.3 Beta 3"
date: 2024-11-3T10:00:00Z
index: 1
description: We're excited to announce the release of our latest version, featuring a host of enhancements and fixes.
image: /img/news/release-4.3-beta-3.avif
alt: Screenshot of new feature
ogImage: /img/news/release-4.3-beta-3.avif
tags: ["Releases"]
type: "post"
author: "Redot"
authorImage: /img/authors/redot.avif
published: true
---

The Redot team is pleased to announce the release of **Redot 4.3 Beta 3**. This update introduces a variety of enhancements and bug fixes aimed at improving the functionality and user experience of the Redot engine.

### Enhancements & Features
- **C# Enhancements:**
    - **Transform2D.Determinant()**: This method is now exposed for use, providing a straightforward way to calculate the determinant of 2D transforms. ([#95269](https://github.com/godotengine/godot/pull/95269))
    - **NotNullWhenAttribute**: Added to `IsInstanceValid`, enhancing null safety in method calls. ([#95431](https://github.com/godotengine/godot/pull/95431))
- **ufbx Library Update**: Updated to version 0.14.3, ensuring compatibility with the latest features and fixes. ([#95831](https://github.com/godotengine/godot/pull/95831))
- **Node Processing Order**: Clarified that normal processing occurs in tree order in `Node.xml`. ([#97905](https://github.com/godotengine/godot/pull/97905))
- **FileDialog Improvements**: Updated the description of `use_native_dialog` for better understanding of its functionality. ([#98202](https://github.com/godotengine/godot/pull/98202))
- **HTTPRequest Result Descriptions**: Added missing descriptions for `HTTPRequest` results to improve clarity. ([#98332](https://github.com/godotengine/godot/pull/98332))
- **Debugger Documentation Clarification**: Enhanced documentation for `EngineDebugger` and `EditorDebugger` to provide clearer guidance. ([#98378](https://github.com/godotengine/godot/pull/98378))
- **Screen-Reading Shaders Tutorial Link**: Added a link to the tutorial in the BackBufferCopy documentation to assist users in implementing screen-reading shaders. ([#98421](https://github.com/godotengine/godot/pull/98421))
- **GlobalScope String Methods Documentation**: Linked string methods in the `GlobalScope` documentation to the `String` class reference for easier navigation. ([#98473](https://github.com/godotengine/godot/pull/98473))
- **Project Settings Tutorial Link**: Added a link to the Project Settings tutorial from the `ProjectSettings` class documentation for better user support. ([#98480](https://github.com/godotengine/godot/pull/98480))

### Bug Fixes
- Fixed remaining references to `godotengine` by @Spartan322 in #830.
- Resolved an issue where templates were treating official releases as development releases by @Spartan322 in #832.
- Improved import speed when the window is unfocused. ([#93953](https://github.com/godotengine/godot/pull/93953))
- **Android Editor Update**: Added support for launching the Play window in Picture-in-Picture (PiP) mode. ([#95700](https://github.com/godotengine/godot/pull/95700))
- Fixed `Viewport` texture settings to ensure correct usage. ([#97029](https://github.com/godotengine/godot/pull/97029), fixing #827)
- Resolved issues with the C# operator `*(Transform3D, Aabb)`. ([#97208](https://github.com/godotengine/godot/pull/97208))
- Corrected the visualization of untyped dictionaries in .NET debugging. ([#97951](https://github.com/godotengine/godot/pull/97951))
- Fixed an unhandled GD0303 error for nested generic attribute types in .NET. ([#98059](https://github.com/godotengine/godot/pull/98059))
- Adjusted Android app permissions for SDK levels earlier than 28. ([#98230](https://github.com/godotengine/godot/pull/98230))
- Fixed incorrect documentation for `Transform2D`. ([#98442](https://github.com/godotengine/godot/pull/98442))
- Resolved a heap-use-after-free issue when ctrl-clicking controls in a container. ([#98597](https://github.com/godotengine/godot/pull/98597))

### GitHub Release
For more details, you can check the full release on GitHub: [Redot 4.3 Beta 3 Release](https://github.com/Redot-Engine/redot-engine/releases/tag/redot-4.3-beta.3).

We appreciate your feedback as we continue to improve Redot, and we look forward to your contributions!
