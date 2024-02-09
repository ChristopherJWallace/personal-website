
interface TextBlockProps {
  text: string;
  color?: string;
  func?: (msg: string) => void;
  msg?: string;
}


export function TextBlock(props : TextBlockProps) {
  return(
    <>
      <button>{props.text}</button>
    </>
  )
}