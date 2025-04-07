let homeScore = 0 
let homeScoreDisplay = document.getElementById("home-score")

let guestScore = 0
let guestScoreDisplay = document.getElementById("guest-score")

homeScore.innerText = 0;

function add1home () {
    homeScore += 1
    homeScoreDisplay.innerText = homeScore
}

function add2home () {
    homeScore += 2
    homeScoreDisplay.innerText = homeScore
}

function add3home () {
    homeScore += 3
    homeScoreDisplay.innerText = homeScore
}

function add1guest () {
    guestScore += 1
    guestScoreDisplay.innerText = guestScore
}

function add2guest () {
    guestScore += 2
    guestScoreDisplay.innerText = guestScore
}

function add3guest () {
    guestScore += 3
    guestScoreDisplay.innerText = guestScore
}

function reset () {
    guestScoreDisplay.innerText = 0
    homeScoreDisplay.innerText = 0
}