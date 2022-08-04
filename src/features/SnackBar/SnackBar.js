import { StyleSheet, Text, View } from 'react-native'
import { Snackbar } from 'react-native-paper'
import React from 'react'
import { connect } from 'react-redux'

const SnackBar = ({ snack }) => {
  const { visible, message } = snack

  return (
    <SnackBar
      visible={visible}
      // onDismiss={onDismissSnackBar}
      action={{
        label: 'Undo',
        onPress: () => {
          // Do something
        },
      }}
    >
      {message}
    </SnackBar>
  )
}

const styles = StyleSheet.create({})

const mapDispatchToProps = {}

const mapStateToProps = (state) => ({
  snack: state.snack,
})

export default connect(mapStateToProps, mapDispatchToProps)(SnackBar)
