import React from 'react';
import useWindowSize from './WindowSize';




//retorna um elemento que representa o produto Card
function ProdutoCard(props) {
    return (
        <div className='produto'>
            <img className='produto__image' src={props.produtos.img} alt="imagem produto1" />
            <p className='produto__name'>{props.produtos.nome}</p>
            <p className='produto__price'>R$ {props.produtos.preco}</p>
            <a className='produto__botao_ver'>ver produto</a>
        </div>
    );
}


export default function CreatProductList(props) {

    const size = useWindowSize();
    const desktopScreen = size.width > 1260 ? true : false;
    const mobileScreen = size.width <= 1260 ? true : false;

    const numberOfItem = desktopScreen ? 6 : mobileScreen ? 4 : 0;

    const productSection = [];

    for (let i = 0; i < numberOfItem; i++) {
        productSection.push(<ProdutoCard produtos={props.products[i]} />)
    }
    return (
        productSection
    )
}



