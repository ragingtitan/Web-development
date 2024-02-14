let search = document.querySelector(".search");
let searchBtn = document.getElementById('search-btn');
let map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

searchBtn.addEventListener('click', async () => {
    let searchValue = search.value.trim();
    if (searchValue === '') {
        alert("Please enter something");
        search.focus();
        return;
    }

    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${searchValue}`);
        const data = await response.json();
        console.log(data)
        if (data.length > 0) {
            const { lat, lon } = data[0];
            const marker = L.marker([lat, lon]).addTo(map);
            map.setView([lat, lon], 13);
        } else {
            alert("Location not found");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        alert("An error occurred while fetching data");
    }
});
