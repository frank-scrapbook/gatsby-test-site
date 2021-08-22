// Defining <Layout> component
// Renders a dynamic page title and heading (from pageTitle prop)
//// a list of navigation links, and the contents passed in, with the children prop
// To improve accessibility, using <main> element to wrap page-specific elements (<h1> heading and contents from 'children')

import * as React from 'react'
import { Link } from 'gatsby'
import { 
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText } from './layout.module.css'

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

// className is also another built-in prop that React automatically knows how to handle.

// By CSS naming convention, use kebab case (like .nav-links).
// But in JS naming convention, use camel case (like navLinks).
// When using CSS Modules with Gatsby, you can have both!
// Your kebab-case class names in your .module.css files will
//// auto-convert to camel-case variables that you can import in your .js files.

const Layout = ({ pageTitle, children }) => {
    return (
        <div className={container}>
            <title>{pageTitle}</title>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}><Link to="/">Home</Link></li>
                    <li className={navLinkItem}><Link to="/about">About</Link></li>
                </ul>
            </nav>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout