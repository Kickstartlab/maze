import React from 'react'
import twitter from '../assets/twitter.png';
import telegram from '../assets/telegram.png';
import medium from '../assets/medium.png';



export default function Footer() {
  return (
    <div className="font-montserat py-5">
      <footer data-aos="zoom-in" className='container text-white-100 mx-auto lg:px-20 font-montserat px-5'>

        <div className="flex flex-col items-center justify-center gap-y-8 mx-auto">

          <h2 className='md:text-4xl text-2xl font-montserat font-bold text-white-100'>
            Don't miss out, Stay updated
          </h2>

          <div className="py-1 pl-6 pr-1 lg:w-7/12 w-full lg:bg-black-50 lg:space-y-0 space-y-5 lg:flex items-center justify-between rounded-full">
            <input type="email" placeholder="Enter your email" id="email" required="" className="lg:p-0 p-5 lg:rounded-none rounded-full bg-black-50 focus:ring-0 focus:outline-none lg:w-7/12 w-full" />

            <button className='text-white-100 lg:px-12 px-2 lg:py-3 py-2 bg-green-100 rounded-full'>
              Subcribe
            </button>
          </div>

          <div className='text-center'>
            <p>
              Don’t hesitate to subscribe to latest news about ICo markets as well as crucial financial<br></br> knowledge to become successful investors globally
            </p>

            {/* <p className='pt-2'>
              Get in touch: <a href='mailto:decentraprotocolteam@gmail.com' className='text-purple-100'>decentraprotocolteam@gmail.com</a>
            </p> */}
          </div>

          <div className='flex justify-center gap-6 items-center lg:mt-0 mt-6'>

            <a href='https://twitter.com/mazecoin_eth'>
              <img src={twitter} alt="Twitter" className='' />
            </a>

            <a href='https://t.me/Mazecoin'>
              <img src={telegram} alt="Facebook" className='' />
            </a>

            <a href='https://medium.com/@themazecoin/cryptocurrency-investment-is-like-a-complex-maze-and-we-are-the-runners-navigating-through-it-25bafa5e5fa2'>
              <img src={medium} alt="Facebook" className='w-12 fill-green-50' />
            </a>

          </div>

        </div>

        <p className='pt-12 pb-6 text-center'>© {new Date().getFullYear()} All rights reserved by maze.</p>
      </footer>
    </div>

  )
}
