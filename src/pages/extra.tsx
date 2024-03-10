import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import { Button } from '../components/Button'
import { ButtonSection } from '../components/ButtonSection'
import { TextBox } from '../components/TextBox'
import { TextBlock } from '../components/TextBlock'
import { Button2 } from '../components/Button2'
import '../App.css'
import { StoreItem } from '../components/StoreItem'



export function Extra() {

  const myArray = new Array(5).fill('Hello ')

  const [showItem, setShowItem] = useState(false)

  const item1 = {title:'Bat', desc: 'Metal Baseball bat', price: 80}
  const item2 = {title:'Ball', desc: 'Baseball', price: 10}
  const item3 = {title:'Hat', desc: 'Baseball Hat', price: 30}

  const myArray2 = [item1, item2, item3]

  return (
    <>
      <div className="App">
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>

        <h1>Welcome to my site</h1>

        <div className="card">
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>

        {/* Reactive buttons */}
        <Button text={"Sample2"} color= {"purple"}/>
        <ButtonSection/>

        {/* Reactive Text */}
        <TextBox/>

        <TextBlock text = "hello1"/>

        <Button2 show={showItem} setShow={setShowItem} color= {"green"}/>
        {/* {showItem && <StoreItem {...item1}/>} */}
      </div>

      {myArray.map((element,index) => {
        return (<TextBlock text = {element + index} key = {index}/>)
      })}

      {myArray2.map((element,index) => {
              return (
              <StoreItem {...element} key = {index}/>
              )
            })}
    </>
  )
}
