export const formatNumber = (value: string | number) => {
  const val = (value || '').toString();
  const num = parseFloat(val.replace(/,/g, ''));

  if (isNaN(num)) {
    return val;
  }

  const integerCount = val.replace(/,/g, '').split('.')?.[0]?.length || 0;

  let formattedValue = num.toLocaleString('en', {
    maximumFractionDigits: 9 - integerCount,
  });

  if (val.endsWith('.')) {
    formattedValue += '.';
  }

  return formattedValue;
};
