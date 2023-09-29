import apiClient from '../utils/apiUtil'

/**
 * Fetches a list of Pokemon from the API.
 * @returns {Promise<Array>} A promise that resolves with an array of Pokemon objects.
 */
export async function fetchPokemon() {
  // Define the endpoint to fetch Pokemon data
  const pokemonEndpoint = '/pokemon?offset=0&limit=20'

  // Fetch the data from the API
  const { count, next, previous, results } =
    await apiClient.get(pokemonEndpoint)
  const response = Object.assign({}, { count, next, previous, results: [] })
  // console.log(results);
  for (let i = 0; i < results?.length; i++) {
    const pokemonInfoUrl = (results[i]?.url || '').replace(
      process.env.REACT_APP_HOST_API,
      ''
    )
    const pokemonInfo = await apiClient.get(pokemonInfoUrl)
    // console.log('pokemonInfo: ', pokemonInfo)
    response.results[i] = {
      ...pokemonInfo,
      imgUrl: pokemonInfo?.sprites?.other?.dream_world?.front_default || '',
      type: pokemonInfo?.types?.[0]?.type?.name || ''
    }
  }

  // Log the response for debugging purposes
  console.log('Pokemon result new: ', response)

  // Return the response
  return response
}
