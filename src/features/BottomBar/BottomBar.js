import { StyleSheet, View } from 'react-native'
import { colors } from '../../utils/colors'

import React, { useState } from 'react'
import { Button, IconButton } from 'react-native-paper'
import { fontSizes, spacing } from '../../utils/sizes'
import { connect } from 'react-redux'
import { setTest } from '../../../redux/actions/test.actions'

const BottomBar = (props) => {
  const [route, setRoute] = useState(false)
  const handleClick = (val) => {
    console.log(props.test)
    setRoute(val)
  }
  return (
    <View style={styles.container}>
      <IconButton
        // mode={'contained'}
        // color={route === 0 ? colors.mld_red : colors.m_grey}
        color={route === 0 ? colors.l_grey : colors.m_grey}
        iconColor={colors.mld_red}
        style={styles.buttonStyles}
        // animated
        onPress={() => handleClick(0)}
        icon={'home'}
        size={fontSizes.xl}
      />
      <IconButton
        // mode={'contained'}
        // color={route === 1 ? colors.mld_red : colors.m_grey}
        color={route === 1 ? colors.l_grey : colors.m_grey}
        iconColor={colors.mld_red}
        style={styles.buttonStyles}
        // animated
        onPress={() => handleClick(1)}
        icon={'magnify'}
        size={fontSizes.xl}
      />
      <IconButton
        // // mode={'contained'}
        // color={route === 2 ? colors.mld_red : colors.m_grey}
        color={route === 2 ? colors.l_grey : colors.m_grey}
        iconColor={colors.mld_red}
        style={styles.buttonStyles}
        // animated
        onPress={() => handleClick(2)}
        icon={'basket'}
        size={fontSizes.xl}
      />
      <IconButton
        // mode={'contained'}
        // color={route === 3 ? colors.mld_red : colors.m_grey}
        color={route === 3 ? colors.l_grey : colors.m_grey}
        iconColor={colors.mld_red}
        style={styles.buttonStyles}
        // animated
        onPress={() => handleClick(3)}
        icon={'account'}
        size={fontSizes.xl}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.sm,
    backgroundColor: colors.d_grey,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
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

const mapStateToProps = (state) => ({
  test: state.test,
})

const mapDispatchToProps = {
  setTest,
}

export default connect(mapStateToProps, mapDispatchToProps)(BottomBar)
