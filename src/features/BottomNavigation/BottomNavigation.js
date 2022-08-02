import { View, StyleSheet } from 'react-native'
import { spacing, fontSizes } from '../../utils/sizes'
import { colors } from '../../utils/colors'
import { IconButton } from 'react-native-paper'
import { ROUTE_KEYS } from '../../../constants/constants'
import { connect } from 'react-redux'

const BottomNavigation = ({ state, descriptors, navigation, reduxState }) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name

        const isFocused = state.index === index

        const onPress = () => {
          console.log(reduxState)
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
          <IconButton
            // testID={options.tabBarTestID}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            color={isFocused ? colors.l_grey : colors.m_grey}
            iconColor={colors.mld_red}
            style={styles.buttonStyles}
            onPress={onPress}
            onLongPress={onLongPress}
            icon={icon}
            size={fontSizes.xl}
          />
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
  buttonStyles: {
    color: colors.mld_red,
    flex: 1,
    backgroundColor: 'transparent',
  },
})

const mapDispatchToProps = {}

const mapStateToProps = (state) => ({
  reduxState: state,
})

export default connect(mapStateToProps, mapDispatchToProps)(BottomNavigation)
