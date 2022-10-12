import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../utils/colors'
import PropTypes from 'prop-types'

const Divider = ({ styleOverride, withMargin, lightGrey }) => {
  return (
    <View
      style={[
        styles.divider,
        withMargin ? styles.withMargin : {},
        lightGrey ? styles.lightGrey : {},
        styleOverride || {},
      ]}
    ></View>
  )
}

const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: colors.lm_grey,
    marginVertical: 20,
    borderRadius: 20,
  },
  withMargin: {
    marginHorizontal: 20,
  },
  lightGrey: {
    backgroundColor: colors.l_grey,
  },
})

Divider.propTypes = {
  styleOverride: PropTypes.object,
  withMargin: PropTypes.bool,
  lightGrey: PropTypes.bool,
}

export default Divider
