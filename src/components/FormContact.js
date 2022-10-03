import React from 'react';
import '../style/form.css'

export default class FormContact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            message: '',
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
        alert('Sua mensagem foi enviada. Obrigado: ' +  this.state.name)
        event.preventDefault();
        this.setState({
            name: '',
            message: ''
        });    
    
    }

    render() {
        return (
            <form className='contact__form' onSubmit={this.handleSubmit}>
                <h2 className='contact__form__title'>Fale conosco</h2>
                <div className='full__input'>
                <label >Nome
                <input className='contact__form__name' type="text" name='name' value={this.state.name} onChange={this.handleChange}/>
                </label>
                </div>
                <textarea className='contact__form__message' rows={5} placeholder='Escreva sua mensagem' name='message' value={this.state.message} onChange={this.handleChange} />
                <input className='contact__form__submit' type="submit" value="Enviar mensagem" />
            </form>
        );
    }
}
