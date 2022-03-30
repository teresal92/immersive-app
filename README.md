# Immersive
Maximize focus and productivity with Immersive, a web-based pomodoro app with Spotify integration.

## Table of Contents
- [About the Project](#about-the-project)
- [Getting Started](#getting-started)
  - [1. Installing Dependencies](#1-installing-dependencies)
  - [2. Setting Up Spotify Credentials](#2-setting-up-spotify-credentials)
  - [3. Running the Project](#3-running-the-project)
- [Roadmap](#roadmap)
- [Contact](#contact)
- [How to Contribute](#how-to-contribute)

## About the Project
> Maximize focus and productivity with Immersive, a web-based pomodoro app with music integration.
  > Utilizing pomodoro principles for time management, Immersive's focus rooms help you breakdown your work into intervals of 25 minute sessions and 5 minute breaks.
  > It's easy to get started. To start a focus session:
  > * Login or sign up for a Spotify account.
  > * Enter a featured curated room based on your mood or create a new room.
  > * Each room has its own curated background image, pomodoro-based timer and music player as well as search functionality to find and play new playlists.

## Getting Started

### 1. Installing Dependencies
#### Built With
![image](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![image](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![image](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![image](https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)

Install dependencies and load PostgreSQL database schema.

```
npm install
npm build-db

```

### 2. Setting Up Spotify Credentials

* Make an account on [Spotify Developers](https://developer.spotify.com/documentation/general/guides/authorization/app-settings/).
* Rename configExample.js to config.js to prevent client information from being commited. Fill in the empty strings with CLIENT_ID and CLIENT_SECRET credentials from your Spotify Dashboard page (after initial step).

```
 module.exports = {
  CLIENT_ID: '',
  CLIENT_SECRET: '',
}

```

### 3. Running the Project

Run below scripts to compile using webpack and run development server.

```
npm run react-dev
npm start

```

## Roadmap
* Add Room feature for users to create new room, upload cover and background photo and set default playlist
* Customizable pomodoro timer

## Contact
[Teresa Lew](https://github.com/teresal92)
Digital Paintings for Deep Focus, Chill, Melancholy and Wanderlust by [Tristen Urban](https://github.com/TristenUrban)

## How to Contribute
