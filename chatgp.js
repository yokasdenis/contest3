// Function to create a new timer element
function createTimer() {
    const timerDiv = document.createElement("div");
    timerDiv.classList.add("timer");

    const timerInput = document.createElement("input");
    timerInput.type = "number";
    timerInput.placeholder = "0";
    
    const startButton = document.createElement("button");
    startButton.innerText = "Start";
    
    const stopButton = document.createElement("button");
    stopButton.innerText = "Stop";
    
    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    let intervalId;

    // Start timer
    startButton.addEventListener("click", () => {
        if (!intervalId) {
            intervalId = setInterval(() => {
                timerInput.value = parseInt(timerInput.value) + 1;
            }, 1000);
        }
    });

    // Stop timer
    stopButton.addEventListener("click", () => {
        clearInterval(intervalId);
        intervalId = null;
    });

    // Remove timer
    removeButton.addEventListener("click", () => {
        clearInterval(intervalId);
        timerDiv.remove();
    });
}

document.getElementById("add-timer").addEventListener("click", createTimer);