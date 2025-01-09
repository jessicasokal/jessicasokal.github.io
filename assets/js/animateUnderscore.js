window.setInterval(animateUnderScore, 600);

function animateUnderScore() {
    const underscore = document.getElementById("underscore");
    if (window.getComputedStyle(underscore).visibility === "hidden") {
        underscore.style.visibility = "visible";
    }
    else {
        underscore.style.visibility = "hidden";
    }
}