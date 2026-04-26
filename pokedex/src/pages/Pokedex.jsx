import { useState, useEffect } from "react";
import PokemonCard from "../components/PokemonCard";

function Pokedex() {

  const [pokemon, setPokemon] = useState([]);
  const [url, setUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=10"
  );

  const [nextUrl, setNextUrl] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);

  const [selectedPokemon, setSelectedPokemon] = useState(null);

  function capitalize(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
  }

  const typeColors = {
    fire: "#F08030",
    water: "#6890F0",
    grass: "#78C850",
    electric: "#F8D030",
    bug: "#A8B820",
    normal: "#A8A878",
    poison: "#A040A0",
    ground: "#E0C068",
    rock: "#B8A038",
    ghost: "#705898",
    psychic: "#F85888",
    ice: "#98D8D8",
    dragon: "#7038F8",
    dark: "#705848",
    steel: "#B8B8D0",
    fairy: "#EE99AC",
    fighting: "#C03028"
  };

  useEffect(() => {
    fetchPokemon();
  }, [url]);


  async function fetchPokemon() {
  const response = await fetch(url);
  const data = await response.json();

  setNextUrl(data.next);
  setPrevUrl(data.previous);

  const detailedPokemon = await Promise.all(
    data.results.map(async (poke) => {
      const res = await fetch(poke.url);
      const info = await res.json();

      return {
        name: capitalize(info.name),
        image: info.sprites.other["official-artwork"].front_default,
        type: info.types[0].type.name,
        data: info
      };
    })
  );

  setPokemon(detailedPokemon);
}


  async function getPokemonDetails(name) {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );

    const data = await response.json();

    setSelectedPokemon(data);
  }

  return (
  <div>
    <h1>Pokedex</h1>

    <div className="grid">
      {pokemon.map((poke) => (
        <PokemonCard
          key={poke.name}
          pokemon={poke}
          onSelect={getPokemonDetails}
          style={{
            cursor:"pointer",
            margin:"10px"
          }}
          color={typeColors[poke.type]}
        />
      ))}
    </div>

    <button onClick={() => setUrl(prevUrl)}>
      Previous
    </button>

    <button onClick={() => setUrl(nextUrl)}>
      Next
    </button>


      {selectedPokemon && (
        <div>
          <h2>
            {selectedPokemon.name.charAt(0).toUpperCase() +
            selectedPokemon.name.slice(1)}
          </h2>

          <p>
            Height: {selectedPokemon.height}
          </p>

          <p>
            Weight: {selectedPokemon.weight}
          </p>

          <h3>Types</h3>

          <ul>
            {selectedPokemon.types.map(t => (
              <li>
                {t.type.name.charAt(0).toUpperCase() + t.type.name.slice(1)}
              </li>
            ))}
          </ul>


          <h3>Abilities</h3>

          <ul>
            {selectedPokemon.abilities.map(a => (
              <li key={a.ability.name}>
                {a.ability.name}
              </li>
            ))}
          </ul>


          <h3>Stats</h3>

          <div className="stats">
            {selectedPokemon.stats.map((stat) => (
                <div key={stat.stat.name} className="stat-row">

                <span className="stat-name">
                    {stat.stat.name.toUpperCase()}
                </span>

                <div className="stat-bar-bg">
                    <div
                    className="stat-bar-fill"
                    style={{
                        width: `${Math.min(stat.base_stat, 100)}%`
                    }}
                    />
                </div>

                <span className="stat-value">
                    {stat.base_stat}
                </span>

                </div>
            ))}
          </div>

        </div>
      )}

    </div>
  );
}

export default Pokedex;