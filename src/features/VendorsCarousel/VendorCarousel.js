import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const VendorCarousel = ({ data }) => {
  return (
    <View>
      <Text>VendorCarousel</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

const mapDispatchToProps = {}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(VendorCarousel)
