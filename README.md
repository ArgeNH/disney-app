<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/argenh/disney-app">
    <img src="public/disney.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Disney App Test</h3>

  <p align="center">
    An awesome Disney App Test!
    <br />
    <br />
    <a href="https://disney-app-kappa.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/argenh/disney-app/issues">Report Bug</a>
    ·
    <a href="https://github.com/argenh/disney-app/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://disney-app-kappa.vercel.app/)

<!-- There are many great Disney Apps available on GitHub, however, I didn't find one that really suit my needs so I created this enhanced one. I want to create a Disney App that is easy to use and has a lot of features. -->

You can see the demo [here](https://disney-app-kappa.vercel.app/)

You can register on the site to use it and see each of its features [here](https://disney-app-kappa.vercel.app/register)

You can log in on the site to use it and see each of its features [here](https://disney-app-kappa.vercel.app/login)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![React][React.js]][React-url]
- [![TailwindCSS][TailwindCSS]][TailwindCSS-url]
- [![Firebase][Firebase]][Firebase-url]
- [![Typescript][Typescript]][Typescript-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- node version, I use 20.9.0

  ```sh
  node -v
  ```

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a free API MOVIE Key at [https://www.themoviedb.org/](https://www.themoviedb.org/)
2. Config your firebase project and get your firebase config [https://firebase.google.com/](https://firebase.google.com/)
3. Clone the repo
   ```sh
   git clone https://github.com/argenh/disney-app.git
   ```
4. Install NPM packages, but I use Bun, feel free to use npm or yarn
   ```sh
   bun install
   ```
5. Create a .env file in the root of the project and add your API in the following way

   ```bash

    # FIREBASE ENVIROMENT VARIABLES

    VITE_FIREBASE_API_KEY=
    VITE_FIREBASE_AUTH_DOMAIN=
    VITE_FIREBASE_PROJECT_ID=
    VITE_FIREBASE_STORAGE_BUCKET=
    VITE_FIREBASE_MESSAGING_SENDER_ID=
    VITE_FIREBASE_APP_ID=

    # THE MOVIE DB API ENVIROMENT VARIABLES

    VITE_MOVIE_API_KEY=
    VITE_IMAGES_URL=https://image.tmdb.org/t/p/w342
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Arge Niño - [@arge_nino](https://twitter.com/arge_nino) - darley1054@gmail.com

Project Link: [https://github.com/ArgeNH/disney-app](https://github.com/ArgeNH/disney-app)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/argenh/disney-app.svg?style=for-the-badge
[contributors-url]: https://github.com/ArgeNH/disney-app/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/argenh/disney-app.svg?style=for-the-badge
[forks-url]: https://github.com/argenh/disney-app/network/members
[stars-shield]: https://img.shields.io/github/stars/argenh/disney-app.svg?style=for-the-badge
[stars-url]: https://github.com/argenh/disney-app/stargazers
[issues-shield]: https://img.shields.io/github/issues/argenh/disney-app.svg?style=for-the-badge
[issues-url]: https://github.com/argenh/disney-app/issues
[license-shield]: https://img.shields.io/github/license/argenh/disney-app.svg?style=for-the-badge
[license-url]: https://github.com/argenh/disney-app/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/argenino/
[product-screenshot]: public/screenshot.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[TailwindCSS]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[TailwindCSS-url]: https://tailwindcss.com/
[Firebase]: https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white
[Firebase-url]: https://firebase.google.com/
[Typescript]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[Typescript-url]: https://www.typescriptlang.org/
