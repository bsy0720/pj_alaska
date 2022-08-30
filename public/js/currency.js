// 메인 환율계산기
const currencyEl_one = document.getElementById('currency-one');

const currencyEl_two = document.getElementById('currency-two');

const amountEl_one = document.getElementById('amount-one');

const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');




function calculate() {
    const currency_one = currencyEl_one.value;

    const currency_two = currencyEl_two.value;

    //fetching the api
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            //searching for the second select element from the api object 
            const rate = data.rates[currency_two];

            //changing the rate text accordingly
            rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

            //changing the second input according to the rate
            amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
        });
}

currencyEl_one.addEventListener('change', calculate);

amountEl_one.addEventListener('input', calculate);

currencyEl_two.addEventListener('change', calculate);

amountEl_two.addEventListener('input', calculate);


swap.addEventListener('click', function () {
    const temp = currencyEl_one.value;

    currencyEl_one.value = currencyEl_two.value;

    currencyEl_two.value = temp;
    calculate();
});


calculate();



// 챗봇 환율계산기
const chat_currencyEl_one = document.getElementById('chat_currency-one');

const chat_currencyEl_two = document.getElementById('chat_currency-two');

const chat_amountEl_one = document.getElementById('chat_amount-one');

const chat_amountEl_two = document.getElementById('chat_amount-two');

const chat_rateEl = document.getElementById('chat_rate');




function chat_calculate() {
    const chat_currency_one = chat_currencyEl_one.value;
    const chat_currency_two = chat_currencyEl_two.value;

    //fetching the api
    fetch(`https://api.exchangerate-api.com/v4/latest/${chat_currency_one}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            //searching for the second select element from the api object 
            const chat_rate = data.rates[chat_currency_two];

            //changing the rate text accordingly
            chat_rateEl.innerText = `1 ${chat_currency_one} = ${chat_rate} ${chat_currency_two}`;

            //changing the second input according to the rate
            chat_amountEl_two.value = (chat_amountEl_one.value * chat_rate).toFixed(2);
        });
}
<<<<<<< HEAD
function M_readNum(num) {
    let resultString = "";
    let resultArray = [];
    for (let i = 0; i < unitWords.length; i++) {
        let unitResult =
         (num % Math.pow(splitUnit, i + 1)) / Math.pow(splitUnit, i);
        unitResult = Math.floor(unitResult);
        if (unitResult > 0) {
        resultArray[i] = unitResult;    
        }
    }
    for (let i = 0; i < resultArray.length; i++) {
        if (!resultArray[i]) continue;
        resultString = String(resultArray[i]) + unitWords[i] + resultString;
    }
    return resultString;
};





const Currency = {
    USD: {
        KRW:1284.23,
        USD:1,
        unit:"달러",
        img: "https://cdn-icons-png.flaticon.com/512/555/555526.png",
    },
    KRW: {
        KRW:1,
        USD:0.00078,
        unit:"원",
        img: "https://cdn.countryflags.com/thumbs/south-korea/flag-400.png",
    },
};
var unitWords = ["", "만", "억", "조", "경"];
var splitUnit = 10000;
let ToButton = document.querySelector("#s_to-button");
let FromButton = document.querySelector("#s_from-button");
let FromCurrency = 'KRW';
let ToCurrency = 'USD';



function convert(type) {
    console.log("here");
    let amount = 0;
    if (type == "s_from") {
        //입력값 받기
        amount = document.querySelector("#s_fromAmount").value;
        //환전하기
        let convertedAmount = amount * Currency[FromCurrency][ToCurrency];
        //환전값 보여주기
        document.querySelector("#s_toAmount").value = convertedAmount;
        //환전한값 한국어로
        renderKoreanNumber(amount, convertedAmount);
    } else {
        amount = document.querySelector("#s_toAmount").value;
        let convertedAmount = amount * Currency[ToCurrency][FromCurrency];
        document.querySelector("#s_fromAmount").value = convertedAmount;
        renderKoreanNumber(convertedAmount, amount);
    }
}
function renderKoreanNumber(s_from, s_to) {
    document.querySelector("#s_fromNumToKorea").textContent = 
        readNum(s_from) + Currency[FromCurrency].unit;
    document.querySelector("#s_toNumToKorea").textContent =
        readNum(s_to) + Currency[ToCurrency].unit;
}
function readNum(num) {
    let resultString = "";
    let resultArray = [];
    for (let i = 0; i < unitWords.length; i++) {
        let unitResult =
         (num % Math.pow(splitUnit, i + 1)) / Math.pow(splitUnit, i);
        unitResult = Math.floor(unitResult);
        if (unitResult > 0) {
        resultArray[i] = unitResult;    
        }
    }
    for (let i = 0; i < resultArray.length; i++) {
        if (!resultArray[i]) continue;
        resultString = String(resultArray[i]) + unitWords[i] + resultString;
    }
    return resultString;
};

//get reference to first select element
const currencyEl_one = document.getElementById('currency-one');

//get reference to second select element
const currencyEl_two = document.getElementById('currency-two');

//get reference to first input element
const amountEl_one = document.getElementById('amount-one');

//get reference to second input element
const amountEl_two = document.getElementById('amount-two');

//get reference to rate
const rateEl = document.getElementById('rate');




function calculate() {
  //getting value of first select
  const currency_one = currencyEl_one.value;

  //get reference to second select
  const currency_two = currencyEl_two.value;

  //fetching the api
  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);

      //searching for the second select element from the api object 
      const rate = data.rates[currency_two];

      //changing the rate text accordingly
      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

      //changing the second input according to the rate
      amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
    });
}

//event for the first select element
currencyEl_one.addEventListener('change', calculate);

//event for the first input
amountEl_one.addEventListener('input', calculate);

//event for the second select element
currencyEl_two.addEventListener('change', calculate);

//event for the second input
amountEl_two.addEventListener('input', calculate);

//eveny for swap button
swap.addEventListener('click', function() {
  const temp = currencyEl_one.value;

  currencyEl_one.value = currencyEl_two.value;

  currencyEl_two.value = temp;
  calculate();
});

calculate();
=======


chat_currencyEl_one.addEventListener('change', chat_calculate);

chat_amountEl_one.addEventListener('input', chat_calculate);

chat_currencyEl_two.addEventListener('change', chat_calculate);

chat_amountEl_two.addEventListener('input', chat_calculate);
>>>>>>> c209a90ef005748d4e44d048a51d9f03254e3edd



//eveny for swap button
chat_swap.addEventListener('click', function () {
    const chat_temp = chat_currencyEl_one.value;

    chat_currencyEl_one.value = chat_currencyEl_two.value;

    chat_currencyEl_two.value = chat_temp;
    chat_calculate();
});



chat_calculate();