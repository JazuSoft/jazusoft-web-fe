import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { RiGithubFill, } from 'react-icons/ri'
import { Nav, NavList, NavListItem, NavLink } from './Nav'
import { ColorModeSwitcher } from './ColorModeSwitcher'

const AppNavQuery = graphql`
  query AppNav {
    site {
      siteMetadata {
        githubRepositoryURL
        navItems {
          title
          url
        }
      }
    }
  }
`

export function AppNav() {
  const data = useStaticQuery(AppNavQuery)

  return (
    <Nav>
      <NavList>
        {(data.site.siteMetadata.navItems || []).map(
          ({ title, url }, index) => (
            <NavListItem key={index}>
              <NavLink to={url}>{title}</NavLink>
            </NavListItem>
          ),
        )}
        {data.site.siteMetadata.githubRepositoryURL ? (
          <NavListItem>
            <NavLink
              as="a"
              href={data.site.siteMetadata.githubRepositoryURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiGithubFill style={{ width: 24, height: 24 }} />
            </NavLink>
          </NavListItem>
        ) : null}
        <NavListItem>
          <NavLink as={ColorModeSwitcher} />
        </NavListItem>
      </NavList>
    </Nav>
  )
}
