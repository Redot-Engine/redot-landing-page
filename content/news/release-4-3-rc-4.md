---
title: "Release Notes for Redot 4.3 Release Candidate 4"
date: 2024-11-18T10:00:00Z
index: 1
description: We're excited to announce the release of our latest version, featuring a host of enhancements and fixes
image: /img/news/release-4-3-rc4.avif
alt: Screenshot of new feature
ogImage: /img/news/release-4-3-rc4.avif
tags: ["Releases"]
type: "post"
author: "Redot"
authorImage: /img/authors/redot.avif
published: true
---

The Redot team is pleased to announce the release of **Redot 4.3 Release Candidate 4**. This update introduces a variety of enhancements and bug fixes aimed at improving the functionality and user experience of the Redot engine.

### Enhancements & Features
* Optimize `String::replace` methods by [@Spartan322](https://github.com/Spartan322) in [#866](https://github.com/Redot-Engine/redot-engine/pull/866)
* Merge commit [godotengine/godot@`711c725`](https://github.com/godotengine/godot/commit/711c725) ([#863](https://github.com/Redot-Engine/redot-engine/pull/863)):
   * Revert workaround for ResourceLoader resource loading crashes due to buggy TLS ([`1c4849b`](https://github.com/Redot-Engine/redot-engine/commit/1c4849b162151df3f36b0e24d6f9cf70ccbce8ea))
   * Fix use condition_variable after free ([`257dd2f`](https://github.com/Redot-Engine/redot-engine/commit/257dd2f9e51b4f770f230d0766f74880a7c8d383))
   * Properly push & pop TLS state on recursive load tasks for ResourceLoader ([`ece3925`](https://github.com/Redot-Engine/redot-engine/commit/ece392538ec4ec2742546babb4f13d77c28390b8))
   * Enhance ResourceLoader deadlock prevention ([`ea28ac5`](https://github.com/Redot-Engine/redot-engine/commit/ea28ac510de3cef098a7624986072ff44546e87f))
   * Optimize ResourceLoader remap check by deferring until a non-mutex zone ([`8a78f5c`](https://github.com/Redot-Engine/redot-engine/commit/8a78f5c323d5d6e6471c2a0182732744e47ea637))
   * Fix ResourceLoader edge cases in the management of user tokens ([`b3e46a9`](https://github.com/Redot-Engine/redot-engine/commit/b3e46a913d10b029b8ebeb58017e1ce260c42988))
   * Overhaul unlock allowance zones for WorkerThreadPool (and friends) ([`c75c50e`](https://github.com/Redot-Engine/redot-engine/commit/c75c50ecac2967217966762d492c4d9d268e51a3))
   * Use better error handling for possible engine bugs with ResourceLoader ([`fe2e862`](https://github.com/Redot-Engine/redot-engine/commit/fe2e862e2eba20f4f2158c40d0ef9c2fdb508b14))
   * Change warning muting so it affects all levels, but locally ([`1fd87e8`](https://github.com/Redot-Engine/redot-engine/commit/1fd87e8747cf1f76485d9e36a53ec70f6040168f))
   * Handle another case of user tokens for ResourceLoader ([`98e7711`](https://github.com/Redot-Engine/redot-engine/commit/98e77113a2e8aedaf9ab1c85aa98f07ae7ffc29e))
   * Fix ResourceLoader is not verbosely printing a resource path on loading ([`f2d0f66`](https://github.com/Redot-Engine/redot-engine/commit/f2d0f66eca23fcf4b79a71669d90d351575eed7a))
   * Simplify ResourceLoader handling of unregistered tasks ([`cd32705`](https://github.com/Redot-Engine/redot-engine/commit/cd327055089eb867fa9064b26c228be1f97cf9d8))
   * Add thread-aware ResourceLoader resource changed mechanism ([`f806cfb`](https://github.com/Redot-Engine/redot-engine/commit/f806cfb72b0739e127397dee42d98677ac56510c))
   * Add last resort life-time insurance in ResourceLoader for tokens ([`ea651a1`](https://github.com/Redot-Engine/redot-engine/commit/ea651a150b27302626ac9174e2209a1029576e21))
   * Fixup ResourceLoader resource changed feature ([`251237d`](https://github.com/Redot-Engine/redot-engine/commit/251237d2b4021b9cdd25c644cf13061b98b0d0ab))
   * Let EditorResourcePreview loads complete after exit requested ([`9ed06bc`](https://github.com/Redot-Engine/redot-engine/commit/9ed06bce54002e83244fdf8cabf0a12931a2b17b))
   * Report error for ResourceLoader if resource type unrecognized ([`a0c1744`](https://github.com/Redot-Engine/redot-engine/commit/a0c17446add3a35f4b402e7c855301e5bf36cf47))
   * Fix deadlocks related to ClassDB queries about global classes ([`a5f6e49`](https://github.com/Redot-Engine/redot-engine/commit/a5f6e498627e79c0bff36526440300de7aebc84b))
   * Fix animation snapping in seconds mode ([`178a126`](https://github.com/Redot-Engine/redot-engine/commit/178a126b928a1563b2fd730cbe951fc4d98cf45a))
   * Avoid Windows child processes inheriting all file handles ([`ce608dc`](https://github.com/Redot-Engine/redot-engine/commit/ce608dcbf7a8e49a9f6b7f1c6d6d3be9f587275a))

### Bug Fixes
* Rebrand Godette to Redot-chan by [@trashguy](https://github.com/trashguy) in [#858](https://github.com/Redot-Engine/redot-engine/pull/858)
* Fix android logger Godot references to Redot by [@Spartan322](https://github.com/Spartan322) in [#860](https://github.com/Redot-Engine/redot-engine/pull/860)
* Rebrand godette into redot-chan on platformer 2 comment for consistency by [@LegendaryGuard](https://github.com/LegendaryGuard) in [#862](https://github.com/Redot-Engine/redot-engine/pull/862)
* Correct `Node._unhandled_picking_input` to refer to InputEvent by [@Spartan322](https://github.com/Spartan322) in [#865](https://github.com/Redot-Engine/redot-engine/pull/865)
* Fix 32-bit Windows build by [@Spartan322](https://github.com/Spartan322) in [#868](https://github.com/Redot-Engine/redot-engine/pull/868)

### Github Release
For more details, you can check the full release on GitHub: [Redot 4.3 Release Candidate 4](https://github.com/Redot-Engine/redot-engine/releases/tag/redot-4.3-rc.4).

We appreciate your feedback as we continue to improve Redot, and we look forward to your contributions!