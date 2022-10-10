import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import SingleProductContext from '../SingleProductContext'
import Accordion from '../../../components/Accordion/Accordion'

const SingleProductAdditionalInfo = ({ destrProps }) => {
  const context = useContext(SingleProductContext)

  return (
    <View>
      <Accordion />
    </View>
  )
}

const styles = StyleSheet.create({})

SingleProductAdditionalInfo.propTypes = {}

export default SingleProductAdditionalInfo
