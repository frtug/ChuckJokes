import React from 'react'

export default function JokeDetail(props) {
    return (
        <div className="container mt-4 text-center">
            <h4>Selected category : <span className="captial">{props.category}</span></h4>
            <div className="mt-1 bg-primary text-white p-4">
                <p>{props.detail}</p>
            </div>
            <p className="text-primary">New Joke</p>
        </div>
    )
}
