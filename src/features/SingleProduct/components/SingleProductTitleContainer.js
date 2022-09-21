import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import { colors } from '../../../utils/colors'
import { fonts, textTransform } from '../../../utils/fonts'
import { fontSizes, spacing } from '../../../utils/sizes'
import { getPrices } from '../../../utils/prices'
import CustomSelectDropdown from '../../../components/CustomSelectDropdown/CustomSelectDropdown'
import { useState } from 'react'

const SingleProductTitleContainer = ({
  title,
  price,
  short_description,
  has_options,
  variations,
}) => {
  const varOptions = variations?.map((v) => v.attributes[0].value)

  const [selectedVariation, setSelectedVariation] = useState(null)
  const handleVariationSelect = (selectedItem, index) => {
    setSelectedVariation(selectedItem)
  }

  return (
    <View style={styles.singleProdTitleContainer}>
      <Text style={styles.singleProdTitle}>{title}</Text>
      <Text style={styles.singleProdBody}>{getPrices(price)}</Text>
      <View style={styles.singleProdOptionsContainer}>
        {has_options && variations && (
          <CustomSelectDropdown
            onSelect={handleVariationSelect}
            data={varOptions}
          />
        )}
      </View>

      <Text
        style={[
          styles.singleProdBody,
          {
            color: colors.m_grey,
            lineHeight: 21,
            marginBottom: 0,
            fontSize: fontSizes.ml,
          },
        ]}
      >
        {short_description}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  singleProdTitleContainer: {
    backgroundColor: colors.l_grey,
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderTopStartRadius: 12,
    borderTopEndRadius: 12,
    borderRadius: 20,
    marginTop: -25,
  },
  singleProdTitle: {
    fontFamily: fonts.light,
    fontSize: fontSizes.xl,
    letterSpacing: -0.4,
    marginBottom: spacing.m,
    textTransform: textTransform,
  },
  singleProdBody: {
    color: colors.mld_red,
    fontFamily: fonts.light,
    fontSize: fontSizes.lg,
    letterSpacing: -0.4,
    marginBottom: spacing.m,
    textTransform: textTransform,
  },
  singleProdOptionsContainer: {
    marginBottom: spacing.lg,
  },
})

SingleProductTitleContainer.propTypes = {}

export default SingleProductTitleContainer
