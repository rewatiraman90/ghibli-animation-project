const steps = [
    {
        id: 1,
        title: "The Vision & Voice",
        description: "Generate the narrative script and voiceover. Remember: Stability 40% for the 'human breath' signal.",
        action_text: "Copy Voiceover Script",
        prompt: "We’re told that if we aren’t producing... But what if the most productive thing you did today was absolutely nothing? [Voice: Soft Storyteller, Stability: 40%]",
        link: "https://elevenlabs.io"
    },
    {
        id: 2,
        title: "Identity Anchor",
        description: "Generate the Master Reference Image for Elara. This ensures she looks the same in every shot.",
        action_text: "Copy Master Prompt",
        prompt: "Studio Ghibli style, a 12-year-old girl with a soft round face and messy black hair with a red ribbon, wearing an indigo sweater and cream overalls, Standing in a lush green meadow, watercolor textures, 90s cel-shaded anime look --ar 16:9",
        link: "https://midjourney.com"
    },
    {
        id: 3,
        title: "Animate Scenes",
        description: "Upload the Master Image and use it as a 'Character Reference' while animating the visual cues.",
        action_text: "Copy First Scene Prompt",
        prompt: "Studio Ghibli style, close-up of a small shiny green frog on a bright green hosta leaf, transparent raindrops, watercolor texture --ar 16:9",
        link: "https://runwayml.com"
    },
    {
        id: 4,
        title: "Atmospheric Layers",
        description: "Layer the foley and ambient sounds. This is your 'Human Signal' 2nd layer.",
        action_text: "View Foley List",
        prompt: "Foley: Rain pitter-patter, Wind moans, Distant thunder, Temple bell chime.",
        link: "#"
    },
    {
        id: 5,
        title: "The Human Edit",
        description: "Add a manual title card or text overlay. This proves a human moved the mouse.",
        action_text: "Download Title Template",
        prompt: "Manual Task: Add Title Overlay + 2026 Disclosure Label",
        link: "#"
    }
];

let currentStep = 0;

function renderSteps() {
    const container = document.getElementById('steps-list');
    container.innerHTML = '';

    steps.forEach((step, index) => {
        const stepEl = document.createElement('div');
        stepEl.className = `step ${index === currentStep ? 'active' : ''} ${index < currentStep ? 'completed' : ''}`;
        stepEl.onclick = () => {
            currentStep = index;
            renderSteps();
        };

        stepEl.innerHTML = `
            <div class="step-number">${step.id}</div>
            <div class="step-content">
                <h3>${step.title}</h3>
                <p>${step.description}</p>
                <div class="action-area">
                    <div class="prompt-box" id="prompt-${step.id}">${step.prompt}</div>
                    <div style="display:flex; gap:10px;">
                        <button onclick="copyPrompt('prompt-${step.id}')">Copy Details</button>
                        ${step.link !== '#' ? `<button class="secondary" onclick="window.open('${step.link}', '_blank')">Open Tool</button>` : ''}
                        <button class="secondary" onclick="nextStep(event)">Mark Done</button>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(stepEl);
    });
}

function copyPrompt(id) {
    const text = document.getElementById(id).innerText;
    navigator.clipboard.writeText(text);
    const btn = event.target;
    const originalText = btn.innerText;
    btn.innerText = "Copied!";
    setTimeout(() => btn.innerText = originalText, 2000);
}

function nextStep(event) {
    event.stopPropagation();
    if (currentStep < steps.length - 1) {
        currentStep++;
        renderSteps();
    } else {
        alert("🎉 Production Complete! Time to upload and disclose.");
    }
}

function createNewVideo() {
    if(confirm("Start a new video production session? Your current progress will reset.")) {
        currentStep = 0;
        renderSteps();
    }
}

document.addEventListener('DOMContentLoaded', renderSteps);
