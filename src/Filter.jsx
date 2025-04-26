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
        const formValues = Array.from(e.target.elements);
        let oldQuery = "";
        let newQuery = "";

        console.log(e.target.sortOrder.value);

        formValues.forEach((element) => { 
            if(element.className == "Color" && element.checked == true){
                if(element.name !== "Blue"){
                    newQuery = newQuery + element.name[0];
                }else{
                    newQuery = newQuery + "U";
                }
            }
        });
        setQuery(newQuery);
        let colorQuery = encodeURI("color="+ newQuery);
        //console.log(colorQuery);
        let url2 = apiUrl + colorQuery;
        setUrl(url2);
    }

    
    return(
        <>
        <form id = "ColorFilter" onSubmit = {handleSubmit}>
            <div id = "checkboxes">
            <input type = "checkbox" name = "White" className = "Color" ></input>
                <label for="White">White</label>
            <input type = "checkbox" name = "Blue"className = "Color"></input>
                <label for="Blue">Blue</label>
            <input type = "checkbox" name = "Black"className = "Color"></input>
                <label for="Black">Black</label>
            <input type = "checkbox" name = "Red"className = "Color"></input>
                <label for="Red">Red</label>
            <input type = "checkbox" name = "Green"className = "Color"></input>
                <label for="Green">Green</label>
            </div>
            <div id = "additional">
                <input type = "checkbox" name = "isCommander"></input>
                    <label for="isCommander">isCommander?</label>
            </div>
            <div id = "sortlist">
                <select name = "sortOrder">
                    <option value = "ReleaseDate">Release Date</option>
                    <option value = "Price">Price</option>
                    <option value = "ManaValue">Mana Value</option>
                    <option value = "EDHRank">EDH popularity</option>
                </select>
                <input type = "radio" name= "order" value = "Asc" id = "Asc"></input>
                    <label for = "Asc">Ascending</label>
                <input type = "radio" name= "order" value = "Desc" id = "Desc"></input>
                    <label for = "Desc">Descending</label>
            </div>
            <input type = "submit" value = "Submit"></input>
        </form>
        </>
    );
}
export default Filter
