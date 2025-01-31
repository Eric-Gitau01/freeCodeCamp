// Add more flowers dynamically
const garden = document.querySelector('.garden');

function createFlower() {
    const flower = document.createElement('div');
    flower.classList.add('flower');

    const petals = document.createElement('div');
    petals.classList.add('petals');

    const center = document.createElement('div');
    center.classList.add('center');

    const stem = document.createElement('div');
    stem.classList.add('stem');

    flower.appendChild(petals);
    flower.appendChild(center);
    flower.appendChild(stem);

    return flower;
}

// Add 5 more flowers to the garden
for (let i = 0; i < 5; i++) {
    const flower = createFlower();
    garden.appendChild(flower);
}

// Randomize sway animation duration for each flower
document.querySelectorAll('.flower').forEach((flower, index) => {
    const duration = 2 + Math.random() * 2; // Random duration between 2s and 4s
    flower.style.animationDuration = `${duration}s`;
});