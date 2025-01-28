import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'

export const Forgot = () => {
    return (
        <>
            <div className="bg-white flex justify-center items-center w-1/2">
                <div className="md:w-4/5 sm:w-full">
                    <h1 className="text-3xl font-semibold mb-2 text-center uppercase  text-gray-500">Olvidaste tu contraseña!</h1>
                    <small className="text-gray-400 block my-4 text-sm">Ingresa tu correo electrónico para poder recuperar tu cuenta.</small>
                    <form >
                        <div className="mb-1">
                            <label className="mb-2 block text-sm font-semibold">Email</label>
                            <input type="email" placeholder="Enter you email" className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
                        </div>
                        <div className="mb-3">
                            <Button className="bg-gray-600 text-slate-300 border py-2 w-full rounded-xl mt-5 hover:scale-105 duration-300 hover:bg-gray-900 hover:text-white" variant="primary" size="lg">Recuperara Cuenta</Button>
                        </div>
                    </form>
                    <div className="mt-5 text-xs border-b-2 py-4 "></div>
                    <div className="mt-3 text-sm flex justify-between items-center">
                        <p>You already remembered</p>
                        <Link to="/login"><Button variant="danger" size="lg">Login</Button></Link>
                    </div>
                </div>
            </div>
            <div className="w-1/2 h-screen bg-[url('/public/images/dragon_forgot.jpg')] bg-no-repeat bg-cover bg-center sm:block hidden"></div>
        </>
    )
}
