import React, { useEffect } from 'react'
import Footer from './Footer'
import Menu from './Menu'
import about from '../assets/about.png';
import buy_1 from '../assets/buy_1.png';
import buy_2 from '../assets/buy_2.png';
import buy_3 from '../assets/buy_3.png';
import buy_4 from '../assets/buy_4.png';
import line_1 from '../assets/line_1.png';
import roadmap from '../assets/roadmap.png';
import roadmap_1 from '../assets/roadmap_1.png';
import top from '../assets/top.png';
import token_1 from '../assets/token_1.png';
import twitter from '../assets/twitter.png';
import telegram from '../assets/telegram.png';
import line from '../assets/line.png';
import bg_community from '../assets/bg_community.png';
import Maze from './Maze';
import Maze_1 from './Maze_1';
import Aos from 'aos';
import 'aos/dist/aos.css';


export default function Home() {

    useEffect(() => {
        Aos.init({
            duration: 800,
        });
        Aos.refresh();
    }, [])

    return (
        <div className="bg-black-100 font-mulish overflow-hidden text-white-100">

            {/* top section */}


            <div className='lg:block hidden w-full absolute top-0 left-0 right-0'>
                <Maze />
            </div>

            <div className="lg:px-20 px-5 relative z-20">
                <div className='container mx-auto'>

                    <Menu />
                    <div className='lg:py-20 py-12 space-y-8'>
                        <h1 className='font-questrial text-center lg:text-6xl text-3xl'>
                            u will be  <span className='font-rage text-green-50'>amazed</span>  by the Maze
                        </h1>

                        <div className="lg:flex justify-between items-center space-y-8">

                            <div data-aos='slide-right' className='lg:w-2/12 space-y-6'>
                                <p>
                                    Cryptocurrency investment is like a complex maze, and we are the runners navigating through it
                                </p>

                                <button className='uppercase font-bold rounded-full bg-green-100 py-3 px-5'>
                                    Audit
                                </button>
                            </div>

                            <div data-aos='zoom-in' className=''>
                                <img src={top} alt='maze'></img>
                                <h1 className='text-green-100 font-bold text-center lg:text-6xl text-3xl'>
                                    maze
                                </h1>
                            </div>

                            <div data-aos='slide-left' className='space-y-8 lg:block hidden'>
                                <a href='https://twitter.com/mazecoin_eth'>
                                    <img src={twitter} alt="Twitter" className='' />
                                </a>

                                <a href='https://t.me/Mazecoin'>
                                    <img src={telegram} alt="Facebook" className='' />
                                </a>
                            </div>

                        </div>
                    </div>

                </div>
            </div >

            <div className='py-5'>
                <img src={line} alt='line' className='flex- mx-auto w-full'></img>
            </div>

            {/* about us section */}

            <div className='lg:block hidden w-full absolute left-0 right-0 mx-auto'>
                <Maze_1 />
            </div>

            <div id='about' className="lg:px-20 px-5 lg:py-20 py-6 relative z-20">
                <div className='container mx-auto'>

                    <div className="flex flex-col justify-center items-center gap-y-8 lg:w-8/12 mx-auto text-center">

                        <p className='font-semibold text-green-100 uppercase tracking-wider'>about us</p>

                        <h2 data-aos='slide-up' className='md:text-5xl text-3xl font-extrabold text-green-50'>
                            maze ($MAZE)<br></br>
                            "u will be amazed by the Maze"

                        </h2>

                        <p data-aos='slide-up' className='lg:leading-loose'>
                            Cryptocurrency investment is like a complex maze, and we are the runners navigating through it. The winner is the patient one who carefully chooses the right path at the right time, just like a whale that makes significant profits. Those who give up after one or two attempts and resort to complaining and blaming others are the ones who fail and are eliminated from this running maze. Let us unite together and focus on conducting our own research (DYOR - Do Your Own Research). We should assist our friends and family in finding genuine opportunities for investing in coins with real potential. By working together, we can conquer this maze and emerge victorious.
                        </p>

                    </div>

                </div>
            </div>

            <div className=''>
                <img src={line} alt='line' className='flex mx-auto w-full'></img>
            </div>

            {/* community section */}

            <img src={bg_community} alt='maze' className='w-full absolute left-0 right-0 h-85 opacity-10'></img>

            <div className='w-full absolute left-0 right-0 line'>
            </div>

            <div id='community' className="lg:px-20 px-5 lg:py-12 py-6 relative z-20">
                <div className='container mx-auto'>

                    <div className="lg:flex block justify-center items-center gap-x-12 py-12">

                        <div data-aos="fade-left" className="lg:w-1/2 w-full">

                            <h2 className='md:text-5xl text-3xl font-extrabold text-green-50'>
                                We Take Pride in our
                                Community
                            </h2>

                            <p className='pt-6 pb-4 lg:leading-loose'>
                                Our maze community is a source of pride for us. We believe in building a strong community through trust and mutual support. Together, we will navigate the complexities of the maze, sharing knowledge and experiences, and empowering one another to achieve success. Join us and be a part of our community.
                            </p>

                        </div>

                        <div data-aos="zoom-in" data-aos-delay="350" className=" md:mt-0 mt-12">
                            <img src={about} alt="Logo" className='w-10/12 lg:float-right sm:flex mx-auto' />
                        </div>

                    </div>
                </div>
            </div>

            <div className='py-5 flex items-center justify-center'>
                <img src={line_1} alt='line' className='w-full'></img>
                <img src={line_1} alt='line' className='w-full'></img>
                <img src={line_1} alt='line' className='w-full'></img>
            </div>

            {/* how to buy */}

            <div className='lg:block hidden w-full absolute left-0 right-0'>
                <Maze />
            </div>

            <div id='buy' className="lg:px-20 px-5 lg:py-20 py-6 relative z-20">
                <div className='container mx-auto'>

                    <div className="flex flex-col justify-center items-center gap-y-8 lg:w-8/12 mx-auto text-center">

                        <p className='font-semibold text-green-100 uppercase tracking-wider'>How to Buy</p>

                        <h2 className='md:text-5xl text-3xl font-extrabold text-green-50'>
                            Get your very own token!
                        </h2>

                    </div>

                    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-baseline justify-center gap-8 lg:my-20 my-6'>

                        <div data-aos='slide-up' className='flex flex-col items-center text-center gap-y-4'>
                            <img src={buy_1} alt='buy'></img>
                            <h5 className='text-2xl font-mulish font-extrabold text-green-50'>Grab A Wallet</h5>
                            <p className='text-white-100 opacity-50 lg:leading-loose'>
                                Download metamask or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to metamask.io.
                            </p>
                        </div>

                        <div data-aos='slide-up' className='flex flex-col items-center text-center gap-y-4'>
                            <img src={buy_2} alt='buy'></img>
                            <h5 className='text-2xl font-mulish font-extrabold text-green-50'>Obtain Some Eth</h5>
                            <p className='text-white-100 opacity-50 lg:leading-loose'>
                                Have ETH in your wallet to switch to $MAZE. If you don’t have any ETH, you can buy directly on metamask, transfer from another wallet, or buy on another exchange and send it to your wallet.
                            </p>
                        </div>

                        <div data-aos='slide-up' className='flex flex-col items-center text-center gap-y-4'>
                            <img src={buy_3} alt='buy'></img>
                            <h5 className='text-2xl font-mulish font-extrabold text-green-50'>Choose an Exchange</h5>
                            <p className='text-white-100 opacity-50 lg:leading-loose'>
                                Have ETH in your wallet to switch to $MAZE. If you don’t have any ETH, you can buy directly on metamask, transfer from another wallet, or buy on another exchange and send it to your wallet.
                            </p>
                        </div>

                        <div data-aos='slide-up' className='flex flex-col items-center text-center gap-y-4'>
                            <img src={buy_4} alt='buy'></img>
                            <h5 className='text-2xl font-mulish font-extrabold text-green-50'>Switch Eth for maze</h5>
                            <p className='text-white-100 opacity-50 lg:leading-loose'>
                                Have ETH in your wallet to switch to $MAZE. If you don’t have any ETH, you can buy directly on metamask, transfer from another wallet, or buy on another exchange and send it to your wallet.
                            </p>
                        </div>

                    </div>

                    <button className='px-6 py-3 border-4 border-black-50 bg-green-100 font-bold hover-bg-transparent text-white-100 rounded-full mt-12 flex mx-auto'>
                        Contract Address
                    </button>
                </div>
            </div>

            <div className='py-5 flex items-center justify-center'>
                <img src={line_1} alt='line' className='w-full'></img>
                <img src={line_1} alt='line' className='w-full'></img>
                <img src={line_1} alt='line' className='w-full'></img>
            </div>

            {/* tokenomics section */}

            <div className='bg_roadmap'>

                <div id='tokenomics' className="lg:px-20 px-5 lg:py-20 py-6">
                    <div className='container mx-auto'>

                        <div className="lg:flex block justify-between items-center gap-x-12 py-12">

                            <div data-aos="fade-left" className="lg:w-1/2">

                                <h2 className='md:text-5xl text-3xl font-extrabold text-green-50'>
                                    TOKENOMICS
                                </h2>

                                <p className='pt-6 lg:text-lg'>
                                    Token Name: maze
                                </p>

                                <p className=' lg:text-lg'>
                                    Ticker: $MAZE
                                </p>

                                <p className='pt-10 lg:text-lg'>
                                    Total Supply: 100,000,000,000,000 $MAZE
                                </p>

                                <button className='uppercase font-bold rounded-full bg-green-100 py-3 px-5 mt-10'>
                                    View Whitepaper
                                </button>

                            </div>

                            <div data-aos="zoom-in" className="md:mt-0 mt-12">
                                <img src={token_1} alt="Logo" className='' />
                                {/* <h3 className='text-center lg:text-7xl text-5xl font-extrabold text-green-50 bg-black-100 w-28 absolute lg:-mt-60 -mt-44 lg:ml-40 ml-28 translate-x-1'>
                                    0/0
                                </h3> */}
                            </div>

                        </div>
                    </div>
                </div>

                <div className='py-5'>
                    <img src={line} alt='line' className='flex mx-auto w-full'></img>
                </div>

                {/* roadmap section */}

                <div id='roadmap' className="px-5 lg:py-24 py-6">
                    <div className='container mx-auto'>

                        <div className='space-y-8 text-center mb-16'>

                            <p data-aos='slide-up' className='text-green-50 uppercase tracking-wider'>ROAD MAP</p>

                            <h2 data-aos='slide-up' className='md:text-5xl text-3xl font-extrabold text-green-50'>
                                MAZE MAP
                            </h2>
                        </div>

                        <div className='lg:block hidden'>
                            <div data-aos='slide-down' className='space-y-6 absolute ml-40 mt-8'>
                                <div className='flex items-center gap-x-4'>
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="15" cy="15" r="15" fill="#60DDB3" />
                                    </svg>

                                    <h3 className='font-extrabold lg:text-4xl text-2xl'>
                                        Level 1
                                    </h3>
                                </div>

                                <ul className='space-y-3'>
                                    <li>🎯Community building (Twitter, Telegram,<br></br> Medium and Website)</li>
                                    <li>🎯Contract audit</li>
                                    <li>🎯Social media marketing</li>
                                    <li>🎯Liquidity lock and launch</li>
                                    <li>🎯Dextool updates</li>
                                    <li>🎯Big marketing push</li>
                                    <li>🎯CG, CMC Listing, Dextool trending</li>
                                </ul>
                            </div>

                            <div data-aos='slide-down' className='space-y-6 absolute right-1/3 -mr-24 mt-6'>
                                <div className='flex items-center gap-x-4'>
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="15" cy="15" r="15" fill="#60DDB3" />
                                    </svg>

                                    <h3 className='font-extrabold lg:text-4xl text-2xl'>
                                        Level 2
                                    </h3>
                                </div>

                                <p className='text-lg uppercase'>To be announced soon</p>
                            </div>
                        </div>

                        <div className='lg:hidden block space-y-12'>
                            <div className='space-y-6'>
                                <div className='flex items-center gap-x-4'>
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="15" cy="15" r="15" fill="#60DDB3" />
                                    </svg>

                                    <h3 className='font-extrabold lg:text-4xl text-2xl'>
                                        Level 1
                                    </h3>
                                </div>

                                <ul className='space-y-3'>
                                    <li>🎯Community building (Twitter, Telegram,<br></br> Medium and Website)</li>
                                    <li>🎯Contract audit</li>
                                    <li>🎯Social media marketing</li>
                                    <li>🎯Liquidity lock and launch</li>
                                    <li>🎯Dextool updates</li>
                                    <li>🎯Big marketing push</li>
                                    <li>🎯CG, CMC Listing, Dextool trending</li>
                                </ul>
                            </div>

                            <div className='space-y-6'>
                                <div className='flex items-center gap-x-4'>
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="15" cy="15" r="15" fill="#60DDB3" />
                                    </svg>

                                    <h3 className='font-extrabold lg:text-4xl text-2xl'>
                                        Level 2
                                    </h3>
                                </div>

                                <p className='text-lg uppercase'>To be announced soon</p>
                            </div>
                        </div>

                        <div data-aos='zoom-in' className='lg:flex hidden items-center gap-x-0'>
                            <img src={roadmap_1} alt='maze' className='flex mx-auto'></img>
                            <img src={roadmap} alt='maze' className='flex mx-auto -ml-3'></img>
                        </div>

                    </div>
                </div>


                <Footer />
            </div>

        </div >
    )
}
