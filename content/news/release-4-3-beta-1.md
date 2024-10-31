---
title: "Public Release 4.3 Beta 1"
date: 2024-10-24T00:00:00Z
index: 1
description: We are excited to announce that the 4.3 beta.1 version of Redot is now available. For developers eager to migrate
  projects from Godot 4.3 stable to our platform. There should be no compatibility issues between the two. If you notice
  any issues, reach out to us and let us know.

image: /img/news/release-4.3-beta-1.avif
alt: Screenshot of new feature
ogImage: /img/news/release-4.3-beta-1.avif
tags: ["Releases"]
type: "post"
author: "Redot"
authorImage: /img/authors/redot.avif
published: true
---

We are excited to announce that the 4.3 beta.1 version of Redot is now available.

For developers eager to migrate projects from Godot 4.3 stable to our platform.

There should be no compatibility issues between the two. If you notice any issues, reach out to us and let us know.

I'm sure what most of you are curious about what is included in this release.

Bug fixes:

- TCP bug fix implemented to prevent packet loss when the message buffer becomes full.
- Pixel snapping is calculated in canvas space rather than world space to ensure predictable and precise alignment.
- The Projection::invert function for orthographic projection is now functioning correctly.

Improvements:

- A* Pathfinding has introduced an optional maximum distance parameter to mitigate the effects of an unreachable destination.
- The additional input stage after physics picking allows Redot to more effectively manage scenarios like selecting a unit on a map in an RTS game, or implementing a click-to-move game mechanic, where previously the input handling order was problematic.

Known Issues: Mac builds lack logo on the icon.

Visit http://redotengine.org/ or the [Github release page](https://github.com/Redot-Engine/redot-engine/releases/tag/redot-4.3-beta.1) for download.

We look forward to hearing from the community about this issue.