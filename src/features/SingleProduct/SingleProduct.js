import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { colors } from '../../utils/colors'
import ScrollScreenWrapper from '../../components/ScrollScreenWrapper/ScrollScreenWrapper'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import SingleProductImageCarousel from './components/SingleProductImageCarousel'
import SingleProductTitleContainer from './components/SingleProductTitleContainer'
import SingleProductContext from './SingleProductContext'

const SingleProduct = ({ product }) => {
  if (!product) return <ErrorMessage />

  console.log(product)

  return (
    <SingleProductContext.Provider value={product}>
      <ScrollScreenWrapper>
        <SingleProductImageCarousel />
        <SingleProductTitleContainer />
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
