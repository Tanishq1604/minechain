  import * as StellarSdk from "@stellar/stellar-sdk";
  import { checkConnection,retrievePublicKey } from "./frieghter";
if(checkConnection){
  let startTime;
  let elapsedTime = 0;
  let timerRunning = false;
  let timerInterval;

  function startTimer() {
    startTime = Date.now();
    console.log("timer started")
    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      // console.log("Elapsed time: " + (elapsedTime / 1000).toFixed(2) + " seconds");
    }, 1000);
    timerRunning = true;
  }

  function stopTimer() {
    clearInterval(timerInterval);
    timerRunning = false;
    // payment((elapsedTime / 10000).toFixed(2));
  }

  function trying(va) {
    console.log(va);
  }

  async function payment(amt) {
    const key = await retrievePublicKey();
    var server = new StellarSdk.Horizon.Server(
      "https://horizon-testnet.stellar.org"
    );
    var sourceKeys = StellarSdk.Keypair.fromSecret(
      "SDXDMZXOD7Q3TGWVKOACARGXCV2NKB5FNBOGWBYE67BFYAJTIAKCTTRE"
    );

    var destinationId =
      key;
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
              amount: amt,
            })
          )
          .addMemo(StellarSdk.Memo.text("GamePlay Payment"))
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


  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (timerRunning) {
        stopTimer();
      }
    } else {
      if (!timerRunning) {
        elapsedTime = 0; // Reset elapsedTime to 0
        startTimer();
      }
    }
  });
}else{
  console.log("not connected to frieghter wallet")
}