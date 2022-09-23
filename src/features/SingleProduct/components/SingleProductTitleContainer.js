import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import { colors } from '../../../utils/colors'
import { fonts, textTransform } from '../../../utils/fonts'
import { fontSizes, spacing } from '../../../utils/sizes'
import { correctPriceWithCurrency, getPrices } from '../../../utils/prices'
import CustomSelectDropdown from '../../../components/CustomSelectDropdown/CustomSelectDropdown'
import { useState } from 'react'
import { useMemo } from 'react'
import QuantityController from '../../../components/QuantityController/QuantityController'
import { useCallback } from 'react'

const SingleProductTitleContainer = ({
  title,
  prices,
  short_description,
  has_options,
  variations,
  is_in_stock,
}) => {
  const [selectedVariation, setSelectedVariation] = useState(null)
  const [quantity, setQuantity] = useState(0)

  const outOfStock = 'out of stock'

  const varOptions = useMemo(
    () => variations?.map((v) => v.attributes[0].option) ?? null,
    [has_options, variations]
  )

  const handleVariationSelect = useCallback(
    (selectedItem, index) => {
      setSelectedVariation({
        name: selectedItem,
        index: index,
        price:
          variations[index].stock_status === 'outofstock'
            ? outOfStock
            : variations[index].price,
        variation_id: variations[index].id,
      })
    },
    [variations]
  )

  console.log(selectedVariation)

  const showPrices = useMemo(() => {
    if (!is_in_stock) return outOfStock
    if (!has_options || !selectedVariation)
      return correctPriceWithCurrency(prices.price)
    else return `£${selectedVariation.price}`
  }, [selectedVariation, title])

  return (
    <View style={styles.singleProdTitleContainer}>
      <Text style={styles.singleProdTitle}>{title}</Text>
      <Text style={styles.singleProdBody}>{showPrices}</Text>
      {is_in_stock && (
        <View style={styles.singleProdOptionsContainer}>
          {has_options && variations && varOptions && (
            <CustomSelectDropdown
              onSelect={handleVariationSelect}
              data={varOptions}
            />
          )}
          <QuantityController
            disabled={!!selectedVariation?.price === outOfStock}
            quantity={quantity}
            setQuantity={setQuantity}
          />
        </View>
      )}

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
