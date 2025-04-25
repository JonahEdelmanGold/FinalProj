import { useState, useEffect, useContext, } from 'react'
import './App.css'
import Filter from './Filter.jsx'
import CardlistRender from './CardlistRender.jsx'

function App() {
  const [Cards, setCards] = useState([]);
  useEffect(() =>{
    //console.log(Cards);
  },[Cards])


  return (
    <>
    <p>Hello</p>
    <Filter Cards = {Cards => setCards(Cards)}></Filter>
    <CardlistRender cardList = {Cards}></CardlistRender>
    </>
  );
}

export default App;
