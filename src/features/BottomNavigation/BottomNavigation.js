import React, { useCallback, useEffect, useMemo } from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { FlatList } from 'react-native'
import { IconButton, Text } from 'react-native-paper'

import { spacing, fontSizes } from '../../utils/sizes'
import { colors } from '../../utils/colors'
import { STACK_ROUTES } from '../../../constants/routes.constants'

const BottomNavigation = ({ state, descriptors, navigation, cart }) => {
  const TabItem = useCallback(({ item, index }) => {
    const isFocused = state.index === index

    const onPress = () => {
      const event = navigation.emit({
        type: 'tabPress',
        target: item.key,
        canPreventDefault: true,
      })
      // alert(cart.length)

      if (!isFocused && !event.defaultPrevented) {
        // The `merge: true` option makes sure that the params inside the tab screen are preserved
        navigation.navigate({ name: item.name, merge: true })
      }
    }

    const onLongPress = () => {
      navigation.emit({
        type: 'tabLongPress',
        target: item.key,
      })
    }

    let icon = ''
    let cartCount = 0
    switch (item.name) {
      case STACK_ROUTES.HOME.stack:
        icon = 'home'
        break
      case STACK_ROUTES.SEARCH.stack:
        icon = 'magnify'
        break
      case STACK_ROUTES.CART.stack:
        icon = 'basket'
        const cartArr = Object.values(cart)
        cartCount = cartArr.reduce((prev, current) => prev + current.count, cartCount)
        break
      case STACK_ROUTES.PROFILE.stack:
        icon = 'account'
        break
      default:
        break
    }

    return (
      <View key={item.key + index} style={styles.buttonWrapperStyles}>
        <IconButton
          accessibilityRole="button"
          accessibilityState={isFocused ? { selected: true } : {}}
          // accessibilityLabel={options.tabBarAccessibilityLabel}
          color={isFocused ? colors.l_grey : colors.m_grey}
          iconColor={colors.mld_red}
          onPress={onPress}
          onLongPress={onLongPress}
          icon={icon}
          size={fontSizes.xl}
        />
        {item.name === STACK_ROUTES.CART.stack && (
          <View style={styles.cartBadgeContainer}>
            <Text style={styles.cartBadge}>{cartCount}</Text>
          </View>
        )}
      </View>
    )
  })

  return useMemo(
    () => (
      <View>
        <FlatList contentContainerStyle={styles.contentWrapperContainer} data={state.routes} renderItem={TabItem} />
      </View>
    ),
    [cart, state.history]
  )
}

const styles = StyleSheet.create({
  contentWrapperContainer: {
    padding: spacing.m,
    backgroundColor: colors.d_grey,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopRightRadius: spacing.sm,
    borderTopLeftRadius: spacing.sm,
    shadowColor: '#3a3a3a',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    minHeight: 120,
  },
  buttonWrapperStyles: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    position: 'relative',
    flex: 0.2,
  },
  cartBadgeContainer: {
    position: 'absolute',
    backgroundColor: colors.mld_red,
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 50,
    transform: [{ translateX: 25 }],
  },
  cartBadge: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 11,
  },
})

const mapDispatchToProps = {}

const mapStateToProps = (state) => ({
  cart: state.cart,
})

export default connect(mapStateToProps, mapDispatchToProps)(BottomNavigation)
