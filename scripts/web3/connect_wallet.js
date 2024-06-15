import { checkConnection,retrievePublicKey } from "./frieghter"

const btn = document.getElementById('myButton')

btn.addEventListener("click", async function() {
    if(checkConnection){
        var popup = document.getElementById("popup");
        const key= await retrievePublicKey();
        popup.style.display = "block"; 
        popup.innerHTML = "Connected to Frieghter wallet! " + key
        // position: fixed;
        // bottom: 16px;
        // right: 16px;
      
        setTimeout(function() {
            btn.style.position = "absolute";
            btn.style.left= "56px";
            btn.style.top = "700px";
            btn.textContent="Connected /check"
            popup.style.display = "none"; 
        }, 2000);
    }else{
        console.log("No connection")
    }
});