import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { getCategories } from '../../../redux/actions/categories.actions'
import { connect } from 'react-redux'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const HomeStackNavigator = ({ categories, getCategories }) => {
  const HomeStack = createNativeStackNavigator()

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen>HomeStackNavigator</HomeStack.Screen>
    </HomeStack.Navigator>
  )
}

const styles = StyleSheet.create({})

const mapDispatchToProps = {
  getCategories,
}

const mapStateToProps = (state) => ({
  categories: state.categories,
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeStackNavigator)
