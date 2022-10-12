import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import SingleProductContext from '../SingleProductContext'
import Accordion from '../../../components/Accordion/Accordion'
import { fontSizes, spacing } from '../../../utils/sizes'
import { fonts, textTransform } from '../../../utils/fonts'
import { colors } from '../../../utils/colors'
import { useCallback } from 'react'
import { useMemo } from 'react'
import StandardSectionTitle from '../../../components/StandardSectionTitle/StandardSectionTitle'
import { getLocation } from '../../../utils/vendor'
import { Ionicons } from '@expo/vector-icons'
import ProductCarousel from '../../ProductCarousel/ProductCarousel'
import Divider from '../../../components/Divider/Divider'

const SingleProductStoreInfo = ({ stack, navigation }) => {
  const context = useContext(SingleProductContext)
  if (!context) return null
  const forwardProps = { navigation, stack }
  const { store, store_products } = context
  const getDynamicFontSize = useMemo(() => {
    if (store.shop_name.length > 16) return { fontSize: 26 }
    else return {}
  }, [store.shop_name])

  const storeLocation = useMemo(() => getLocation(store.address), [context.id])

  return (
    <>
      <View style={styles.wrapper}>
        <StandardSectionTitle customStyles={styles.vendorTitleOverride} text="vendor info" />
        <View style={styles.productStoreDetailsContainer}>
          <Image style={styles.shopGravatar} source={{ uri: store.gravatar }} />
          <View>
            <Text style={[styles.productStoreName, getDynamicFontSize]}>{store.shop_name}</Text>
            <View style={styles.productStoreLocationContainer}>
              <Ionicons style={styles.iconStyle} name="md-location-outline" size={18} color={colors.m_grey} />
              <Text style={styles.productStoreLocation}>{storeLocation}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.vendorProdsWrapper}>
        <StandardSectionTitle customStyles={styles.moreProdsText} text={`More from ${store.shop_name} `} />
        {store_products ? (
          <ProductCarousel sameScreenNavigate={true} {...forwardProps} products={store_products} />
        ) : (
          <Loading />
        )}
      </View>
      <Divider withMargin lightGrey styleOverride={{ marginTop: 5 }} />
    </>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 30,
    paddingHorizontal: 15,
  },
  vendorTitleOverride: {
    paddingLeft: 0,
    fontSize: fontSizes.xxl,
  },
  vendorProdsWrapper: {
    marginTop: 10,
  },
  moreProdsText: {
    paddingLeft: 15,
    fontSize: fontSizes.xl,
    marginBottom: 0,
  },
  iconStyle: {
    // marginRight: 5,/
  },
  productStoreDetailsContainer: {
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  productStoreName: {
    textAlign: 'left',
    fontFamily: fonts.light,
    fontSize: fontSizes.lg,
    textTransform: textTransform,
    marginTop: 15,
    marginBottom: 8,
  },
  productStoreLocation: {
    textAlign: 'left',
    fontFamily: fonts.light,
    fontSize: fontSizes.ml,
    textTransform: textTransform,
    color: colors.m_grey,
    marginBottom: 0,
    marginLeft: 5,
  },
  productStoreLocationContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'flex-start',
  },
  shopGravatar: {
    height: 80,
    aspectRatio: 1,
    marginRight: spacing.ml,
    borderRadius: 50,
  },
})

SingleProductStoreInfo.propTypes = {}

export default SingleProductStoreInfo
