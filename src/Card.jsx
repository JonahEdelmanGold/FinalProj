import { useState, useEffect } from 'react'

function Card({cardData, shouldCenter, focusCard}){

    const thisData = cardData;
    let thisImage = "https://cards.scryfall.io/normal/front/2/9/29b5b70d-e5b9-4bc3-87b1-51dc6e5085a5.jpg?1595430467";
    let otherSide = <></>;
    //console.log(thisData.layout);
    //console.log(thisData.card_faces);
    if(Object.hasOwn(thisData, "image_uris")){
        thisImage = thisData.image_uris.small; 
    }else{
        console.log(thisData);
        thisImage = thisData.card_faces[0].image_uris.small;
        otherSide = <img src = {thisData.card_faces[1].image_uris.small}></img>
    }
    //const smallImage = thisImage.small;
    //console.log(thisData.image_status);
    function handleClick(){
        shouldCenter(true);
        focusCard(thisData);
    }

    return(
        <>
        <div className='card' onClick = {handleClick}>
            <img src = {thisImage} alt = {thisData.name}></img>
        </div>
        </>
    );
};

export default Card