const numValidator = (value) => {
  return typeof value !== 'number' || isNaN(value);
};

export default numValidator;
