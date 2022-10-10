import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { STACKS } from '../../../constants/routes.constants'
import { getHomeSingleProduct } from '../../../redux/actions/home.actions'
import { useEffect } from 'react'
import { colors } from '../../utils/colors'
import SingleProduct from '../../features/SingleProduct/SingleProduct'
import Loading from '../../components/Loading/Loading'
import { useIsFocused } from '@react-navigation/native'

const HomeSingleProductScreen = ({ route, navigation, getHomeSingleProduct, state }) => {
  const forwardProps = { navigation, stack: STACKS.HOME }

  const { id } = route?.params

  const { product, recommended_products, store_products, isLoading, error } = state
  const isFocused = useIsFocused()

  useEffect(() => {
    if (!isFocused) return
    if (product?.id === id) return
    else getHomeSingleProduct(id)
  }, [isFocused])

  if (isLoading) {
    return (
      <View style={styles.screenWrapper}>
        <Loading />
      </View>
    )
  }
  if (error) {
    return (
      <View style={styles.screenWrapper}>
        <Text>error text</Text>
      </View>
    )
  } else
    return (
      <SingleProduct
        {...forwardProps}
        product={product}
        recommended_products={recommended_products}
        store_products={store_products}
      />
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeSingleProductScreen)
