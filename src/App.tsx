//import { useState } from 'react'
import { Cards } from "./components/Cards";
import './App.css'

function App() {
  //const [count, setCount] = useState(0)
  const cardItem = [
    { img: "https://cdn-edge.kwork.ru/pics/t3/18/16461649-1631002518.jpg",
      title: "Card title",
      text: 
      "Some quick example text to build on nhe card title and make up the bulk of the card's content.",
      btnName: "Go somewhere"
    },
    {
      title: "Special title treatment",
      text: 
      "With supporting text below as a natural lead-in additional content",
      btnName: "Go somewhere",
    }
  ]
  return (
    
    <div className="cardContainer">
      <Cards image={cardItem[0].img}>
      <h2>{cardItem[0].title}</h2>
      <p>{cardItem[0].text}</p>
      <button className="btn">{cardItem[0].btnName}</button>
      </Cards>

      <Cards>
      <h2>{cardItem[1].title}</h2>
      <p>{cardItem[1].text}</p>
      <button className="btn">{cardItem[1].btnName}</button>
      </Cards>
    </div>
  )
}

export default App
