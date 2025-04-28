import { useState, useEffect } from 'react'
import Card from './Card.jsx'

function CardlistRender({cardList, numShow}){

    const [numShown, setNumShow] = useState("");
    const[cardsListed, setCards] = useState([]);

    useEffect(() =>{
        setNumShow(numShow);
    }, [numShow]);
    useEffect(() => {
        setCards(cardList.data);
    }, [cardList])

    useEffect(() => {
        console.log(numShown);
    }, [numShown])
    useEffect(() => {
        console.log(cardsListed);
    }, [cardsListed])





    return(
        <>
        <p>Hi</p>
        </>
    );
}

export default CardlistRender