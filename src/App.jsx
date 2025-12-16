import { useEffect, useState } from "react";
import { getPokemons } from "./services/pokemonService";
import { PokemonCarousel } from "./components/organisms/PokemonCarousel";
import { PokemonDetail } from "./components/organisms/PokemonDetail";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const data = await getPokemons();
      setPokemons(data);
      setLoading(false);
      // Opcional: Seleccionar el primero por defecto
      // if (data.length > 0) setSelectedPokemon(data[0]);
    };
    fetch();
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-neutral-950 transition-colors duration-300 pb-20">
      {loading ? (
        <div className="h-screen flex items-center justify-center">
             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      ) : (
        <>
          <PokemonCarousel 
            pokemons={pokemons} 
            onSelect={setSelectedPokemon} 
          />
          
          <div className="max-w-5xl mx-auto px-4 mt-8">
            {selectedPokemon ? (
              <PokemonDetail pokemon={selectedPokemon} />
            ) : (
              <div className="flex flex-col items-center justify-center h-64 text-gray-400 border-2 border-dashed border-gray-300 dark:border-zinc-800 rounded-2xl bg-white/50 dark:bg-zinc-900/50">
                <p>Selecciona un Pokémon del carrusel arriba</p>
              </div>
            )}
          </div>
        </>
      )}
    </main>
  );
}

export default App;