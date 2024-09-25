import React, { useContext, useState } from 'react'
import { QuizContext } from '../Context/QuizHolder';

export default function Quiz() {
  const [current,setCurrent] = useState(0);
  
  return (
    <div className='w-full h-screen flex justify-center items-center'>
    
      <Box current={current} handler={setCurrent}/>
    </div>
  )
}


const Box = ({current,handler}) => {
  const {quizzes,correct,setCorrect,setExit} = useContext(QuizContext);
  const [ans,setAns] = useState("b");
  const saveHandler = () => {
    if(quizzes[current].correct === ans){
      setCorrect(correct + 1);

    }
    setAns("");
    if((current+1) === quizzes.length ){
      setExit(true)

    }else{
      handler(current + 1);
    }
    
  }
  //console.log(quizzes[current]);
  return(
    <div className='w-[50%] min-h-[160px] border shadow-2xl rounded-lg overflow-hidden '>
        <div className='p-2 text-xl'> {current + 1} {quizzes[current].question}</div>
        <div className='grid grid-cols-2 mt-3'>
          <div className={`p-2 border ${ans==="a" ? 'bg-blue-400 text-white' : '' } hover:bg-blue-400 hover:text-white duration-300 cursor-pointer`}
          onClick={() => setAns("a")}>{quizzes[current].a}</div>
          <div className={`p-2 border ${ans==="b" ? 'bg-blue-400 text-white' : '' } hover:bg-blue-400 hover:text-white duration-300 cursor-pointer`}
          onClick={() => setAns("b")}>{quizzes[current].b}</div>
          <div className={`p-2 border ${ans==="c" ? 'bg-blue-400 text-white' : '' } hover:bg-blue-400 hover:text-white duration-300 cursor-pointer`}
          onClick={() => setAns("c")}>{quizzes[current].c}</div>
          <div className={`p-2 border ${ans==="d" ? 'bg-blue-400 text-white' : '' } hover:bg-blue-400 hover:text-white duration-300 cursor-pointer`}
          onClick={() => setAns("d")}>{quizzes[current].d}</div>
        </div>
        <div className='flex justify-around'>
          <div className='h-[46px] bg-red-500 p-3 text-white cursor-pointer rounded-lg  border-yellow-500 border-x-4 border-y-4' onClick={() => setAns("")}>Reset</div>
          <div className='h-[46px] bg-green-500 p-3 text-white cursor-pointer rounded-lg  border-yellow-500 border-x-4 border-y-4' onClick={saveHandler}>Save & Next</div>
          <div className='h-[46px] bg-blue-700 p-3 text-white cursor-pointer rounded-lg border border-yellow-500 border-x-4 border-y-4' onClick={() => setExit(true)}>Exit</div>
        </div>
    </div>
  )
}