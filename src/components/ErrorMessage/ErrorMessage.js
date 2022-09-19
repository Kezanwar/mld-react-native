import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import { useNavigation } from '@react-navigation/native'
import { fonts } from '../../utils/fonts'
import { fontSizes, spacing } from '../../utils/sizes'
import { colors } from '../../utils/colors'
import { Button } from 'react-native-paper'

const ErrorMessage = ({ message }) => {
  const navigation = useNavigation()

  return (
    <View style={styles.errorContainer}>
      <Text style={styles.errorTitle}>
        sorry, an unexpected error occured...
      </Text>
      <Text style={styles.errorMessage}>
        {message ? message : 'please go back and try again'}
      </Text>
      <Button
        style={{ borderRadius: 50 }}
        color={colors.mld_red}
        uppercase={false}
        icon={'arrow-left'}
        mode="contained-tonal"
        onPress={() => navigation.goBack()}
      >
        go back
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
    backgroundColor: colors.white,
  },
  errorTitle: {
    fontFamily: fonts.light,
    fontSize: fontSizes.lg,
    marginBottom: spacing.lg,
    textAlign: 'center',
    letterSpacing: -0.4,
  },
  errorMessage: {
    fontFamily: fonts.light,
    textAlign: 'center',
    color: colors.m_grey,
    fontSize: fontSizes.m,
    letterSpacing: -0.4,
    marginBottom: spacing.lg,
  },
})
ErrorMessage.propTypes = {
  message: PropTypes.string,
}

export default ErrorMessage
