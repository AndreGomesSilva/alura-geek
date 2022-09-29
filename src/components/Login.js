import React from 'react';
import '../style/login.css'

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
           
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const value = event.target.value;

        this.setState({
            ...this.state,
            [event.target.name]: value
        });
    }

    handleSubmit(event) {
        alert('Sua conta foi criada com sucesso. Obrigado: ' + this.state.email)
        event.preventDefault();
        this.setState({
            email: '',
            password: '',
        });
    }
    
    render() {
        return (
            <div className="login">
                <form className='login__form' onSubmit={this.handleSubmit}>
                    <h2 className='login__form__title'>Iniciar Sessão</h2>
                    <div className='login__form__input'>
                        <input className='login__input__email' name='email' /*type='email*/ type='text' placeholder='     Escreva seu email' value={this.state.email} onChange={this.handleChange}/>
                        <input className='login__input__password' name='password' /*type='password'*/ type='text' placeholder='     Escreva sua senha'value={this.state.password} onChange={this.handleChange}/>
                    </div>    
                    <div className='login__form__submit'>
                        <input className='login__input__submit' name='submit'  type='submit' value='Logar'></input>
                    </div>
                </form>
            </div>
        )}


}