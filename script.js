let noClickCount = 0;

function handleYesClick() {
        window.location.href = "yes_page.html";
}

function handleNoClick() {
    noClickCount++;

    const yesBtn = document.querySelector(".yes-button");
    const noBtn = document.querySelector(".no-button");

    // Smooth scaling for YES
    let scale = 1 + (noClickCount * 0.6); 
    yesBtn.style.transform = `scale(${scale})`;

    // Collision detection
    const yesRect = yesBtn.getBoundingClientRect();
    const noRect = noBtn.getBoundingClientRect();

    const overlap = !(noRect.right < yesRect.left ||
                      noRect.left > yesRect.right ||
                      noRect.bottom < yesRect.top ||
                      noRect.top > yesRect.bottom);

    if (overlap) {
        // Move No button smoothly to the right when overlapped
        let currentLeft = parseInt(noBtn.style.left || "0", 10);
        noBtn.style.position = "relative";
        noBtn.style.left = (currentLeft + 100) + "px";
    }

    // After 4 clicks, Yes goes fullscreen
    if (noClickCount >= 4) {
        yesBtn.classList.add("fullscreen");
        yesBtn.innerText = "YES ";
        noBtn.style.opacity = "0"; 
        setTimeout(() => noBtn.style.display = "none", 600);
    }
}









