import CardBody from '@/components/Card/CardBody'
export default function Card() {
  return (
    <article className='p-6 rounded-xl shadow-xl text-neutral-100 bg-gradient-to-tr from-cyan-400 via-blue-400 to-indigo-400'>
      <header>
        <h2 className='text-2xl font-bold'>Rate Calculator</h2>
      </header>
      <CardBody />
      <footer>
        <p className='text-sm'>Real-Time, Intraday & Historical Market</p>
      </footer>
    </article>
  )
}
