import fx from 'money';

const DEFAULT_BASE = 'USD';

export const convertCurrency = (value, rates, from, to, base = DEFAULT_BASE) => {
  fx.base = base;
  fx.rates = rates;

  const result = fx.convert(value, {from, to});
  return result;
};
