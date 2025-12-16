export const pokemonAdapter = (apiResponse) => {
  return {
    id: apiResponse.id,
    name: apiResponse.name,
    image: apiResponse.sprites.other['official-artwork'].front_default || apiResponse.sprites.front_default,
    audio: apiResponse.cries.latest || apiResponse.cries.legacy,
    types: apiResponse.types.map((t) => t.type.name),
    
    weight: apiResponse.weight / 10,
    height: apiResponse.height / 10, 
    
    abilities: apiResponse.abilities.map((a) => a.ability.name),
    moves: apiResponse.moves.slice(0, 15).map((m) => m.move.name),
    games: apiResponse.game_indices.map((g) => g.version.name),
  };
};