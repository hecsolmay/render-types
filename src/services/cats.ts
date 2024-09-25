import { type CatsFactRaw } from '@/types/responses'

export async function getCatsFacts () {
  try {
    const response = await fetch('https://cat-fact.herokuapp.com/facts')

    if (!response.ok) {
      throw new Error('Failed to fetch cat facts')
    }

    const data = (await response.json()) as CatsFactRaw[]

    const mappedFacts = data.map(fact => ({ id: fact._id, fact: fact.text }))
    return mappedFacts
  } catch (error) {
    return []
  }
}
