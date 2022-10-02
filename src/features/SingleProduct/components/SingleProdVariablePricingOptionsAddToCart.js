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
import { getPrices } from '../../../utils/prices'
import CustomAddToCartBtn from '../../../components/AddToCartButton/CustomAddToCartBtn'
import { useContext } from 'react'
import SingleProductContext from '../SingleProductContext'

const SingleProdVariablePricingOptionsAddToCart = () => {
  if (!SingleProductContext) return null

  const { id, name, prices, has_options, variations, is_in_stock, attributes } = useContext(SingleProductContext)

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
  }, [id, name, selectedAttributes])

  const attributeOptions = useMemo(
    () =>
      attributes && attributes.length > 0
        ? attributes.map((attr, index) => {
            const thisAttributeSelectedValue = selectedValues[index]
            const otherAttributeSelectedValues = selectedValues.filter(
              (s_vals, selectedIndex) => selectedIndex !== index
            )
            const otherSelectedValuesExists = otherAttributeSelectedValues.some((v) => v !== '')
            let newOptionsData = attr.terms.map((t) => t.name)
            if (otherSelectedValuesExists && attributes.length !== 1) {
              const availableVariationsLeft = variations.filter((v) =>
                v.attributes.some((attr) => otherAttributeSelectedValues.includes(attr.option))
              )
              newOptionsData = newOptionsData.filter((option) =>
                availableVariationsLeft.some((v) => v.attributes.some((attr) => attr.option === option))
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
    [id, name, selectedAttributes]
  )

  const selectedVariation = useMemo(() => {
    const allSelected = selectedValues.every((v) => v !== '')
    if (!allSelected) return null
    const selectedVar = variations.find((v) =>
      v.attributes.every((attr) => selectedValues.some((sv) => sv === attr.option))
    )
    return selectedVar
  }, [id, name, selectedAttributes, selectedValues])

  const showPrices = useMemo(() => {
    if (!selectedVariation) return getPrices(prices, is_in_stock)
    else return `£${selectedVariation.price}`
  }, [id, selectedAttributes, name])

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
            productId={id}
            productToAdd={
              selectedVariation && quantity > 0
                ? { ...selectedVariation, mld_is_a_variation: true, mld_parent_product_id: id }
                : null
            }
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
    fontSize: fontSizes.lg - 2,
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

export default connect(mapStateToProps, mapDispatchToProps)(SingleProdVariablePricingOptionsAddToCart)
