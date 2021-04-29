import React from 'react'

import Star from './Star'

const Rating = ({ value, text, color }) => {
    return (
        <div className="rating">
            <Star value={value} evaluator={1} color={color}/>
            <Star value={value} evaluator={2} color={color} />
            <Star value={value} evaluator={3} color={color} />
            <Star value={value} evaluator={4} color={color} />
            <Star value={value} evaluator={5} color={color} />
            <span>{text && text}</span>
        </div>
    )
}

export default Rating
