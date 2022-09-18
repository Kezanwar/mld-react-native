import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'

const CustomTouchableOpacity = ({ style, children, onPress }) => {
  return (
    <TouchableOpacity
      style={style ? style : {}}
      activeOpacity={0.8}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})

CustomTouchableOpacity.propTypes = {
  onPress: PropTypes.func.isRequired,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
}

export default CustomTouchableOpacity
