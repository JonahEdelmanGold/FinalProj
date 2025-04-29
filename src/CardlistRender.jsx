import { useState, useEffect } from 'react'
import Card from './Card.jsx'
import CenteredCard from './CenteredCard.jsx';
import './CardList.css'

function CardlistRender({cardList, numShow}){

    const [numShown, setNumShow] = useState("");
    const[cardsListed, setCards] = useState([]);
    const[mappedCards, setMapped] = useState([]);

    const [focus, setFocus] = useState(false);
    const [focusCard, setFocusCard] = useState("");

    useEffect(() =>{
        setNumShow(numShow);
    }, [numShow]);
    useEffect(() => {
        setCards(cardList.data);
    }, [cardList])

    useEffect(() => {
        console.log(numShown);
        sliceListed();
    }, [numShown])
    useEffect(() => {
        //console.log(cardsListed)
        sliceListed();
    }, [cardsListed])
function sliceListed(){
    let tempList = cardsListed;
    //console.log(tempList);
        if(tempList != undefined){
            if(tempList.length > numShown){
                tempList= tempList.slice(0, numShown);
            } 
            setMapped(tempList.map((card, index) => 
                <Card key = {index} cardData = {card} shouldCenter = {focus => setFocus(focus)} focusCard = {card => setFocusCard(card)}></Card>
            ));
            //console.log(tempMapped);
        }
}


    

    return(
        <>
        <CenteredCard card = {focusCard} focus = {focus} seeFocus = {focus => setFocus(focus)}></CenteredCard>
        <section id = "cardList">
        {mappedCards}
        </section>
        <p>Hi</p>
        </>
    );
}

export default CardlistRender