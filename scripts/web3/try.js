const { Server, Keypair } = require('stellar-sdk');

const { SorobanClient, Network } = require('soroban-client');

async function main() {
    const horizonURL = 'https://horizon-testnet.stellar.org'; // Replace with your Horizon server URL
    const secretKey = 'your_secret_key'; // Replace with your actual secret key
    const contractAddress = 'your_contract_address'; // Replace with your actual contract address on Stellar

    const server = new Server(horizonURL);
    const keypair = Keypair.fromSecret(secretKey);

    const soroban = new SorobanClient({
        serverUrl: horizonURL,
        network: Network.Testnet, // Replace with Network.Mainnet for the main Stellar network
        keypair: keypair
    });

    try {
        // Example: Calling a contract function
        const result = await soroban.contractCall(contractAddress, 'your_function_name', ['argument1', 'argument2']);
        console.log('Contract call result:', result);

        // Example: Query contract state
        const state = await soroban.contractQuery(contractAddress, 'state');
        console.log('Contract state:', state);
    } catch (error) {
        console.error('Error:', error);
    }
}

main().catch(console.error);
