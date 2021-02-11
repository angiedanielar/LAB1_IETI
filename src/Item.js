import React from 'react'

//taken from: https://es.reactjs.org/docs/jsx-in-depth.html

const Item = ({ value }) => {
    return (
        <div>
            <li>{JSON.stringify(value)}</li>
        </div>
    )
}

export default Item;
