let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

let countHome = 0;
let countGuest = 0;

// ***Home score section
function hSAdd1() {
    countHome += 1;
    homeScore.textContent = countHome;
    highlightWinner();
}
function hSAdd2() {
    countHome += 2;
    homeScore.textContent = countHome;
    highlightWinner();
}
function hSAdd3() {
    countHome += 3;
    homeScore.textContent = countHome;
    highlightWinner();
}

// *** Guest score section
function gSAdd1() {
    countGuest += 1;
    guestScore.textContent = countGuest;
    highlightWinner();
}
function gSAdd2() {
    countGuest += 2;
    guestScore.textContent = countGuest;
    highlightWinner();
}
function gSAdd3() {
    countGuest += 3;
    guestScore.textContent = countGuest;
    highlightWinner();
}

// *** New Game Section
function newGame() {
    countGuest = 0;
    guestScore.textContent = countGuest;
    countHome = 0;
    homeScore.textContent = countHome;
    highlightWinner();
}

// Highlight the winner's score
function highlightWinner() {
    if (countHome > countGuest) {
        homeScore.classList.add("highlight");
        guestScore.classList.remove("highlight");
    } else if (countGuest > countHome) {
        guestScore.classList.add("highlight");
        homeScore.classList.remove("highlight");
    } else {
        // If scores are tied, remove highlights
        homeScore.classList.remove("highlight");
        guestScore.classList.remove("highlight");
    }
}
