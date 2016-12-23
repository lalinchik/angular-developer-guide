angular.module('finance2', [])
    .factory('CurrencyConverter', function () {
        const currencies = ['USD', 'EUR', 'CNY'];
        const usdforeignRates = {
            USD: 1,
            EUR: 0.74,
            CNY: 6.09
        };

        const convert = function (amount, inCurr, outCurr) {
            return amount * usdforeignRates[outCurr] / usdforeignRates[inCurr];
        };

        return {
            currencies,
            convert
        }
    });