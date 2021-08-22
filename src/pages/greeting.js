import * as React from 'react'

// Defining the <Greeting> component
// with props (properties) - [argument] an object that will have whatever properties you passed in.
const Greeting = (props) => {
    return (
        <p>{props.name}!</p>
    )
}