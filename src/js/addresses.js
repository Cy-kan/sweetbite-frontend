document.getElementById('add-address-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const county = document.getElementById('county').value;
    const constituency = document.getElementById('constituency').value;
    const estateStreetRoad = document.getElementById('estateStreetRoad').value;
    const description = document.getElementById('description').value;
    const errorMessageDiv = document.getElementById('address-error');

    errorMessageDiv.textContent = ''; // Clear any previous error messages

    // Basic validation example
    if (!county || !constituency || !estateStreetRoad) {
        errorMessageDiv.textContent = 'Please fill in all required address fields (County, Constituency, Estate/Street/Road).';
        return;
    }

    alert(`Address Submitted:\nCounty: ${county}\nConstituency: ${constituency}\nEstate/Street/Road: ${estateStreetRoad}\nDescription: ${description}\n\n(This data is not saved persistently in a static site)`);
    
    // Optionally clear the form after submission
    this.reset();
});