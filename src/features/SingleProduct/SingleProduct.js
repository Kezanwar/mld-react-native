import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ScrollScreenWrapper from '../../components/ScrollScreenWrapper/ScrollScreenWrapper'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import SingleProductImageCarousel from './components/SingleProductImageCarousel'
import SingleProductTitleAndOptionsContainer from './components/SingleProductTitleAndOptionsContainer'
import SingleProductContext from './SingleProductContext'
import SingleProductRecommendedProducts from './components/SingleProductRecommendedProducts'
import SingleProductStoreInfo from './components/SingleProductStoreInfo'

const SingleProduct = ({ product, recommended_products, store_products, navigation, stack }) => {
  const forwardProps = { navigation, stack }

  if (!product) return <ErrorMessage />

  return (
    <SingleProductContext.Provider value={{ ...product, recommended_products, store_products }}>
      <ScrollScreenWrapper>
        <SingleProductImageCarousel />
        <SingleProductTitleAndOptionsContainer />
        <SingleProductStoreInfo {...forwardProps} />
        <SingleProductRecommendedProducts {...forwardProps} />
      </ScrollScreenWrapper>
    </SingleProductContext.Provider>
  )
}

const styles = StyleSheet.create({})

const mapDispatchToProps = {}

const mapStateToProps = (state) => ({})

SingleProduct.propTypes = {
  product: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
