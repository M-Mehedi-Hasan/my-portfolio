import React, {useState} from 'react'

const Contact = () => {

  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [text, setText] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <div id='contact' className='text-white sm:mx-12 py-12 xs:mx-6 rounded-lg mt-12'>
      <div className='mx-auto justify-center items-center flex flex-col'>
        <h2 className='text-3xl mb-5 font-medium'>Contact</h2>
        <p>Submit the form below to get in touch with me</p>
        <form className='flex flex-col' action='https://getform.io/f/6acac9d8-0cf5-4a89-8b4b-e4f0f7936347' method='POST'>
          <div className='my-10 flex flex-col'>
          <label>Name: </label>
            <input 
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text" 
            className='border bg-white rounded xs:w-[290px] sm:w-[360px] h-8' />
          </div>
          <div className='mb-10 flex flex-col'>
            <label>Email: </label>
            <input 
            name='email'
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            type="email" 
            className='border bg-white rounded h-8' />
          </div>
          <label>Message: </label>
          <textarea className=' rounded text-black px-2 py-1'
          name='message'
          value={text}
          onChange={(e) => setText(e.target.value)}/>
          <button onSubmit={submitHandler} className='bg-blue-gradient rounded-full w-[140px] h-[40px] mt-12 mx-auto'>Let's Talk</button>
        </form>
      </div>
    </div>
  )
}

export default Contact