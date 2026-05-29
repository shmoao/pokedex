# Pokédex

A simple Pokédex web app built with **React** and the free [PokéAPI](https://pokeapi.co/).

Browse Pokémon as cards showing their name and image. Click any card to see their full stats.

---

## Features

- Displays Pokémon as cards with name and image
- Click a card to view detailed stats (HP, Attack, Defense, Speed, etc.)
- Fetches live data from the PokéAPI — no backend needed

---

## Tech Stack

- **React** — component-based UI
- **PokéAPI** — free, open Pokémon data API
- **CSS** — custom card styling

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/pokedex.git
cd pokedex
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the app

```bash
npm start
```

Open `http://localhost:3000` in your browser.

---

## How It Works

The app fetches a list of Pokémon from the PokéAPI on load and renders each one as a card. Clicking a card makes a second API call to retrieve that Pokémon's full details, including their base stats, which are then displayed.

---

## Project Structure

```
pokedex/
├── src/
│   ├── components/
│   │   ├── PokemonCard.jsx    # Individual card component
│   │   └── StatsView.jsx      # Stats display on click
│   ├── App.jsx                # Main app, fetches Pokémon list
│   └── index.js
├── public/
└── README.md
```

---

## What I Learned

- Fetching and working with data from a public REST API in React
- Managing component state with `useState` and side effects with `useEffect`
- Breaking UI into reusable components (card, stats view)
- Handling multiple API calls and loading states
