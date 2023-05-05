//Card presentation logic
import CardData from "@/components/Card/CardData"

const sym = ['EUR', 'CAD']
const result = {
  "date": "2018-02-22",
  "historical": "",
  "info": {
    "rate": 148.972231,
    "timestamp": 1519328414
  },
  "query": {
    "amount": 25,
    "from": "GBP",
    "to": "JPY"
  },
  "result": 3724.305775,
  "success": true
} 

export default function CardBody() {
  return (<CardData symbols={sym} data={result}/>)
}
