import React from 'react'

const Star = ({ value, color, evaluator }) => {
    return (
        <span>
            <i style={{ color }} className={
                value >= evaluator
                    ? 'fas fa-star' 
                    : value >= (evaluator - 0.5) 
                        ? 'fas fa-star-half-alt'
                        : 'far fa-star'
            }>
            </i>
        </span>
    )
}

export default Star
