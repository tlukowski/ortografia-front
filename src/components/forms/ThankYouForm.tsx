import React from 'react'
import { ThankYouFormProps } from '@/types/types'
import { Button, buttonVariants } from '../button';


const ThankYouForm = ({name} : ThankYouFormProps) => {
  return (
    <>
      <div>Brawo {name}!</div>
      <div>Twoje konto zostało założone i możesz używać aplikacji!</div>
      <div className="mt-4 flex justify-center">
        <Button link="/dashboard" type="submit" className={buttonVariants()}>
          Start
        </Button>
      </div>
    </>
  );
}

export default ThankYouForm