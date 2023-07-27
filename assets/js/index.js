const playerForm = document.getElementById("Username");

playerForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const playerName = document.getElementById("player").value;
    localStorage.setItem("playerName", playerName); // Spielername im localStorage speichern

    window.location.href = "quiz.html"; // Kein URL-Parameter nötig
});