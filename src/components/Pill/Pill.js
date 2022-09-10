import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import { colors } from '../../utils/colors'
import { fontSizes, spacing } from '../../utils/sizes'
import { fonts } from '../../utils/fonts'

const Pill = ({ item, shouldFlexGrow }) => {
  const getFlexGrow = () => {
    if (shouldFlexGrow) return { flexGrow: 1 }
    else return {}
  }
  return (
    <View style={[styles.pillContainer, getFlexGrow()]}>
      <Text style={styles.pillText}>{item.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  pillContainer: {
    backgroundColor: colors.l_grey,
    borderRadius: 50,
    paddingVertical: spacing.sm,
    paddingHorizontal: 16,
    marginRight: 6,
    marginBottom: 8,
    // flexBasis: 70,
    // alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 10,
  },
  pillText: {
    color: colors.d_grey,
    fontFamily: fonts.light,
    letterSpacing: -0.5,
    fontSize: fontSizes.mms,
    textAlign: 'center',
  },
})

Pill.propTypes = {
  text: PropTypes.string,
  shouldFlexGrow: PropTypes.bool,
}

export default Pill
