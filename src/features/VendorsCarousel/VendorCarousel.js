import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native'
import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { colors } from '../../utils/colors'
import { fontSizes, spacing } from '../../utils/sizes'
import { fonts } from '../../utils/fonts'
import VendorCarouselCard from './VendorCarouselCard'

const VendorCarousel = ({ title, vendors }) => {
  return useMemo(() => {
    const dimensions = Dimensions.get('window')
    return (
      <View style={styles.carouselWrapper}>
        <Text style={styles.carouselTitle}>{title}</Text>
        <ScrollView
          snapToAlignment={'left'}
          snapToInterval={dimensions.width * 0.85 + spacing.m}
          decelerationRate={0}
          style={styles.scrollView}
          alwaysBounceHorizontal
          horizontal
        >
          {vendors
            ? vendors.map((vendor, i) => {
                return (
                  <VendorCarouselCard
                    key={`vendor-${vendor.id}-${i}`}
                    dimensions={dimensions}
                    vendor={vendor}
                  />
                )
              })
            : null}
        </ScrollView>
      </View>
    )
  }, [title, vendors])
}

const styles = StyleSheet.create({
  carouselWrapper: {
    // flex: 0.7,
    padding: 10,
    paddingTop: spacing.xxl,
    // marginBottom: spacing.sm,
  },
  carouselTitle: {
    color: colors.mld_red,
    fontSize: fontSizes.xxl,
    letterSpacing: -0.5,
    marginBottom: spacing.sm,
    paddingLeft: spacing.sm,
    fontFamily: fonts.light,
    textTransform: 'lowercase',
  },
  scrollView: {
    // padding: spacing.lg,
    paddingBottom: spacing.lg,
    paddingTop: spacing.sm,
    paddingLeft: spacing.sm,
  },
})

VendorCarousel.propTypes = {
  title: PropTypes.string,
  vendors: PropTypes.arrayOf(PropTypes.object),
}

export default VendorCarousel
