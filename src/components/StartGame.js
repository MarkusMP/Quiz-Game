import React from 'react'
import {Button} from 'react-bootstrap'

const StartGame = ({handlePlaying, Correct, Total}) => {
    return (
        <div>
            {Correct !== 0 ? <h1>You had {Correct + 1} correct out of {Total + 1}</h1> : null}
            <h1>Start Game</h1>
            <Button type="btn" onClick={handlePlaying}>Start A New Game</Button>
        </div>
    )
}

export default StartGame
