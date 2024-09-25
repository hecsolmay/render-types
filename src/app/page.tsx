export default function Home () {
  return (
    <main className='mx-auto min-h-screen text-left'>
      <div className='px-8 py-64 sm:px-28 md:px-64 md:py-52'>
        <h1 className='pb-4 text-4xl font-bold text-white md:text-6xl'>
          Pagina de inicio
        </h1>
        <p className='text-xl font-semibold text-white md:pb-1 md:text-3xl'>
          Esta parte fue generada en el servidor.
        </p>
        <p className='text-lg  text-neutral-300  md:text-xl'>
          En esta web se muestra como se renderizan las paginas tanto de parte
          del servidor como en el cliente
        </p>
      </div>
    </main>
  )
}
