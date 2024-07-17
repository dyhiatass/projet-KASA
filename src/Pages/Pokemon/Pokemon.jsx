import { useEffect, useState } from 'react';
import './style.scss';

function Pokemon() {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/pokemon/limit/151")
      .then(res => res.json())
      .then(data => setPokemons(data))
      .catch(error => console.log(error))
  }, [])

  return (
    <div className="App">
      {pokemons.map(pokemon => (
        <div key={pokemon.id}>
          <h2>{pokemon.name} - numero {pokemon.id}</h2>
          <img src={pokemon.image} alt={pokemon.name} />
          <ul>
            {/* Dans l'API, nous recuperons les statistiques sous forme d'objet */}
            {/* Donc pour recuperer l'interieur de l'objet, on doit mettre le chemin complet */}
            {/* Donc on part de notre variable pokemon, puis on recupere l'objet stats, puis les points de vie, donc hp*/}
            {/* Ce qui donne pokemon.stats.HP */}
            <li>Points de vie : {pokemon.stats.HP}</li>
            <li>Attaque : {pokemon.stats.attack}</li>
            <li>Défense : {pokemon.stats.defense}</li>
            <li>Attaque spé : {pokemon.stats.special_attack}</li>
            <li>Défense spé : {pokemon.stats.special_defense}</li>
            <li>Vitesse : {pokemon.stats.speed}</li>
          </ul>
          <div className='types'>
            {/* Dans notre objet pokemon, nous avons la propriété apiTypes qui est un tableau */}
            {/* Donc tout comme notre state pokemons, nous pouvons utiliser map pour passer a travers, boucler */}
            {pokemon.apiTypes.map(type => (
              // Donc on recupere ici chaque element du tableau a l'unité dans la variable "type"
              // type est un objet, donc je peux recup son nom et son image en mettant type.name et type.image
              <div className='type' key={type.name}>
                <img src={type.image} alt={type.name} />
                <h3>{type.name}</h3>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Pokemon;
