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
        const formCheckboxes = Array.from(e.target.elements);
        //console.log(formCheckboxes);
        formCheckboxes.forEach(element => {
            console.log(element.name + " " + element.checked);
        });
    }


    const Checkbox = ({label}) =>{
        const [checked, setChecked] = useState(true);
        const id = label;

        function handleClick(){
            setChecked(!checked);
            //console.log(checked);
        }

        var thisLabel = label;

        return(
            <>
            <input type = "checkbox" name = {thisLabel} onClick={handleClick}></input>
            <label>{thisLabel}</label>
            </>
        );
    };

    return(
        <>
        <button onClick={setButton}>Click Here</button>
        <form id = "ColorFilter" onSubmit = {handleSubmit}>
            <Checkbox label = "white"></Checkbox>
            <Checkbox label = "blue"></Checkbox>
            <Checkbox label = "black"></Checkbox>
            <Checkbox label = "red"></Checkbox>
            <Checkbox label = "green"></Checkbox>
            <input type = "submit" value = "Submit"></input>
        </form>
        </>
    );
}
export default Filter
