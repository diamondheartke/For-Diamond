function showPage(page) {
    document.getElementById('home').classList.add('hidden');
    document.getElementById('about').classList.add('hidden');

    document.getElementById(page).classList.remove('hidden');
}

function donate() {
    const amount = document.getElementById("amount").value;

    if (!amount || amount <= 0) {
        document.getElementById("message").innerText =
            "⚠️ Enter a valid amount!";
        return;
    }

    document.getElementById("message").innerText =
        "🎉 Thank you for donating KES " + amount + " (simulation)";
}
