import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="My Blog Posts">
            <p>My cool posts will go in here</p>
            {
              data.allMdx.nodes.map((node) => (
                <article key={node.id}>
                  <h2>{node.frontmatter.title}</h2>
                  <p>Posted: {node.frontmatter.date}</p>
                  <MDXRenderer>
                    {node.body}
                  </MDXRenderer>
                </article>
              ))
            }
        </Layout>
    )
}

export const query = graphql`
{
  allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      id
      body
      frontmatter {
        title
        date(formatString: "Do MMMM YYYY")
      }
    }
  }
}
`

export default BlogPage