import React from 'react';
import '../style/content.css';
import '../index.css';
import { productSet } from './ProductFactory';
import CreatProductList from './CreatProductList';


const productData = [productSet.produtosLista1, productSet.produtosLista2, productSet.produtosLista3]

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
                    <button className='lista__produto__botao'>Ver tudo <span>&#10132;</span> </button>
                </div>
                <div className='produto__container'>
                    <CreatProductList products={productData[0]} />
                </div>
            </section>
            <section className='lista__produto'>
                <div className='lista__produto__cabecalho'>
                    <h2 className='lista__produto__titulo'>Consoles</h2>
                    <button className='lista__produto__botao'>Ver tudo <span>&#10132;</span> </button>
                </div>
                <div className='produto__container'>
                    <CreatProductList products={productData[1]} />
                </div>
            </section>
            <section className='lista__produto'>
                <div className='lista__produto__cabecalho'>
                    <h2 className='lista__produto__titulo'>Diversos</h2>
                    <button className='lista__produto__botao'>Ver tudo <span>&#10132;</span> </button>
                </div>
                <div className='produto__container'>
                    <CreatProductList products={productData[2]} />
                </div>
            </section>
        </main>
    );
}


