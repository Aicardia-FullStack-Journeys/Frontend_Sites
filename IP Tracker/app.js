const apiKey = keyGenerator();
const apiUrl = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=`;

const ipAddressElement = document.querySelector('.ip-address-content');
const locationElement = document.querySelector('.location-content');
const timezoneElement = document.querySelector('.timezone-content');
const ispElement = document.querySelector('.isp-content');
//const mapContainer = document.getElementById('map');

const searchButton = document.querySelector('.search-btn');
const ipInput = document.querySelector('.ip-input');

var map = L.map('map').setView([51.503399, -0.119519], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.503399, -0.119519]).addTo(map)

    //.bindPopup('London Eye, London')
    //.openPopup();


searchButton.addEventListener('click', () => {

  const ipAddress = ipInput.value;

  //console.log("You clicked me!!!");
      
  fetch(apiUrl + ipAddress)
    .then(response => response.json())
    .then(data => {
      console.log(data);

      ipAddressElement.textContent = data.ip;
      locationElement.textContent = data.location.city + ', ' + data.location.country;
      timezoneElement.textContent = 'UTC' + data.location.timezone;
      ispElement.textContent = data.isp;

      map.setView([data.location.lat, data.location.lng], 13);

      map.eachLayer(layer => {
        if (layer instanceof L.Marker) {
          map.removeLayer(layer);
        }
      });

      L.marker([data.location.lat, data.location.lng]).addTo(map)
        //.bindPopup(data.location.city)
        //.openPopup();

    })
    
    .catch(error => {
      console.error('Error fetching IP information:', error);
    });
});
