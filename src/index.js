import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Login from './components/Login';
import './index.css';


//componente Principal
function App(props) {
    return (
        <BrowserRouter>
            <div className='app__container'>
                <Header />
                <Routes>
                <Route exact path='/' element={<Content />}/>
                <Route exact path='/Login' element={<Login />}/>
                </Routes>
                <Footer />
            </div>
        </BrowserRouter> 
    );
}

//renderiza o App
const elements = <App />
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(elements)
