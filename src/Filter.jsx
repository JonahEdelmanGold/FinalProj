import { useState, useEffect, useContext } from 'react'

function Filter({Cards, numberShown}){

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

const orderQueryCheck = {
    ManaValue: "order:cmc",
    EDHRank: "order:edhrec",
    ReleaseDate: "order:released",
    Price: "order:usd"
};
const directionCheck = {
    Asc: "dir=asc",
    Desc: "dir=desc"
};

    const handleSubmit = (e) =>{
        e.preventDefault();
        const formValues = Array.from(e.target.elements);
        //console.log(formValues)
        let newQuery = "";
        numberShown(e.target.NumberShown.value);


        formValues.forEach((element) => { 
            if(element.className == "Color" && element.checked == true){
                if(element.name !== "Blue"){
                    newQuery = newQuery + element.name[0];
                }else{
                    newQuery = newQuery + "U";
                }
            }
        });
        let colorQuery = ("color="+ newQuery + "(game:paper)");
        if (e.target.isCommander.checked == true){
            colorQuery = colorQuery + "is:commander"
        }
        
        let orderQuery = e.target.sortOrder.value;
        orderQuery = orderQueryCheck[orderQuery];
        let direction = directionCheck[e.target.order.value];

        let finalQuery = encodeURI(colorQuery +"&" + orderQuery + "&" + direction);


        let url2 = apiUrl + finalQuery;
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
                <input type = "checkbox" name = "isCommander" value = "isCommander"></input>
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
                <br></br>
                <label for="NumberShown">Number of Cards shown at once?</label>
                <select name = "NumberShown" >
                    <option value = "10">10</option>
                    <option value = "20">20</option>
                    <option value = "50">50</option>
                </select>
            </div>
            <input type = "submit" value = "Submit"></input>
        </form>
        </>
    );
}
export default Filter
