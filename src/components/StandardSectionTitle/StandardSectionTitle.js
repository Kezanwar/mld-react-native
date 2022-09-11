import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import { fonts } from '../../utils/fonts'
import { fontSizes, spacing } from '../../utils/sizes'
import { colors } from '../../utils/colors'

const StandardSectionTitle = ({ text }) => {
  return <Text style={styles.StandardSectionTitle}>{text}</Text>
}

const styles = StyleSheet.create({
  StandardSectionTitle: {
    color: colors.mld_red,
    fontSize: 55,
    letterSpacing: -0.5,
    marginBottom: spacing.sm,
    paddingLeft: 12,
    fontFamily: fonts.light,
    textTransform: 'lowercase',
  },
})

StandardSectionTitle.propTypes = {
  text: PropTypes.string.isRequired,
}

export default StandardSectionTitle