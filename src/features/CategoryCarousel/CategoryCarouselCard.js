import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import PropTypes from 'prop-types'

import { colors } from '../../utils/colors'
import { fontSizes, spacing } from '../../utils/sizes'
import { fonts } from '../../utils/fonts'

import { connect } from 'react-redux'

const CategoryCarouselCard = ({ dimensions, category }) => {
  const { name, description, icon } = category
  return (
    <View
      style={[styles.carouselCardWrapper, { width: dimensions.width * 0.85 }]}
    >
      <Text style={styles.categoryTitle}>{name}</Text>
      <Text style={styles.categoryDescription}>
        The confectionery industry is a group of large companies around the
        world that produce various types of chocolate, chewing gum, and candy
      </Text>
      <Image style={styles.categoryIcon} source={{ uri: icon }} />
    </View>
  )
}

const styles = StyleSheet.create({
  carouselCardWrapper: {
    backgroundColor: colors.l_grey,
    marginRight: spacing.m,
    padding: spacing.ml,
    borderRadius: spacing.m,
    borderWidth: 1,
    borderColor: colors.l_grey,
    justifyContent: 'space-between',
  },
  categoryTitle: {
    color: colors.mld_red,
    fontFamily: fonts.light,
    letterSpacing: -0.4,
    fontSize: fontSizes.xl,
    marginBottom: spacing.m,
  },
  categoryDescription: {
    color: colors.m_grey,
    fontFamily: fonts.light,
    letterSpacing: -0.4,
    fontSize: fontSizes.lg,
    width: 275,
  },
  categoryIcon: {
    height: 50,
  },
})

CategoryCarouselCard.propTypes = {
  category: PropTypes.object,
  dimensions: PropTypes.object,
}

const mapDispatchToProps = {}

const mapStateToProps = (state) => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryCarouselCard)
