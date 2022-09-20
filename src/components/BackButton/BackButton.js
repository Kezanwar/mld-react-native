import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'
import { colors } from '../../utils/colors'

const BackButton = ({ variant }) => {
  const navigate = useNavigation()
  return (
    <TouchableOpacity
      style={variant === 'inPill' ? styles.backButtonContainer : {}}
      onPress={() => navigate.goBack()}
    >
      <AntDesign
        name="arrowleft"
        // style={styles.arrowIcon}
        size={variant === 'inPill' ? 14 : 16}
        color={colors.d_grey}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  backButtonContainer: {
    backgroundColor: colors.l_grey,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 50,
  },
  backButtonStyles: {
    padding: 0,
  },
})

BackButton.propTypes = {
  variant: PropTypes.oneOf(['inPill', 'icon']),
}

export default BackButton
