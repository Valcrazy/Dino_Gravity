// Load JSON from file
fetch('dinos.json')
  .then(response => response.json()) // Convert response to JSON
  .then(data => {
    const dinoList = document.getElementById('dinoList');

    // Loop through each dino object in JSON
    data.forEach(dino => {
      const li = document.createElement('li');
      const link = document.createElement('a');

      link.textContent = dino.name;           // Show dino name
      link.href = dino.infoPage;              // Link to the dino info page

      li.appendChild(link);                   // Add link to list item
      dinoList.appendChild(li);               // Add list item to <ul>
    });
  })
  .catch(error => console.error('Error loading JSON:', error));
