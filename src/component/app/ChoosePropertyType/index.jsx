import React from 'react';

const ChoosePropertyType = () => {
  return (
    <div className='container mx-auto mt-10'>
      <div className='flex gap-4 justify-center'>
      <button  className='bg-slate-500 px-4 py-2 text-white hover:bg-black duration-300 rounded'>Add Resort</button>
      <button  className='bg-slate-500 px-4 py-2 text-white hover:bg-black duration-300 rounded'>Leave a Boat</button>
      </div>
    </div>
  );
};

export default ChoosePropertyType;