import { Cards } from "./components/Cards";
import { Button } from "./components/Button";
import './App.css'

function App() {
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
      <Button btnName={cardItem[0].btnName} />
      </Cards>

      <Cards>
      <h2>{cardItem[1].title}</h2>
      <p>{cardItem[1].text}</p>
      <Button btnName={cardItem[0].btnName} />
      </Cards>
    </div>
  )
}

export default App
