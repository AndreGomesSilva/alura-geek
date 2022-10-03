import React from 'react';
import '../index.css';
import '../style/AllProducts.css';
import CreatProductList from './CreatProductList';
import { productSet } from './ProductFactory';
import { Link } from 'react-router-dom';


const allProducts = [...productSet.productList1, ...productSet.productList2, ...productSet.productList3]

//Retorna a lista de todos os produtos
export default function AllProducts() {
    return (
        <div className='products'>
            <section className='list__allproducts'>
                <div className='list__allproducts__header'>
                    <h2 className='list__allproduto__title'>Todos Produtos</h2>
                    <Link to="/adicionar" style={{ textDecoration: 'none' }} >
                        <button className='list__allproducts__button'>Adicionar produto</button>
                    </Link>
                </div>
                <div className='allproducts__container'>
                    <CreatProductList products={allProducts} />
                </div>
            </section>
        </div>
    );
}

