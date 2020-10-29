import React, {useState, useEffect} from 'react'
import StartGame from './components/StartGame'
import Game from './components/Game'
import Axios from 'axios'
import {Container, Card} from 'react-bootstrap'
import './App.css'


const App = () => {
  const [questions, setQuestions] = useState([])
  const [Total, setTotal] = useState(0)
  const [Correct, setCorrect] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
const fetchApi = async () => {
if(!isPlaying) {
  try {
    const {data} = await Axios.get('https://opentdb.com/api.php?amount=10')
    setQuestions(data.results)

  } catch (error) {
    console.log(error)
  }
  }
  
}

fetchApi()
  }, [isPlaying])

  useEffect(() => {
    if(Total >= 9) {

      setIsPlaying(false)
    }

  }, [Total])

  const handlePlaying = () => {
setIsPlaying(true)
setTotal(0)
setCorrect(0)
  }

  const handleAnswerBtn = (answer) => {
    setIsPlaying(true)

if(answer === questions[Total].correct_answer) {

  setTotal(prevTotal => prevTotal + 1)
  setCorrect(prevCorrect => prevCorrect + 1)
} else {

  setTotal(prevTotal => prevTotal + 1)
}
  }

  return (
    <Container style={{height: '100vh'}} className="w-100 d-flex justify-content-center align-items-center">

      <Card style={{width: '50%', height: '50%'}} >
     <Card.Body className="d-flex justify-content-center align-items-center">
     {!isPlaying ? <StartGame Total={Total} Correct={Correct} handlePlaying={handlePlaying}/>
 : null}
   {isPlaying ? <Game total={Total} question={questions[Total].question} answer={questions[Total].correct_answer} answers={questions[Total].incorrect_answers} handleAnswerBtn={handleAnswerBtn}/> : null}
     </Card.Body>
      </Card>
 

    </Container>
  )
}

export default App
