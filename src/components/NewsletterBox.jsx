import React from 'react'


const NewsletterBox = () => {

    const onSubmitHandler = (event) => {
      event.preventDefault();
    }

  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
      <p className='text-gray-400 mt-3'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been there long ago. 
      </p>
      <form onSubmit={onSubmitHandler} className='mt-5 w-full sm:w-1/2 flex items-center justify-center gap-3 mx-auto my-3 border pl-3'>
        <input type='email' placeholder='Enter your email' className='w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500' required />
        <button type='submit' className='bg-blue-500 text-white py-2 px-4 rounded-lg mt-3 hover:bg-blue-600'>Subscribe</button>
      </form>
    </div>
  )
}

export default NewsletterBox;
