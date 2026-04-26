function PokemonCard({ pokemon, onSelect, color }) {
  return (
    <div
      className="card"
      style={{ backgroundColor: color }}
      onClick={() => onSelect(pokemon.name)}
    >
      <img
        src={pokemon.image}
        alt={pokemon.name}
      />

      <h3>
        {pokemon.name}
      </h3>
    </div>
  );
}

export default PokemonCard;