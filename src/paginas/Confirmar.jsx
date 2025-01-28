import logoDragon from '../assets/dragonite.jpg'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'

export const Confirmar = () => {
    return (
        
        <div className="flex flex-col items-center justify-center">

            <img class="object-cover h-80 w-80 rounded-full border-4 border-solid border-slate-600" src={logoDragon} alt="image description"/>

            <div className="flex flex-col items-center justify-center">
                <p className="text-3xl md:text-4xl lg:text-5xl text-gray-800 mt-12">Muchas Gracias</p>
                <p className="md:text-lg lg:text-xl text-gray-600 mt-8">Ya puedes iniciar sesión</p>
                <Link to="/login"><Button variant="outline-danger" size="lg">Login</Button></Link>
            </div>

        </div>
    )
}
