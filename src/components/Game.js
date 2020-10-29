import React from 'react'
import {Button} from 'react-bootstrap'

const Game = ({answers, answer, handleAnswerBtn, question, total}) => {

        const shuffleArray = array => {
            for(let i = array.length - 1; i > 0; i--){
                const j = Math.floor(Math.random() * i)
                const temp = array[i]
                array[i] = array[j]
                array[j] = temp
              }

              return array
        }


   
   function decodeString(str) {
       const textArea = document.createElement('textarea')
       textArea.innerHTML = str
       return textArea.value
   }

    return (

       <div>
           <h1>{total + 1} out of 10</h1>
           <h1>{decodeString(question)}</h1>
           <div className="grid-container">
           {shuffleArray([...answers, answer]).map(answer => <Button className="m-1" type="button" key={answer} onClick={() => handleAnswerBtn(answer)}>{answer}</Button>)}
           </div>
        
       </div>
    )
}

export default Game
