import { StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import { colors } from '../../utils/colors'

const ScrollScreenWrapper = ({ children, additionalStyles }) => {
  return (
    <ScrollView style={[styles.scrollScreenWrapper, additionalStyles ? additionalStyles : '']}>{children}</ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollScreenWrapper: {
    backgroundColor: colors.white,
  },
})

ScrollScreenWrapper.propTypes = {}

export default ScrollScreenWrapper
