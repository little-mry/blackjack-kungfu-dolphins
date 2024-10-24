function resetGame() {
    // Knapp för att ladda om hemsidan
    location.reload(true);
    startBtn.classList.remove("hidden");
    
    // Återaktivera knappar
    document.getElementById("continue-btn").disabled = false;
    document.getElementById("stay-btn").disabled = false;
    
}

document.getElementById("reset-btn").addEventListener("click", resetGame);



