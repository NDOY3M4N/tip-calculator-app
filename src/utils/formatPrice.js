const { format: formatPrice } = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

/**
 * Format the price to USD currency
 *
 * @function
 * @param   {number} value - The number to format
 * @returns {string}
 */
export default formatPrice
