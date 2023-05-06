import {ChangeEventHandler} from "react"

 type Cardata = {
  "loading": boolean,
  "date": string,
  "show": boolean,
  "rate": {
    "val": number,
    "currency": string,
  },
  "handleSubmit": ChangeEventHandler<HTMLFormElement>,
  "handleTo": ChangeEventHandler<HTMLSelectElement>,
  "handleFrom": ChangeEventHandler<HTMLSelectElement>,
  "handleInput": ChangeEventHandler<HTMLInputElement>,
  "from": string,
  "to": string,
  "symbols": string[],
  "inputVal": string
}

export default Cardata
