// Check if MetaMask is installed
if (typeof window.ethereum === 'undefined') {
    document.getElementById('status').innerText = 'MetaMask not detected. Please install MetaMask!';
}

// Connect to MetaMask
let web3;
let userAccount;
let brlToEthRate = 0; // Placeholder for rate

async function connectMetaMask() {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        try {
            // Request account access
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            userAccount = accounts[0];
            document.getElementById('status').innerText = `Connected: ${userAccount}`;
        } catch (error) {
            document.getElementById('status').innerText = 'Connection failed.';
        }
    } else {
        document.getElementById('status').innerText = 'MetaMask is not installed!';
    }
}

// Function to fetch the BRL to ETH exchange rate from CoinGecko
async function fetchBrlToEthRate() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=brl');
        const data = await response.json();
        brlToEthRate = 1 / data.ethereum.brl; // Convert BRL to ETH
        console.log(`Current BRL to ETH rate: ${brlToEthRate}`);
    } catch (error) {
        console.error('Error fetching BRL to ETH rate:', error);
        brlToEthRate = 0; // Default to 0 if the fetch fails
    }
}

document.addEventListener('DOMContentLoaded', () => {
    connectMetaMask();
    fetchBrlToEthRate(); // Fetch the exchange rate when the page loads

    // Update the ETH amount based on BRL input
    const brlAmountInput = document.getElementById('brlAmount');
    const ethAmountDisplay = document.getElementById('ethAmount');

    brlAmountInput.addEventListener('input', () => {
        const brlAmount = parseFloat(brlAmountInput.value);
        if (brlAmount && !isNaN(brlAmount) && brlToEthRate > 0) {
            const ethAmount = brlAmount * brlToEthRate;
            ethAmountDisplay.innerText = ethAmount.toFixed(7); // Display ETH in 7 decimals
        } else {
            ethAmountDisplay.innerText = '0';
        }
    });

    // Handle the payment
    document.getElementById('payButton').addEventListener('click', async () => {
        const ethAmount = parseFloat(ethAmountDisplay.innerText);
        if (ethAmount > 0) {
            const weiAmount = web3.utils.toWei(ethAmount.toString(), 'ether');
            try {
                const tx = await web3.eth.sendTransaction({
                from: userAccount,
                to: '0x7EEB8a167B06C8FDf399444c684E4BAc491c3F5C',  // Replace with the recipient address
                value: weiAmount,
                });
                alert(`Transaction successful! Hash: ${tx.transactionHash}`);
            } catch (error) {
                console.error(error);
                alert('Payment failed.');
            }
        } else {
            alert('Please enter a valid amount.');
        }
    });
});
