import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import PropTypes from 'prop-types'

import { colors } from '../../utils/colors'
import { fontSizes, spacing } from '../../utils/sizes'
import { fonts } from '../../utils/fonts'

import { connect } from 'react-redux'

const CategoryCarouselCard = ({ dimensions, category }) => {
  const { name, description, icon } = category
  return (
    <View
      style={[styles.carouselCardWrapper, { width: dimensions.width * 0.8 }]}
    >
      <Text style={styles.categoryTitle}>{name}</Text>
      <Text style={styles.categoryDescription}>
        The confectionery industry is a group of large companies around the
        world that produce various types of chocolate, chewing gum, and candy
      </Text>
      <View style={styles.viewAllWrapper}>
        <View style={[styles.viewAllWrapper]}>
          <Text style={styles.viewAllText}>view all</Text>
          <AntDesign
            style={styles.arrowIcon}
            name="arrowright"
            size={26}
            color={colors.mld_red}
          />
        </View>
        <Image style={styles.categoryIcon} source={{ uri: icon }} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  carouselCardWrapper: {
    backgroundColor: colors.l_grey,
    marginRight: spacing.m,
    padding: spacing.ml,
    borderRadius: spacing.m,
    // borderWidth: 1,
    // borderColor: colors.l_grey,
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  categoryTitle: {
    color: colors.mld_red,
    fontFamily: fonts.light,
    letterSpacing: -0.4,
    fontSize: 38,
    marginBottom: spacing.m,
    textTransform: 'lowercase',
  },
  categoryDescription: {
    color: colors.m_grey,
    fontFamily: fonts.light,
    letterSpacing: -0.4,
    fontSize: fontSizes.lg,
    marginBottom: 36,
    // width: 275,
    textTransform: 'lowercase',
  },
  categoryIcon: {
    height: 60,
    width: 150,
    position: 'absolute',
    right: -42,
    bottom: -24,
    // aspectRatio: 1,
    resizeMode: 'contain',
  },
  viewAllWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewAllText: {
    color: colors.mld_red,
    fontFamily: fonts.light,
    letterSpacing: -0.4,
    fontSize: 28,
    marginRight: 8,
  },
  arrowIcon: {
    marginTop: -5,
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
