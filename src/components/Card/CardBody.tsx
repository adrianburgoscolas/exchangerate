//Card presentation logic
import useSWR from 'swr'
import { useEffect, useState } from 'react'
import axios from 'axios'


import CardData from "@/components/Card/CardData"

const fetcher = (url: string) => axios.get(url, {headers:{'apikey':process.env.NEXT_PUBLIC_EXCHANGE_API_KEY}}).then(res => res.data)

export default function CardBody() {
  const { data, isLoading, error, mutate } = useSWR("https://api.apilayer.com/exchangerates_data/latest?&base=USD", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  })
  const [inputVal, setInputVal] = useState('1')
  const [to, setTo] = useState('')
  const [from, setFrom] = useState('')
  const [rate, setRate] = useState({val: 0, currency: ''})
  const [show, setShow] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    if((data.timestamp * 1000) + (10 * 60 * 1000) <= new Date().getTime()) {
      mutate()
    }
    setRate({val: Math.round(Number(inputVal) * data.rates[to] / data.rates[from] * 100) / 100, currency: to})
    setShow(true)
    e.preventDefault()
  }
  useEffect(() => {
    if(data) {
      setTo(Object.keys(data.rates)[0])
      setFrom(Object.keys(data.rates)[1])
    }
  },[data])

  if(error) {
    alert(`Error retrieving data, ${error.message}`)
  }

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    if(/^\d*$/.test(e.currentTarget.value)) {
      setInputVal(e.currentTarget.value)
      setShow(false)
    }
  }

  function handleTo(e: React.ChangeEvent<HTMLSelectElement>) {
    setShow(false)
    setTo(e.currentTarget.value)
  }
  
  function handleFrom(e: React.ChangeEvent<HTMLSelectElement>) {
    setShow(false)
    setFrom(e.currentTarget.value)
  }

  return (<CardData 
    loading={isLoading}
    show={show} 
    inputVal={inputVal} 
    to={to} 
    from={from}
    handleSubmit={handleSubmit} 
    handleInput={handleInput} 
    handleTo={handleTo} 
    handleFrom={handleFrom} 
    rate={rate} 
    symbols={Object.keys(data?.rates || {})} 
    date={data?.date}
  />)
}
