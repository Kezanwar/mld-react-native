import { StyleSheet } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ActivityIndicator } from 'react-native-paper'
import { colors } from '../../utils/colors'

const Loading = () => {
  return <ActivityIndicator animating={true} color={colors.mld_red} />
}

const styles = StyleSheet.create({})

Loading.propTypes = {}

export default React.memo(Loading)
