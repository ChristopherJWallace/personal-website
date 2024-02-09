import { useState } from "react"

interface ButtonProps2 {
  color: string;
  show: boolean;
  setShow: (show: boolean) => void;
}

export function Button2(props: ButtonProps2) {

  // const [show, setShow] = useState(false)

  return (
    <>
    <button onClick= {() => props.setShow(!props.show)} style = {{backgroundColor: props.color}}> 
      <p> {props.show? "Hide Item": "Show Item"} </p>
    </button>
    </>
  )
}