import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import CustomSelectDropdown from '../../../components/CustomSelectDropdown/CustomSelectDropdown'
import { useCallback } from 'react'

import { fonts, textTransform } from '../../../utils/fonts'
import { fontSizes, spacing } from '../../../utils/sizes'
import { colors } from '../../../utils/colors'

const SingleProductAttributeSelect = ({
  name,
  data,
  passUpToParent,
  index,
}) => {
  const handleSelect = useCallback((selectedItem) => {
    passUpToParent(selectedItem, index)
  }, [])

  return (
    <View style={styles.sProdAttributeContainer}>
      <Text style={styles.sProdAttributeText}>{name}:</Text>
      <CustomSelectDropdown onSelect={handleSelect} data={data} />
    </View>
  )
}

const styles = StyleSheet.create({
  sProdAttributeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  sProdAttributeText: {
    fontFamily: fonts.light,
    color: colors.m_grey,
    fontSize: fontSizes.llm,
    letterSpacing: -0.4,
    flex: 0.5,
    marginRight: 20,
    textTransform: textTransform,
  },
})

SingleProductAttributeSelect.propTypes = {}

export default SingleProductAttributeSelect
