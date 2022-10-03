import React from 'react';
import FormContact from './FormContact';
import '../style/footer.css';


//dados para o Rodapé
const footerData = {
    logo: require('../assets/img/footer/Logo-Footer.png'),
    links: [
        {id: 'a', value: 'Quem somos nós'},
        {id: 'b', value: 'Política de privacidade'},
        {id: 'c', value: 'Programa fidelidade'},
        {id: 'd', value: 'Nossas lojas'},
        {id: 'e', value: 'Anuncie aqui'},
    ]
}

//retorna o rodapé
export default function Footer(props) {
    const listItem = footerData.links.map((link) => <li className='footer__link' key={link.id}>{link.value}</li>)

    return (
        <footer className='footer'>
            <div className='footer__container'>
                <div className='footer__contact'>
                    <div className='footer__contact__guia'>
                        <img src={footerData.logo} alt="logo AluraGeek" />
                        <ul className='footer__list__links'>
                          {listItem}
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
