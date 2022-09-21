import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  FlatList,
} from 'react-native'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { fonts } from '../../../utils/fonts'
import { fontSizes } from '../../../utils/sizes'
import { colors } from '../../../utils/colors'
import BackButton from '../../../components/BackButton/BackButton'

const SingleProductImageCarousel = ({ images }) => {
  if (!images || images.length === 0) return null

  const dimensions = Dimensions.get('window')
  const screenWidth = dimensions.width

  const [count, setCount] = useState('1')

  const canScroll = images.length > 1

  const handleScroll = (e) => {
    if (canScroll)
      setCount(parseInt(e.nativeEvent.contentOffset.x / screenWidth + 1))
  }

  const carouselLength = images.length

  return (
    <View>
      <FlatList
        snapToAlignment={'left'}
        snapToInterval={dimensions.width}
        decelerationRate={0}
        horizontal
        contentContainerStyle={styles.imageCarousel}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        onMomentumScrollEnd={(e) => handleScroll(e)}
        data={images}
        renderItem={({ item }) => (
          <Image
            progressiveRenderingEnabled
            style={[
              styles.images,
              {
                width: screenWidth,
                height: dimensions.height * 0.6,
              },
            ]}
            source={{ uri: item }}
          />
        )}
        keyExtractor={(item) => item}
      />
      <View style={styles.countIndicatorWrapper}>
        <Text
          style={styles.countIndicator}
        >{`${count} / ${carouselLength}`}</Text>
      </View>
      <View style={styles.backButtonWrapper}>
        <BackButton variant={'inPill'} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  imageCarousel: {
    justifyContent: 'flex-start',
    // borderWidth: 1,
  },
  images: {
    resizeMode: 'contain',
  },
  countIndicatorWrapper: {
    position: 'absolute',
    top: 25,
    right: 12,
    backgroundColor: colors.l_grey,
    paddingTop: 10,
    paddingBottom: 8,
    paddingHorizontal: 15,
    borderRadius: 50,
  },
  countIndicator: {
    fontFamily: fonts.light,
    letterSpacing: -0.1,
    fontSize: fontSizes.ms,
  },
  backButtonWrapper: {
    position: 'absolute',
    top: 25,
    left: 12,
  },
})

SingleProductImageCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default SingleProductImageCarousel
