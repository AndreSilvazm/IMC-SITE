import React from 'react';
import './IMC_Forms.css'
import {useState, useEffect} from 'react'
import Resultado from './Resultado';
import {useDispatch} from 'react-redux'


function IMC_Forms(props) {

    const[peso, setPeso] = useState()
    const[altura, setAltura] = useState()
    const[idade, setIdade] = useState()
    const[resultado, setResultado] = useState([])
    const[resultado2, setResultado2] = useState()
   


    
        
 
    return (
        <div className='all-content'>

            <div className='forms-imc'>

            <h1>Preencha seus dados</h1>

                <label for='idade'>Idade</label>
                <input type='number' name='idade' onChange={(e)=>{setIdade(e.target.value)}} onClick={()=>setResultado(+1)}/>

                <label for='peso'>Peso</label>
                <input type='text' placeholder='KG' onChange={(e)=>{setPeso(e.target.value)}} onClick={()=>setResultado(+1)}/>

                <label for='altura'>Altura</label>
                <input type='text' placeholder='CM' onChange={(e)=>{setAltura(e.target.value)}} onClick={()=>setResultado(+1)}/>

                


                
                
                {resultado == 1? <Resultado Peso={peso} Altura={altura} Idade={idade}/> : ''}
            </div>

            

        </div>
    );
}

export default IMC_Forms;