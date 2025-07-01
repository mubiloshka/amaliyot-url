let searchBtn = document.getElementById('searchBtn');
let countryGrid = document.getElementById('countryGrid');


async function dataLocation() {
    try {
        const url = ` https://ipinfo.io/json`; 
        const response = await fetch(url);
        const data = await response.json();
        locationInfo(data);
    } catch (error) {
        console.log('Ошибка:', error);
        countryGrid.innerHTML = `<p>Ошибка при получении местоположения</p>`;
    }
}


function locationInfo(location) {
  let [lat, lon] = location.loc.split(',');
  countryGrid.innerHTML = `
    <div class="card">
      <div class="card-body">
        <h2>IP: ${location.ip}</h2>
        <p><strong>City:</strong> ${location.city}</p>
        <p><strong>Country:</strong> ${location.country}</p>
        <p><strong>Location:</strong> ${location.loc}</p>
        <iframe
          src="https://maps.google.com/maps?q=${lat},${lon}&z=12&output=embed"
          allowfullscreen>
        </iframe>
      </div>
    </div>
  `;
}

searchBtn.addEventListener("click", () => {
  dataLocation();
});