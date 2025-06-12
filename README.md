# Genre Identifier

## Website Link
[Genre Identifier](https://genre-identifier.vercel.app)

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [How to Use](#how-to-use)
- [License](#license)
- [Contact](#contact)

## Introduction
Genre Identifier is a web application that allows users to log in to their Spotify account and search for musical artists. It returns visually styled cards that display the artist's name, profile image, and any associated genre(s). This tool is perfect for discovering the genre classification of your favorite artists or exploring new ones.

## Features
- **Spotify Authentication**: Log in securely using your Spotify account.
- **Artist Search**: Search for an artist using the Spotify API.
- **Genre Display**: View a cleanly designed card with the artist’s photo, name, and genre(s).

## Technologies Used
- TypeScript
- React
- React Router
- Tailwind CSS
- Vercel

## Getting Started
To run Genre Identifier locally:

1. Clone this repository and navigate to the project directory:
   
```
git clone https://github.com/your-username/genre-identifier.git
cd genre-identifier
```

2. Install dependencies:

```
npm install
```

3. Set up your Spotify API credentials:
- Visit the [Spotify Developer Dashboard](https://developer.spotify.com).
- Create a new application.
- Copy your clientId and paste it in the `spotifypkceAuthorization.ts' file.

4. Start the development server:

```
npm run dev
```

5. Open `http://localhost:5173` in your browser.

## How to Use
1. Open Genre Identifier.
2. Log in with your Spotify account.
3. Use the search bar to find an artist.
4. View the results to see the artist's image, name, and genre(s).

## License
This project is licensed under the [MIT License](LICENSE.md) - see the [LICENSE.md](LICENSE.md) file for details.

## Contact
- **LinkedIn:** [Brady Winslow](https://www.linkedin.com/in/bradywinslow/)
- **GitHub:** [bradywinslow](https://github.com/bradywinslow)
- **Email:** brady.winslow@gmail.com

Feel free to reach out if you have any questions, feedback, or if you're interested in collaborating!
