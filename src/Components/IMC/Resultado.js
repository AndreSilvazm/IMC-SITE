import React from 'react';
import './Resultado.css'

function Resultado({Peso, Idade, Altura})
 {



    const IMC = Peso / Altura**2


    return (
        <div>




            {Peso && Altura && Idade > 0? <div className='Container-result'>

                <h2>Seu IMC  é</h2>
                <h3>{IMC.toFixed(1)}</h3>

                {Peso && Altura > 0?

                


                IMC.toFixed(2) < 18.5? 'Você está muito abaixo do seu peso ideal!':
                IMC.toFixed(2)<24.9? 'Peso normal': 
                IMC.toFixed(2) <29.9? 'Excesso de peso': 
                IMC.toFixed(2) < 34.9? 'Obesidade classeI': 
                IMC.toFixed(2) < 39.9? 'Obesidade Classe II': 
                'Obesidade classe III': 'Preencha os dados corretamente'

                }



            </div>:''}









            
            
        </div>
    );
}

export default Resultado;