import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { EvilIcons } from '@expo/vector-icons'
import { colors } from '../../utils/colors'
import { fonts, textTransform } from '../../utils/fonts'
import { fontSizes } from '../../utils/sizes'

const QuantityController = ({ quantity, setQuantity }) => {
  const handleIncrement = () => {
    setQuantity((prev) => prev + 1)
  }
  const handleDecrement = () => {
    if (quantity === 0) return
    else setQuantity((prev) => prev - 1)
  }

  return (
    <View style={styles.quantityControllerContainer}>
      <Text style={styles.quantityTitle}>quantity:</Text>
      <View style={styles.controllsContainer}>
        <TouchableOpacity onPress={handleDecrement}>
          {/* <AntDesign name="minus" size={24} color={colors.d_grey} /> */}
          <EvilIcons name="minus" size={28} color={colors.d_grey} />
        </TouchableOpacity>
        <Text style={styles.quantityValue}>{quantity}</Text>
        <TouchableOpacity onPress={handleIncrement}>
          {/* <AntDesign name="plus" size={24} color={colors.d_grey} /> */}
          <EvilIcons name="plus" size={28} color={colors.d_grey} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  quantityControllerContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityTitle: {
    fontFamily: fonts.light,
    color: colors.m_grey,
    fontSize: fontSizes.llm,
    letterSpacing: -0.4,
    flex: 0.5,
    marginRight: 20,
  },
  quantityValue: {
    color: colors.mld_red,
    fontFamily: fonts.light,
    fontSize: fontSizes.llm,
    letterSpacing: -1,
    marginBottom: -4,
    marginHorizontal: 15,
  },
  controllsContainer: {
    marginLeft: -40,
    marginTop: -4,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

QuantityController.propTypes = {}

export default QuantityController
