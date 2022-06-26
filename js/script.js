{

    const calculateResult = () => {

        const resultElement = document.querySelector(".js-result");
        const chooseCurrencyElement = document.querySelector(".js-chooseCurrency");
        const currencyValue = document.querySelector(".js-currencyValue");

        const chooseCurrency = chooseCurrencyElement.value;
        const usd = +currencyValue.value * 0.23;
        const eur = +currencyValue.value * 0.21;
        const gbp = +currencyValue.value * 0.18;
        const chf = +currencyValue.value * 0.22;
        const uah = +currencyValue.value * 6.65;

        switch (chooseCurrency) {
            case "DOLAR":
                return resultElement.innerText = `Za ${currencyValue.value} złotych dostaniesz ${usd.toFixed(2)} dolarów.`;

            case "EURO":
                return resultElement.innerText = `Za ${currencyValue.value} złotych dostaniesz  ${eur.toFixed(2)} euro.`;

            case "FUNT BRYTYJSKI":
                return resultElement.innerText = `Za ${currencyValue.value} złotych dostaniesz  ${gbp.toFixed(2)} funtów brytyjskich.`;

            case "FRANK SZWAJCARSKI":
                return resultElement.innerText = `Za ${currencyValue.value} złotych dostaniesz  ${chf.toFixed(2)} franków szwajcarskich.`;

            case "HRYWNA UKRAIŃSKA":
                return resultElement.innerText = `Za ${currencyValue.value} złotych dostaniesz  ${uah.toFixed(2)} hrywien ukraińskich.`;

        }
    }

    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();


        calculateResult()

    });


}


