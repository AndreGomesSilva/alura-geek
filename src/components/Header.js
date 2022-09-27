import React from 'react';
import '../index.css';

//dados do cabeçalho
const headerData = {
    logo: require('../assets/img/header/Logo.png'),
    BarraDePesquisa: require('../assets/img/header/barra-pesquisa.png'),
}

//retorna cabeçalho
export default function Header() {
    return (
        <header className='header'>
            <div className="topo">
                <div className="topo__cabecalho">
                    <div className="cabecalho__direita">
                        <img src={headerData.logo} alt="logo AluraGeek" />
                        <img className='cabecalho__barra__pesquisa' src={headerData.BarraDePesquisa} alt="Barra de pesquisa" />
                    </div>
                    <div className="cabecalho__botao">
                        <button className="cabecalho__botao__login">Login</button>
                    </div>
                </div>
            </div>
            <div className="hero">
                <div className="hero__texto">
                    <h1 className="hero__texto__titulo">Dezembro Promocional</h1>
                    <h3 className="hero__texto__subtitulo">Produtos selecionados com 33% de desconto</h3>
                    <button className="hero__texto__botao"> Ver Consoles </button>
                </div>
            </div>
        </header>
    );
}
