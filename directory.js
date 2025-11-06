fetch('members.json')
  .then(response => response.json())
  .then(members => {
    const grid = document.getElementById('directory-grid');

    members.forEach(member => {
      const memberDiv = document.createElement('div');
      memberDiv.className = 'member';

      memberDiv.innerHTML = `
        <img src="${member.image}" alt="${member.name}">
        <h3>${member.name}</h3>
        <p>${member.title}</p>
        <p><a href="mailto:${member.email}">${member.email}</a></p>
      `;

      grid.appendChild(memberDiv);
    });
  })
  .catch(err => console.error('Error loading members:', err));