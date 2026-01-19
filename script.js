const API_KEY = "84169e6e881444a68c8115614261901";

function getWeather() {
    const location = document.getElementById("locationInput").value;

    if (location === "") {
        alert("Please enter a location");
        return;
    }

    const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&aqi=yes`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const temp = data.current.temp_c;
            const condition = data.current.condition.text;
            const city = data.location.name;
            const country = data.location.country;

            document.getElementById("weatherResult").innerHTML = `
                <p><strong>${city}, ${country}</strong></p>
                <p>🌡 Temperature: ${temp}°C</p>
                <p>☁ Condition: ${condition}</p>
            `;
        })
        .catch(error => {
            document.getElementById("weatherResult").innerHTML =
                "<p>❌ Location not found</p>";
        });
}