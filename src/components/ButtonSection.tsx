import { Button } from "./Button";

export function ButtonSection() {
  function notify(msg: string) {
    alert(msg)
  }

  return (
    <>
      <Button text={"Sample"} color={"red"} func={notify} msg={"BTN 1 Pressed"}/>
      <Button/>
      <Button/>
    </>
  )
}