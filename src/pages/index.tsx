import React, { lazy, useEffect } from 'react'
import { graphql } from 'gatsby'
import { sendPixelEvent } from '@vtex/gatsby-theme-store'
import type { FC } from 'react'
import type { PageProps } from 'gatsby'

import Layout from '../components/common/Layout'
import Seo from '../views/home/Seo'
import AboveTheFold from '../views/home/AboveTheFold'
import { View } from '../components/ui/View'
import type { HomePageQueryQuery } from './__generated__/HomePageQuery.graphql'

export type Props = PageProps<HomePageQueryQuery>

const loader = () => import('../views/home/BelowTheFold')
const BelowTheFold = lazy(loader)

const ViewComponents = {
  seo: Seo,
  above: AboveTheFold,
  below: {
    component: BelowTheFold,
    preloader: loader,
  },
} as const

const Page: FC<Props> = (props) => {
  useEffect(() => {
    sendPixelEvent({
      type: 'vtex:pageView',
      data: {
        pageType: 'home',
        pageUrl: window.location.href,
        pageTitle: document.title,
        referrer: '',
        accountName: process.env.GATSBY_STORE_ID!,
      },
    })
  }, [])

  return (
    <Layout>
      <View {...ViewComponents} data={props} />
    </Layout>
  )
}

// These variables are populated via CMS in gatsby-node's onCreatePage API
export const query = graphql`
  query HomePageQuery(
    $from: Int!
    $to: Int!
    $collection: String!
    $orderBy: String!
    $hideUnavailableItems: Boolean!
  ) {
    cmsSeo {
      seo {
        facebook {
          title
          description
          thumbnail
        }
        siteMetadata {
          title
          description
          titleTemplate
        }
      }
    }
    cmsHome {
      sections {
        name
        props
      }
    }
    vtex {
      products(
        from: $from
        to: $to
        collection: $collection
        orderBy: $orderBy
        hideUnavailableItems: $hideUnavailableItems
      ) {
        ...ProductSummary_product
      }
    }
  }
`

export default Page
