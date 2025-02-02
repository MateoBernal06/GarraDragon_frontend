import logoDragon from '../assets/charizard.jpg'
//import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
//import { useEffect, useState } from 'react'
//import { useParams } from 'react-router-dom';
//import axios from 'axios';
import Button from 'react-bootstrap/Button'


const Restablecer = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <ToastContainer />
            <h1 className="text-3xl font-semibold mb-2 text-center uppercase  text-gray-500">hola de nuevo 🐉</h1>
            <small className="text-gray-400 block my-4 text-sm">Ingresa una contraseña que esta vez no olvidarás</small>
            <img className="object-cover h-80 w-80 rounded-full border-4 border-solid border-slate-600" src={logoDragon} alt="image description" />
            <br />
            {tokenback &&
                <form className='w-full' onSubmit={handleSubmit}>
                    <div className="mb-1">
                        <label className="mb-2 block text-sm font-semibold">Password</label>
                        <input type="password" placeholder="Enter your password" className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                            value={form.password || ""}
                            name='password'
                            onChange={handleChange}
                        />
                        <br />
                        <label className="mb-2 block text-sm font-semibold ">Confirm password</label>
                        <input type="password" placeholder="Repeat your password" className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                            value={form.confirmpassword || ""}
                            name='confirmpassword'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <Button variant="outline-danger" size="lg">Restablecer</Button>
                    </div>
                </form>
            }
        </div>
    )
}

export default Restablecer