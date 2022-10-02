export const correctPriceWithCurrency = (price) => {
  const currency = '£'
  const realPrice = price / 100
  return currency + realPrice.toFixed(2)
}

export const getPrices = (prices, is_in_stock) => {
  if (!is_in_stock) return 'out of stock'
  if (prices.price_range) {
    return (
      correctPriceWithCurrency(prices.price_range.min_amount) +
      ' - ' +
      correctPriceWithCurrency(prices.price_range.max_amount)
    )
  }
  return correctPriceWithCurrency(prices.price)
}
