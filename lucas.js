function resetGame() {
    // Återställ korten
    // Exempel: document.getElementById("cards-container").innerHTML = "";
    
    // Återställ poäng eller andra variabler
    // Exempel: score = 0;
    
    // Gör startknappen synlig igen om det behövs
    startBtn.classList.remove("hidden");
    
    // Återaktivera knappar
    document.getElementById("continue-btn").disabled = false;
    document.getElementById("stay-btn").disabled = false;
}

// Koppla funktionen till knappen
document.getElementById("resetButton").addEventListener("click", resetGame);