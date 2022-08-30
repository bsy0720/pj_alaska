$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('.top').fadeIn();
    } else {
      $('.top').fadeOut();
    }
  });
  $('.top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 400);
    return false;
  });
});


// 픽스메뉴 환율계산기

//get reference to first select element
const side_currencyEl_one = document.getElementById('side_currency-one');

//get reference to second select element
const side_currencyEl_two = document.getElementById('side_currency-two');

//get reference to first input element
const side_amountEl_one = document.getElementById('side_amount-one');

//get reference to second input element
const side_amountEl_two = document.getElementById('side_amount-two');

//get reference to rate
const side_rateEl = document.getElementById('side_rate');




function side_calculate() {
  //getting value of first select
  const side_currency_one = side_currencyEl_one.value;

  //get reference to second select
  const side_currency_two = side_currencyEl_two.value;

  //fetching the api
  fetch(`https://api.exchangerate-api.com/v4/latest/${side_currency_one}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      //searching for the second select element from the api object 
      const side_rate = data.rates[side_currency_two];

      //changing the rate text accordingly
      side_rateEl.innerText = `1 ${side_currency_one} = ${side_rate} ${side_currency_two}`;

      //changing the second input according to the rate
      side_amountEl_two.value = (side_amountEl_one.value * side_rate).toFixed(2);
    });
}

//event for the first select element

side_currencyEl_one.addEventListener('change', side_calculate);





//event for the first input

side_amountEl_one.addEventListener('input', side_calculate);

//event for the second select element
side_currencyEl_two.addEventListener('change', side_calculate);

//event for the second input
side_amountEl_two.addEventListener('input', side_calculate);

//eveny for swap button
side_swap.addEventListener('click', function () {
  const side_temp = side_currencyEl_one.value;

  side_currencyEl_one.value = side_currencyEl_two.value;

  side_currencyEl_two.value = side_temp;
  side_calculate();
});

side_calculate();