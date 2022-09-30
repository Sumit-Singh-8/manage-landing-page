import React from 'react'

const Button = ({btnText}) => {
  return (
    <button className='bg-brightRed text-veryPaleRed px-6 py-3 rounded-full shadow-brightRed shadow-2xl'>
      {btnText}
    </button>
  );
}

export default Button