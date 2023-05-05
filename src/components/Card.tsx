import CardBody from '@/components/Card/CardBody'
export default function Card() {
  return (
    <article className='w-full p-8 lg:w-fit lg:rounded-xl shadow-xl text-neutral-100 bg-gradient-to-tr from-cyan-400 via-blue-400 to-indigo-400'>
      <header>
        <h2 className='p-2 text-center text-2xl font-bold'>Rate Calculator</h2>
      </header>
      <CardBody />
      <footer>
        <p className='pt-4 text-xs text-center'>Real-Time, Intraday & Historical Market</p>
      </footer>
    </article>
  )
}
