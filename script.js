function createPlan() {
    let subject = document.getElementById("subject").value;
    let hours = Number(document.getElementById("hours").value);
    let difficulty = document.getElementById("difficulty").value;
    let result = document.getElementById("result");

    if (subject === "" || hours <= 0) {
        result.innerHTML = "Please enter subject name and valid study hours.";
        return;
    }

    let reading;
    let practice;
    let revision;

    if (difficulty === "easy") {
        reading = hours * 0.4;
        practice = hours * 0.3;
        revision = hours * 0.3;
    } else if (difficulty === "medium") {
        reading = hours * 0.35;
        practice = hours * 0.4;
        revision = hours * 0.25;
    } else {
        reading = hours * 0.3;
        practice = hours * 0.5;
        revision = hours * 0.2;
    }

    result.innerHTML =
        "<b>Subject:</b> " + subject + "<br>" +
        "<b>Difficulty:</b> " + difficulty + "<br><br>" +
        "Reading Time: " + reading.toFixed(1) + " hours<br>" +
        "Practice Time: " + practice.toFixed(1) + " hours<br>" +
        "Revision Time: " + revision.toFixed(1) + " hours<br><br>" +
        "Plan generated successfully on Google Cloud.";
}