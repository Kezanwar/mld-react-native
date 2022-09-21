import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import { fonts, textTransform } from '../../utils/fonts'
import { colors } from '../../utils/colors'
import { fontSizes, spacing } from '../../utils/sizes'

import { AntDesign } from '@expo/vector-icons'

const ProductCategorySectionTitle = ({
  title,
  icon,
  navigateTo,
  navigation,
}) => {
  if (navigateTo && navigation) {
    const { route, params } = navigateTo
    return (
      <TouchableOpacity onPress={() => navigation.navigate(route, params)}>
        <View style={styles.productSectionTitleContainer}>
          <Text style={styles.productSectionTitle}>{title}</Text>
          <AntDesign
            name="arrowright"
            style={styles.arrowIcon}
            size={38}
            color={colors.mld_red}
          />
        </View>
      </TouchableOpacity>
    )
  } else {
    return (
      <View style={styles.productSectionTitleContainer}>
        <Text style={styles.productSectionTitle}>{title}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  productSectionTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.m,
  },
  productSectionTitle: {
    marginHorizontal: 10,
    marginRight: 12,

    letterSpacing: -0.6,
    fontFamily: fonts.light,
    color: colors.mld_red,
    fontSize: 55,
    textTransform: textTransform,
  },
  arrowIcon: {
    marginTop: -10,
  },
})

ProductCategorySectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  navigateTo: PropTypes.exact({
    route: PropTypes.string,
    params: PropTypes.object,
  }),
  navigation: PropTypes.object,
  slug: PropTypes.string,
}

export default ProductCategorySectionTitle
