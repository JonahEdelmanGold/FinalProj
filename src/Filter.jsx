import { useState, useEffect, useContext } from 'react'

function Filter({Cards}){

    const [url, setUrl] = useState("");
    const apiUrl = "https://api.scryfall.com/cards/search?q=";

    useEffect(() => {
        console.log(url);
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                let listsof = JSON.parse(this.response);
                //console.log(listsof);
                Cards(listsof)
                //console.log(listsof);
                //console.log(Cards);
            }
        };
        xhttp.open("GET", url, true);   
        xhttp.send();
    }, [url]);
    
    const [queryURL, setQuery] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        const formCheckboxes = Array.from(e.target.elements);
        let oldQuery = "";
        let newQuery = "";

        formCheckboxes.forEach((element) => { 
            if(element.type == "checkbox" && element.checked == true){
                if(element.name !== "Blue"){
                    newQuery = newQuery + element.name[0];
                }else{
                    newQuery = newQuery + "U";
                }
            }
        });
        setQuery(newQuery);
        let colorQuery = encodeURI("color="+ newQuery);
        console.log(colorQuery);
        let url2 = apiUrl + colorQuery;
        setUrl(url2);
    }

    return(
        <>
        <form id = "ColorFilter" onSubmit = {handleSubmit}>
            <input type = "checkbox" name = "White"></input>
                <label for="White">White</label>
            <input type = "checkbox" name = "Blue"></input>
                <label for="Blue">Blue</label>
            <input type = "checkbox" name = "Black"></input>
                <label for="Black">Black</label>
            <input type = "checkbox" name = "Red"></input>
                <label for="Red">Red</label>
            <input type = "checkbox" name = "Green"></input>
                <label for="Green">Green</label>
            <input type = "checkbox" name = "Colorless"></input>
                <label for="Green">Colorless</label>
            <input type = "submit" value = "Submit"></input>
        </form>
        </>
    );
}
export default Filter
