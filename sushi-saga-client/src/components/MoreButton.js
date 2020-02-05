import React from 'react'

const MoreButton = (props) => {
    return <button onClick={() => props.handleMoreBtn()}>
            More sushi!
          </button>
}

export default MoreButton