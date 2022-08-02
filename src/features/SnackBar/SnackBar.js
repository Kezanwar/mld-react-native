import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { connect } from 'react-redux'

const SnackBar = ({ destrProps }) => {
  return (
    <View>
      <Text>SnackBar</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(SnackBar)
