import { PokemonCard } from "../molecules/PokemonCard";

export const PokemonCarousel = ({ pokemons, onSelect }) => {
  const items = [...pokemons, ...pokemons];

  if (pokemons.length === 0) return null;

  return (
    <section className="w-full py-6 overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-neutral-900 dark:to-neutral-950 border-b border-gray-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 mb-4">
        <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
          Selecciona un Pokémon
        </h2>
      </div>
      
      <div className="flex w-full group">
        <div className="flex animate-marquee hover:[animation-play-state:paused]">
          {items.map((pokemon, index) => (
            <PokemonCard
              key={`${pokemon.id}-${index}`}
              pokemon={pokemon}
              onClick={onSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
};