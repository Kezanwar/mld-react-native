import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import SingleProductContext from '../SingleProductContext'
import ProductCarousel from '../../ProductCarousel/ProductCarousel'
import StandardSectionTitle from '../../../components/StandardSectionTitle/StandardSectionTitle'
import Loading from '../../../components/Loading/Loading'

const SingleProductRecommendedProducts = ({ navigation, stack }) => {
  const context = useContext(SingleProductContext)
  if (!context) return null
  const { store, recommended_products, store_products } = context
  const forwardProps = { navigation, stack }

  return (
    <View style={styles.singleProdRecommendedProducts}>
      <StandardSectionTitle customStyles={styles.sectionTitleCustomStyles} text={`More from ${store.shop_name} `} />

      {store_products ? (
        <ProductCarousel sameScreenNavigate={true} {...forwardProps} products={store_products} />
      ) : (
        <Loading />
      )}

      <StandardSectionTitle customStyles={styles.sectionTitleCustomStyles} text="Recommended products" />
      {recommended_products ? (
        <ProductCarousel sameScreenNavigate={true} {...forwardProps} products={recommended_products} />
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
