import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/layout'

const BlogPost = ({ data }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </Layout>
  )
}

// const BlogPost = () => {
//   console.log(pageContext);
//   return (
//     <Layout pageTitle="Super Cool Blog Posts">
//       <p>My blog post contents will go here (eventually).</p>
//     </Layout>
//   )
// }

// export const query = graphql`
//   {
//     mdx(id: {eq: $id}) {
//       frontmatter {
//         title
//         date(formatString: "Do MMMM YYYY")
//       }
//       body
//     }
//   }
// `

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "Do MMMM YYYY")
      }
      body
    }
  }
`

export default BlogPost