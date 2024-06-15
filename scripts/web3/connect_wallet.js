import { checkConnection,retrievePublicKey } from "./frieghter"

const btn = document.getElementById('myButton')

btn.addEventListener("click", function() {
    if(checkConnection){
        var popup = document.getElementById("popup");
        popup.style.display = "block"; 
        popup.innerHTML = "Connected to Frieghter wallet! " +  retrievePublicKey
        btn.style.display= "none"
        setTimeout(function() {
            popup.style.display = "none"; 
        }, 2000);
    }else{
        console.log("No connection")
    }
});