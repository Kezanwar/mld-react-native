import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { fonts } from '../../utils/fonts'
import { fontSizes, spacing } from '../../utils/sizes'
import { colors } from '../../utils/colors'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  useAnimatedRef,
  measure,
  useDerivedValue,
  runOnUI,
} from 'react-native-reanimated'
import { Button } from 'react-native-paper'

const Accordion = ({ text, title }) => {
  const height = useSharedValue(0)
  const textLength = text.length
  console.log(textLength / 2.5)

  const animatedStyles = useAnimatedStyle(() => {
    return {
      height: height.value,
    }
  })

  const handleExpand = () => {
    // console.log(measure(aRef))
    if (height.value !== 1) {
      runOnUI(() => {
        'worklet'
        height.value = withTiming(1)
      })()

      return
    } else {
      runOnUI(() => {
        'worklet'
        // const newHeight = measure(aRef).height
        height.value = withSpring(textLength / 1.7, { damping: 30 })
      })()
    }
  }

  return (
    <>
      <TouchableOpacity onPress={handleExpand}>
        <View style={[styles.textContainer, styles.titleContainer]}>
          {<Text style={styles.titleText}>{title}</Text>}
        </View>
      </TouchableOpacity>

      <Animated.View style={[styles.accordion, animatedStyles]}>
        <View style={styles.textContainer}>
          <Text style={styles.bodyText}>{text}</Text>
        </View>
      </Animated.View>
    </>
  )
}

const styles = StyleSheet.create({
  accordion: {
    // backgroundColor: 'yellow',
    // width: 100,'
    overflow: 'hidden',
  },
  textContainer: {
    paddingHorizontal: 16,
  },
  titleContainer: {
    marginTop: 30,
    marginBottom: 10,
  },
  titleText: {
    fontSize: fontSizes.xxl,
    fontFamily: fonts.light,
    color: colors.mld_red,
  },
  bodyText: {
    fontSize: fontSizes.ml + 2,
    fontFamily: fonts.light,
    color: colors.m_grey,
    lineHeight: 22,
  },
})

Accordion.propTypes = {}

export default Accordion
