import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react'


const Contact = () => {

  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_c7gw149', 'template_nrvvw0w', form.current, 'M3wEd8ZDovwba9Bg5')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div name='contact' className='w-full h-screen text-white'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>

        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
          <p className='py-6'>Submit the form below to get in touch with me</p>
        </div>

        <div className='flex justify-center items-center'>

          <form
            ref={form}
            onSubmit={sendEmail}
            className='flex flex-col w-full md:w-1/2'
          >
            <input
              required
              type='text'
              name='name'
              placeholder='Enter your name'
              className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
            />
            <input
              required
              type='email'
              name='email'
              placeholder='Enter your email'
              className=' my-3 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
            />
            <textarea
              required
              name="message"
              rows="10"
              className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
            ></textarea>

            <button
              type="submit"
              value="Send"
              className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's talk</button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Contact