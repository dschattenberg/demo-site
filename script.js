document.addEventListener("DOMContentLoaded", function() {
    loadContent("products", "product-manual.html");
    loadContent("services", "return-policy.html");
    loadContent("troubleshooting", "common-issues.html");

    addSectionClickListener("products");
    addSectionClickListener("services");
    addSectionClickListener("troubleshooting");

    document.getElementById("searchInput").addEventListener("input", handleSearch);
});

function loadContent(sectionId, contentUrl) {
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
            const isVisible = linkText.includes(searchTerm);
            link.closest('li').style.display = isVisible ? "block" : "none";
        });
    });
}
