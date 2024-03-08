import Freecurrencyapi from '@everapi/freecurrencyapi-js';


const freecurrencyapi = new Freecurrencyapi('fca_live_2icH1OFC4ZVOeqDWAIL56N7Ci6dnGX16jTWXAVxC');


export async function  convertCurrency(fromCurrency, toCurrency, amount) {
    const res = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        quote_currency: toCurrency,
    })

    const multiplier = res.data[toCurrency];
    return multiplier*amount;
}