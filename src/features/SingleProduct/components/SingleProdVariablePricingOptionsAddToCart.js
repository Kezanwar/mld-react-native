import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import SingleProductAttributeSelect from './SingleProductAttributeSelect'
import QuantityController from '../../../components/QuantityController/QuantityController'
import { colors } from '../../../utils/colors'
import { fontSizes, spacing } from '../../../utils/sizes'
import { fonts, textTransform } from '../../../utils/fonts'
import { useState } from 'react'
import { useMemo } from 'react'
import { useCallback } from 'react'
import { correctPriceWithCurrency, getPrices } from '../../../utils/prices'
import CustomAddToCartBtn from '../../../components/AddToCartButton/CustomAddToCartBtn'

const SingleProdVariablePricingOptionsAddToCart = ({
  id,
  name,
  prices,
  has_options,
  variations,
  is_in_stock,
  attributes,
}) => {
  const [selectedAttributes, setSelectedAttributes] = useState(
    attributes && attributes.length > 0
      ? attributes?.map((attr) => ({
          name: attr.name,
          value: '',
        }))
      : []
  )
  const [quantity, setQuantity] = useState(1)
  const outOfStock = 'out of stock'
  const selectAnOption = 'select an option.'

  const selectedValues = useMemo(() => {
    return selectedAttributes.map((s_att, index) => s_att.value)
  }, [id, selectedAttributes])

  const attributeOptions = useMemo(
    () =>
      attributes && attributes.length > 0
        ? attributes.map((attr, index) => {
            const thisAttributeSelectedValue = selectedValues[index]
            const otherAttributeSelectedValues = selectedValues.filter(
              (s_vals, selectedIndex) => selectedIndex !== index
            )
            let newOptionsData = attr.terms.map((t) => t.name)
            const otherSelectedValuesExists = otherAttributeSelectedValues.some(
              (v) => v !== ''
            )
            if (otherSelectedValuesExists && attributes.length !== 1) {
              const availableVariationsLeft = variations.filter((v) =>
                v.attributes.some((attr) =>
                  otherAttributeSelectedValues.includes(attr.option)
                )
              )
              newOptionsData = newOptionsData.filter((option) =>
                availableVariationsLeft.some((v) =>
                  v.attributes.some((attr) => attr.option === option)
                )
              )
            }
            return {
              name: attr.name,
              data: [...newOptionsData, selectAnOption],
            }
          })
        : [],
    [id, attributes, name, selectedAttributes]
  )

  const handleAttributeSelect = useCallback(
    (val, index) => {
      setSelectedAttributes((prev) => {
        let newAttributes = [...prev]
        newAttributes[index].value = val === selectAnOption ? '' : val
        return newAttributes
      })
    },
    [id, name]
  )

  const selectedVariation = useMemo(() => {
    const allSelected = selectedValues.every((v) => v !== '')
    if (!allSelected) return null
    const selectedVar = variations.find((v) =>
      v.attributes.every((attr) =>
        selectedValues.some((sv) => sv === attr.option)
      )
    )
    return selectedVar
  }, [id, name, selectedAttributes])

  const showPrices = useMemo(() => {
    if (!is_in_stock) return outOfStock
    if (!selectedVariation) return getPrices(prices)
    else return `£${selectedVariation.price}`
  }, [id, selectedAttributes, name])

  console.log(selectedVariation)
  return (
    <>
      <Text style={styles.singleProdBody}>{showPrices}</Text>
      {is_in_stock && (
        <View style={styles.singleProdOptionsContainer}>
          {has_options && attributeOptions && attributeOptions.length > 0
            ? attributeOptions.map((attr, index) => {
                return (
                  <SingleProductAttributeSelect
                    key={`attribute-${attr.name}`}
                    data={attr.data}
                    name={attr.name}
                    index={index}
                    passUpToParent={handleAttributeSelect}
                  />
                )
              })
            : null}
          <QuantityController
            disabled={!!selectedVariation?.price === outOfStock}
            quantity={quantity}
            setQuantity={setQuantity}
          />
          <CustomAddToCartBtn
            disabled={!!selectedVariation?.price === outOfStock && quantity > 0}
            productId={id}
            productCartData={selectedVariation}
          />
        </View>
      )}
    </>
  )
}

const styles = StyleSheet.create({
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

const mapDispatchToProps = {}

const mapStateToProps = (state) => ({})

SingleProdVariablePricingOptionsAddToCart.propTypes = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleProdVariablePricingOptionsAddToCart)
