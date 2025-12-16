import axios from 'axios';
import { pokemonAdapter } from '../adapters/pokemonAdapter';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

export const getPokemons = async (limit = 20) => {
  try {
    const { data } = await axios.get(`${BASE_URL}?limit=${limit}`);
    
    const promises = data.results.map(async (pokemon) => {
      const response = await axios.get(pokemon.url);
      return pokemonAdapter(response.data);
    });

    const results = await Promise.all(promises);
    return results;

  } catch (error) {
    console.error("Error fetching pokemons:", error);
    return [];
  }
};