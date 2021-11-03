const checkValues = (values) => {
  return values.some(
    (value) => value === null || value === "" || value === 0
  );
};

export default checkValues
