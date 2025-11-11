fetch('members.json') // Make sure the file name matches
  .then(response => response.json())
  .then(data => {
    const grid = document.getElementById('directory-grid');

    // Create family cards
    data.families.forEach(family => {
      const card = document.createElement('div');
      card.classList.add('family-card');
      card.innerHTML = `
        <img src="${family.familyImage}" alt="${family.familyName}">
        <h3>${family.familyName}</h3>
      `;

      // Open modal on click
      card.addEventListener('click', () => openModal(family));

      grid.appendChild(card);
    });
  })
  .catch(err => console.error('Error loading directory:', err));

// Modal controls
const modal = document.getElementById('family-modal');
const closeModal = document.getElementById('close-modal');
const familyDetails = document.getElementById('family-details');

function openModal(family) {
  familyDetails.innerHTML = `
    <h2>${family.familyName}</h2>
    <img src="${family.familyImage}" alt="${family.familyName}" class="family-image">
    <div class="family-members">
      ${family.members.map(member => `
        <div class="member">
          <img src="${member.image}" alt="${member.name}">
          <div>
            <strong>${member.name}</strong><br>
            <a href="mailto:${member.email}">${member.email}</a><br>
            <span>${member.phone}</span><br>
            <span>${member.address}</span>
          </div>
        </div>
      `).join('')}
    </div>
  `;
  modal.style.display = 'flex';
}

// Close modal on click
closeModal.onclick = () => modal.style.display = 'none';

// Close modal when clicking outside content
window.onclick = (e) => {
  if (e.target === modal) modal.style.display = 'none';
};
