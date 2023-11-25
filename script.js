function processDonation() {
    // Simulate a donation process (replace this with actual payment gateway integration).
    const amount = document.getElementById("amount").value;
    
    // Check if the amount is valid
    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid donation amount.");
        return;
    }

    // Display thank-you message
    document.getElementById("donationForm").style.display = "none";
    document.getElementById("thankYouMessage").style.display = "block";
    document.getElementById("donationAmount").innerText = "$" + amount;
}