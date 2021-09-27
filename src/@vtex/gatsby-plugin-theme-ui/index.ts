import {
  createTheme,
  headerTheme,
  infoCardTheme,
  searchControlsTheme,
  loginTheme,
  toastTheme,
} from '@vtex/store-ui'

import authTheme from './auth'
import { base } from './base'
import { breadcrumb } from './breadcrumb'
import { custom } from './custom'
import offerTheme from './offer'
import productDetailsTheme from './productDetails'
import { productQuantityTheme } from './productQuantity'
import searchBarTheme from './searchBar'
import { searchTheme } from './searchFilter'
import searchSuggestionsTheme from './searchSuggestions'
import shelfTheme from './shelf'
import minicartTheme from './minicart'

export default createTheme(
  base,
  breadcrumb,
  minicartTheme,
  infoCardTheme,
  headerTheme,
  productQuantityTheme,
  searchControlsTheme,
  searchSuggestionsTheme,
  searchBarTheme,
  searchTheme,
  custom,
  offerTheme,
  productDetailsTheme,
  loginTheme,
  authTheme,
  toastTheme,
  shelfTheme
)
