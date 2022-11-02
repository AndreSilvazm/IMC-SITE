import React from 'react';
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { login } from '../../features/UserSlice';
import './Log_Out_Btn.css'

function Log_Out_Btn(props) {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    function Desconectar(){

        dispatch(login({
            logado:0
        }))
        navigate('/')
        


    }


    return (
        <div>

            <button onClick={Desconectar} className='Log_Out_Btn'>Desconectar</button>
            
        </div>
    );
}

export default Log_Out_Btn;