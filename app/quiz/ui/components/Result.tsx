'use client';
import { useState, useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import {Quiz} from './Quiz';

import confettiAnimation from '../assets/animations/confetti.json';


interface ResultProps {
  results: {
    correctAnswers: number;
    wrongAnswers: number;
    secondsUsed: number;
  };
  totalQuestions: number;
}
export const Result = ({ results, totalQuestions }: ResultProps) => {
  const { correctAnswers } = results;
  const [showQuiz, setShowQuiz] = useState(false);

  const handleRetry = () => {
    const divElement = document.getElementById('answers');
    if (divElement && divElement.parentNode) {
      divElement.style.display = 'none';
      // Remove the "answers" div from its parent node
      divElement.parentNode.removeChild(divElement);
    }
    setShowQuiz(true);
  };

  return (
    <motion.div
      key={'result'}
      variants={{
        initial: {
          background: '#ccc',
          clipPath: 'circle(0% at 50% 50%)',
        },
        animate: {
          background: '#ccc',
          clipPath: 'circle(100% at 50% 50%)',
        },
      }}
      className='w-full h-half flex justify-center p-5'
      initial='initial'
      animate='animate'
      exit='exit'
      transition={{ duration: 0.5 }}
    >
      <div className='flex flex-col text-black font-bold text-[32px] text-center w-full'>
    
        {/* <h1 className='font-bold text-base text-white'>QuizApp</h1> */}

        {/* Result Box */}
        <div  id='answers' className='mt-6 flex-1 bg-white border border-brand-light-gray rounded-2xl flex flex-col items-center py-7 px-2 '>
          <div></div>
          <Lottie
            animationData={confettiAnimation}
            loop={false}
            autoplay={true}
            style={{ width: '170px', height: '170px' }}
          />
          <h3 className='text-brand-midnight text-[32px] font-medium leading-9 mt-4'>Congratulations!</h3>
          <p className='text-brand-midnight text-xl font-normal mt-2'>You scored</p>
          <span className='text-brand-midnight font-medium text-[40px]'>{`${correctAnswers}/${totalQuestions}`}</span>
          <p className='text-brand-midnight text-sm font-normal mt-1'>correct answers</p>

        </div>

        {/* Retry Button */}
        <div >
        {!showQuiz ? (
        <div>
          {/* Your existing result view */}
          <Button intent={'secondary'} size='small' block className='mt-6' onClick={handleRetry}>
            Restart Quiz
          </Button>
        </div>
      ) : (
        <Quiz />
      )} </div>
        </div>
    </motion.div>
  );
};
