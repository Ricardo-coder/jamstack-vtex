import {
  searchSuggestionsI18nEN,
  minicartI18nEN,
  authProvidersI18nEN,
} from '@vtex/store-ui'

export default {
  ...minicartI18nEN,

  ...searchSuggestionsI18nEN,

  ...authProvidersI18nEN,
  'login.button.greeting': 'Hello {name}',
  'login.button.action': 'Sign in',

  'shelf.title.0': 'New Offers',

  'social.share': 'Share',

  'offer.product-unavailable': 'Product Unavailable',
  'offer.units-left': '{quantity} units left!',
  'offer.installments': 'Up to {numberOfInstallments}x {value} interest-free',
  'offer.discount': ' Save {price}',

  'productDetails.reference': 'Reference',
  'product-not-found': 'Product not found',
  'error-generic': 'Error',

  'buy-button.add-to-cart': 'ADD TO CART',

  'facets.filters': 'Filters',

  loading: 'Loading...',

  'notification-bar.sale': 'SELECTED ITEMS ON SALE! CHECK IT OUT!',

  'search.page-list.next': 'Show More',
  'search.page-list.previous': 'Previous Page',

  'product.quantity.title': 'Quantity',

  'searchControls.totalCount':
    '{count,plural,=0{ PRODUCTS}one{ PRODUCT}other{ PRODUCTS}}',
  'searchControls.filters': 'FILTERS ',
  'searchControls.select.scoreDesc': 'Relevance',
  'searchControls.select.priceDesc': 'Price: High to Low',
  'searchControls.select.priceAsc': 'Price: Low to High',
  'searchControls.select.topSaleDesc': 'Sales',
  'searchControls.select.reviewRateDesc': 'Reviews',
  'searchControls.select.nameDesc': 'Name, descending',
  'searchControls.select.nameAsc': 'Name, ascending',
  'searchControls.select.releaseDateDesc': 'Release date',
  'searchControls.select.bestDiscountDesc': 'Discount',

  'error.title': 'Ops, an error has occured!',
  'error.action': 'Please, go back and try again',
  'error.action.button': 'Go Back',
  'error.detail': 'Error: {errorId}',
}
