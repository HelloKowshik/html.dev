let storage = new Storage();
let { city, country } = storage.getLocation();
let weather = new Weather(city, country);
document.addEventListener('DOMContentLoaded', weatherData);
// weather.changeLocation('Gazipur', 'BD'); 
// weather.getWeather()
//     .then(data => console.log(data));

document.querySelector('.w-form').addEventListener('submit', e => {
    e.preventDefault();
    let city = document.querySelector('#city').value;
    let country = document.querySelector('#country').value;
    if (city === '' || country === '') {
        ui.setMessage('Enter City/Country Name');
    } else {
        weather.changeLocation(city, country);
        ui.clearField();
        weatherData();
    }
});

let ui = new UI();
function weatherData() {
    weather.getWeather()
        .then(data => {
            ui.display(data);
        })
        .catch(e => { ui.setMessage('Provided City is not Found!') });
}