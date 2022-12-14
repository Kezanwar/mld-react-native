import { StyleSheet, View, ScrollView, Dimensions } from 'react-native'
import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import StandardSectionTitle from '../../components/StandardSectionTitle/StandardSectionTitle'
import CategoryCarouselCard from './CategoryCarouselCard'
import { spacing } from '../../utils/sizes'

const CategoryCarousel = ({ title, categories, stack, navigation }) => {
  return useMemo(() => {
    const dimensions = Dimensions.get('window')
    const forwardProps = { stack, navigation }
    return (
      <View style={styles.carouselWrapper}>
        <StandardSectionTitle text={title} />
        <ScrollView
          snapToAlignment={'left'}
          snapToInterval={dimensions.width * 0.8 + spacing.m}
          decelerationRate={0}
          style={styles.scrollView}
          alwaysBounceHorizontal
          horizontal
        >
          {categories
            ? categories.map((category, i) => {
                if (
                  category.slug === 'dried-fruit' ||
                  category.slug === 'confectionary' ||
                  category.slug === 'rice-pasta-noodles' ||
                  category.slug === 'bakery' ||
                  category.slug === 'spirits'
                ) {
                  return (
                    <CategoryCarouselCard
                      key={`category-card-${category.slug}`}
                      dimensions={dimensions}
                      category={category}
                      {...forwardProps}
                    />
                  )
                } else return null
              })
            : null}
        </ScrollView>
      </View>
    )
  }, [title, categories])
}

const styles = StyleSheet.create({
  carouselWrapper: {
    padding: 10,
    paddingTop: spacing.lg,
  },
  scrollView: {
    paddingBottom: spacing.lg,
    paddingTop: spacing.sm,
    paddingLeft: spacing.sm,
  },
})

CategoryCarousel.propTypes = {
  title: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.object),
}

export default CategoryCarousel
