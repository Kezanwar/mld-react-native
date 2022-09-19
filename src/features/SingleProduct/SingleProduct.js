import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { colors } from '../../utils/colors'
import ScrollScreenWrapper from '../../components/ScrollScreenWrapper/ScrollScreenWrapper'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import SingleProductImageCarousel from '../SingleProductImageCarousel/SingleProductImageCarousel'

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

  console.log(images.map((i) => i.src))

  return (
    <ScrollScreenWrapper>
      <SingleProductImageCarousel images={images} />
      <View></View>
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
