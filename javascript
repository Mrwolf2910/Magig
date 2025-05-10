function navigate(sectionId) {
  const sections = document.querySelectorAll('.content');
  sections.forEach(section => {
    section.classList.add('hidden');
  });
  document.getElementById(sectionId).classList.remove('hidden');
}

function startAdventure() {
  alert("The adventure begins! The wind whispers secrets of the Dragon Mage...");
  navigate('quest');
}

function nextTrial() {
  alert("You step further into the dark forest, feeling the ominous presence grow stronger...");
}
