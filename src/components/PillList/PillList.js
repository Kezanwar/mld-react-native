import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import Pill from '../Pill/Pill'
import { v4 } from 'uuid'

const PillList = ({ pills }) => {
  const sortedPills = pills?.sort((a, b) => {
    // ASC  -> a.length - b.length
    // DESC -> b.length - a.length
    return a.name.length - b.name.length
  })
  return useMemo(
    () =>
      sortedPills?.length > 0 ? (
        <View style={styles.pillsWrapper}>
          {pills.map((pill) => {
            return (
              <Pill
                shouldFlexGrow={sortedPills.length > 1}
                key={pill.id}
                item={pill}
              />
            )
          })}
        </View>
      ) : (
        ''
      ),
    []
  )
}

const styles = StyleSheet.create({
  pillsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

PillList.propTypes = {
  pills: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default PillList
