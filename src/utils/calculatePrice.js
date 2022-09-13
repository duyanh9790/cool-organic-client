const calculatePrice = (price, discount) => {
  return Math.ceil((price * (100 - discount)) / 100);
};

export default calculatePrice;
