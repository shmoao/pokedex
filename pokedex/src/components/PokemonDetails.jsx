function PokemonDetails({ pokemon }) {

if(!pokemon) return null;

return(
<div className="card">

<h2>{pokemon.name}</h2>

<img
src={pokemon.sprites.front_default}
/>

<p>Height: {pokemon.height}</p>
<p>Weight: {pokemon.weight}</p>

<h3>Types</h3>

<ul>
{pokemon.types.map(t=>(
<li key={t.type.name}>
{t.type.name}
</li>
))}
</ul>

</div>
)
}

export default PokemonDetails;