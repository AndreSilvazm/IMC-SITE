import React from 'react';
import './Cadastrar.css'
import {useState} from 'react'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {iniciar, auth} from '../../server/firebase'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { login } from '../../features/UserSlice';

function Cadastrar() {


    const[email, setEmail] = useState()
    const[senha,setSenha] = useState()

    const user = useSelector(state=>state.user.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function Cadastro(){

        createUserWithEmailAndPassword(auth, email, senha)
        .then(
            (e)=>{

                alert('Cadastrado com sucesso!')
                dispatch(login({

                    logado:1,
                    email:e.user.email,
                    nome:e.user.displayName
                }))

                navigate('/Home')
            }
        )

        .catch((e)=>{

            alert(e)
        })

    }

    return (
        <div className='main-container'>

            <section className='main-section'>

                <h1>Cadastre-se</h1>
                <label>Email</label>
                <input placeholder='email' type='text' onChange={(e)=>{setEmail(e.target.value)}}></input>
                <label>Senha</label>
                <input placeholder='Senha' type='Password' onChange={(e)=>{setSenha(e.target.value)}}></input>
                <button className='' onClick={Cadastro}>Cadastrar</button>

            </section>
        </div>
    );
}

export default Cadastrar;