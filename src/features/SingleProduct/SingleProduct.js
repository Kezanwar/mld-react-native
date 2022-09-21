import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { colors } from '../../utils/colors'
import ScrollScreenWrapper from '../../components/ScrollScreenWrapper/ScrollScreenWrapper'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import SingleProductImageCarousel from './components/SingleProductImageCarousel'
import SingleProductTitleContainer from './components/SingleProductTitleContainer'

const SingleProduct = ({ product }) => {
  if (!product) return <ErrorMessage />

  const {
    id,
    name,
    description,
    short_description,
    images,
    has_options,
    on_sale,
    prices,
    tags,
    type,
    store,
    variations,
    is_in_stock,
  } = product

  console.log(product)

  return (
    <ScrollScreenWrapper>
      <SingleProductImageCarousel images={images} />
      <SingleProductTitleContainer
        title={name}
        price={prices}
        short_description={short_description}
        has_options={has_options}
        variations={variations}
      />
    </ScrollScreenWrapper>
  )
}

const styles = StyleSheet.create({})

const mapDispatchToProps = {}

const mapStateToProps = (state) => ({})

SingleProduct.propTypes = {
  product: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
