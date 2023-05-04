//Card rendering logic
type CardSymbols = {
  symbols: string[]
}

type CardRate = {
  "date": string,
  "historical"?: string,
  "info"?: {
    "rate": number,
    "timestamp": number
  },
  "query"?: {
    "amount": number,
    "from": string,
    "to": string
  },
  "result"?: number,
  "success"?: boolean
}

export default function CardData({data, symbols}: {data: CardRate, symbols: CardSymbols}) {
  return (
    <p>{data.date}</p>
  )
}
