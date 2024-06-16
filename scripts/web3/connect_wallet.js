import { checkConnection,retrievePublicKey } from "./frieghter"

const btn = document.getElementById('myButton')


btn.addEventListener("click", async function() {
    if(checkConnection){
        var popup = document.getElementById("popup");
        const key= await retrievePublicKey();
        popup.style.display = "block"; 
        popup.innerHTML = "Connected to Frieghter wallet! " + key;
        btn.style.display ="none";

      
        setTimeout(function() {


            popup.style.display = "none"; 
        }, 2000);
    }else{
        console.log("No connection")
    }
});