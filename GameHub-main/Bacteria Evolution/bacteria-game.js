// Initial game state
let bacteriaCount = 0;
let bacteriaPerClick = 1;
let replicationRate = 1; // for future use
let autoGrowth = 0; // Automatically gained bacteria per second
let upgrade1Cost = 10;
let upgrade2Cost = 100;
let upgrade3Cost = 50; // Cost for automated growth
let upgrade1Purchased = false;
let upgrade2Purchased = false;
let upgrade3Purchased = false; // For tracking if automated growth has been purchased

// DOM elements
const bacteriaCountElement = document.getElementById('bacteria-count');
const autoGrowthElement = document.getElementById('auto-growth');
const replicateBtn = document.getElementById('replicate-btn');
const buyUpgrade1Btn = document.getElementById('buy-upgrade-1');
const buyUpgrade2Btn = document.getElementById('buy-upgrade-2');
const buyUpgrade3Btn = document.getElementById('buy-upgrade-3');

// Sound elements
const replicateSound = document.getElementById('replicate-sound');
const upgradeSound = document.getElementById('upgrade-sound');

// Function to update the bacteria count display
function updateBacteriaCount() {
    bacteriaCountElement.innerText = bacteriaCount;
}

// Function to update the automated growth display
function updateAutoGrowth() {
    autoGrowthElement.innerText = autoGrowth;
}

// Function for replicating bacteria when clicking the button
replicateBtn.addEventListener('click', () => {
    bacteriaCount += bacteriaPerClick;
    updateBacteriaCount();
    replicateSound.currentTime = 0; // Reset sound to start
    replicateSound.play(); // Play the replicate sound
});

// Function to buy the Faster Replication upgrade
buyUpgrade1Btn.addEventListener('click', () => {
    if (bacteriaCount >= upgrade1Cost && !upgrade1Purchased) {
        bacteriaCount -= upgrade1Cost;
        bacteriaPerClick += 1;
        upgrade1Purchased = true;
        buyUpgrade1Btn.disabled = true;
        buyUpgrade1Btn.innerText = 'Purchased';
        updateBacteriaCount();
        upgradeSound.currentTime = 0; // Reset sound to start
        upgradeSound.play(); // Play the upgrade sound
    }
});

// Function to buy the Colonize New Environment upgrade
buyUpgrade2Btn.addEventListener('click', () => {
    if (bacteriaCount >= upgrade2Cost && !upgrade2Purchased) {
        bacteriaCount -= upgrade2Cost;
        upgrade2Purchased = true;
        buyUpgrade2Btn.disabled = true;
        buyUpgrade2Btn.innerText = 'Purchased';
        // TODO: Unlock new features or environments here.
        updateBacteriaCount();
        upgradeSound.currentTime = 0; // Reset sound to start
        upgradeSound.play(); // Play the upgrade sound
    }
});

// Function to buy the Automated Growth upgrade
buyUpgrade3Btn.addEventListener('click', () => {
    if (bacteriaCount >= upgrade3Cost && !upgrade3Purchased) {
        bacteriaCount -= upgrade3Cost;
        autoGrowth += 1; // Increase automated growth rate
        upgrade3Purchased = true;
        buyUpgrade3Btn.disabled = true;
        buyUpgrade3Btn.innerText = 'Purchased';
        updateBacteriaCount();
        updateAutoGrowth();
        upgradeSound.currentTime = 0; // Reset sound to start
        upgradeSound.play(); // Play the upgrade sound
    }
});

// Automated bacteria growth
setInterval(() => {
    bacteriaCount += autoGrowth; // Increase bacteria count based on autoGrowth
    updateBacteriaCount();
}, 1000); // Update every second
