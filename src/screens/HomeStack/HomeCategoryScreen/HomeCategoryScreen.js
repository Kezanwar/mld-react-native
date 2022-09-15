import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const HomeCategoryScreen = ({ destrProps }) => {
  return (
    <View>
      <Text>HomeCategoryScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

const mapDispatchToProps = {}

const mapStateToProps = (state) => ({})

HomeCategoryScreen.propTypes = {}

export default connect(mapStateToProps, mapDispatchToProps)(HomeCategoryScreen)
