import apiClient from "../utils/apiUtil";

/**
 * Fetches a list of Pokemon from the API.
 * @returns {Promise<Array>} A promise that resolves with an array of Pokemon objects.
 */
export async function fetchPokemon() {
    // Define the endpoint to fetch Pokemon data
    const pokemonEndpoint = '/pokemon?offset=0&limit=50';
  
    // Fetch the data from the API
    const response = await apiClient.get(pokemonEndpoint);
  
    // Log the response for debugging purposes
    console.log("Pokemon result: ", response);
  
    // Return the response
    return response;
}
