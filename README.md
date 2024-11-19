<div style="text-align: center;">

<h1># Redot Game Engine Website</h1>

Welcome to the Redot Game Engine Website project! This repository is the front-end platform for our community-driven website, providing documentation, resources, and community features for the Redot game engine.

<br>
  <img src="./assets/images/readme/screenshot.png" width="80%">
</div>

## 🚀 Features

- 🌟 **Comprehensive Documentation**: Easily browse and search through Redot's game engine documentation.
- 🛠️ **Developer Tools**: Access tool integrations and guides to enhance your game development experience.
- 🌍 **Community Hub**: Engage with other Redot users through discord, FAQs, and community events.
- 💻 **Responsive Design**: A fully responsive site that looks great on any device.

## Running locally

### Prerequisites

Make sure [nodejs](https://nodejs.org/en/download/) is installed.

### To build and run

```
npm install
npm run dev
```

### Image compression

There are 2 ways to compress image images

- Double click on `image-compression.bat` or `image-compression.sh` to run image compression app. You can drag and drop files to convert images.
  You can also run image compression app with: `npm run image`
- Commiting will compress image and delete origin source on pre-commit with husky. But this won't be converted until you commit. And it creates extra commit.

## Publishing Articles

1. There are 2 ways to add an image and the added image will turn into a `.avif` file (used for SEO). Optimal dimensions are 1280x720.

- Double click on image-compression.bat or image-compression.sh to run image compression app. You can drag and drop files to convert images. You can also run image compression app with: `npm run image`
- Add an image inside the `public/img/news` folder. Commiting will compress image and delete origin source on pre-commit with husky. But this won't be converted until you commit. And it creates extra commit.

2. Create a new markdown file inside `content/news` folder. The file name must follow the guidelines for optimal SEO results:
   - File name must be kebab case.
   - File name must all be lowercase
3. Paste the article template (see below) inside the file
4. Write your content
5. Create a pull request and get it merged

```shell
---
title: "Article Title"
date: 2024-10-24T00:00:00Z // publish data
index: 1
description: 50 max word description
image: /img/news/your-compressed-image.avif
alt: Alt of image
ogImage: /img/news/your-compressed-image.avif
tags: ["Releases", "Community"] // Releases or Community
type: "post"
author: "Redot" // Or your username (extra steps apply)
authorImage: /img/authors/redot.avif // link to profile
published: true
---

Your content here...
```

### Adding author images

Follow steps 1 in the instructions above but place your avatar inside the `public_images/authors` folder.

### Mirrorlist Automation

Currently we are automatically generate mirrorlist from website. Because the godot engine is poorly designed and changing things related to the version cause a problem from the engine. So we have to keep the json file name with many `.` like this: `4.3.rc.2.mono.json`.

## 🛠️ Technologies Used

This project uses the following technologies:

- **Vue 3**: For building the user interface.
- **JavaScript & TypeScript**: Core scripting languages for dynamic functionality.
- **SCSS & CSS**: Styling for creating a responsive and modern design.
- **Node.js & npm**: For package management and running development tools.

### 🙌 Contributing:

We welcome contributions from everyone! To get started, please read our [Contributing information](https://github.com/redot-engine/redot-landing-page/blob/main/CONTRIBUTING.md) to learn how to contribute to the project, set up the development environment, and submit pull requests.
We expect all contributors to uphold our community standards. Please review our [Code of Conduct](https://github.com/redot-engine/redot-landing-page/blob/main/CODE_OF_CONDUCT.md) to learn more about our expectations regarding respectful collaboration and behavior.
