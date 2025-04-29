import {useState, useEffect} from 'react'
import './Centered.css'

function CenteredCard({focus, card, seeFocus}){

    const [largeImage, setImage] = useState("");
    const [twoSides, setSides] = useState(false);
    const [visual, setVisual] = useState(<></>);
    const [otherSide, setOther] = useState("");
    const [seeifSet, setSee] = useState("none");

    useEffect(() => {
        if(focus == true){
            setSee("true"); 
            changeImage();
        }if(focus == false){
            removeVisual();
        }
    }, [focus])

    useEffect(() => {

    }, [twoSides])
    useEffect(() => {
        if(focus == true){
            visualizeItem();
        }
    }, [largeImage])

    function changeImage(){
        console.log(card);        
        if(Object.hasOwn(card, "image_uris")){
            setImage(card.image_uris.large);
            setSides(false);
        }if(Object.hasOwn(card, "card_faces")){
            if(Object.hasOwn(card.card_faces[0], "image_uris")){
                setImage(card.card_faces[0].image_uris.large);
                setOther(card.card_faces[1].image_uris.large);
                setSides(true);
            }
        }
        //After set num sides, call visualize item
    }
    function swapSides(){
        console.log("swapSides");
    }
    function removeVisual(){
        setSee("none")
        seeFocus(false);
    }

    function visualizeItem(){
        //console.log(card);
        //console.log(focus);
        //console.log(twoSides);

        if(twoSides == true){
            //two sided card
            setVisual(
                <>
                    <img src = {largeImage} alt = "image1"></img>
                    <button onClick = {swapSides} id = "swap">Swap Sides</button>
                    <button onClick = {removeVisual} className = "remove">X</button>
                </>
            )
        }if(twoSides == false){
            setVisual(
                <>
                    <img src = {largeImage} alt = "image1"></img>
                    <button onClick = {removeVisual} className = "remove">X</button>
                </>
            )
            //one sided card
        }
    }




    return(
        <>
        <section id = "centeredCard" className = {seeifSet}>
            {visual}
        </section>
        </>
    );
}


export default CenteredCard