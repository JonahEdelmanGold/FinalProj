import { useState, useEffect } from 'react'

function Card(cardData){
    
    const thisData = cardData.cardData;
    let thisImage = "https://cards.scryfall.io/normal/front/2/9/29b5b70d-e5b9-4bc3-87b1-51dc6e5085a5.jpg?1595430467";
    let otherSide = <></>;
    //console.log(thisData.layout);
    //console.log(thisData.card_faces);
    if(thisData.card_faces == undefined){
        thisImage = thisData.image_uris.small; 
    }
    else{
        thisImage = thisData.card_faces[0].image_uris.small;
        //console.log(cardData);
        otherSide = <img src = {thisData.card_faces[1].image_uris.small}></img>
    }
    //const smallImage = thisImage.small;
    //console.log(thisData.image_status);


    return(
        <>
        <img src = {thisImage} alt = {thisData.name}></img>
        </>
    );
};

export default Card