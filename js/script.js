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

    const changeBackground = () => {
        const bodyElement = document.querySelector(".js-body");
        bodyElement.classList.toggle("body--darkMode");

    }

    const changeButtonInnerText = () => {
        const buttonInnerText = document.querySelector(".js-buttonInnerText");
        const bodyElement = document.querySelector(".body");

        if (bodyElement.classList.contains("body--darkMode")) {
            buttonInnerText.innerText = "jasny";
        } else {
            buttonInnerText.innerText = "ciemny";
        }
    }

    const init = () => {

        const formElement = document.querySelector(".js-form");
        const toggleBackgroundButton = document.querySelector(".js-toggleBackgroundButton");

        formElement.addEventListener("submit", (onFormSubmit));
        toggleBackgroundButton.addEventListener("click", (changeBackground));
        toggleBackgroundButton.addEventListener("click", (changeButtonInnerText));

    }

    init()

}


