const person= {
    name: 'Yuumi',
    level: 100,
    isSupport: true,
    abilities: ['Passive','Feline Friendship', 'Prowling Projectile', 'You and Me!', 'Zoomies', 'Final Chapter']
};

function showAbilities() { 
    const abilitiesDiv = document.getElementById("abilities");
    const backgroundAudio = document.getElementById("background-audio");
    if (abilitiesDiv.innerHTML) {
        abilitiesDiv.innerHTML = "";
    } else {
      abilitiesDiv.innerHTML = person.abilities.join(", ");
      if (backgroundAudio.paused) {
        backgroundAudio.play();
      }
    }
    }
const abilitiesButton = document.getElementById("abilities-button");
abilitiesButton.addEventListener("click", showAbilities);