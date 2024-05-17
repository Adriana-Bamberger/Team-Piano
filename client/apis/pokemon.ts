import request from 'superagent'
import type { Pokemon } from '../../models/pokemon.ts'
import { useQuery } from '@tanstack/react-query'

export async function fetchPokemonById(id: string) {
  const res = await request.get(`https://pokeapi.co/api/v2/pokemon/${id}`)

  return res.body as Pokemon
}

export function useFetchPokemons() {
  const pokemonIds = ['25', '143', '133']

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

export function useFetchPokemon(id: string | undefined) {
  return useQuery({
    queryKey: ['pokemon'],
    queryFn: async () => {
      if (id) {
        const pokemonData = await fetchPokemonById(id)
        return pokemonData
      } else {
        const emptyPokemon: Pokemon = {
          abilities: [],
          id: 0,
          moves: [],
          name: '',
          sprites: {
            back_default: '',
            front_default: '',
          },
          types: [],
        }

        return emptyPokemon
      }
    },
  })
}
