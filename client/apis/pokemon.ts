import request from 'superagent'
import type { Pokemon } from '../../models/pokemon.ts'
import { useQuery } from '@tanstack/react-query'

export async function fetchPokemonById(id: number) {
  const res = await request.get(`https://pokeapi.co/api/v2/pokemon/${id}`)

  return res.body as Pokemon
}

export function usePokemon() {
  const pokemonIds = [25, 143, 133]

  return useQuery({
    queryKey: ['pokemon'],
    queryFn: async () => {
      const pokemonData = await Promise.all(
        pokemonIds.map((id) => fetchPokemonById(id)),
      )
      console.log(pokemonData)
      return pokemonData
    },
  })
}
