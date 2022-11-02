import React, { useState } from 'react';
import {db, auth, iniciar, provider} from '../../server/firebase'
import {signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth'
import { login } from '../../features/UserSlice';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useNavigate} from 'react-router-dom'
import './Login.css'
import pera from '../../Mídias/pera.png'
import beringela from '../../Mídias/beringela.png'
import maca from '../../Mídias/maca.png'
import fita from '../../Mídias/fita.png'
import tomate from '../../Mídias/tomate.png'



function Login() {

    const[email, setEmail] = useState('')
    const[senha, setSenha] = useState('')


    const dispatch = useDispatch()
    const navigate = useNavigate()
  

    function Logar(){

        signInWithEmailAndPassword(auth, email, senha)
        .then((e)=>{


            dispatch(login({

                logado:1,
                email:email
            }))

            navigate('/Home')

            
            
        })
        .catch((e)=>{

            alert(e)
        })



    }


    function Google(){

        signInWithPopup(auth, provider)
        .then( (e) => {

            dispatch(login({

                logado:1,
                email:e.user.email,
                nome:e.user.displayName
            }))

            navigate('/Home')
        })

        .catch(e=>alert(e))


    }

    return (
        <div className='all-container'>


            <div className='Ilustration-content'>


                <div className='leftside-imgs'>

                    <img src={beringela} className='beringela'/>
                    <img src={fita} className='fita'/>
                    <img src={maca} className='maca'/>


                </div>


                <div className='text-login'>

                    <h1>Calcule seu IMC</h1>
                    <p>O índice de massa corporal é uma medida internacional usada para calcular se uma pessoa está no peso ideal. </p>

                </div>



            </div>

            <div class="modal modal-signin position-static d-block  py-5 login-box" tabindex="-1" role="dialog" id="modalSignin">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content rounded-4 shadow">
                        <div class="modal-header p-5 pb-4 border-bottom-0">
                            <h1 class="fw-bold mb-0 fs-2">Entrar</h1>
                        </div>

                        <div class="modal-body p-5 pt-0">

                            <div class="form-floating mb-3">
                                <input type="email" class="form-control rounded-3" id="floatingInput" placeholder="name@example.com" onChange={(e)=>{setEmail(e.target.value)}}/>
                                <label for="floatingInput">Email</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="password" class="form-control rounded-3" id="floatingPassword" placeholder="Senha" onChange={(e)=>{setSenha(e.target.value)}}/>
                                <label for="floatingPassword">Senha</label>
                            </div>
                            <button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit" onClick={Logar}>Logar</button>
                            <small class="text-muted">Não esta inscrito ainda? <Link to='/Cadastro'>Cadastrar</Link></small>
                            <hr class="my-4"/>
                            <h2 class="fs-5 fw-bold mb-3">Outras formas de Login</h2>
                            <button class="w-100 py-2 mb-2 btn btn-outline-dark rounded-3" type="submit" onClick={Google}>
                                Entrar com Google
                            </button>
                            
                    
                        </div>
                        </div>
                    </div>
                    </div>


        </div>
        
    );
}

export default Login;