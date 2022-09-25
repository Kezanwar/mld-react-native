import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import { colors } from '../../utils/colors'
import { fonts } from '../../utils/fonts'

import { AntDesign } from '@expo/vector-icons'
import { fontSizes, spacing } from '../../utils/sizes'
const ViewMoreBtn = () => {
  return (
    <View style={styles.readMoreContainer}>
      <Text style={styles.readMoreText}>read more</Text>
      <AntDesign
        name="arrowright"
        style={styles.arrowIcon}
        size={16}
        color={colors.d_grey}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  readMoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.m,
  },
  readMoreText: {
    color: colors.d_grey,
    fontFamily: fonts.light,
    fontSize: fontSizes.m,
    marginRight: 5,
  },
  arrowIcon: {
    marginTop: -3,
  },
})

const mapDispatchToProps = {}

const mapStateToProps = (state) => ({})

ViewMoreBtn.propTypes = {}

export default ViewMoreBtn
