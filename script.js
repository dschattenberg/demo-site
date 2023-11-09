const internalDatabase = [
    { id: 1, number: 123, description: 'anonymous card' },
    { id: 2, number: 456, description: 'anonymous card' },
     { id: 3, number: 999, description: 'anonymous card' },
     { id: 4, number: 888, description: 'anonymous card' },
     { id: 5, number: 666, description: 'anonymous card' },
     { id: 6, number: 777, description: 'anonymous card' },
     { id: 7, number: 444, description: 'anonymous card' },
    // Add more entries as needed
];

function searchNumbers(event) {
    event.preventDefault();

    const numberQuery = parseInt(document.getElementById('numberQuery').value);

    const results = internalDatabase.filter(entry => entry.number === numberQuery);

    displayResults(results);
}

    function copyNumberToCard(event) {
    const numberQuery = document.getElementById('numberQuery');
    const cardNumberField = document.getElementById('cardNumberField');

    cardNumberField.value = numberQuery.value;
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
        resultsContainer.innerHTML = '<p>No Air Miles card found.</p>';
    }
}

function submitForm(event) {
    event.preventDefault(); // Prevents the default form submission behavior

    // You can add additional logic here to handle the form submission, such as sending data to a server

    alert('Form submitted!'); // For demonstration purposes, replace this with your own logic

}



