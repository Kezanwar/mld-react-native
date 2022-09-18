export const STACKS = {
  HOME: 'HOME',
  SEARCH: 'SEARCH',
  CART: 'CART',
  PROFILE: 'PROFILE',
  SINGLE_PRODUCT: 'SINGLE_PRODUCT',
}

export const STACK_ROUTES = {
  [STACKS.HOME]: {
    stack: 'HOME_STACK',
    index: 'HOME_INDEX',
    category: 'HOME_CATEGORY',
    single_product: 'HOME_SINGLE_PRODUCT',
  },
  [STACKS.SEARCH]: {
    stack: 'SEARCH_STACK',
    index: 'SEARCH_INDEX',
    category: 'SEARCH_CATEGORY',
    single_product: 'SEARCH_SINGLE_PRODUCT',
  },
  [STACKS.CART]: {
    stack: 'CART_STACK',
    index: 'CART_INDEX',
    category: 'CART_CATEGORY',
    single_product: 'CART_SINGLE_PRODUCT',
  },
  [STACKS.PROFILE]: {
    stack: 'PROFILE_STACK',
    index: 'PROFILE_INDEX',
    category: 'PROFILE_CATEGORY',
    single_product: 'PROFILE_SINGLE_PRODUCT',
  },
  [STACKS.SINGLE_PRODUCT]: {
    stack: 'SINGLE_PRODUCT_STACK',
    index: 'SINGLE_PRODUCT_INDEX',
  },
}
