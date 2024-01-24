let latlng=[51.505, -0.09];
var map = L.map('map').setView(latlng, 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();

    //now searching
    let search=document.querySelector(".search");
    searchValue=search.value;
    console.log(searchValue);
    let searchBtn=document.getElementById('search-btn');
    searchBtn.addEventListener('click',()=>{
        searchValue=search.value;
        if(searchValue=='')
        {
            alert("Please enter something");
            search.focus();
        }
        else{
            console.log(searchValue);
        }
        
    })
    var geojsonMarkerOptions = {
        radius: 8,
        fillColor: "#ff7800",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    };
    
    L.geoJSON(someGeojsonFeature, {
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, geojsonMarkerOptions);
        }
    }).addTo(map);