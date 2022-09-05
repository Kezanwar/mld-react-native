export const correctPrice = (price) => {
  const realPrice = price / 100
  return realPrice.toFixed(2)
}
