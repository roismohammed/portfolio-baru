import React from 'react'
import Guest from '../../layouts/Guest'
import './Contact.css'
import Button from '../../components/Button'
export default function Contact() {
    return (
        <Guest>
            <div id='contact' style={{ backgroundColor: '#302E30', minHeight: '100vh' }}>
                <div className="container">
                    <div className="row d-flex justify-content-center text-center">
                        <div className="text-white judul-contact text-center"data-aos="fade-up">
                            <p>Contact <span className='text-contact'>Me Here!</span></p>
                        </div>

                        <div className="col-md-6 p-3" data-aos="fade-down">
                            <div className=' isi-contact'>
                                <p className='text-white'>  Silakan menghubungi saya langsung di <a href="mailto:id.roismohammed@gmail.com">id.roismohammed@gmail.com</a> atau melalui formulir ini</p>

                                <p className='text-center text-white w-100'>  Jangan ragu untuk menghubungi saya kapan pun Anda membutuhkan bantuan atau ingin mendiskusikan apa pun. Saya di sini untuk membantu Anda dengan senang hati! 🚀</p>
                            </div>
                            <form>
                                <label htmlFor=""></label>
                                <input type="text"
                                    placeholder="Full Name"
                                    className="form-control"
                                    id="myinput"
                                />
                                <label htmlFor=""></label>
                                <input type="text"
                                    placeholder="Email Address"
                                    className="form-control"
                                    id="myinput"
                                />
                                <textarea
                                    name=""
                                    id="myTextarea"
                                    cols="20"
                                    rows="10"
                                    className="form-control mt-3"
                                    placeholder="Your Message"
                                ></textarea>

                                <div className='button-contact'>
                                    <Button text={'Submit'} />
                                </div>
                            </form>
                        </div>
                        <small className='text-white text-center  p-3'>
                            © 2023 Muhammad Rois</small>
                    </div>
                </div>
            </div>
        </Guest>
    )
}
