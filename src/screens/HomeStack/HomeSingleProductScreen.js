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
import { useFocusEffect } from '@react-navigation/native'

const HomeSingleProductScreen = ({ route, navigation, getHomeSingleProduct, state }) => {
  const forwardProps = { navigation, stack: STACKS.HOME }

  const { id } = route?.params

  const { product, isLoading, error } = state

  useFocusEffect(() => {
    if (id !== product.id && !isLoading) getHomeSingleProduct(id)
  })

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
  } else return <SingleProduct {...forwardProps} paramsId={id} product={product} />
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
