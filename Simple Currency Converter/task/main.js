const input = require('sync-input');

console.log(`Welcome to Currency Converter!
1 USD equals  1 USD
1 USD equals  113.5 JPY
1 USD equals  0.89 EUR
1 USD equals  74.36 RUB
1 USD equals  0.75 GBP`)

currency = {
    USD: 1,
    JPY: 113.5,
    EUR: 0.89,
    RUB: 74.36,
    GBP: 0.75,
}
// start of the program;
function Menu() {
    let menu = true;
    while (true) {
        console.log("What do you want to do?");
        console.log("1-Convert currencies 2-Exit program");
        let exitOrConvert = input();
        if (exitOrConvert == 1) {
            console.log(CurrencyConverter()); // calling the second part of the program;
        } else if (exitOrConvert == 2) {
            return "Have a nice day!";
        } else {
            console.log("Unknown input");
        }
    }
}
// the second part of the program;
function CurrencyConverter() {
    console.log("What do you want to convert?");
    let from = input('From:   ').toUpperCase();
    if (currency[from] === undefined) {
        return "Unknown currency"
    }
    let to = input('To:   ').toUpperCase();
    if (currency[to] === undefined) {
        return "Unknown currency"
    }
    let amount = input('Amount:   ');
    result = Number(amount) / currency[from] * currency[to];
    if (amount < 0) {
        return "The amount can not be less than 1"
    } else if (isNaN(result)) {
        return "The amount has to be a number"
    } else {
        return `Result: ${amount} ${from} equals ${result.toFixed(4)} ${to}`;
    }
}

console.log(Menu());
