import PropTypes from "prop-types"
import React from "react"
import { graphql, StaticQuery, useStaticQuery } from 'gatsby'
import Img from "gatsby-image"

const Image = (props) => {
  const { fileName, alt } = props;

  return (
    <StaticQuery
      query={graphql`
        query {
            images: allFile{
                edges {
                  node {
                    relativePath
                    childImageSharp {
                      fluid {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
            }
        }
      `}
      render={data => {

        const image = data.images.edges.find( image => {
          return image.node.relativePath.includes(fileName);
        })

        if(!image) return null;

        return <Img 
        alt={alt} 
        fluid={image.node.childImageSharp.fluid} />

      }}
    />
  )
}

Image.propTypes = {
  fileName: PropTypes.string,
  alt: PropTypes.string,
}

export default Image
