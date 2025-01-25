let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let countHome = 0
let countGuest = 0


// ***Home score section
function hSAdd1() {
    countHome += 1
    homeScore.textContent = countHome
}
function hSAdd2() {
    countHome += 2
    homeScore.textContent = countHome
}
function hSAdd3() {
    countHome += 3
    homeScore.textContent = countHome
}

// *** Guest score section
function gSAdd1() {
    countGuest += 1
    guestScore.textContent = countGuest
}
function gSAdd2() {
    countGuest += 2
    guestScore.textContent = countGuest
}
function gSAdd3() {
    countGuest += 3
    guestScore.textContent = countGuest
}