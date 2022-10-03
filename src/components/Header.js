import React from 'react';
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import '../index.css';

//user location



//dados do cabeçalho
const headerData = {
    logo: require('../assets/img/header/Logo.png'),
    BarraDePesquisa: require('../assets/img/header/barra-pesquisa.png'),
}

//retorna cabeçalho
export default function Header() {
    const location = useLocation();
    const isHomePage = location.pathname.match(/^\/$/);
    return (
        <header className='header'>
            <div className="topo">
                <div className="topo__cabecalho">
                    <div className="cabecalho__direita"> 
                        <Link to="/" style={{ textDecoration: 'none' }} >
                            <img src={headerData.logo} alt="logo AluraGeek" />
                        </Link>
                        <img className='cabecalho__barra__pesquisa' src={headerData.BarraDePesquisa} alt="Barra de pesquisa" />
                    </div>
                    {isHomePage ?  
                     <div className="cabecalho__botao">
                        <Link to="/login" style={{ textDecoration: 'none'}} >
                            <button type="button" className="cabecalho__botao__login">Login</button>
                        </Link>
                    </div> 
                    : null}
                </div>
            </div>
        </header>
    );
}
