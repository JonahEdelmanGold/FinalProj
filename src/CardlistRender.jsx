import { useState, useEffect } from 'react'
import Card from './Card.jsx'

function CardlistRender({cardList, numShow}){

    const [numShown, setNumShow] = useState("");
    const[cardsListed, setCards] = useState([]);
    const[mappedCards, setMapped] = useState([]);

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
                <Card key = {index} cardData = {card}></Card>
            ));
            //console.log(tempMapped);
        }
}


    

    return(
        <>
        {mappedCards}
        <section id = "cardList">
        </section>
        <p>Hi</p>
        </>
    );
}

export default CardlistRender