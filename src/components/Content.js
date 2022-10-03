import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import '../style/content.css';
import CreatProductList from './CreatProductList';
import { productSet } from './ProductFactory';



const productDataLista1 = productSet.productList1
const productDataLista2 =productSet.productList2 
const productDataLista3 =productSet.productList3

//Retorna a lista de produtos
export default function Content() {

    return (
        <main className='conteudo'>
            <div className="hero">
                <div className="hero__texto">
                    <h1 className="hero__texto__titulo">Dezembro Promocional</h1>
                    <h3 className="hero__texto__subtitulo">Produtos selecionados com 33% de desconto</h3>
                    <button className="hero__texto__botao"> Ver Consoles </button>
                </div>
            </div>
            <section className='lista__produto'>
                <div className='lista__produto__cabecalho'>
                    <h2 className='lista__produto__titulo'>Star Wars</h2>
                    <Link to="/produtos" style={{ textDecoration: 'none' }} >
                        <button className='lista__produto__botao'>Ver tudo <span>&#10132;</span> </button>
                    </Link>
                </div>
                <div className='produto__container'>
                    <CreatProductList products={productDataLista1} />
                </div>
            </section>
            <section className='lista__produto'>
                <div className='lista__produto__cabecalho'>
                    <h2 className='lista__produto__titulo'>Consoles</h2>
                    <Link to="/produtos" style={{ textDecoration: 'none' }} >
                        <button className='lista__produto__botao'>Ver tudo <span>&#10132;</span> </button>
                    </Link>
                </div>
                <div className='produto__container'>
                    <CreatProductList products={productDataLista2} />
                </div>
            </section>
            <section className='lista__produto'>
                <div className='lista__produto__cabecalho'>
                    <h2 className='lista__produto__titulo'>Diversos</h2>
                    <Link to="/produtos" style={{ textDecoration: 'none' }} >
                        <button className='lista__produto__botao'>Ver tudo <span>&#10132;</span> </button>
                    </Link>
                </div>
                <div className='produto__container'>
                    <CreatProductList products={productDataLista3} />
                </div>
            </section>
        </main>
        
    );
}

