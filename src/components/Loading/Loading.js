import { StyleSheet } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ActivityIndicator } from 'react-native-paper'
import { colors } from '../../utils/colors'

const Loading = () => {
  return <ActivityIndicator style={styles.loadingStyle} animating={true} color={colors.m_grey} />
}

const styles = StyleSheet.create({
  loadingStyle: {
    opacity: 0.3,
  },
})

Loading.propTypes = {}

export default React.memo(Loading)
