let gifVisible = false;

const person= {
    name: 'Yuumi',
    level: 100,
    isSupport: true,
    abilities: ['Passive: Feline Friendship', 'Prowling Projectile', 'You and Me!', 'Zoomies', 'Final Chapter']
};

function showAbilities() { 
    const abilitiesDiv = document.getElementById("abilities");
    const backgroundAudio = document.getElementById("background-audio");
    const noddingCat = document.getElementById("nodding-cat");

    if (abilitiesDiv.innerHTML) {
        abilitiesDiv.innerHTML = "";
    } else {
      abilitiesDiv.innerHTML = person.abilities.join(", ");
      if (backgroundAudio.paused) {
        backgroundAudio.play();
      }
      if (!gifVisible) {
        noddingCat.style.display = "block";
        gifVisible = true; 
      }
    }
    }
const abilitiesButton = document.getElementById("abilities-button");
abilitiesButton.addEventListener("click", showAbilities);