function checkReadiness() {

    let aptitude = Number(document.getElementById("aptitude").value);
    let coding = Number(document.getElementById("coding").value);
    let communication = Number(document.getElementById("communication").value);
    let projects = Number(document.getElementById("projects").value);
    let internship = document.getElementById("internship").value;

    let result = document.getElementById("result");

    if (
        aptitude < 0 || aptitude > 100 ||
        coding < 0 || coding > 100 ||
        communication < 0 || communication > 100 ||
        projects < 0 ||
        isNaN(aptitude) || isNaN(coding) || isNaN(communication) || isNaN(projects)
    ) {
        result.innerHTML = "Please enter valid values.";
        return;
    }

    let projectScore = projects * 5;

    if (projectScore > 20) {
        projectScore = 20;
    }

    let internshipScore = 0;

    if (internship === "yes") {
        internshipScore = 10;
    }

    let readinessScore =
        (aptitude * 0.25) +
        (coding * 0.35) +
        (communication * 0.20) +
        projectScore +
        internshipScore;

    let level = "";
    let suggestion = "";

    if (readinessScore >= 80) {
        level = "Excellent";
        suggestion = "You are highly ready for placement drives.";
    } else if (readinessScore >= 60) {
        level = "Good";
        suggestion = "You are ready, but should improve coding and interview practice.";
    } else if (readinessScore >= 40) {
        level = "Average";
        suggestion = "You need to improve aptitude, coding, and communication skills.";
    } else {
        level = "Needs Improvement";
        suggestion = "Start preparation with basic coding, aptitude, and resume building.";
    }

    result.innerHTML =
        "<b>Placement Readiness Score:</b> " + readinessScore.toFixed(2) + "%<br><br>" +
        "<b>Readiness Level:</b> " + level + "<br><br>" +
        "<b>Suggestion:</b> " + suggestion;
}