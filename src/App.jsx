import { useState, useEffect, useContext, } from 'react'
import './App.css'
import Filter from './Filter.jsx'
import CardlistRender from './CardlistRender.jsx'
import Card from './Card.jsx'

function App() {
  const [Cards, setCards] = useState([]);
  const [numberShown, setNumShow] = useState("0");


  return (
    <>
    <p>Hello</p>
    <Filter Cards = {Cards => setCards(Cards)} numberShown = {numberShown => setNumShow(numberShown)}></Filter>
    <CardlistRender cardList = {Cards} numShow = {numberShown}></CardlistRender>
    </>
  );
}

export default App;
