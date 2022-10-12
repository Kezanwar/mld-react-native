import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useMemo } from 'react'
import { Button } from 'react-native-paper'
import PropTypes from 'prop-types'

import { colors } from '../../utils/colors'
import { fontSizes, spacing } from '../../utils/sizes'
import { fonts, textTransform } from '../../utils/fonts'

import { connect } from 'react-redux'
import PillList from '../../components/PillList/PillList'
import { getLocation } from '../../utils/vendor'

const VendorCarouselCard = ({ dimensions, vendor }) => {
  const { store_name, gravatar, banner, categories, address } = vendor
  return (
    <View style={[styles.carouselCardWrapper, { width: dimensions.width * 0.85 }]}>
      {banner ? (
        <Image style={[styles.vendorImage, { height: dimensions.height * 0.35 }]} source={{ uri: banner }} />
      ) : null}
      <Text numberOfLines={2} style={styles.vendorTitle}>
        {store_name}
      </Text>
      <Text style={styles.vendorLocation}>{getLocation(address)}</Text>
      <PillList pills={categories} />
    </View>
  )
}

const styles = StyleSheet.create({
  carouselCardWrapper: {
    backgroundColor: colors.white,
    marginRight: spacing.m,
    padding: spacing.ml,
    borderRadius: spacing.m,
    borderWidth: 1,
    borderColor: colors.l_grey,
    justifyContent: 'space-between',
  },
  vendorImage: {
    marginBottom: spacing.lg,
    borderRadius: 5,
  },
  vendorTitle: {
    textAlign: 'center',
    fontSize: 26,
    color: colors.d_grey,
    marginBottom: spacing.sm,
    fontFamily: fonts.light,
    textTransform: textTransform,
    letterSpacing: -0.75,
  },
  vendorLocation: {
    fontFamily: fonts.light,
    fontSize: 16,
    textAlign: 'center',
    textTransform: textTransform,
    color: colors.m_grey,
    marginBottom: spacing.sm,
  },
})

VendorCarouselCard.propTypes = {
  vendor: PropTypes.object,
  dimensions: PropTypes.object,
}

const mapDispatchToProps = {}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(VendorCarouselCard)
