import { useFullTextSearch } from '@vtex/gatsby-theme-store'
import {
  Center,
  SearchBar as StoreUISearchBar,
  SearchSuggestionsContainer,
  Spinner,
} from '@vtex/store-ui'
import React, { lazy, Suspense } from 'react'
import type { FC } from 'react'

const SearchSuggestions = lazy(() => import('../Suggestions'))

const SearchBar: FC = () => {
  const onSearch = useFullTextSearch()

  return (
    <StoreUISearchBar
      onSearch={onSearch}
      placeholder="Olá, o que você procura hoje?"
      aria-label="Olá, o que você procura hoje?"
    >
      <SearchSuggestionsContainer>
        <Suspense
          fallback={
            <Center>
              <Spinner />
            </Center>
          }
        >
          <SearchSuggestions />
        </Suspense>
      </SearchSuggestionsContainer>
    </StoreUISearchBar>
  )
}

export default SearchBar
