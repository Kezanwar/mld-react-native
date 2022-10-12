import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const DescriptionText = ({ destrProps }) => {
  return (
    <View>
      <Text>DescriptionText</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

const mapDispatchToProps = {}

const mapStateToProps = (state) => ({})

DescriptionText.propTypes = {}

export default connect(mapStateToProps, mapDispatchToProps)(DescriptionText)
