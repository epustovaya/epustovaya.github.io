const extractFormatedInt = (value) => {
  if (value) {
    const newValue = `${value}`.replace(/[^0-9]/g, '');

    return newValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  return value;
};

export default extractFormatedInt;
