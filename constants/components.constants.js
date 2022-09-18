import React from 'react'

import CategoryCarousel from '../src/features/CategoryCarousel/CategoryCarousel'
import ProductCarousel from '../src/features/ProductCarousel/ProductCarousel'
import ProductMasonryGrid from '../src/features/ProductMasonryGrid/ProductMasonryGrid'
import VendorCarousel from '../src/features/VendorsCarousel/VendorCarousel'

export const COMPONENT_KEYS = {
  CATEGORY_CAROUSEL: 'CATEGORY_CAROUSEL',
  PRODUCT_CAROUSEL: 'PRODUCT_CAROUSEL',
  PRODUCT_MASONRY_GRID: 'PRODUCT_MASONRY_GRID',
  VENDOR_CAROUSEL: 'VENDOR_CAROUSEL',
}

const GetComponent = (props) => {
  console.log(props)

  const { COMPONENT_KEY, data } = props

  if (!data) {
    console.error(
      'getComponent requires the relevant props from the returned component stored in a prop objecy called data'
    )
    return
  }

  switch (COMPONENT_KEY) {
    case !COMPONENT_KEY:
      console.error(
        'getComponent requires a COMPONENT_KEY from the COMPONENT_KEYS object'
      )
      return null
    case COMPONENT_KEYS.CATEGORY_CAROUSEL:
      return <CategoryCarousel {...data} />
    case COMPONENT_KEYS.PRODUCT_CAROUSEL:
      return <ProductCarousel {...data} />
    case COMPONENT_KEYS.PRODUCT_MASONRY_GRID:
      return <ProductMasonryGrid {...data} />
    case COMPONENT_KEYS.VENDOR_CAROUSEL:
      return <VendorCarousel {...data} />
    default:
      null
      break
  }
}

export default GetComponent
