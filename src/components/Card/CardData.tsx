import React, { useState} from "react"

//Card rendering logic
type CardSymbols = string[]


type CardRate = {
  "date": string,
  "historical": string,
  "info": {
    "rate": number,
    "timestamp": number
  },
  "query": {
    "amount": number,
    "from": string,
    "to": string
  },
  "result": number,
  "success": boolean
}

export default function CardData({data, symbols}: {data: CardRate, symbols: CardSymbols}) {

  const [number, setNumber] = useState()
  const [to, setTo] = useState('')
  const [from, setFrom] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
  }

  function handleInput(e: React.FormEvent) {
    if(/^\d*$/.test(e.target.value)) {
      setNumber(e.target.value)
      console.log('submit number')
    }
  }
  function handleTo(e: React.FormEvent) {
    setTo(e.target.value)
    console.log('to', e.target.value)
  }
  
  function handleFrom(e: React.FormEvent) {
    setFrom(e.target.value)
    console.log('from', e.target.value)
  }

  return (
    <div>
      <div className='flex gap-4 items-center justify-center py-4'>
        <p className='text-4xl font-bold text-neutral-300'>{Math.round(data.result * 100) / 100}</p><p className="text-xs">{data.date}</p>
      </div>
      <form onSubmit={handleSubmit} className='flex gap-2 items-center w-fit bg-neutral-300 p-2 rounded-md mx-auto text-neutral-600'>
        <input onChange={handleInput} value={number} required type='text' className='text-sm border border-neutral-400 bg-neutral-300 rounded-md p-1 w-20 text-center focus:outline-none'/>
        <select onChange={handleFrom} value={from} className="border border-neutral-400 bg-neutral-300 rounded-md p-1 w-16">
          {symbols.map((obj: string, i: number) => <option key={i} value={obj}>{obj}</option>)}
        </select>
        / 
        <select onChange={handleTo} value={to} className="border border-neutral-400 bg-neutral-300 rounded-md p-1 w-16">
          {symbols.map((obj: string, i: number) => <option key={i} value={obj}>{obj}</option>)}
        </select> 
        <input type="submit" className='text-neutral-500 rounded-md border border-neutral-400 p-1' value='Calc' />
      </form>
    </div>
  )
}
