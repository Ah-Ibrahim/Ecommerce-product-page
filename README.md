# 🍰 Desserts Shop

_A responsive dessert ordering website with a smooth shopping experience and performance optimizations._

![Project Screenshot](./design/desktop-preview.jpg)

[Live Preview](https://ah-ibrahim.github.io/Desserts-list-with-cart)

---

## 📋 Table of Contents

- [About](#-about)
- [Tech Stack](#%EF%B8%8F-tech-stack)
- [Features](#-features)
- [Getting Started](#%EF%B8%8F-getting-started)
- [Project Structure](#project-structure)
- [Usage](#-usage)
- [License](#-license)
- [Credits](#-credits)
- [Authors](#%EF%B8%8F-authors)

---

## 👋 About

This website lets users browse a variety of desserts, add them to their cart, and place an order. It focuses on clean design, responsiveness, and great UX with modern frontend techniques.

---

## 🛠️ Tech Stack

Here’s what’s under the hood:

- **React (Vite)**
- **LocalStorage** (for persisting cart & orders)
- **Lazy Image Loader** (for lazy loading images)
- **Framer Motion** – animations and shared layout transitions

---

## ✨ Features

Some cool stuff this project can do:

- 🖼️ **Custom Lightbox Modal**  
  Fully animated lightbox with shared layout transitions and responsive design.

- 🛒 **Add to Cart with Persistent State**  
  Products and quantity are stored in `localStorage` so users won’t lose cart items on refresh.

- 🎯 **Framer Motion Animations**
    - Animated cart dropdown
    - Hover underline on nav links
    - Layout transitions between gallery and lightbox
    - Smooth page element entrance

- 📱 **Mobile-First Responsive Design**  
  Scrollable thumbnail gallery, adaptive layout, and burger-style menu ready to integrate.

---

## ⚙️ Getting Started

Wanna run this locally? Follow these steps:

1. Clone the repo

`git clone https://github.com/Ah-Ibrahim/Ecommerce-product-page.git`\
`cd your-repo`

2. Install dependencies

`npm install`

3. Start the app

`npm run dev`

---

## Project Structure

```
your-project/
│
├── public/ # Static files like icons, fonts
├── src/
│ ├── assets/ # Images, fonts, etc.
│ ├── components/# UI components
│ ├── App.jsx # Main app component
├── hooks/
│   └── useMediaQuery.js
│ └── main.jsx # App entry point
├── utils/
│   └── FontPreloader.js
├── package.json
└── README.md
```

---

## 📝 Usage

1. Opening the lightbox

2. Switching product thumbnails

3. Adding to cart and storing in localStorage

4. Reading the cart

5. Keyboard controls for gallery

---

## 📄 License

This project is licensed under the MIT License.
Feel free to do what you want with it.

---

## 🙏 Credits

Big thanks to:

- Design, images and icons from [Frontendmentor](https://www.frontendmentor.io)

---

## ✍️ Authors

Ahmed Ibrahim
