/*import React, { useContext } from 'react'
import { QuizContext } from '../Context/QuizHolder'

export default function Start() {
  const{setStart} = useContext(QuizContext)
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='w-[55%] min-h-[160px] border border-y-8 border-x-8 border-slate-500 shadow-2xl rounded-lg overflow-hidden text-center '>
        <h1 className='text-3xl font-bold text-red-600'>Let's Play Quize </h1>
        <h2 className='text-green-700'>"Test your knowledge and challenge your friends—let's see who reigns supreme in this ultimate quiz showdown!"</h2>
        <div className='pt-8'>
          <button onClick={() => setStart(true)} className='border border-red-600 p-2 text-[25px] text-orange-600 rounded-lg bg-green-200 font-bold'>Start</button>
        </div>
        
      </div>
     
    </div>
  )
}*/

import React, { useContext } from 'react';
import { QuizContext } from '../Context/QuizHolder';

export default function Start() {
  const { setStart } = useContext(QuizContext);
  
  return (
    <div className='w-full h-screen flex justify-center items-center '>
      <div className='w-[60%] min-h-[185px] border-8 border-transparent rounded-lg overflow-hidden text-center 
                      shadow-2xl glow-animation bg-cyan-50'>
        <h1 className='text-3xl font-bold text-red-600'>Let's Play Quiz</h1>
        <h2 className='text-blue-800 font-bold'>"Test your knowledge and challenge your friends—let's see who reigns supreme in this ultimate quiz showdown!"</h2>
        <div className='pt-6'>
          <button onClick={() => setStart(true)} className='border border-red-600 p-2 text-[25px] text-orange-600 rounded-lg bg-green-200 font-bold glow-button'>
            Start
          </button>
        </div>
      </div>
    </div>
  );
}

