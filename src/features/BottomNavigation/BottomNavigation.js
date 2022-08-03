import { View, StyleSheet } from 'react-native'
import { spacing, fontSizes } from '../../utils/sizes'
import { colors } from '../../utils/colors'
import { IconButton, Text } from 'react-native-paper'
import { ROUTE_KEYS } from '../../../constants/constants'
import { connect } from 'react-redux'

const BottomNavigation = ({ state, descriptors, navigation, reduxState }) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        // const { options } = descriptors[route.key]
        // const label =
        //   options.tabBarLabel !== undefined
        //     ? options.tabBarLabel
        //     : options.title !== undefined
        //     ? options.title
        //     : route.name

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true })
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          })
        }

        let icon = ''
        switch (route.name) {
          case ROUTE_KEYS.HOME:
            icon = 'home'
            break
          case ROUTE_KEYS.SEARCH:
            icon = 'magnify'
            break
          case ROUTE_KEYS.CART:
            icon = 'basket'
            break
          case ROUTE_KEYS.PROFILE:
            icon = 'account'
            break
          default:
            break
        }

        return (
          <View style={styles.buttonWrapperStyles}>
            <IconButton
              key={route.key + index}
              // testID={options.tabBarTestID}
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
            {route.name === ROUTE_KEYS.CART && (
              <View style={styles.cartBadgeContainer}>
                <Text style={styles.cartBadge}>2</Text>
              </View>
            )}
          </View>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.sm,
    backgroundColor: colors.d_grey,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: spacing.sm,
    borderTopLeftRadius: spacing.sm,
    shadowColor: '#3a3a3a',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
  },
  buttonWrapperStyles: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    position: 'relative',
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
  reduxState: state,
  // swap this out for cart when we need it
})

export default connect(mapStateToProps, mapDispatchToProps)(BottomNavigation)
