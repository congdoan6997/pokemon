import React, {useEffect} from 'react';
import { fetchPokemon } from './apis';
const App = () => {
    const fetchPokemonApi = async () => {
        await fetchPokemon();
    }
    useEffect( () => {
        fetchPokemonApi();
    }, []);

    
    return (
        <div>
            Hello world
        </div>
    );
};

export default App;