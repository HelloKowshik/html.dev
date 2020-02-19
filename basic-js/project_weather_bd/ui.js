class UI{
    constructor() {
        this.icon = document.querySelector('#w-icon');
        this.feels = document.querySelector('#w-feels');
        this.temp = document.querySelector('#w-temp');
        this.pressure = document.querySelector('#w-pressure');
        this.humidity = document.querySelector('#w-hum');
        this.city = document.querySelector('#w-city');
    }
    display({ main_data: { temp, pressure, humidity }, otherData: { main, icon },cityName,country}) {
        let iconURL = UI.generateIcon(icon);
        this.icon.setAttribute('src', iconURL);
        this.city.textContent = `${cityName} , ${country}`;
        this.feels.textContent = main;
        this.temp.textContent = `Temparature(cel) : ${temp}`;
        this.pressure.textContent = `Pressure(hpa) : ${pressure}`;
        this.humidity.textContent = `Humidity(%) : ${humidity}`;
    }
    static generateIcon(icon) {
        // console.log(icon);
        return 'http://openweathermap.org/img/w/' + icon + '.png';

    }
    clearField() {
        document.querySelector('#city').value = '';
        document.querySelector('#country').value = '';
    }
    setMessage(msg) {
        let para = document.querySelector('.jumbotron p');
        let div = document.createElement('div');
        div.className = 'alert alert-danger';
        div.id = 'msg';
        div.textContent = msg;
        UI.hideMsg();
        para.insertAdjacentElement('afterend', div);
    }
    static hideMsg() {
        setTimeout(() => {
            document.querySelector('#msg').remove();    
        }, 2000);
    }
}