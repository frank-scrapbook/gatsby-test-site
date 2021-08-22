import * as React from 'react'
import Frame from '../components/frame'

// When <Frame> component is rendered, it has contents between opening and closing tag
// Then in the component definition, 
//// the children prop will get passed whatever elements came between the opening and closing tag.
// You can render the children prop in your JSX to insert the contents.
const GalleryPage = () => {
    return (
        <Frame>
            <p>This will be passed in as children</p>
        </Frame>
    )
}

export default GalleryPage