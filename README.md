# HZ1-Aplication-electron-practice

Este proyecto es una práctica personal para aprender a crear aplicaciones de escritorio usando Electron junto con React, Tailwind CSS, TypeScript y JavaScript.

El objetivo principal es experimentar y familiarizarme con el desarrollo de apps de escritorio modernas, integrando diferentes librerías y tecnologías del ecosistema web.

## Tecnologías principales

-   Electron
-   React
-   Tailwind CSS
-   TypeScript
-   JavaScript

## Requisitos previos

-   Tener instalado [Node.js](https://nodejs.org/) (recomendado v18 o superior).
-   Tener instalado [npm](https://www.npmjs.com/) o [pnpm](https://pnpm.io/) como gestor de paquetes.

## Instalación y uso

1. Clona este repositorio:
    ```bash
    git clone https://github.com/ZuriHZ/HZ1-Aplication-electron-practice.git
    cd HZ1-Aplication-electron-practice
    ```
2. Instala las dependencias:
    ```bash
    npm install
    # o
    pnpm install
    ```
3. Inicia la aplicación en modo desarrollo:
    ```bash
    npm run dev
    ```
    Esto abrirá la app con recarga automática usando Vite y Electron.
4. Para generar una build de producción:
    ```bash
    npm run dist
    ```
    Esto compilará el frontend y empaquetará la app lista para distribución multiplataforma en la carpeta `release/`.

### Scripts principales (`package.json`)

-   `dev`: Ejecuta Vite y Electron en modo desarrollo simultáneamente.
-   `build`: Compila el frontend con Vite.
-   `start`: Inicia la app con Electron (usando la build generada).
-   `dist`: Compila y empaqueta la app lista para distribución.

---

# English

This project is a personal practice to learn how to create desktop applications using Electron together with React, Tailwind CSS, TypeScript, and JavaScript.

The main goal is to experiment and get familiar with modern desktop app development, integrating different libraries and technologies from the web ecosystem.

## Main technologies

-   Electron
-   React
-   Tailwind CSS
-   TypeScript
-   JavaScript

## Prerequisites

-   [Node.js](https://nodejs.org/) installed (recommended v18 or higher).
-   [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/) as a package manager.

## Installation and usage

1. Clone this repository:
    ```bash
    git clone https://github.com/ZuriHZ/HZ1-Aplication-electron-practice.git
    cd HZ1-Aplication-electron-practice
    ```
2. Install dependencies:
    ```bash
    npm install
    # or
    pnpm install
    ```
3. Start the app in development mode:
    ```bash
    npm run dev
    ```
    This will launch the app with hot reload using Vite and Electron.
4. To build for production:
    ```bash
    npm run dist
    ```
    This will compile the frontend and package the app for cross-platform distribution in the `release/` folder.

### Main scripts (`package.json`)

-   `dev`: Runs Vite and Electron in development mode simultaneously.
-   `build`: Builds the frontend with Vite.
-   `start`: Starts the app with Electron (using the generated build).
-   `dist`: Builds and packages the app for distribution.
