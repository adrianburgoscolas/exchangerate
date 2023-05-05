//Card presentation logic
import { useState } from 'react'

import CardData from "@/components/Card/CardData"

const result = {
  "base": "USD",
  "date": "2021-03-17",
  "rates": {
    "EUR": 0.813399,
    "GBP": 0.72007,
    "JPY": 107.346001
  },
  "success": true,
  "timestamp": 1519296206
} 

export default function CardBody() {
  const [inputVal, setInputVal] = useState('1')
  const [to, setTo] = useState(Object.keys(result.rates)[0])
  const [from, setFrom] = useState(Object.keys(result.rates)[1])
  const [rate, setRate] = useState({val: 0, currency: ''})
  const [show, setShow] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    setShow(true)
    setRate({val: 0, currency: to})
    console.log('submit')
    e.preventDefault()
  }

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    if(/^\d*$/.test(e.currentTarget.value)) {
      setInputVal(e.currentTarget.value)
      setShow(false)
      console.log('submit number')
    }
  }
  function handleTo(e: React.ChangeEvent<HTMLSelectElement>) {
    setShow(false)
    setTo(e.currentTarget.value)
    console.log('to', e.currentTarget.value)
  }
  
  function handleFrom(e: React.ChangeEvent<HTMLSelectElement>) {
    setShow(false)
    setFrom(e.currentTarget.value)
    console.log('from', e.currentTarget.value)
  }

  return (<CardData 
    show={show} 
    inputVal={inputVal} 
    to={to} 
    from={from}
    handleSubmit={handleSubmit} 
    handleInput={handleInput} 
    handleTo={handleTo} 
    handleFrom={handleFrom} 
    rate={rate} 
    symbols={Object.keys(result.rates)} 
    date={result.date}
  />)
}
