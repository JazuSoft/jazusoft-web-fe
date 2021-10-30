import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as SEO from './seo'

const HeadQuery = graphql`
  query HeadQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export function Head({ title }) {
  const data = useStaticQuery(HeadQuery)
  return <> </>
}
