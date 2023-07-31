const playerForm = document.getElementById("Username");

playerForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const playerNameInput = document.getElementById("player");
    const playerName = playerNameInput.value.trim(); // trims whitspace at the Beginning

    if (playerName !== "") { // checks if Playername is empty
        localStorage.setItem("playerName", playerName); // saves PlayerName in localStorage
        window.location.href = "quiz.html";
    } else {
                alert("Please enter a Valid Player Name."); // gives an Alert if the Player enters only Whitespace
    }
});