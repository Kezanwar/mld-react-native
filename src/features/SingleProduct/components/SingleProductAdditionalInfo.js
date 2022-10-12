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

const SingleProductAdditionalInfo = ({ destrProps }) => {
  const context = useContext(SingleProductContext)
  if (!context) return null
  console.log(context)
  const getDynamicFontSize = useMemo(() => {
    if (context.store.shop_name.length > 16) return { fontSize: 26 }
    else return {}
  }, [context.store.shop_name])
  return (
    <View>
      <Text>vendor info</Text>
      <View style={styles.productStoreDetailsContainer}>
        <Image style={styles.shopGravatar} source={{ uri: context.store.gravatar }} />

        <Text style={[styles.productStoreName, { textDecorationLine: 'underline' }, getDynamicFontSize]}>
          {context.store.shop_name}
        </Text>
      </View>
      {/* <Accordion title={'Additional Info'} text={context.description} /> */}
      {/* <Accordion title={'Recipes'} text={context.meta_data.recipes} /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  productStoreDetailsContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    // justifyContent: 'center',
    marginTop: 20,
    paddingHorizontal: 15,
  },
  productStoreName: {
    textAlign: 'center',
    fontFamily: fonts.light,
    fontSize: fontSizes.lm,
    textTransform: textTransform,
    marginTop: 20,
    marginBottom: 20,
  },
  shopGravatar: {
    height: 70,
    aspectRatio: 1,
    marginRight: spacing.ml,
    borderRadius: 50,
  },
})

SingleProductAdditionalInfo.propTypes = {}

export default SingleProductAdditionalInfo
