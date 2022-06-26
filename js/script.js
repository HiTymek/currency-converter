{

    const calculateResult = (currency, amount) => {

        const rateUSD = 4.44;
        const rateEUR = 4.70;
        const rateGBP = 5.45;
        const rateCHF = 4.64;
        const rateUAH = 0.15;

        switch (currency) {
            case "DOLAR":
                return amount / rateUSD;

            case "EURO":
                return amount / rateEUR;

            case "FUNT BRYTYJSKI":
                return amount / rateGBP;

            case "FRANK SZWAJCARSKI":
                return amount / rateCHF;

            case "HRYWNA UKRAIŃSKA":
                return amount / rateUAH;

        }
    }

    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();
        const chooseCurrencyElement = document.querySelector(".js-chooseCurrency");
        const currencyValue = document.querySelector(".js-currencyValue");
        const resultElement = document.querySelector(".js-result");

        const amount = +currencyValue.value;
        const currency = chooseCurrencyElement.value;

        let result = calculateResult(currency, amount);

        resultElement.innerText = `ZA ${amount} PLN DOSTANIESZ ${result.toFixed(2)} ${currency}`;

        calculateResult()

    });


}


