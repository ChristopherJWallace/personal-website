import { useState , ChangeEvent } from "react";


export function TextBox() {
  const [text, setText] = useState("")

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    console.log(e.target.value);
  }

  return (
    <>
      <input onChange = {handleChange}></input>
      <p>{text}</p>
    </>
  )
}