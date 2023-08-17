document.getElementById("btn-submit").addEventListener("click", function () {
    const email = document.getElementById("email-input").value;
    const pass = document.getElementById("pass-input").value;

    if(email === "chotopola@bank.com" && pass === "helohelo") {
        window.location.href = "ui.html";
    }

    else {
        alert("Enter valid email and password!!!");
    }
})
