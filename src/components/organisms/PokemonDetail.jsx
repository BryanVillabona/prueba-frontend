import { AudioButton } from "../atoms/AudioButton";

export const PokemonDetail = ({ pokemon }) => {
  if (!pokemon) return null;

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl overflow-hidden animate-fade-in border border-gray-100 dark:border-zinc-800">
      {/* Header Mobile / Desktop */}
      <div className="p-6 border-b border-gray-100 dark:border-zinc-800 flex justify-between items-center bg-gray-50 dark:bg-zinc-800/50">
        <div>
            <h2 className="text-3xl font-black capitalize text-gray-900 dark:text-white">
            {pokemon.name}
            </h2>
            <span className="text-gray-500 dark:text-gray-400 font-mono text-lg">
            #{String(pokemon.id).padStart(3, '0')}
            </span>
        </div>
        <AudioButton audioUrl={pokemon.audio} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
        
        {/* Columna Izquierda: Imagen y Stats Físicos */}
        <div className="md:col-span-5 p-8 flex flex-col items-center justify-center bg-gradient-to-br from-white to-gray-50 dark:from-zinc-900 dark:to-zinc-950 border-b md:border-b-0 md:border-r border-gray-100 dark:border-zinc-800">
          <img 
            src={pokemon.image} 
            alt={pokemon.name} 
            className="w-64 h-64 object-contain drop-shadow-2xl mb-8 hover:scale-105 transition-transform duration-500"
          />
          
          <div className="grid grid-cols-2 gap-8 w-full max-w-xs text-center">
            <div className="p-4 bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-700">
              <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">Peso</span>
              <span className="text-xl font-bold text-gray-800 dark:text-gray-100">{pokemon.weight} kg</span>
            </div>
            <div className="p-4 bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-700">
              <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">Altura</span>
              <span className="text-xl font-bold text-gray-800 dark:text-gray-100">{pokemon.height} m</span>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Información Detallada */}
        <div className="md:col-span-7 p-8 space-y-8">
          
          {/* Habilidades */}
          <div>
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              Habilidades
            </h3>
            <div className="flex flex-wrap gap-2">
              {pokemon.abilities.map(ability => (
                <span key={ability} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium capitalize border border-blue-100 dark:border-blue-900/30">
                  {ability}
                </span>
              ))}
            </div>
          </div>

          {/* Movimientos */}
          <div>
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">
              Movimientos Principales
            </h3>
            <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto pr-2 custom-scrollbar">
              {pokemon.moves.map(move => (
                <span key={move} className="px-2 py-1 bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-300 rounded text-xs capitalize">
                  {move.replace('-', ' ')}
                </span>
              ))}
            </div>
          </div>

           {/* Juegos */}
           <div>
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">
              Apariciones
            </h3>
            <div className="flex flex-wrap gap-2">
              {pokemon.games.slice(0, 10).map(game => (
                <span key={game} className="px-2 py-0.5 border border-gray-200 dark:border-zinc-700 text-gray-500 dark:text-gray-400 rounded-md text-xs capitalize">
                  {game}
                </span>
              ))}
              {pokemon.games.length > 10 && (
                <span className="text-xs text-gray-400 py-0.5">+ {pokemon.games.length - 10} más</span>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};