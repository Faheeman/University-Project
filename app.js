Array.from(document.getElementsByTagName('input')).forEach((e , i)=>{
    e.addEventListener('keyup', (el)=>{
        if (e.value.length > 0) {
            document.getElementsByClassName('bi-caret-down-fill')[i].style.transform = "rotate(180deg)";
        } else {
            document.getElementsByClassName('bi-caret-down-fill')[i].style.transform = "rotate(0deg)";
        }
    })
})

let menu_btn = document.getElementsByClassName('bi-three-dots')[0];
let menu_bx = document.getElementById('menu_bx');


menu_btn.addEventListener('click', ()=>{
    menu_bx.classList.toggle('ul_active');
})
// Sample data for destinations
const destinations = [
    { name: "Sreemangal", location: "Sylhet", price: "7999 Taka", description: "Tea gardens and tranquility." },
    { name: "Cox's Bazar", location: "Cox's Bazar", price: "8999 Taka", description: "World's longest sea beach." },
    { name: "Kushtia", location: "Khulna", price: "5999 Taka", description: "Historical landmarks and serenity." },
    { name: "Bandarban", location: "Bandarban", price: "9999 Taka", description: "Hills, waterfalls, and adventure." }
];

// Function to display search results
function displayResults(results) {
    const resultsContainer = document.getElementById("results-container");
    resultsContainer.innerHTML = ""; // Clear previous results

    if (results.length === 0) {
        resultsContainer.innerHTML = "<p>No destinations match your search.</p>";
        return;
    }

    results.forEach((destination) => {
        const card = document.createElement("div");
        card.classList.add("result-card");
        card.innerHTML = `
            <h3>${destination.name}</h3>
            <p>${destination.location}</p>
            <p>${destination.price}</p>
            <p>${destination.description}</p>
        `;
        resultsContainer.appendChild(card);
    });
}

// Show search box when "Start your search" is clicked
document.getElementById("startSearchBtn").addEventListener("click", () => {
    const searchBox = document.getElementById("searchBox");
    searchBox.classList.toggle("hidden"); // Toggle visibility
});

// Search functionality
document.getElementById("search-btn").addEventListener("click", () => {
    const searchLocation = document.getElementById("location").value.toLowerCase();
    const filteredDestinations = destinations.filter(destination =>
        destination.name.toLowerCase().includes(searchLocation)
    );
    displayResults(filteredDestinations);
});
function scrollToSection() {
    document.getElementById("target-section").scrollIntoView({ behavior: "smooth" });
}


