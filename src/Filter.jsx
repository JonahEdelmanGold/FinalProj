<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function Filter(){
//Create a filter for the relevent details
    //Includes:
        //Searchbar
        //Colors
        //Random button
//Have the filter influence the URL
//Then display the cards returned


    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let list = JSON.parse(this.responseText);
            console.log(list.data[1]);
        }
    };
    xhttp.open("GET", "https://api.scryfall.com/cards/search?q=c%3Awhite+mv%3D1", true);
    xhttp.send();
    return(
        <>
        </>
    )
}

export default Filter;
=======
import { useState, useEffect } from 'react'

function Filter(){

    const [Cards, setCards] = useState("");
    const [url, setUrl] = useState("https://api.scryfall.com/cards/search?q=c%3Awhite+mv%3D1");

    useEffect(() => {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                let listsof = JSON.parse(this.response);
                console.log(listsof);
                setCards(listsof);
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    }, [url]);

    function setButton(){
        setUrl();
    }

    return(
        <>
        <button onClick={setButton}>Click Here</button>
        </>
    );
}
export default Filter
>>>>>>> 919853edf312491ab70e319cad221fa895cccf6c
