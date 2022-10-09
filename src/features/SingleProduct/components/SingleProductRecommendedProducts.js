import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import SingleProductContext from '../SingleProductContext'
import axios from 'axios'
import env from '../../../../mld.config'
import ProductCarousel from '../../ProductCarousel/ProductCarousel'
import StandardSectionTitle from '../../../components/StandardSectionTitle/StandardSectionTitle'
import { spacing } from '../../../utils/sizes'
import { useMemo } from 'react'
import Loading from '../../../components/Loading/Loading'
import { useFocusEffect } from '@react-navigation/native'

const SingleProductRecommendedProducts = ({ navigation, stack }) => {
  const context = useContext(SingleProductContext)
  if (!context) return null
  const forwardProps = { sameScreenNavigate: true, navigation, stack }
  const [recommendedProducts, setRecommendedProducts] = useState(null)
  const [recommendedLoading, setRecommendedLoading] = useState(null)
  const fetchRecommended = async () => {
    setRecommendedLoading(true)
    try {
      const response = await axios.get(`${env.url}/api/redis/single-product/recommended`, {
        params: {
          product_category_id: context.categories[0].id,
          store_id: context.store.id,
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

  console.log(context)

  useFocusEffect(
    React.useCallback(() => {
      if (context?.id === context?.paramsId && !recommendedLoading) fetchRecommended()
      return () => {
        setRecommendedProducts(null)
      }
    }, [context])
  )

  return (
    <View style={styles.singleProdRecommendedProducts}>
      <StandardSectionTitle
        customStyles={styles.sectionTitleCustomStyles}
        text={`More from ${context.store.shop_name} `}
      />
      {!recommendedLoading && recommendedProducts?.store_products ? (
        <ProductCarousel {...forwardProps} products={recommendedProducts.store_products} />
      ) : (
        <Loading />
      )}
      <StandardSectionTitle customStyles={styles.sectionTitleCustomStyles} text="Recommended products" />
      {!recommendedLoading && recommendedProducts?.recommended_products ? (
        <ProductCarousel {...forwardProps} products={recommendedProducts.recommended_products} />
      ) : (
        <Loading />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  singleProdRecommendedProducts: {
    marginTop: 30,
  },
  sectionTitleCustomStyles: {
    fontSize: 44,
    marginBottom: 0,
    marginLeft: 4,
  },
})

SingleProductRecommendedProducts.propTypes = {}

export default SingleProductRecommendedProducts
