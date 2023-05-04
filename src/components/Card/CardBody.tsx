//Card presentation logic
import CardData from "@/components/Card/CardData"

const sym = {symbols: ['']}

export default function CardBody() {
  return (<CardData symbols={sym} data={{date: 'Hola'}}/>)
}
