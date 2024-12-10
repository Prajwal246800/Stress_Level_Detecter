document.getElementById("stress-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    let totalScore = 0;

    for (let value of formData.values()) {
        totalScore += parseInt(value);
    }

    const stressLevel = document.getElementById("stress-level");
    const recommendations = document.getElementById("recommendations");
    const resultContainer = document.getElementById("result-container");

    if (totalScore <= 8) {
        stressLevel.textContent = "Low";
        recommendations.innerHTML = `
            <p>Great job managing stress! Keep it up with:</p>
            <ul>
                <li>Regular physical activity</li>
                <li>Mindfulness meditation</li>
                <li>Spending time with loved ones</li>
            </ul>`;
    } else if (totalScore <= 12) {
        stressLevel.textContent = "Medium";
        recommendations.innerHTML = `
            <p>You're doing okay but could improve:</p>
            <ul>
                <li>Try yoga or deep-breathing exercises</li>
                <li>Maintain a balanced diet</li>
                <li>Take short breaks during the day</li>
            </ul>`;
    } else {
        stressLevel.textContent = "High";
        recommendations.innerHTML = `
            <p>Your stress levels are high. It's essential to take action:</p>
            <ul>
                <li>Consider professional counseling</li>
                <li>Practice guided meditation</li>
                <li>Engage in hobbies or activities you enjoy</li>
            </ul>`;
    }

    resultContainer.style.display = "block";
});
