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