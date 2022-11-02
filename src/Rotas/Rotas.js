import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from '../Pages/Login/Login';
import Home from '../Pages/Home/Home';
import Name_Page from '../Pages/Name_Page/Name_Page';
import Cadastrar from '../Pages/Cadastrar/Cadastrar';
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

function Rotas() {



    const user = useSelector(state=>state.user.user)

    return (
        <div>


            <Router>

                <Routes>
                    <Route path='/' element={<Login/>}/>

                    {user.logado == 1?<Route path='/Home' element={<Home/>}/>:'VOCÊ PRECISA ESTAR LOGADO PARA ACESSAR ESSA PAGINA'}
                    
                    <Route path='/YourName' element={<Name_Page/>}/>
                    <Route path='/Cadastro' element={<Cadastrar/>}/>
                    
                </Routes>
            </Router>


            
        </div>
    );
}

export default Rotas;