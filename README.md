# Yummy Meals

Yummy Meals is a modern food-sharing web application built with Next.js. It allows users to discover recipes, explore meal ideas, and share their own favorite dishes with a community of food lovers. The app combines a polished user experience with practical functionality such as dynamic meal pages, recipe submission, and SQLite-backed data storage.

## Project Overview

Yummy Meals is designed to create a digital food community where visitors can browse delicious meals, learn about recipes, and contribute their own culinary creations. The platform includes a welcoming homepage, a meal gallery, a dedicated community section, and a form for submitting new recipe entries. This project demonstrates how modern web apps can integrate frontend design, server-side logic, and persistent storage into a cohesive experience.

The app is built using Next.js and React, with SQLite used to manage meal data. It also includes image uploads, validation, loading states, and error handling to create a more complete and realistic product experience.

## Features

- Responsive homepage with hero content and slideshow
- Meal listing page with recipe cards
- Dynamic meal detail pages
- Community section focused on food sharing
- Meal submission form with validation
- Image upload support for recipe entries
- SQLite database integration
- Loading and error states
- Modern UI using CSS Modules and Tailwind CSS

## Tech Stack

- Next.js
- React
- JavaScript
- Tailwind CSS
- CSS Modules
- SQLite
- better-sqlite3
- slugify
- xss

## Project Structure

- app/ — pages and UI layout
- components/ — reusable interface components
- lib/ — data access and server actions
- public/ — static assets and uploaded images
- initdb.js — initializes the SQLite database with sample meal records

## Prerequisites

Before running the project, make sure you have:

- Node.js 18 or newer
- npm

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/yummy-meals.git
   cd yummy-meals
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Initialize the SQLite database:

   ```bash
   node initdb.js
   ```

## Run the Application

Start the development server:

```bash
npm run dev
```

Then open the app in your browser at:

```bash
http://localhost:3000
```

## Usage

- Visit the homepage to explore the app and navigate to different sections.
- Browse the meals page to see all available dishes and recipes.
- Open a meal detail page to view ingredients, instructions, and creator details.
- Submit a new meal using the form in the meals section.
- Uploaded images are saved and stored in the public images folder.

## Available Scripts

```bash
npm run dev
```
Runs the application in development mode.

```bash
npm run build
```
Builds the app for production.

```bash
npm run start
```
Starts the production build locally.

```bash
npm run lint
```
Checks for linting issues.

## Future Improvements

- User authentication and profiles
- Favorite meals and bookmarking
- Search and filtering
- Meal categories and tags
- Ratings and reviews
- Admin dashboard for managing content

## Author

Salma Assem

## License

This project is intended for educational and personal use. Add a license if you plan to publish it publicly.

