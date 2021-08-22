// Defining <Layout> component
// Renders a dynamic page title and heading (from pageTitle prop)
//// a list of navigation links, and the contents passed in, with the children prop
// To improve accessibility, using <main> element to wrap page-specific elements (<h1> heading and contents from 'children')

import * as React from 'react'
import { Link } from 'gatsby'

// Instead of const Layout = (props) => {...}
// It is const Layout = ({ pageTitle, children }) => {...}
// It is a js technique called "destructuring".
// A shortcut for defining variables based on an object's properties.
// Take the object that gets passed into this function, and unpack its pageTitle and children properties into their own variables.

// Shorthand way of doing the following:
// const Layout = (props) => {
//  const pageTitle = props.pageTitle
//  const children = props.children
//}

const Layout = ({ pageTitle, children }) => {
    return (
        <div>
            <title>{pageTitle}</title>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout