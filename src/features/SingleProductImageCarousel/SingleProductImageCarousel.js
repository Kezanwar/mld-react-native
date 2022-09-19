import {
  StyleSheet,
  Text,
  View,
  Animated,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native'
import React, { useMemo, useRef } from 'react'
import PropTypes from 'prop-types'
import { fonts } from '../../utils/fonts'
import { fontSizes } from '../../utils/sizes'
import { colors } from '../../utils/colors'

const SingleProductImageCarousel = ({ images }) => {
  if (!images || images.length === 0) return null

  const swipeCount = useRef(0).current

  return useMemo(() => {
    const carouselLength = images.length
    const dimensions = Dimensions.get('window')
    return (
      <View>
        <ScrollView
          snapToAlignment={'left'}
          snapToInterval={dimensions.width}
          decelerationRate={0}
          alwaysBounceHorizontal
          horizontal
          style={styles.imageCarousel}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
        >
          {images.map((image) => {
            return (
              <Image
                style={[
                  styles.images,
                  {
                    width: dimensions.width,
                    height: dimensions.height * 0.6,
                  },
                ]}
                source={{ uri: image }}
              />
            )
          })}
        </ScrollView>
        <View style={styles.countIndicatorWrapper}>
          <Text
            style={styles.countIndicator}
          >{`${swipeCount}/${carouselLength}`}</Text>
        </View>
      </View>
    )
  }, [images])
}

const styles = StyleSheet.create({
  imageCarousel: {},
  images: {
    resizeMode: 'contain',
  },
  countIndicatorWrapper: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: colors.l_grey,
    paddingTop: 10,
    paddingBottom: 8,
    paddingHorizontal: 15,
    borderRadius: 50,
  },
  countIndicator: {
    fontFamily: fonts.light,
    letterSpacing: -0.1,
    fontSize: fontSizes.m,
  },
})

SingleProductImageCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default SingleProductImageCarousel
