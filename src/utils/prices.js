export const correctPriceWithCurrency = (price) => {
  const currency = '£'
  const realPrice = price / 100
  return currency + realPrice.toFixed(2)
}

export const getPrices = (prices, price_range) => {
  if (price_range) {
    return (
      correctPriceWithCurrency(price_range.min_amount) +
      ' - ' +
      correctPriceWithCurrency(price_range.max_amount)
    )
  } else return correctPriceWithCurrency(prices.price)
}
