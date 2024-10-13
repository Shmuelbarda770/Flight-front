import React,{useContext} from 'react'
import Question from './Question'
import questionData from '../data/questionSentence.json';
import {DataPerson} from '../context/context'
const AllFill = () => {
  const {colorApp}=useContext(DataPerson);
  
  
  return (
        <div className={`flex items-center justify-center min-h-screen p-6 mx-auto shadow-md ${colorApp}`}>
          <div className="w-full max-w-4xl space-y-4">
            <h1 className="mb-4 text-2xl font-bold text-center">Frequently Asked Questions</h1>
            {questionData.map((item, index) => (
              <Question key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
  )
}

export default AllFill

