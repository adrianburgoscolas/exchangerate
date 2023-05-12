import React from "react"
import CircularProgress from '@mui/joy/CircularProgress';

import CardData from '@/utils/Definitions'

//Card rendering logic
export default function CardData(props: CardData) {

  return (
    <div className="w-fit mx-auto">
      <div className={`px-6 flex items-start justify-between py-4 ${props.show?'opacity-100':'opacity-0'} transition-all`}>
        <p className='text-4xl font-bold text-neutral-300'>{props.rate.val > 1_000_000?props.rate.val.toExponential(3):props.rate.val}<span className='text-2xl'>{' '}{props.rate.currency}</span></p>
        <p className="text-neutral-300 text-xs">{props.date}</p>
      </div>
      {props.loading?
        <div className='text-center w-full mx-auto'>
          <CircularProgress />
        </div>:
        <form role='form' onSubmit={props.handleSubmit} className='flex gap-2 justify-around items-center w-full bg-neutral-300 p-2 rounded-md mx-auto text-neutral-600'>
          <input role='input' onChange={props.handleInput} value={props.inputVal} required type='text' className='text-sm border border-neutral-400 bg-neutral-300 rounded-md p-1 w-20 text-center focus:outline-none'/>
          <select role='select' onChange={props.handleFrom} value={props.from} className="border border-neutral-400 bg-neutral-300 rounded-md p-1 w-16">
          {props.symbols.map((obj: string, i: number) => <option key={i} value={obj}>{obj}</option>)}
          </select>
        / 
          <select role='select' onChange={props.handleTo} value={props.to} className="border border-neutral-400 bg-neutral-300 rounded-md p-1 w-16">
          {props.symbols.map((obj: string, i: number) => <option key={i} value={obj}>{obj}</option>)}
          </select> 
        <input role='button' type="submit" className='text-neutral-500 rounded-md border border-neutral-400 p-1' value='Calc' />
        </form>
      }
    </div>
  )
}
