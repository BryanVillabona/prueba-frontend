import { useEffect, useState } from "react";
import { getPokemons } from "./services/pokemonService";
import { PokemonCarousel } from "./components/organisms/PokemonCarousel";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const data = await getPokemons();
      setPokemons(data);
      setLoading(false);
    };
    fetch();
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-neutral-950 transition-colors duration-300">
      {loading ? (
        <div className="h-screen flex items-center justify-center text-gray-500">
          Cargando Pokédex...
        </div>
      ) : (
        <>
          <PokemonCarousel 
            pokemons={pokemons} 
            onSelect={setSelectedPokemon} 
          />
          
          <div className="max-w-7xl mx-auto p-6">
            {selectedPokemon ? (
              <div className="p-10 border-2 border-dashed border-gray-300 dark:border-neutral-700 rounded-xl text-center text-gray-400">
                Aquí irán los detalles de: <strong className="text-primary">{selectedPokemon.name}</strong>
                <br/>(Próximo paso)
              </div>
            ) : (
              <div className="text-center text-gray-400 mt-10">
                Selecciona un Pokémon del carrusel para ver sus detalles
              </div>
            )}
          </div>
        </>
      )}
    </main>
  );
}

export default App;