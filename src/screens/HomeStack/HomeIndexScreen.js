import React, { useEffect } from 'react'
import { useIsFocused } from '@react-navigation/native'
import PropTypes from 'prop-types'

import ProductCarousel from '../../features/ProductCarousel/ProductCarousel'
import ProductMasonryGrid from '../../features/ProductMasonryGrid/ProductMasonryGrid'
import CategoryCarousel from '../../features/CategoryCarousel/CategoryCarousel'

import GetComponent, { COMPONENT_KEYS } from '../../../constants/components.constants'
import { STACKS, STACK_ROUTES } from '../../../constants/routes.constants'

import { addToCart } from '../../../redux/actions/cart.actions'
import { getProdsByCategories } from '../../../redux/actions/products.actions'
import { getAllVendors } from '../../../redux/actions/vendors.actions'
import { connect } from 'react-redux'
import VendorCarousel from '../../features/VendorsCarousel/VendorCarousel'
import { Button } from 'react-native-paper'
import { getCategories } from '../../../redux/actions/categories.actions'
import ScrollScreenWrapper from '../../components/ScrollScreenWrapper/ScrollScreenWrapper'
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper'
import { getRecentlyViewProducts, removeRecentlyViewedProducts } from '../../../async-storage/asyncStorage'

const HomeIndexScreen = ({
  products,
  getProdsByCategories,
  getCategories,
  categories,
  vendors,
  getAllVendors,
  navigation,
}) => {
  const isFocused = useIsFocused()

  useEffect(() => {
    getProdsByCategories('coffee')
    getProdsByCategories('spirits')
    getProdsByCategories('award_winners')
    getCategories()
    getAllVendors()
  }, [])

  useEffect(() => {
    if (isFocused) getRecentlyViewProducts()
  }, [isFocused])

  const forwardProps = {
    navigation,
    stack: STACKS.HOME,
  }

  return (
    <>
      <ScrollScreenWrapper>
        {products?.coffee ? (
          <GetComponent
            data={{ ...forwardProps, ...products.coffee }}
            COMPONENT_KEY={COMPONENT_KEYS.PRODUCT_CAROUSEL}
          />
        ) : null}

        {products?.spirits ? <ProductMasonryGrid {...forwardProps} {...products.spirits} slug={'spirits'} /> : null}

        {categories ? <CategoryCarousel {...forwardProps} title={'Browse Categories'} categories={categories} /> : null}

        {products?.award_winners && (
          <ProductCarousel {...forwardProps} {...products.award_winners} slug={'award-winners'} />
        )}

        {vendors?.all ? <VendorCarousel {...forwardProps} title={'Recommended Stores'} vendors={vendors.all} /> : null}
      </ScrollScreenWrapper>
    </>
  )
}

const mapDispatchToProps = {
  addToCart,
  getProdsByCategories,
  getAllVendors,
  getCategories,
}

const mapStateToProps = (state) => ({
  products: state.products,
  vendors: state.vendors,
  categories: state.categories,
})

HomeIndexScreen.propTypes = {
  products: PropTypes.object,
  vendors: PropTypes.object,
  getProdsByCategories: PropTypes.func,
  getAllVendors: PropTypes.func,
  getCategories: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeIndexScreen)
