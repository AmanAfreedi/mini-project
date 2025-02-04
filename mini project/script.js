document.getElementById('create-event').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Get form values
    const eventName = document.getElementById('event-name').value;
    const eventDate = document.getElementById('event-date').value;
    const eventTime = document.getElementById('event-time').value;
    const eventDescription = document.getElementById('event-description').value;
  
    // Create event card
    const eventCard = document.createElement('div');
    eventCard.classList.add('event-card');
  
    eventCard.innerHTML = `
      <h3>${eventName}</h3>
      <p><strong>Date:</strong> ${eventDate}</p>
      <p><strong>Time:</strong> ${eventTime}</p>
      <p><strong>Description:</strong> ${eventDescription}</p>
    `;
  
    // Add event card to timeline
    document.getElementById('timeline').appendChild(eventCard);
  
    // Clear form
    document.getElementById('create-event').reset();
  });