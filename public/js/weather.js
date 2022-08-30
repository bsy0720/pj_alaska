var getJSON = function (url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';
  xhr.onload = function () {
    //접속이 성공적이면 null 값 반환, 그 외는 status 값 반환
    var status = xhr.status;
    if (status === 200) {
      callback(null, xhr.response);
    } else {
      callback(status, xhr.response);
    }
  };
  xhr.send();
};


$(document).ready(function () {
  var weatherIcon = {
    '01': 'fas fa-sun',
    '02': 'fas fa-cloud-sun',
    '03': 'fas fa-cloud',
    '04': 'fas fa-cloud-meatball',
    '09': 'fas fa-cloud-sun-rain',
    '10': 'fas fa-cloud-showers-heavy',
    '11': 'fas fa-poo-storm',
    '13': 'far fa-snowflake',
    '50': 'fas fa-smog'
  };

  $.ajax({
    url: 'https://api.openweathermap.org/data/2.5/weather?q=Alaska,US&APPID=ce35a1dc9f13060d895965184de23b61&units=metric',
    dataType: 'json',
    type: 'GET',
    success: function (data) {
      var $Icon = (data.weather[0].icon).substr(0, 2);
      var $Temp = Math.floor(data.main.temp) + 'º';
      var $city = data.name;

      $('.CurrIcon').append('<i class="' + weatherIcon[$Icon] + '"></i>');
      $('.CurrTemp').prepend($Temp);
      $('.city').append($city);
    }
  })
});

var getJSON = function (url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';
  xhr.onload = function () {
    var status = xhr.status;
    if (status === 200) {
      callback(null, xhr.response);
    } else {
      callback(status, xhr.response);
    }
  };
  xhr.send();
};


$(document).ready(function () {
  var weatherIcon = {
    '01': 'fas fa-sun',
    '02': 'fas fa-cloud-sun',
    '03': 'fas fa-cloud',
    '04': 'fas fa-cloud-meatball',
    '09': 'fas fa-cloud-sun-rain',
    '10': 'fas fa-cloud-showers-heavy',
    '11': 'fas fa-poo-storm',
    '13': 'far fa-snowflake',
    '50': 'fas fa-smog'
  };

  $.ajax({
    url: 'https://api.openweathermap.org/data/2.5/weather?q=Alaska,US&APPID=ce35a1dc9f13060d895965184de23b61&units=metric',
    dataType: 'json',
    type: 'GET',
    success: function (data) {
      var $Icon = (data.weather[0].icon).substr(0, 2);
      var $Temp = Math.floor(data.main.temp) + 'º';
      var $city = data.name;

      $('.s_CurrIcon').append('<i class="' + weatherIcon[$Icon] + '"></i>');
      $('.s_CurrTemp').prepend($Temp);
      $('.s_city').append($city);
    }
  })
});