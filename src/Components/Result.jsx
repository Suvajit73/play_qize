import React, { useContext } from 'react'; 
import { QuizContext } from '../Context/QuizHolder';

export default function Result() {
  const { correct, setExit, setStart, quizzes } = useContext(QuizContext);

  const PlayAgain = () => {
    setExit(false);
    setStart(false);
  };

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='w-[50%] border-8 border-transparent rounded-lg overflow-hidden text-center shadow-2xl glow-animation border-gradient'>
        <h2 className='text-4xl p-5 font-bold'>{correct} correct out of {quizzes.length}</h2>
        <button onClick={PlayAgain} className='border border-red-600 p-2 my-3 text-[25px] rounded-lg bg-slate-200 glow-button'>
          Play Again
        </button>
      </div>
    </div>
  );
}
