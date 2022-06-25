let formElement = document.querySelector(".js-form");
let chooseCurrencyElement = document.querySelector(".js-chooseCurrency");
let resultElement = document.querySelector(".js-result");
let currencyValue = document.querySelector(".js-currencyValue");


formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let usd = +currencyValue.value * 0.23;
    let eur = +currencyValue.value * 0.21;
    let gbp = +currencyValue.value * 0.18;
    let chf = +currencyValue.value * 0.22;
    let uah = +currencyValue.value * 6.65;
    let chooseCurrency = chooseCurrencyElement.value;

    switch (chooseCurrency) {
        case "DOLAR":
            resultElement.innerText = `Za ${currencyValue.value} złotych dostaniesz ${usd.toFixed(2)} dolarów.`;
            break;
        case "EURO":
            resultElement.innerText = `Za ${currencyValue.value} złotych dostaniesz  ${eur.toFixed(2)} euro.`;
            break;
        case "FUNT BRYTYJSKI":
            resultElement.innerText = `Za ${currencyValue.value} złotych dostaniesz  ${gbp.toFixed(2)} funtów brytyjskich.`;
            break;
        case "FRANK SZWAJCARSKI":
            resultElement.innerText = `Za ${currencyValue.value} złotych dostaniesz  ${chf.toFixed(2)} franków szwajcarskich.`;
            break;
        case "HRYWNA UKRAIŃSKA":
            resultElement.innerText = `Za ${currencyValue.value} złotych dostaniesz  ${uah.toFixed(2)} hrywien ukraińskich.`;
            break;
    }
});

