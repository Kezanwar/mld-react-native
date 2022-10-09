import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import SingleProductContext from '../SingleProductContext'

const SingleProductAdditionalInfo = ({ destrProps }) => {
  const context = useContext(SingleProductContext)
  console.log(context)

  return <View>{/* <Text>SingleProductAdditionalInfo</Text> */}</View>
}

const styles = StyleSheet.create({})

SingleProductAdditionalInfo.propTypes = {}

export default SingleProductAdditionalInfo
