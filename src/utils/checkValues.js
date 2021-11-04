/**
 * Check if the values are null, empty or equal to zero
 *
 * @function
 * @param   {string[]} values - The values to check
 * @returns {boolean}
 */
const checkValues = (values) => {
  return values.some(
    (value) => value === null || value === "" || value === 0
  );
};

export default checkValues
