// Initial game state
let bacteriaCount = 0;
let bacteriaPerClick = 1;
let replicationRate = 1;
let upgrade1Cost = 10;
let upgrade2Cost = 100;
let upgrade1Purchased = false;
let upgrade2Purchased = false;

// DOM elements
const bacteriaCountElement = document.getElementById('bacteria-count');
const replicateBtn = document.getElementById('replicate-btn');
const buyUpgrade1Btn = document.getElementById('buy-upgrade-1');
const buyUpgrade2Btn = document.getElementById('buy-upgrade-2');

// Function to update the bacteria count display
function updateBacteriaCount() {
    bacteriaCountElement.innerText = bacteriaCount;
}

// Function for replicating bacteria when clicking the button
replicateBtn.addEventListener('click', () => {
    bacteriaCount += bacteriaPerClick;
    updateBacteriaCount();
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
    }
});
