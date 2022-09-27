import React from 'react';
import '../style/content.css';
import {productSet} from './ProductFactory';
import CreatProductList from './AddProduct';


const productData = [productSet.produtosLista1, productSet.produtosLista2, productSet.produtosLista3]

//Retorna a lista de produtos
export default function Content() {

    return (
        <main className='conteudo'>
            <section className='lista__produto'>
                <div className='lista__produto__cabecalho'>
                    <h2 className='lista__produto__titulo'>Star Wars</h2>
                    <button className='lista__produto__botao'>Ver tudo <span>&#10132;</span> </button>
                </div>
                <div className='produto__container'>
                    <CreatProductList products = {productData[0]} />
                </div>
            </section>
            <section className='lista__produto'>
                <div className='lista__produto__cabecalho'>
                    <h2 className='lista__produto__titulo'>Consoles</h2>
                    <button className='lista__produto__botao'>Ver tudo <span>&#10132;</span> </button>
                </div>
                <div className='produto__container'>
                <CreatProductList products = {productData[1]} />
                </div>
            </section>
            <section className='lista__produto'>
                <div className='lista__produto__cabecalho'>
                    <h2 className='lista__produto__titulo'>Diversos</h2>
                    <button className='lista__produto__botao'>Ver tudo <span>&#10132;</span> </button>
                </div>
                <div className='produto__container'>
                <CreatProductList products = {productData[2]} />
                </div>
            </section>
        </main>
    );
}


