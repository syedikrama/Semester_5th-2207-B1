import React, { useState } from 'react';
import axios from 'axios';

export default function Form() {
    let [name, setName] = useState('');
    let [password, setPassword] = useState('');
    let [email, setEmail] = useState('');
    let [gender, setGender] = useState('');
    let [age, setAge] = useState('');
    let [address, setAddress] = useState('');

    function submit() {
        try {
            axios.post("http://localhost:3001/ikrama/route/save",{
                name,password,email,gender,age,address
            })
            alert('data save successfully in database');
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <div className='container w-50 bg-light mt-1'>
                <h2>Registration form</h2>
                <p>Enter Name</p>
                <input type="text" className='form-control my-3'
                    placeholder='Enter Name'
                    value={name}
                    onChange={(a) => setName(a.target.value)}
                />
                <p>Enter Password</p>
                <input type="password" className='form-control my-3'
                    placeholder='Enter Password'
                    value={password}
                    onChange={(b) => setPassword(b.target.value)}
                />
                <p>Enter Email</p>
                <input type="email" className='form-control my-3'
                    placeholder='Enter Email'
                    value={email}
                    onChange={(b) => setEmail(b.target.value)}
                />
                <p>Enter Gender</p>
                <input type="text" className='form-control my-3'
                    placeholder='Enter Gender'
                    value={gender}
                    onChange={(b) => setGender(b.target.value)}
                />
                <p>Enter Age</p>
                <input type="number" className='form-control my-3'
                    placeholder='Enter Age'
                    value={age}
                    onChange={(b) => setAge(b.target.value)}
                />
                <p>Enter Address</p>
                <input type="text" className='form-control my-3'
                    placeholder='Enter Address'
                    value={address}
                    onChange={(b) => setAddress(b.target.value)}
                />

            </div>
            <button className='btn btn-warning ' onClick={submit}>Save</button>

        </div>
    )
}
