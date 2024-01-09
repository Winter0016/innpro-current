import React from 'react'
import { images } from '../../../../constants'
import './contact.css'
import './contact_reponsive.css'


export const Contact = () => {
  return (
    <>
    <img className="in-touch" src={images.contact} alt='a'/>
    <div className="form">
        <form className="write-form">
            <div className="write-in">Tên</div>
            <input className="input-form" type="text" placeholder="Name" required />
            <div for="phoneNumber" className="write-in">Số Điện Thoại</div>
            <input className="input-form" type="text" name="phoneNumber" pattern="[0-9]{10}"  required />
            <div className="write-in">Email</div>
            <input className="input-form" type="text" placeholder="Email" required/>
            <div className="write-in">Mật Khẩu</div>
            <input className="input-form" type="password" placeholder="Password" required />
            <button type='submit'>
                <img className="form-button" src={images.form} alt='a'/>
            </button>
        </form>
        <img className="uber" src={images.uber} alt='a'/>
    </div>
    </>
  )
}
