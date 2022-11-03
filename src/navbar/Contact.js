import React from 'react'
import { useState } from 'react';



export default function Contact() {

  const [user, setUser] = useState({
     Firstname: "",
     Lastname:"",
    Email: "",
    Phone: ""
})
const getUserData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value })
}
const postData = async(e) => {
    e.preventDefault();
    const data = await fetch('https://news-6f00f-default-rtdb.firebaseio.com/StoremyData.json',
        {
            method: "POST",
            header: "Content-Type:application/json",
            body: JSON.stringify({
                Firstname: user.Firstname,
                Lastname: user.Lastname,
                Email: user.Email,
                Phone: user.Phone,
            })
        })
    if (data) {
        setUser({
            Firstname: "",
            Lastname: "",
            Email: "",
            Phone: ""
        })
        alert("Data Stored Succesfully");
    }
}

  return (
    <div className='cont'>
      <div className='c1'>
        <h1>Contact Us</h1>
        <p>We will get back to you asap !</p>
        <div className='details'>
          <form>
            <div className='name'>
              <input type='text' name='Firstname' placeholder='First Name' value={user.Firstname} onChange={getUserData} />
              <input type='text' name='Lastname' placeholder='Last Name' value={user.Lastname} onChange={getUserData}/>
            </div>
            <input type='email' className='input' name='Email' placeholder='Email'  value={user.Email} onChange={getUserData}/>
            <br/>
            <input type='tel'  className='input' name='Phone' placeholder='Phone' value={user.Phone} onChange={getUserData}/>
            <div className='submit'>
              <button type='submit' onClick={postData}>Send</button>
            </div>
          </form>
        </div>
        <p>You may also call us at 333-33-33</p>
      </div>
    </div>
  )
}
