import React from 'react';
import FormContact from './FormContact';
import '../style/footer.css';


//dados para o Rodapé
let footerData = {
    logo: require('../assets/img/footer/Logo-Footer.png'),
}

//retorna o rodapé
export default function Footer(props) {
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
