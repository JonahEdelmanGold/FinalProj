import {useState, useEffect} from 'react'

function CenteredCard({focus, card}){

    useEffect(() => {
        if(focus == true){
            console.log(card);
        }
        if(focus == false){
            console.log("false");
        }
    }, [focus])

    return(
        <></>
    );
}


export default CenteredCard