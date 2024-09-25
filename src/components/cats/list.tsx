import { type CatFact } from '@/types'

interface ListOfCatsProps {
  facts: CatFact[]
}

export default function ListOfCats ({ facts }: ListOfCatsProps) {
  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
      {facts.map(({ id, fact }) => (
        <div
          key={id}
          className='rounded-md bg-neutral-200 p-4 hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600 '
        >
          <div className='flex flex-row items-center justify-center space-x-2'>
            <h1 className='font-semibold text-neutral-500 dark:text-neutral-300'>
              {fact}
            </h1>
          </div>
        </div>
      ))}
    </div>
  )
}
