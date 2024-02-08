import React, { useState } from 'react'
import Guest from './layouts/Guest'
import { Typewriter } from 'react-simple-typewriter'
import { RiArrowUpFill, RiFacebookFill, RiInstagramFill, RiTiktokFill, RiYoutubeFill } from "react-icons/ri";
import './index.css'
import Button from './components/Button';
import { motion } from "framer-motion"
export default function Index() {
  const [stikyIcon, setStikyIcon] = useState(false)

  const changeStiky = () => {
    if (window.scrollY >= 50) {
      setStikyIcon(true)
    } else {
      setStikyIcon(false)
    }
  }

  window.addEventListener('scroll', () => {
    changeStiky()
  })
  return (
    <Guest>
      <div id='atas' style={{ backgroundColor: '#2B2A2B', minHeight: '100vh' }}>
        <div className="container" >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -35 },
              visible: { opacity: 1, y: 0 }
            }} initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.25 }}>
            <div className="row  d-flex mt-4 align-items-center vh-100 mx-md-4 isi-index ">
              <div className="col-md-7 p-3 ">
                <div className="text-white ">
                  <h1 className='text1 '>Hello it's me
                    <span className='tangan'>👋🏻</span></h1>
                  <h1 className='text2 d-flex'> Muhammad Rois</h1>
                  <h1 className='and'> And i'm a
                    <span className="p-2" style={{ color: 'yellow', fontWeight: 'bold', marginLeft: '10px' }}>
                      <Typewriter
                        loop
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        words={['Front-end Dev', 'Programmer', 'Photografer']}

                      />
                    </span>
                  </h1>
                  <p className='fs-2 text3'> "Saya seorang Software Engineer junior dari Indonesia yang menggunakan JavaScript dan Framework React.js" Saat ini, saya bekerja sebagai freelancer"</p>
                  {/* icon */}
                  <div className='d-flex gap-4 mt-3 mx-2 icon-index'>
                    <div className="menu-icon">
                      <a
                        href="https://web.facebook.com/uhammadrois"
                        className="index-icon">
                        <RiFacebookFill />
                      </a>
                    </div>

                    <div className="menu-icon ">
                      <a
                        href="https://www.instagram.com/roess___/"
                        className="index-icon">
                        <RiInstagramFill />
                      </a>
                    </div>

                    <div className="menu-icon ">
                      <a
                        href="https://www.tiktok.com/@roisdev_?_t=8jhHW15U60m&_r=1"
                        className="index-icon">
                        <RiTiktokFill />
                      </a>
                    </div>

                    <div className="menu-icon ">
                      <a href='https://www.youtube.com/channel/UCN7HkTZtjILbDCQzzzHCeWg' className="index-icon">
                        <RiYoutubeFill />
                      </a>
                    </div>
                  </div>

                  {/* tombol */}
                  <div className='tombol-index'>
                    <a href="../rois.pdf">
                      <Button text={'DOWNLOAD CV'} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-5">
                <img src="../indexfoto.png" className='foto-index' alt="" />
              </div>
            </div>
          </motion.div>
        </div>
        {/* icon  */}
        <div className={stikyIcon ? 'hidden text-white text-end fixed-bottom p-5 ' : 'text-white text-end fixed-bottom p-5 stiky-icon'}>
          <a href="#atas" >
            <RiArrowUpFill className='icon-atas' /></a>
        </div>
      </div>
    </Guest >
  )
}
