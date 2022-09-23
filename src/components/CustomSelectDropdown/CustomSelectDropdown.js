import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SelectDropdown from 'react-native-select-dropdown'
import PropTypes from 'prop-types'
import { colors } from '../../utils/colors'
import { fonts, textTransform } from '../../utils/fonts'
import { Entypo } from '@expo/vector-icons'
import { fontSizes } from '../../utils/sizes'

const CustomSelectDropdown = ({ data, onSelect }) => {
  return (
    <SelectDropdown
      dropdownStyle={styles.selectDropdownStyles}
      buttonTextStyle={styles.selectButtonText}
      buttonStyle={styles.selectButtonStyle}
      searchInputStyle={styles.searchInputStyle}
      data={data}
      rowStyle={styles.selectRowStyle}
      rowTextStyle={styles.selectRowTextStyle}
      onSelect={(selectedItem, index) => onSelect(selectedItem, index)}
      renderDropdownIcon={() => (
        <Entypo
          style={styles.selectIconStyle}
          name="chevron-small-down"
          size={20}
          color={colors.white}
        />
      )}
    />
  )
}

const styles = StyleSheet.create({
  selectButtonStyle: {
    backgroundColor: colors.d_grey,
    borderRadius: 10,
  },
  selectButtonText: {
    color: colors.white,
    fontFamily: fonts.light,
    fontSize: fontSizes.m,
    textTransform: textTransform,
    padding: 0,
  },
  selectDropdownStyles: {
    backgroundColor: colors.d_grey,
    borderRadius: 10,
  },
  selectRowTextStyle: {
    color: colors.white,
    fontFamily: fonts.light,
    fontSize: fontSizes.m,
  },
  searchInputStyle: {
    padding: 0,
  },
  selectIconStyle: { marginRight: 10, marginTop: -3 },
})

CustomSelectDropdown.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired,
}

export default CustomSelectDropdown
