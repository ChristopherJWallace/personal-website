import { useState, useEffect} from 'react'

interface ButtonProps {
  text: string;
  color: string;
  func?: (msg: string) => void;
  msg?: string;
}


export function Button(props : ButtonProps) {

  // Using setter functions
  const [count2, setCount2] = useState(0)
  const handleClick = () => {
    if (props.func && props.msg) {
      props.func(props.msg);
    };
    setCount2((count2) => count2 + 1);
  };

  // Using If-Then
  // let number = 13;
  // let displayString;
  // if (number > 10) {
  //   displayString = "Big Number"
  // } else {
  //   displayString = "Small Number"
  // }

  useEffect(() => {
    console.log("Count now =") // Action
  }, []) // Dependency array

  useEffect(() => {
    console.log("Count now =" + count2) // Action
  }, [count2]) // Dependency array

  return (
    <button onClick= {handleClick} style = {{backgroundColor: props.color}}>
      <p>{props.text +' '+ count2}</p>
    </button>
  )
}

// Setting defaults
Button.defaultProps = {
  text: 'Default Text',
  color: '#000000', // Default color is black
};