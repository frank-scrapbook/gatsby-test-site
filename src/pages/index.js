// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// // Step 2: Define your component
// const IndexPage = () => {
//   return (
//     <main>
//       <title>Home Page</title>
//       <h1>Welcome to my Gatsby site!</h1>
//       <Link to="/about">About</Link>
//       <p>I'm making this by following the Gatsby Tutorial.</p>
//     </main>
//   )
// }

// // Remote URL Image
// const IndexPage = () => {
//   return (
//     <Layout pageTitle="Home Page">
//       <p>I'm making this by following the Gatsby Tutorial.</p>
//       <StaticImage
//         alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
//         src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
//       />
//     </Layout>
//   )
// }

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Avatar of Frank"
        src="../images/avatar.png"
      />
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage