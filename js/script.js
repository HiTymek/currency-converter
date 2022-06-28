{
    const bodyElement = document.body;

    const calculateResult = (currency, amount) => {

        const rateUSD = 4.44;
        const rateEUR = 4.70;
        const rateGBP = 5.45;
        const rateCHF = 4.64;
        const rateUAH = 0.15;

        switch (currency) {
            case "USD":
                return amount / rateUSD;

            case "EUR":
                return amount / rateEUR;

            case "GBP":
                return amount / rateGBP;

            case "CHF":
                return amount / rateCHF;

            case "UAH":
                return amount / rateUAH;

        }
    }

    const updateResultText = (amount, result, currency) => {

        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = `ZA ${amount} PLN DOSTANIESZ ${result.toFixed(2)} ${currency}`;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const currencyElement = document.querySelector(".js-currency");
        const amountElement = document.querySelector(".js-amount");

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(currency, amount);

        updateResultText(amount, result, currency)

    };

    const toggleBackground = () => {

        bodyElement.classList.toggle("body--darkMode");

    }

    const toggleButtonInnerText = () => {

        const buttonInnerText = document.querySelector(".js-toggleButtonInnerText");

        buttonInnerText.innerText = bodyElement.classList.contains("body--darkMode") ? "ciemny" : "jasny";

    }

    const toggleTheme = () => {

        toggleButtonInnerText();
        toggleBackground();

    }

    const init = () => {

        const formElement = document.querySelector(".js-form");
        const toggleBackgroundButton = document.querySelector(".js-toggleBackgroundButton");

        formElement.addEventListener("submit", onFormSubmit);
        toggleBackgroundButton.addEventListener("click", toggleTheme)

    }

    init()

}


