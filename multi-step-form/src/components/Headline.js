import React from 'react';

const Headline = ({title, description}) => {
    return (
        <div className="headline">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}

export default Headline;