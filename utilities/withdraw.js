document.getElementById("btn-withdraw").addEventListener("click", () => {
    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawInputValue = parseFloat(withdrawInput.value);
    withdrawInput.value = "";
    if(isNaN(withdrawInputValue)) {
        alert("Please enter a valid amount!");
        return;
    }

    const withdrawTotal = document.getElementById("withdraw-total");
    const withdrawTotalValue = parseFloat(withdrawTotal.innerText);
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalValue = parseFloat(balanceTotal.innerText);

    if(withdrawInputValue > balanceTotalValue) {
        alert("Insufficient balance!");
        return;
    }

    withdrawTotal.innerText = (withdrawTotalValue + withdrawInputValue);
    balanceTotal.innerText = (balanceTotalValue - withdrawInputValue);
})