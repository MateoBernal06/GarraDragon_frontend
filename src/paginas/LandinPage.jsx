
import logoFacebook from '../assets/logo_redes/facebook.jpg'
import logoInstagram from '../assets/logo_redes/instagram.jpg'
import logoTiktok from '../assets/logo_redes/tiktok.jpg'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import imagenDesfile from '../assets/imagenes_landinPage/desfile.jpg'
import imagenDesfile_dragon from '../assets/imagenes_landinPage/desfile_2.jpg'
import imagenDesfileDirectiva from '../assets/imagenes_landinPage/desfile_3.jpg'
import mingaEsfot from '../assets/imagenes_landinPage/minga.jpg'
import minga from '../assets/imagenes_landinPage/minga_2.jpg'
import logoASO from '../assets/logos/logo_aso.jpg'
import Button from 'react-bootstrap/Button'



export const LandinPage = () => {
    return (
        <div>
            <body>
                <nav className='botones-logo-frase'>
                    <div className='lugar-logo'>
                        <img className='logo' src={logoASO} alt="logo-esfot"/>
                    </div>
                    <div className='lugar-frase'>
                        <p className='frase'>
                            "En la ESFOT, el futuro se construye con ingenio, pasión y tecnología. ¡Sueña en grande, 
                            innova sin límites y transforma el mundo a tu alcance!" 🚀
                        </p>
                    </div>
                    <div className='login-register-mod'>
                        <Link className='linkRuta' to="/login" href="#"><Button variant="outline-light">Login</Button></Link>
                        <Link className='linkRuta' to="/register" href="#"><Button variant="outline-light">Registro</Button></Link>
                    </div> 
                </nav>

                <section>
                    <div className='lugar-desfile'>
                        <img className='imagen-desfile' src={imagenDesfile_dragon} alt="defile-esfot" />
                        <img className='imagen-desfile' src={mingaEsfot} alt="minga-esfot" />
                        <img className='imagen-desfile' src={imagenDesfile} alt="defile-esfot" />
                    </div>
                </section>

                <section>
                    <div className='descripcion-imagen'>
                        <div className='lugar-descripcion'>
                            <h1 className='titulo-app'>Sistema de Aportaciones ASO-ESFOT</h1>
                            <p className='descripcion'>
                                Bienvenido al sistema de aportaciones de nuestra Facultad, un espacio diseñado para fomentar el espíritu de colaboración 
                                y apoyo entre estudiantes. Aquí, cada contribución cuenta y puede marcar una diferencia significativa en la vida de tus 
                                compañeros y en el desarrollo de proyectos e iniciativas que beneficien a todos.
                            </p>
                        </div>
                        <div className='lugar-imagen-descripcion'>
                            <img className='imagenes-aso' src={minga} alt="logo-ASO" />
                        </div>
                    </div>
                    <div className='descripcion-imagen'>
                        <div className='lugar-imagen-descripcion'>
                            <img className='imagenes-aso'src={imagenDesfileDirectiva} alt="" />
                        </div>
                        <div className='lugar-descripcion'>
                            <h2 className='pregunta'>¿Por qué contribuir?</h2>
                            <ul>
                                <li>
                                    <p className='respuestas-pregunta'><b>Fortalece el aprendizaje:</b>Tus aportaciones ayudan a mejorar recursos educativos, instalaciones 
                                    y herramientas que enriquecen nuestra experiencia académica.</p>
                                </li>
                                <br/>
                                <li>
                                    <p className='respuestas-pregunta'><b>Apoya a tus compañeros:</b>Facilita becas y ayudas económicas que permiten a más estudiantes continuar 
                                    su educación sin barreras financieras.</p>
                                </li>
                                <br />
                                <li>
                                    <p className='respuestas-pregunta'><b>Fomenta la innovación:</b>Impulsa proyectos de investigación y desarrollo que posicionan a nuestra facultad 
                                    a la vanguardia del conocimiento.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </body>
            <footer>
                <div className='pie-pagina'>
                    <div>
                        <ul className='pie'>
                            <li><img className='logo-pie' src={logoASO} alt="" /></li>
                            <li>asoesfot@gmail.com</li>
                            <li>(02)-2953055</li>
                            <li>Direccion: Guatemala y Condorcunga</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='pie'>
                            <li>Redes</li>
                            <li>
                                <div className='redes'>
                                    <p><img className='logo-redes' src={logoFacebook} alt="log-facebook" /></p>
                                    <p><img className='logo-redes' src={logoInstagram} alt="log-instagram" /></p>
                                    <p><img className='logo-redes' src={logoTiktok} alt="log-tiktok" /></p>
                                </div>
                            </li>
                            <li>
                                <p>© 2025 Mateo Bernal. Todos los derechos reservados.</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className='pie'>
                            <li><p href="">Aviso Legal</p></li>
                            <li><p href="">Política de Privacidad</p></li>
                            <li><p href="">Términos y Condiciones</p></li>
                            <li><p href="">Política de Cookies</p></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}