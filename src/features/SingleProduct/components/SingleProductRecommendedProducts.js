import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import SingleProductContext from '../SingleProductContext'
import ProductCarousel from '../../ProductCarousel/ProductCarousel'
import StandardSectionTitle from '../../../components/StandardSectionTitle/StandardSectionTitle'
import Loading from '../../../components/Loading/Loading'
import { fontSizes } from '../../../utils/sizes'

const SingleProductRecommendedProducts = ({ navigation, stack }) => {
  const context = useContext(SingleProductContext)
  if (!context) return null
  const { store, recommended_products, store_products } = context
  const forwardProps = { navigation, stack }

  return (
    <View style={styles.singleProdRecommendedProducts}>
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
    marginTop: 10,
  },
  sectionTitleCustomStyles: {
    fontSize: fontSizes.xl,
    marginBottom: 0,
    marginLeft: 4,
  },
})

SingleProductRecommendedProducts.propTypes = {}

export default SingleProductRecommendedProducts
