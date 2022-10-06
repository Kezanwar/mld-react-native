import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ScrollScreenWrapper from '../../components/ScrollScreenWrapper/ScrollScreenWrapper'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import SingleProductImageCarousel from './components/SingleProductImageCarousel'
import SingleProductTitleAndOptionsContainer from './components/SingleProductTitleAndOptionsContainer'
import SingleProductContext from './SingleProductContext'
import env from '../../../mld.config'
import axios from 'axios'
import { Button } from 'react-native-paper'

const SingleProduct = ({ product }) => {
  if (!product) return <ErrorMessage />
  const [recommendedProducts, setRecommendedProducts] = useState(null)
  const [recommendedLoading, setRecommendedLoading] = useState(null)
  const fetchRecommended = async () => {
    setRecommendedLoading(true)
    try {
      const response = await axios.get(`${env.url}/api/redis/single-product/recommended`, {
        params: {
          product_category_id: product.categories[0].id,
          store_id: product.store.id,
        },
      })
      if (response?.data) {
        setRecommendedProducts(response.data)
        setRecommendedLoading(false)
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchRecommended()
  }, [product])

  console.log(recommendedProducts)

  return (
    <SingleProductContext.Provider value={product}>
      <ScrollScreenWrapper>
        <SingleProductImageCarousel />
        <SingleProductTitleAndOptionsContainer />
      </ScrollScreenWrapper>
      <Button>click</Button>
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
