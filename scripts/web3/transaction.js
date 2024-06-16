import * as StellarSdk from '@stellar/stellar-sdk';
import { retrievePublicKey } from './frieghter';

// const pricebtn = document.getElementById('marketButton')
// pricebtn.addEventListener("click",async ()=>{

//     //   console.log("done")
// })
document.addEventListener('DOMContentLoaded', function() {
    var items = document.querySelectorAll('.marketplace .item');
    items.forEach(function(item) {
        item.addEventListener('click', function() {
            var price = this.getAttribute('data-price');
            // var numericPrice = price.match(/\d+/)[0]; // Extracts the numeric part
            var numericPrice = price.match(/\d+/)[0]; // Extracts the numeric part
            // alert('Price: ' + numericPrice);// You can replace this line with any other action you need
            neon(numericPrice);
        });
    });
});

function neon(amt){
    console.log(amt);
}
async function payment(amt) {
        // console.log("first")
        const key = await retrievePublicKey();
        var server = new StellarSdk.Horizon.Server(
          "https://horizon-testnet.stellar.org"
        );
        var sourceKeys = StellarSdk.Keypair.fromSecret(
          "SDXDMZXOD7Q3TGWVKOACARGXCV2NKB5FNBOGWBYE67BFYAJTIAKCTTRE"
        );
    
        var destinationId = "GAYEHFRCF7PROLJGZT4SP2DEHRZLUPYFPSEB3CBGZOTZO3LA3VNHYOF5";
        var transaction;
        // console.log("sec")
        server
          .loadAccount(destinationId)
          .catch(function (error) {
            if (error instanceof StellarSdk.NotFoundError) {
              throw new Error("The destination account does not exist!");
            } else {
              throw error;
            }
          })
          .then(function () {
            return server.loadAccount(sourceKeys.publicKey());
          })
          .then(function (sourceAccount) {
            // Start building the transaction.
            transaction = new StellarSdk.TransactionBuilder(sourceAccount, {
              fee: StellarSdk.BASE_FEE,
              networkPassphrase: StellarSdk.Networks.TESTNET,
            })
              .addOperation(
                StellarSdk.Operation.payment({
                  destination: destinationId,
                  asset: StellarSdk.Asset.native(),
                  amount: "10",
                })
              )
              .addMemo(StellarSdk.Memo.text("Test Transaction"))
              .setTimeout(180)
              .build();
            transaction.sign(sourceKeys);
            return server.submitTransaction(transaction);
          })
          .then(function (result) {
            console.log("Success! Results:", result);
          })
          .catch(function (error) {
            console.error("Something went wrong!", error);
          });
}