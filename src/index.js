import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import './index.css';


//componente Principal
function App(props) {
    return (
        <div className='app__container'>
            <Header />
            <Content/>
            <Footer />
        </div>
    );
}

//renderiza o App
const elements = <App/>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(elements)
