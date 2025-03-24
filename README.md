# .MOV Team-Projekt


Das ".MOV Projekt" bietet eine interaktive Filmplattform, die es ermöglicht, Filme anzuzeigen, nach ihnen zu suchen und detaillierte Informationen zu jedem Film abzurufen. Die Anwendung nutzt eine öffentliche [API](https://developer.themoviedb.org/reference/intro/getting-started), um Filme anzuzeigen, und umfasst Funktionen wie einen Slider für aktuelle Trendfilme, eine Suchleiste und eine detaillierte Ansicht jedes Films. Die Benutzer können auch zwischen verschiedenen Genres navigieren und eine Liste von Filmen anzeigen lassen, die nach Genre kategorisiert sind.

Die Anwendung wurde mit React entwickelt und verwendet eine benutzerfreundliche Navigation. Sie enthält ein responsives Design, das sich an verschiedene Bildschirmgrößen anpasst, und eine klar strukturierte Benutzeroberfläche.

## Table of Contents 

- [Über das Projekt](#über-das-projekt)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Voraussetzungen](#voraussetzungen)
  - [Installation](#installation)
- [Design](#design)
- [Deployment](#deployment)

## Über das Projekt


### Funktionen

Intro-Seite:
- Zeigt eine Übersicht über den Aufbau der Webseite und führt den Nutzer in die Hauptfunktionen ein

Homepage:
- Trending Movies Slider: Ein Slider auf der Homepage zeigt die derzeit beliebtesten Filme
- Klickt der Nutzer auf einen Film, wird er zur Detailansicht weitergeleitet

Suchleiste auf Homepage und Listenansicht: 
- Ermöglicht es dem Nutzer, direkt nach Filmtiteln zu suchen

Filmliste nach Genre: 
- Zeigt passend zum Genre 20 Filme pro Seite mit grundlegenden Details (z.B. Titel, Erscheinungsjahr und Bewertung)
- Nutzer können zur nächsten Seite mit 20 weiteren Filmen navigieren

Filmdetailansicht:
- Zeigt detaillierte Informationen zu einem Film, einschließlich einer Beschreibung, die je nach Länge des Textes ein- oder ausgeklappt werden kann
- Watch Trailer Button führt den Nutzer direkt zum Trailer des Films

Navigation:
- Eine immer sichtbare Navigationsleiste am unteren Bildschirmrand mit einem Home-Button, der den Nutzer jederzeit zur Homepage führt.
- Back - Button auf der Detailansicht, sowie beim Trailer

### Teamarbeit
Dieses Projekt wurde als Teamarbeit durchgeführt. Wir haben regelmäßig über Discord kommuniziert, um Aufgaben zu verteilen, Fortschritte zu besprechen und den Entwicklungsfortschritt zu koordinieren. Zusätzlich haben wir FigJam genutzt, um unsere Aufgaben zu visualisieren und sie zu verteilen. Mit Git als Version Control Tool haben wir sichergestellt, dass alle Änderungen gemerged, gepusht und gepullt werden, um einen reibungslosen Ablauf zu gewährleisten.

## Tech Stack

**Markup:**  
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)  

**Styling:**<br/>
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) 
![DaisyUI](https://img.shields.io/badge/daisyUI-%233B82F6.svg?style=for-the-badge&logo=daisyui&logoColor=white)

**JS Library:**<br/>
![React](https://img.shields.io/badge/React-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=white)

**Routing**<br/>
![React Router DOM](https://img.shields.io/badge/React_Router_DOM-%23CA4245.svg?style=for-the-badge&logo=react-router&logoColor=white)

**IDE:**  
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)  

**Programming Language:**<br/>
![Typescript](https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square)

**Version Control:**  
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)  


## Getting Started

Hier ist eine Anleitung, wie du das ".MOV"-Projekt auf deinem lokalen Rechner einrichtest und ausführst:

### Voraussetzungen

Folgende Programme solltest du installiert haben:

- [Git](https://git-scm.com/)
- [VS Code](https://code.visualstudio.com/download)
- [Vite](https://v5.vite.dev/guide/)
- [Tailwind CSS](https://tailwindcss.com/docs/installation/using-vite)
- [React-Router-Dom](https://reactrouter.com/start/library/installation)
- [Axios](https://axios-http.com/docs/intro)
- [DaisyUI](https://daisyui.com/docs/install/)

### Installation

1. **Clone das "Repository":**
   ```bash
   git clone https://github.com/YvonneJL/.MOV-React-Project
   ```

### Ausführen des Projekts

2. **Öffne das Projekt und installiere Vite,Tailwind Css, React-Router-Dom und Axios, indem du den Instruktionen auf den oben verlinkten Webseiten folgst :**
 
**Alles ist eingerichtet! Nun kannst du das ".MOV"-Projekt erkunden und dir bequem die Trailer der aktuell angesagtesten Filme anschauen.

## Design

Das Design des Projekts basiert auf einer Figma-Vorlage, die als Grundlage für das Layout und die Farbpalette dient, um eine konsistente und ansprechende Benutzeroberfläche zu gewährleisten. Das Design wurde mit dem „Mobile-First“-Ansatz entwickelt und mit TailwindCSS umgesetzt, um sicherzustellen, dass die Anwendung auf mobilen Geräten optimal funktioniert. Gleichzeitig wurde das Projekt vollständig responsiv gestaltet, sodass es sich an verschiedene Bildschirmgrößen anpasst und auf allen Geräten eine benutzerfreundliche Oberfläche bietet.

## Deployment

Hier gelangst du direkt zur Webseite
- [.MOV Team Projekt](https://mov-react-project.vercel.app/)




