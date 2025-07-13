# Indikaara - Luxury Rugs Website

[**Live Demo**](https://your-username.github.io/indikaara-website/) &nbsp;&nbsp;•&nbsp;&nbsp; [**Alternative Layout**](./indikara.html)

This project is a modern, visually-driven, single-page website for **Indikaara**, a luxury brand specializing in handcrafted rugs. The design is heavily inspired by minimalist, and immersive product pages, focusing on high-quality visuals and smooth animations to tell a story.

There are two versions of the homepage included:
1.  `index.html`: The primary, "Apple-style" immersive landing page.
2.  `indikara.html`: An alternative, more traditional e-commerce style layout.

## Preview

*(A screenshot of the `index.html` page would be perfect here)*

> **Note**: You can replace the link above with a real screenshot of your project.

## Design Philosophy

The project includes two distinct design approaches to showcase versatility:

*   **`index.html` (Apple-Style)**: This is the flagship design. It uses a dark theme, full-screen sections, and cinematic scroll-based animations to create an immersive, high-end brand experience. The focus is on storytelling and visual impact, ideal for a luxury product launch.
*   **`indikara.html` (Traditional E-commerce)**: This layout is more conventional, with a brighter theme and a clear, grid-based structure. It's designed for straightforward product discovery and a familiar shopping experience, featuring clear categories, featured products, and a more prominent navigation.

## Key Features

-   **Modern & Immersive Design**: A clean, dark-themed layout that emphasizes high-quality imagery and typography.
-   **Responsive Layout**: The site is fully responsive and looks great on desktops, tablets, and mobile devices.
-   **On-Scroll Animations**: Elements gracefully fade and slide into view as the user scrolls down the page, powered by the Intersection Observer API.
-   **Sticky Scrolling Section**: An engaging "sticky scroll" effect in the Craftsmanship section where an image remains fixed while textual content scrolls alongside it.
-   **Dynamic Header**: The header is transparent initially and transitions to a blurred, semi-transparent background as the user scrolls.
-   **Hero Video & Image Sections**: Uses a combination of background video and full-screen images to create a cinematic experience.
-   **Built with Tailwind CSS**: Utilizes the utility-first Tailwind CSS framework for rapid and consistent styling.

## Technologies Used

-   **HTML5**: For the structure and content of the website.
-   **CSS3**: For custom styling, animations, and transitions.
-   **Tailwind CSS**: A utility-first CSS framework for building the user interface.
-   **JavaScript (Vanilla)**: For DOM manipulation, scroll effects, and animations.
-   **Google Fonts**: For the 'Inter' (Apple-style) and 'Playfair Display'/'Lato' (Traditional) font families.

## File Structure

```
indikara/
├── assets/
│   ├── hero-background.jpg
│   ├── Persian_collection.JPG
│   ├── new-arrivals.jpg
│   ├── craftsmanship-hands.jpg
│   └── Video_Generated_Ready_Now_.mp4
│
├── index.html          # Main "Apple-style" landing page (same as apple style .html)
├── apple style .html   # Main "Apple-style" landing page
├── indikara.html       # Alternative e-commerce style page
└── README.md           # This file
```

## Setup and Installation

This project uses CDN links for its dependencies, so no complex build steps are required.

1.  **Clone the repository (or download the files):**
    ```bash
    git clone https://github.com/your-username/indikara-website.git
    ```

2.  **Create the `assets` folder:**
    Make sure you have an `assets/` folder in the root directory and that it contains the images and videos referenced in `index.html`:
    -   `hero-background.jpg`
    -   `Video_Generated_Ready_Now_.mp4`
    -   `Persian_collection.JPG`
    -   `new-arrivals.jpg`
    -   `craftsmanship-hands.jpg`

3.  **Open in your browser:**
    Simply open the `index.html` file in a modern web browser like Chrome, Firefox, or Edge.

    ```bash
    # On Windows
    start index.html

    # On macOS
    open index.html
    ```

## Customization

-   **Content**: All text can be edited directly in the `index.html` file.
-   **Images/Video**: Replace the files in the `assets/` directory with your own media. Ensure the filenames match those in the HTML.
-   **Styling**: Colors, fonts, and other styles can be modified in the `<style>` block at the top of `index.html` or by changing the Tailwind CSS utility classes on the HTML elements.