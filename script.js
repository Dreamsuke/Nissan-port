const dodgeButton = document.getElementById('dodgeButton');
const unlockImage = document.getElementById('unlockImage');
const bigText = document.getElementById('bigText');

dodgeButton.disabled = true;
let continueDodging = true;

// Dodge Button Logic
dodgeButton.addEventListener('mousemove', function(e) {
    if (!continueDodging) return;

    const rect = dodgeButton.getBoundingClientRect();
    const dodgeAmount = 400;

    let moveX = (e.clientX < rect.left + rect.width / 2) ? dodgeAmount : -dodgeAmount;
    let moveY = (e.clientY < rect.top + rect.height / 2) ? dodgeAmount : -dodgeAmount;

    const maxX = window.innerWidth - rect.width - 20;
    const maxY = window.innerHeight - rect.height - 20;
    const newPosX = rect.x + moveX;
    const newPosY = rect.y + moveY;

    if (newPosX < 0 || newPosX > maxX) moveX = -moveX;
    if (newPosY < 0 || newPosY > maxY) moveY = -moveY;

    dodgeButton.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// Unlock Image Logic: Stops dodging and shows text
unlockImage.addEventListener('click', function() {
    dodgeButton.disabled = false;
    bigText.style.display = 'block';
    setTimeout(() => {
        bigText.style.opacity = '1';
    }, 50);
    continueDodging = false;
});

let angle = 0;
const radius = 300; // Adjust as needed

function moveImageInCircle() {
    const rect = dodgeButton.getBoundingClientRect();
    const centerX = rect.left + rect.width / 20;
    const centerY = rect.top + rect.height / 20;

    angle += 0.01;
    if (angle >= 360) angle = 0;

    const x = centerX + radius * Math.cos(angle) - (unlockImage.width / 20);
    const y = centerY + radius * Math.sin(angle) - (unlockImage.height / 2);

    unlockImage.style.left = `${x}px`;
    unlockImage.style.top = `${y}px`;

    requestAnimationFrame(moveImageInCircle);
}

moveImageInCircle();

dodgeButton.addEventListener('click', function() {
    window.location.href = "https://www.youtube.com/watch?v=CcLQ-ZM3OPM&ab_channel=Haou";  // Replace with your desired link
});
