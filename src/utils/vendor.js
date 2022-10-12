export const getLocation = (address) => {
  let country = address.country
  if (country === 'GB') country = 'UK'
  const { city, state } = address
  if (!city) return `${country}`
  else return `${city} - ${country}`
}
