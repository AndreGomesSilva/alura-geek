import React from 'react';
import ReactDOM from 'react-dom/client';
import FormContact from './components/FormContact';
import ProductFactory from './components/ProductFactory';
import useWindowSize from './components/WindowSize';
import './index.css';
import './style/footer.css';
import './style/linhaproduto.css';



//adicionando produto a lista StarWars
let product1Lista1 = new ProductFactory("ProdutoXYZ", 60.00, require('./assets/img/img_produtos/starwars/produto-1.jpg'))
let product2Lista1 = new ProductFactory("ProdutoXYZ", 60.00, require('./assets/img/img_produtos/starwars/produto-2.jpg'))
let product3Lista1 = new ProductFactory("ProdutoXYZ", 60.00, require('./assets/img/img_produtos/starwars/produto-3.jpg'))
let product4Lista1 = new ProductFactory("ProdutoXYZ", 60.00, require('./assets/img/img_produtos/starwars/produto-4.jpg'))
let product5Lista1 = new ProductFactory("ProdutoXYZ", 60.00, require('./assets/img/img_produtos/starwars/produto-5.jpg'))
let product6Lista1 = new ProductFactory("ProdutoXYZ", 60.00, require('./assets/img/img_produtos/starwars/produto-6.jpg'))

//adicionando produto a lista Console
let product1Lista2 = new ProductFactory("ProdutoXYZ", 60.00, require('./assets/img/img_produtos/consoles/produto-1.jpg'))
let product2Lista2 = new ProductFactory("ProdutoXYZ", 60.00, require('./assets/img/img_produtos/consoles/produto-2.jpg'))
let product3Lista2 = new ProductFactory("ProdutoXYZ", 60.00, require('./assets/img/img_produtos/consoles/produto-3.jpg'))
let product4Lista2 = new ProductFactory("ProdutoXYZ", 60.00, require('./assets/img/img_produtos/consoles/produto-4.jpg'))
let product5Lista2 = new ProductFactory("ProdutoXYZ", 60.00, require('./assets/img/img_produtos/consoles/produto-5.jpg'))
let product6Lista2 = new ProductFactory("ProdutoXYZ", 60.00, require('./assets/img/img_produtos/consoles/produto-6.jpg'))

//adicionando produto a lista Diversos
let product1Lista3 = new ProductFactory("ProdutoXYZ", 60.00, require('./assets/img/img_produtos/diversos/produto-1.jpg'))
let product2Lista3 = new ProductFactory("ProdutoXYZ", 60.00, require('./assets/img/img_produtos/diversos/produto-2.jpg'))
let product3Lista3 = new ProductFactory("ProdutoXYZ", 60.00, require('./assets/img/img_produtos/diversos/produto-3.jpg'))
let product4Lista3 = new ProductFactory("ProdutoXYZ", 60.00, require('./assets/img/img_produtos/diversos/produto-4.jpg'))
let product5Lista3 = new ProductFactory("ProdutoXYZ", 60.00, require('./assets/img/img_produtos/diversos/produto-5.jpg'))
let product6Lista3 = new ProductFactory("ProdutoXYZ", 60.00, require('./assets/img/img_produtos/diversos/produto-6.jpg'))

//dados do cabeçalho
let headerData = {
    logo: require('./assets/img/header/Logo.png'),
    BarraDePesquisa: require('./assets/img/header/barra-pesquisa.png'),
}

//retorna cabeçalho
function Header(props) {
    return (
        <header className='header'>
            <div className="topo">
                <div className="topo__cabecalho">
                    <div className="cabecalho__direita">
                        <img src={headerData.logo} alt="logo AluraGeek" />
                        <img src={headerData.BarraDePesquisa} alt="Barra de pesquisa" />
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

//retorna um elemento que representa o produto Card
function Produto(props) {
    return (
        <div className='produto'>
            <img className='produto__image' src={props.produtos.img} alt="imagem produto1" />
            <p className='produto__name'>{props.produtos.nome}</p>
            <p className='produto__price'>R$ {props.produtos.preco}</p>
            <a className='produto__botao_ver'>ver produto</a>
        </div>
    );
}



//Retorna a lista de produtos
function Content(props) {
    const size = useWindowSize();
    const largeScreen = size.width > 1260 ? true : false;
    const mediumScreen = size.width > 768 ? true : false;
    const smallScreen = size.width < 768 ? true : false;

    const numberOfItem = largeScreen ? 6 : mediumScreen ? 4 : smallScreen ? 2 : 0;

    const produtosLista1 = [];
    const produtosLista2 = [];
    const produtosLista3 = [];
    for (let i = 0; i < numberOfItem; i++) {
        produtosLista1.push(<Produto produtos={props.produtosLista1[i]} />)
        produtosLista2.push(<Produto produtos={props.produtosLista2[i]} />)
        produtosLista3.push(<Produto produtos={props.produtosLista3[i]} />);
    }

    return (
        <main className='conteudo'>
            <section className='lista__produto'>
                <div className='lista__produto__cabecalho'>
                    <h2 className='lista__produto__titulo'>Star Wars</h2>
                    <button className='lista__produto__botao'>Ver tudo <span>&#10132;</span> </button>
                </div>
                <div className='produto__container'>
                    {produtosLista1}
                </div>
            </section>
            <section className='lista__produto'>
                <div className='lista__produto__cabecalho'>
                    <h2 className='lista__produto__titulo'>Consoles</h2>
                    <button className='lista__produto__botao'>Ver tudo <span>&#10132;</span> </button>
                </div>
                <div className='produto__container'>
                    {produtosLista2}
                </div>
            </section>
            <section className='lista__produto'>
                <div className='lista__produto__cabecalho'>
                    <h2 className='lista__produto__titulo'>Diversos</h2>
                    <button className='lista__produto__botao'>Ver tudo <span>&#10132;</span> </button>
                </div>
                <div className='produto__container'>
                    {produtosLista3}
                </div>
            </section>
        </main>
    );
}

//dados para o Rodapé
let footerData = {
    logo: require('./assets/img/footer/Logo-Footer.png'),
}

//retorna o rodapé
function Footer(props) {
    return (
        <footer className='footer'>
            <div className='footer__container'>
                <div className='footer__contact'>
                    <div className='footer__contact__guia'>
                        <img src={footerData.logo} alt="logo AluraGeek" />
                        <ul className='footer__list__links'>
                            <li>
                                <a className='footer__link'>Quem somos nós</a>
                            </li>
                            <li>
                                <a className='footer__link'>Política de privacidade</a>
                            </li>
                            <li>
                                <a className='footer__link'>Programa fidelidade</a>
                            </li>
                            <li>
                                <a className='footer__link'>Nossas lojas</a>
                            </li>
                            <li>
                                <a className='footer__link'>Quero ser franqueado</a>
                            </li>
                            <li>
                                <a className='footer__link'>Anuncie aqui</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <FormContact />
                    </div>
                </div>
            </div>
            <div className='footer__credit'>
                <p className='footer__credit__item'>Desenvolvido Por André Gomes <br /> 2022</p>
            </div>
        </footer>
    )
}

//dados para  o Componente App
const element = <App
    produtosLista1={[product1Lista1, product2Lista1, product3Lista1, product4Lista1, product5Lista1, product6Lista1]}
    produtosLista2={[product1Lista2, product2Lista2, product3Lista2, product4Lista2, product5Lista2, product6Lista2]}
    produtosLista3={[product1Lista3, product2Lista3, product3Lista3, product4Lista3, product5Lista3, product6Lista3]}
/>

//componente Principal
function App(props) {

    return (
        <div className='app__container'>
            <Header />
            <Content produtosLista1={props.produtosLista1} produtosLista2={props.produtosLista2} produtosLista3={props.produtosLista3} />
            <Footer />
        </div>
    );

}


//renderiza o App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element)