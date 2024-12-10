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

    if (totalScore <= 20) {
        stressLevel.textContent = "Low";
        recommendations.innerHTML = `
            <p>Your stress levels are manageable. To maintain balance, consider:</p>
            <ul>
                <li>Continuing with regular physical activity</li>
                <li>Engaging in mindfulness or gratitude journaling</li>
                <li>Spending quality time with friends and family</li>
                <li>Ensuring sufficient sleep and hydration</li>
            </ul>
            <p>For general relaxation, check out this video:</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/8R2FfRl6V8U?si=qJZXL-7XZZgS1rSk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    } else if (totalScore <= 40) {
        stressLevel.textContent = "Medium";
        recommendations.innerHTML = `
            <p>You're experiencing moderate stress. To reduce it, try:</p>
            <ul>
                <li>Incorporating yoga or deep-breathing exercises into your routine</li>
                <li>Taking frequent short breaks during work hours</li>
                <li>Setting clear boundaries between work and personal life</li>
                <li>Practicing time management to address conflicting demands</li>
                <li>Exploring stress-relief hobbies like painting, gardening, or reading</li>
            </ul>
            <p>Watch this video for relaxation techniques:</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/8R2FfRl6V8U?si=qJZXL-7XZZgS1rSk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    } else {
        stressLevel.textContent = "High";
        recommendations.innerHTML = `
            <p>Your stress levels are high. Please prioritize your well-being:</p>
            <ul>
                <li>Consider professional counseling or therapy</li>
                <li>Practice guided meditation or progressive muscle relaxation</li>
                <li>Delegate tasks where possible to lighten your workload</li>
                <li>Join a support group or talk to trusted colleagues or friends</li>
                <li>Avoid unhealthy coping mechanisms like overeating or excessive screen time</li>
            </ul>
            <p>Here's a helpful video to get started with stress management:</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/8R2FfRl6V8U?si=qJZXL-7XZZgS1rSk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    }

    resultContainer.style.display = "block";
});
