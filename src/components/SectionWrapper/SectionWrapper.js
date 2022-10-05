import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { colors } from '../../utils/colors'

const SectionWrapper = ({ children }) => {
  return <View style={styles.sectionWrapperStyle}>{children}</View>
}

const styles = StyleSheet.create({
  sectionWrapperStyle: {
    backgroundColor: colors.white,
    borderRadius: 15,
    marginBottom: 20,
    marginTop: 20,
    paddingTop: 20,
  },
})

SectionWrapper.propTypes = {}

export default SectionWrapper
