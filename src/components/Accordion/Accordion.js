import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withTiming } from 'react-native-reanimated'
import { Button } from 'react-native-paper'

const Accordion = ({ destrProps }) => {
  const offset = useSharedValue(0)

  const animatedStyles = useAnimatedStyle(() => {
    return {
      height: offset.value,
    }
  })

  return (
    <>
      <Animated.View style={[styles.box, animatedStyles]} />
      <Button
        onPress={() => (offset.value === 100 ? (offset.value = withTiming(0)) : (offset.value = withSpring(100)))}
      >
        click
      </Button>
    </>
  )
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'black',
    // width: 100,
  },
})

Accordion.propTypes = {}

export default Accordion
