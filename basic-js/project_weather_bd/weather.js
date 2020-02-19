//a4c9ee7145db6c271785c0a20390e1f2
//https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22&units=metric

class Weather{
    constructor(city, country) {
        this.city = city;
        this.country = country;
        this.APPId = 'a4c9ee7145db6c271785c0a20390e1f2';
    }
    async getWeather() {
        let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.APPId}&units=metric`)
            // .then(respone => respone.json());
        let responseData = await response.json();
        return {
            main_data: responseData.main,
            otherData: responseData.weather[0],
            respone: responseData,
            cityName: responseData.name,
            country: responseData.sys.country
        }
    }
    changeLocation(city, country) {
        this.city = city;
        this.country = country;
    }
}