import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import { useNavigation } from '@react-navigation/native'
import { fonts } from '../../utils/fonts'
import { colors } from '../../utils/colors'
import { fontSizes } from '../../utils/sizes'

import { AntDesign } from '@expo/vector-icons'

const ProductCategorySectionTitle = ({ title, icon, stackRoute, category }) => {
  const navigation = useNavigation()
  const arrowIcon = ''
  if (stackRoute && category) {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(stackRoute, {
            category: category,
          })
        }
      >
        <View style={styles.productSectionTitleContainer}>
          <Text style={styles.productSectionTitle}>{title}</Text>
          <AntDesign
            name="arrowright"
            style={styles.arrowIcon}
            size={24}
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
  },
  productSectionTitle: {
    marginHorizontal: 10,
    letterSpacing: -0.4,
    fontFamily: fonts.light,
    color: colors.mld_red,
    fontSize: fontSizes.xxl,
    textTransform: 'lowercase',
  },
  arrowIcon: {
    marginTop: -5,
  },
})

ProductCategorySectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  stackRoute: PropTypes.string,
  category: PropTypes.string,
}

export default ProductCategorySectionTitle
