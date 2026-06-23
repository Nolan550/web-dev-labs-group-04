const calcBtn = document.getElementById("calcBtn");

calcBtn.addEventListener("click", function () {

    let score = document.getElementById("scoreInput").value;
    let results = document.getElementById("results");

    if (score === "" || isNaN(score)) {
        results.innerHTML =
            "<p>Please enter a valid number.</p>";
        return;
    }

    score = Number(score);

    if (score < 0 || score > 100) {
        results.innerHTML =
            "<p>Score must be between 0 and 100.</p>";
        return;
    }
    let grade;

    if (score >= 70) {
        grade = "A";
    }
    else if (score >= 60) {
        grade = "B";
    }
    else if (score >= 50) {
        grade = "C";
    }
    else if (score >= 40) {
        grade = "D";
    }
    else {
        grade = "F";
    }

    results.innerHTML =
        "<h3>Result</h3>" +
        "<p>Score: " + score + "</p>" +
        "<p>Grade: " + grade + "</p>";

    document.getElementById("scoreInput").value = "";
});