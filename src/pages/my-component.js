// Step 1: Import React. This lets you use JSX inside your .js file.
import * as React from 'react'
import { title } from '../components/my-component.module.css'

// /* Step 2: Define your component. Note that your
// component name should start with a capital letter. */
// const MyComponent = () => {
//   return (
//     <h1>Hi, welcome to my site!</h1>
//   )
// }

// Generated in web browser:
// <h1 class="my-component-module--title--2-x0B">Super Sweet Title Page</h1>
// auto-generated class name by CSS Modules, unique across your website
// allows theoretically another component with the .title class in the .module.css file.
// lets you write CSS scoped to your components
// removes the worry about selector name collisions between components.

const MyComponent = () => {
    return (
        <h1 className={title}>
            Super Sweet Title Page
        </h1>
    )
}

/* Step 3: Export your component so it
can be used by other parts of your app. */
export default MyComponent