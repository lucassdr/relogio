function hours() {
    let hours = document.getElementById('hours');
    let date1 = new Date();
    let _hours = date1.getHours();
    let _minutes = date1.getMinutes();
    let _seconds = date1.getSeconds();

    _hours = _hours < 10 ? _hours = `0${_hours}` : _hours
    _minutes = _minutes < 10 ? _minutes = `0${_minutes}` : _minutes
    _seconds = _seconds < 10 ? _seconds = `0${_seconds}` : _seconds

    hours.textContent = `${_hours}:${_minutes}:${_seconds}`;
}
let tictac = setInterval(hours, 1000);
hours();

function month() {
    let day = new Date().getDate();
    let month = document.getElementById('month');
    let _month = new Date().getMonth();
    let _monthText = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembr', 'Dezembro'];
    month.innerHTML = `${day} | ${_monthText[_month]}`;
}
month();


function week() {
    let week = document.getElementById('week');
    let _week = new Date().getDay();
    let _weekText = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    week.innerHTML = _weekText[_week];
}
week();



function userName() {
    let userName = document.getElementById('userName')
    userName.innerHTML = "BruNiel"
}
userName()
