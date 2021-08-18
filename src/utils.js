import fx from 'money';

const DEFAULT_BASE = 'USD';

export const convertCurrency = (value, rates, from, to, ratesBase = DEFAULT_BASE) => {
  fx.base = ratesBase;
  fx.rates = rates;

  let result = fx.convert(value, {from, to});

  if (result % 1 !== 0) {
    result = result.toFixed(4);
  }
  return result;
};
