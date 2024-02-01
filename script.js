document.addEventListener("DOMContentLoaded", function() {
    // Voeg hier je JavaScript-functionaliteit toe
    console.log("DOM is geladen.");

    // Simulatie van het laden van content via een API of database
    loadContent("products", "product-manual.html");
    loadContent("services", "return-policy.html");
    loadContent("troubleshooting", "common-issues.html");

    // Voeg event listeners toe voor het navigeren tussen secties
    addSectionClickListener("products");
    addSectionClickListener("services");
    addSectionClickListener("troubleshooting");

    // Voeg event listener toe voor zoekbalk
    document.getElementById("searchInput").addEventListener("input", handleSearch);
});

function loadContent(sectionId, contentUrl) {
    // Simuleer het laden van inhoud vanuit een externe bron (API, database, enz.)
    const section = document.getElementById(sectionId);
    const contentContainer = document.createElement("div");

    fetch(contentUrl)
        .then(response => response.text())
        .then(content => {
            contentContainer.innerHTML = content;
            section.appendChild(contentContainer);
        })
        .catch(error => console.error("Fout bij het laden van inhoud:", error));
}

function addSectionClickListener(sectionId) {
    const section = document.getElementById(sectionId);
    const link = section.querySelector("a");

    link.addEventListener("click", function(event) {
        event.preventDefault();
        // Voeg hier de logica toe om de inhoud van de sectie te tonen
        console.log(`Navigeer naar ${sectionId} sectie`);
    });
}

function handleSearch() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const sections = document.querySelectorAll("main section");

    sections.forEach(section => {
        const links = section.querySelectorAll("ul li a");
        links.forEach(link => {
            const linkText = link.textContent.toLowerCase();
            if (linkText.includes(searchTerm)) {
                link.style.display = "block";
            } else {
                link.style.display = "none";
            }
        });
    });
}
