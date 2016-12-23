angular.module('invoice1', [
    'finance2'
])
    .controller('InvoiceController', ['CurrencyConverter', function InvoiceController(CurrencyConverter) {
        this.qty = 1;
        this.cost = 2;
        this.inCurr = 'EUR';
        this.currencies = CurrencyConverter.currencies;

        this.total = function total(outCurr) {
            return CurrencyConverter.convert(this.qty * this.cost, this.inCurr, outCurr);
        };

        this.pay = function pay() {
            window.alert('Thanks!')
        };
    }]);