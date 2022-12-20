
import { useState } from 'react'
import './App.css'
import QuoteBox from './componen/QuoteBox'
import quotes from './json/quotes.json'
import colors from './json/colors.json'

function App() {

  const getRandom = (arr)=>{
    const indexRandom = Math.floor(arr.length * Math.random()) 
    return arr[indexRandom]
}

 const [quoteRandom, setQuoteRandom] = useState(getRandom(quotes))
 const [colorsRandom, setColorsRandomt] = useState(getRandom(colors))

 
 const handleClick = ()=>{
  setQuoteRandom(getRandom(quotes))
  setColorsRandomt(getRandom(colors))
 }
 const objStyle ={
  backgroundColor:colorsRandom,
 }

  return (
    <div className="App" style={objStyle}>
    
    <QuoteBox 
    quoteRandom={quoteRandom}
    handleClick={handleClick}
    colorsRandom={colorsRandom}
    />
    </div>
  )
}

export default App 




