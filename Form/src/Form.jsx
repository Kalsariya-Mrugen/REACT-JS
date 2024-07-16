import React, { useState } from 'react'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
    let [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
    })

    const Input = (e) => {
        let { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    const Submit = (e) => {
        e.preventDefault()
        console.log(user)

        if (user.name && user.email && user.phone && user.address) {
            toast.success('🦄 Sign In successfully!', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce
            });

            setUser({
                name: '',
                email: '',
                phone: '',
                address: '',
            });
        } else {
            toast.error('Please check inputs !', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce
            });
        }

    }

    return (
        <div>
            <ToastContainer />
            <form onSubmit={Submit}>
                <input type="text" name="name" value={user.name} onChange={Input} placeholder='Enter Name' /><br />
                <input type="email" name="email" value={user.email} onChange={Input} placeholder='Enter Email' /><br />
                <input type="tel" name="phone" value={user.phone} onChange={Input} placeholder='Enter Phone No.' /><br />
                <textarea name="address" rows="2" cols="22" value={user.address} onChange={Input} placeholder='Enter Address' /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Form