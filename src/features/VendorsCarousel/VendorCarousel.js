import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native'
import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import VendorCarouselCard from './VendorCarouselCard'
import StandardSectionTitle from '../../components/StandardSectionTitle/StandardSectionTitle'
import { spacing } from '../../utils/sizes'

const VendorCarousel = ({ title, vendors }) => {
  const dimensions = Dimensions.get('window')
  return (
    <View style={styles.carouselWrapper}>
      <StandardSectionTitle text={title} />
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
              return <VendorCarouselCard key={`vendor-${vendor.id}-${i}`} dimensions={dimensions} vendor={vendor} />
            })
          : null}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  carouselWrapper: {
    // flex: 0.7,
    padding: 10,
    paddingTop: spacing.xxl,
    // marginBottom: spacing.sm,
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

export default React.memo(VendorCarousel)
