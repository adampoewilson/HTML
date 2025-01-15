// Fetch data from the Python backend
fetch('/api/data')
  .then(response => response.json()) // Convert response to JSON
  .then(data => {
    // Update HTML with dynamic data
    document.getElementById("myH1").textContent = "Hello!";
    document.getElementById("myP").textContent = "Welcome to my dynamic website!";
    document.getElementById("P1").textContent = `Your name is ${data.fullName}`;
    document.getElementById("P2").textContent = `You are ${data.age} years old`;
  })
  .catch(error => {
    console.error('Error fetching data:', error);
    document.getElementById("myH1").textContent = "Error loading data.";
  });
