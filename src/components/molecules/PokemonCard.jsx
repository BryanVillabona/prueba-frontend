export const PokemonCard = ({ pokemon, onClick }) => {
  return (
    <button
      onClick={() => onClick(pokemon)}
      className="flex-shrink-0 w-48 h-64 mx-3 bg-white dark:bg-zinc-800 rounded-xl shadow-md 
                 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 
                 border border-gray-100 dark:border-zinc-700 group relative overflow-hidden text-left"
    >
      <div className="absolute top-2 right-3 text-4xl font-black text-gray-100 dark:text-zinc-700 z-0">
        #{pokemon.id}
      </div>
      
      <div className="h-3/5 flex items-center justify-center p-4 relative z-10">
        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="w-full h-full object-contain drop-shadow-sm group-hover:scale-110 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      <div className="h-2/5 bg-gray-50 dark:bg-zinc-900/50 flex flex-col justify-center px-4 relative z-10">
        <h3 className="text-lg font-bold capitalize text-gray-800 dark:text-gray-100 mb-1">
          {pokemon.name}
        </h3>
        <div className="flex flex-wrap gap-1">
          {pokemon.types.map((type) => (
            <span 
              key={type} 
              className="text-xs px-2 py-0.5 rounded-full bg-white dark:bg-zinc-700 border border-gray-200 dark:border-zinc-600 text-gray-600 dark:text-gray-300 capitalize"
            >
              {type}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
};