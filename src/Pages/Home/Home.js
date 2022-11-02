import React from 'react';
import {useSelector} from 'react-redux'
import Log_Out_Btn from '../../Components/Log_out_Btn/Log_Out_Btn';
import IMC_Forms from '../../Components/IMC/IMC_Forms';
import './Home.css'

function Home() {


    const state = useSelector(state => state.user.user)


    return (
        <div className='Body'>

            {state.logado > 0? 
            
           <div>
            <Log_Out_Btn/>
            <IMC_Forms/>
           </div>
            :''}
            
        </div>
    );
}

export default Home;