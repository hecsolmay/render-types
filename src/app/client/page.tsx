import ListOfCatsClient from '@/components/cats/list-client'

export default function ClientRenderPage () {
  return (
    <main className='mx-auto min-h-screen max-w-3xl px-6  md:max-w-5xl'>
      <div className='py-24 sm:p-28'>
        <h1 className='pb-2 text-4xl font-bold text-white md:text-6xl'>
          Cat&apos;s Facts.
        </h1>
        <p className='pb-4 text-xl text-neutral-100'>
          AquÍ hay una lista de hechos de gatos.
        </p>
        <section>
          <ListOfCatsClient />
        </section>

        <section></section>
      </div>
    </main>
  )
}
