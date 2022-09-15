import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const SingleProduct = ({ destrProps }) => {
  return (
    <View>
      <Text>SingleProduct</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

const mapDispatchToProps = {}

const mapStateToProps = (state) => ({})

SingleProduct.propTypes = {}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
