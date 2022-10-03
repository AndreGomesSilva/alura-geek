import React from 'react';
import useWindowSize from './WindowSize';
import { useLocation } from 'react-router-dom';


//retorna um elemento que representa o produto Card
function ProdutoCard(props) {

    return (
        <div className='produto'>
            <img className='produto__image' src={props.produtos.image} alt="imagem produto1" />
            <p className='produto__name'>{props.produtos.name}</p>
            <p className='produto__price'>R$ {props.produtos.price}</p>
            <a className='produto__botao_ver'>ver produto</a>
        </div>
    );
}


export default function CreatProductList(props) {
    const location = useLocation();
    const isHomePage = location.pathname.match(/^\/$/);
    const size = useWindowSize();
    let numberOfItem = 0
    const productSection = [];
    const desktopScreen = size.width > 1260 ? true : false;
    const mobileScreen = size.width <= 1260 ? true : false;

    if (isHomePage) {
        numberOfItem = desktopScreen ? 6 : mobileScreen ? 4 : 0;
    } else {
        numberOfItem = props.products.length
    }

    for (let i = 0; i < numberOfItem; i++) {
        productSection.push(<ProdutoCard produtos={props.products[i]} />)
    }
    return (
        productSection
    )
}



