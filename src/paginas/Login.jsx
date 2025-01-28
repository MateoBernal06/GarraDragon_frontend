import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const Login = () => {
    return (
        <>
            <div className="w-1/2 h-screen bg-[url('/public/images/directiva_login.jpg')] 
            bg-no-repeat bg-cover bg-center sm:block hidden
            ">
            </div>

            <div className="w-1/2 h-screen bg-white flex justify-center items-center">
                
                <div className="md:w-4/5 sm:w-full">

                    <h1 className="text-3xl font-semibold mb-2 text-center uppercase  text-gray-500">Bienvenido Dragon 🐲</h1>
                    <small className="text-gray-400 block my-4 text-sm">Recuerda llenar todos los campos</small>


                    <form >
                        <div className="mb-3">
                            <label className="mb-2 block text-sm font-semibold">Email</label>
                            <input type="email" placeholder="Ingresa tu email" className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-2 text-gray-500" />
                        </div>

                        <div className="mb-3">
                            <label className="mb-2 block text-sm font-semibold">Password</label>
                            <input type="email" placeholder="Ingresa tu contraseña" className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-2 text-gray-500" />
                        </div>

                        <div className="my-4">
                            <Link to="/dashboard"><Button variant="primary" className="py-2 w-full block text-center bg-gray-500 text-slate-300 border rounded-xl hover:scale-100 duration-300 hover:bg-gray-900 hover:text-white" size="lg">Login</Button></Link>
                        </div>

                    </form>

                    <div className="mt-5 text-xs border-b-2 py-4 ">
                        <Link to="/forgot/id" className="underline text-sm text-gray-400 hover:text-gray-900">Forgot your password?</Link>
                    </div>

                    <div className="mt-3 text-sm flex justify-between items-center">
                        <p>Don't have an account?</p>
                        <Link to="/register"><Button variant="outline-danger" size="lg">Registro</Button></Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Login