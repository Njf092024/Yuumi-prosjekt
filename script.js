const person= {
    name: 'Yuumi',
    level: 100,
    isSupport: true,
    abilities: ['Passive','Feline Friendship', 'Prowling Projectile', 'You and Me!', 'Zoomies', 'Final Chapter']
};

function showAbilities() {
    const abilitiesDiv = document.getElementById("abilities");
    abilitiesDiv.innerHTML = person.abilities.join(", ");
}


const abilitiesButton = document.getElementById("abilities-button");
abilitiesButton.addEventListener("click", showAbilities);
