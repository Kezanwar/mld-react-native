import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const QuantityController = ({ quantity, setQuantity }) => {
  const handleIncrement = () => {
    setQuantity((prev) => prev + 1)
  }
  const handleDecrement = () => {
    if (quantity === 0) return
    else setQuantity((prev) => prev - 1)
  }

  return <View>{/* <Text>hello</Text> */}</View>
}

const styles = StyleSheet.create({})

QuantityController.propTypes = {}

export default QuantityController
