const button = document.getElementById('location-button');

async function getData(lat, long){
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=3ed4fce007c34ffc8d363740242101&q=${lat}, ${long}&aqi=yes`);
    return await promise.json();
}

async function getLocation(position) {
    const result = await getData(position.coords.latitude, position.coords.longitude);
    console.log(result);
}

function failedToGet(){
    console.log('Something went wrong!')
}

button.addEventListener('click', async () => {
    navigator.geolocation.getCurrentPosition(getLocation, failedToGet);
});