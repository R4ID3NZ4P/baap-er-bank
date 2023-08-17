document.getElementById("btn-deposit").addEventListener("click", () => {
    const depositInput = document.getElementById("deposit-input");
    const depositInputValue = parseFloat(depositInput.value);
    depositInput.value = "";
    if(isNaN(depositInputValue)) {
        alert("Please enter a valid amount!");
        return;
    }

    const depositTotal = document.getElementById("deposit-total");
    const depositTotalValue = parseFloat(depositTotal.innerText);
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalValue = parseFloat(balanceTotal.innerText);

    depositTotal.innerText = (depositTotalValue + depositInputValue);
    balanceTotal.innerText = (balanceTotalValue + depositInputValue);
})