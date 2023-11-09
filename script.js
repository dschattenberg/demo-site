const internalDatabase = [
    { id: 1, number: 123, description: 'First number' },
    { id: 2, number: 456, description: 'Second number' },
    // Add more entries as needed
];

function searchNumbers(event) {
    event.preventDefault();

    const numberQuery = parseInt(document.getElementById('numberQuery').value);

    const results = internalDatabase.filter(entry => entry.number === numberQuery);

    displayResults(results);
}

function displayResults(results) {
    const resultsContainer = document.getElementById('searchResults');

    if (results.length > 0) {
        resultsContainer.innerHTML = '';

        results.forEach(result => {
            const resultElement = document.createElement('div');
            resultElement.innerHTML = `<h3>${result.number}</h3><p>${result.description}</p>`;
            resultsContainer.appendChild(resultElement);
        });
    } else {
        resultsContainer.innerHTML = '<p>No results found.</p>';
    }
}

function submitForm(event) {
    event.preventDefault(); // Prevents the default form submission behavior

    // You can add additional logic here to handle the form submission, such as sending data to a server

    alert('Form submitted!'); // For demonstration purposes, replace this with your own logic
}
function copyNumber() {
    const sourceNumber = document.getElementById('numberQuery').value;
    document.getElementById('CardNumber').value = sourceNumber;
}

