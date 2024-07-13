export const toDollar = (cents?: number) => {
  if (!cents) {
    return '-';
  }
  const dollars = cents / 100;
  return `$${dollars.toFixed(2)}`;
};
