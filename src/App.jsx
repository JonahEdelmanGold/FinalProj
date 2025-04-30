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
    <header>
    <h1>The Top Cards in Some Categories</h1>
    <br></br>
    <h2> Provided by Scryfall</h2>
    </header>
    <Filter Cards = {Cards => setCards(Cards)} numberShown = {numberShown => setNumShow(numberShown)}></Filter>
    <section className = "gallery">
      <CardlistRender cardList = {Cards} numShow = {numberShown}></CardlistRender>
    </section>
    <footer>
      <h5>Content Provided by Scryfall API.<br></br>
      Portions of this website are unofficial Fan Content permitted under the Wizards of the Coast Fan Content Policy. <br></br>
      The literal and graphical information presented on this site about Magic: The Gathering, including card images and mana symbols, is copyright Wizards of the Coast, LLC. 
      this website is not produced by or endorsed by Wizards of the Coast.
      </h5>
      <h5> Website made by Jonah Edelman-Gold for WebDev, 4/30/25</h5>
    </footer>
    </>
  );
}

export default App;
