# .MOV Team-Projekt 🎥

<div style="display: flex; justify-content: space-between; align-items: center; width: 100%">
    <img style="width: 30%; height: auto; object-fit: contain" src="./public/images/Home.png">
    <img style="width: 30%; height: auto; object-fit: contain"  src="./public/images/List.png">
    <img style="width: 30%; height: auto; object-fit: contain"  src="./public/images/Detail.png">
</div>

The .MOV project provides an interactive film platform that allows you to view films, search for them and retrieve detailed information about each film. The application uses a public [API](https://developer.themoviedb.org/reference/intro/getting-started) to display films and includes features such as a slider for current trending films, a search bar and a detailed view of each film. Users can also navigate between different genres and view a list of films categorised by genre.

The application was developed as a team effort using React and utilises a user-friendly navigation. It includes a responsive design that adapts to different screen sizes and a clearly structured user interface.

## Table of Contents 

- [About the Project](#über-das-projekt)
  - [Features](#features)
  - [Teamwork](#teamwork)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Design](#design)
- [Deployment](#deployment)

## About the Projects

### Features

Intro page:
- Shows an overview of the structure of the website and introduces the user to the main functions

Homepage:
- Trending Movies Slider: A slider on the homepage shows the currently most popular films
- If the user clicks on a film, they are redirected to the detailed view

Search bar on homepage and list view: 
- Allows the user to search directly for film titles

Film list by genre: 
- Shows 20 films per page with basic details (e.g. title, release date and rating) according to genre. title, year of release and rating)
- Users can navigate to the next page with 20 more films

Film detail view:
- Shows detailed information about a film, including a description that can be expanded or collapsed depending on the length of the text
- Watch Trailer button takes the user directly to the film's trailer

Navigation:
- An always visible navigation bar at the bottom of the screen with a home button that takes the user to the homepage at any time.
- Back button on the detailed view and on the trailer

### Teamarbeit
This project was carried out as a team effort. We communicated regularly via Discord to distribute tasks, discuss progress and coordinate development progress. In addition, we used FigJam to visualise our tasks and distribute them. Using Git as a version control tool, we made sure that all changes were merged, pushed and pulled to ensure a smooth process.

## Tech Stack

**Markup:**  
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)  

**Styling:**  
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) 
![DaisyUI](https://img.shields.io/badge/daisyUI-%233B82F6.svg?style=for-the-badge&logo=daisyui&logoColor=white)  

**JS Library:**  
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)  

**Programming Language:**  
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)  

**Routing**  
![React Router DOM](https://img.shields.io/badge/React_Router_DOM-%23CA4245.svg?style=for-the-badge&logo=react-router&logoColor=white)  

**IDE:**  
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)  

**Version Control:**  
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)  


## Getting Started

Here is a guide on how to set up and run the Pokémon API project on your local computer:

### Prerequisites

You should have the following programmes installed:

- [Git](https://git-scm.com/)
- [VS Code](https://code.visualstudio.com/download)
- [Vite](https://v5.vite.dev/guide/)

### Installation

1. **Clone das "Repository":**
   ```bash
   git clone https://github.com/bebzbzbz/Project-Pokemon-API
   ```

2. **Install dependencies & run the development server:**
   ```bash
   npm install
   npm run dev
   ```

3. **Open your local host and have fun looking for your next evening watch! 📺** 

## Design

The design of the project is based on a Figma template, which serves as the basis for the layout and colour palette to ensure a consistent and appealing user interface. The design was developed with a mobile-first approach and implemented using TailwindCSS to ensure that the application works optimally on mobile devices. At the same time, the project was designed to be fully responsive so that it adapts to different screen sizes and provides a user-friendly interface on all devices.

## Deployment

Click here to go directly to the website
- [.MOV Team Projekt](https://mov-react-project.vercel.app/)