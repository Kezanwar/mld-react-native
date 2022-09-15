import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { STACKS } from '../../../../constants/constants'
import { getHomeSingleProduct } from '../../../../redux/actions/home.actions'
import { useEffect } from 'react'
import { colors } from '../../../utils/colors'
import { ActivityIndicator } from 'react-native-paper'
import SingleProduct from '../../../features/SingleProduct/SingleProduct'

const HomeSingleProductScreen = ({
  route,
  navigation,
  getHomeSingleProduct,
  state,
}) => {
  const forwardProps = { navigation, stack: STACKS.HOME }

  const { id } = route?.params

  const { product, isLoading, error } = state

  useEffect(() => {
    if (id) getHomeSingleProduct(id)
  }, [])

  console.log(product)

  if (isLoading) {
    return (
      <View style={styles.screenWrapper}>
        <ActivityIndicator animating={true} color={colors.mld_red} />
      </View>
    )
  }
  if (error) {
    return (
      <View style={styles.screenWrapper}>
        <Text>error text</Text>
      </View>
    )
  } else return <SingleProduct {...forwardProps} product={product} />
}

const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
})

const mapDispatchToProps = {
  getHomeSingleProduct,
}

const mapStateToProps = (state) => ({
  state: state.homeSingleProduct,
})

HomeSingleProductScreen.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.object,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeSingleProductScreen)
