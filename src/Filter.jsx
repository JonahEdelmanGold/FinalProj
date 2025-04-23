import { useState, useEffect } from 'react'

function Filter(){

    const [Cards, setCards] = useState("");
    const [url, setUrl] = useState("https://api.scryfall.com/cards/search?q=c%3Awhite+mv%3D1");
    const apiUrl = "https://api.scryfall.com/cards/search?q=";
    useEffect(() => {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                let listsof = JSON.parse(this.response);
                //console.log(listsof);
                setCards(listsof);
            }
        };

        let query2 = encodeURIComponent("mv:3")
        //console.log(query2);
        let url2 = apiUrl + query2;
        console.log(url2);

        xhttp.open("GET", url2, true);   
        xhttp.send();
    }, [url]);

    function setButton(){
        setUrl();
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
    }


    const Checkbox = ({label, value}) =>{
        const [checked, setChecked] = useState({value});
        return(
            <p>{label}</p>
        );
    };

    return(
        <>
        <button onClick={setButton}>Click Here</button>
        <form id = "ColorFilter" onSubmit = {handleSubmit}>
            
        </form>
        </>
    );
}
export default Filter
