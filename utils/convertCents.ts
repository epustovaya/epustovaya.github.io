function convertCents(cents, deleteNullableValues = false) {
  if (typeof cents !== 'number') {
    return '';
  }
  const convertedValue = (cents / 100).toFixed(2);
  return deleteNullableValues ? parseFloat(convertedValue) : convertedValue;
}

export default convertCents;
