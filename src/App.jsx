import { useEffect, useState } from "react";
import { getPokemons } from "./services/pokemonService";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await getPokemons();
      console.log("Datos limpios del adaptador:", data);
      setPokemons(data);
    };
    fetch();
  }, []);

  return (
    <div className="p-10 text-center">
      <h1 className="text-2xl font-bold text-primary mb-4">Prueba de Conexión</h1>
      {pokemons.length === 0 ? (
        <p>Cargando datos...</p>
      ) : (
        <p className="text-green-600 font-bold">
          ¡Éxito! Se cargaron {pokemons.length} pokémones. <br/>
          Revisa la consola del navegador para ver la estructura.
        </p>
      )}
    </div>
  );
}

export default App;