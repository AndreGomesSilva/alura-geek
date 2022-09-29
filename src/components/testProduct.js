import React from "react";
import Select from 'react-select'
import { v4 as uuidv4 } from 'uuid';





const list = ['produto1', 'produto2', 'produto3']
const category = [{value: 'consoles'}, {value:'StarWars'}, {value:'diversos'}]


export default class Factory extends React.Component {
    
    constructor (props) {
        super(props);
        this.state = {
            id: uuidv4(),
            image: '',
            name:'',
            price: '',
            description: '',         
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange (event) {

        const newList = list.concat(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(newList)
    }    

    handleSubmit (event) {
        alert('Produto Criado: ' +  this.state.name)
        event.preventDefault();
        this.setState({
            image:'',
            name: '',
            price: '',
            description: '',
        });    
    } 


    render () {
        return(
            <div className="addProduct">
                <form className='addProduct__form' onSubmit={this.handleSubmit}>
                    <h2 className='addProduct__form__title'>Adicionar Produto</h2>
                    <div className='addProduct__form__input'>
                        <label for='image'>Url da Imagem</label>
                        <input className='add__product__image' name='image' type='url' value={this.state.image} onChange={this.handleChange}/>
                        <label for='categoty'>Categoria</label>
                        <Select className='add__product__category' name='category' options={category} onChange={this.handleChange}/>
                        <label for='name'>Nome do Produto</label>
                        <input className='add__product__name' name='name' type='text' value={this.state.name} onChange={this.handleChange}/>
                        <label for='price'>Preço</label>
                        <input className='add__product__price' name='price' type='number' value={this.state.price} onChange={this.handleChange}/>
                        <textarea className='add__product__description' rows={5} placeholder='Escreva sua descrição' name='description' value={this.state.message} onChange={this.handleChange} />
                    </div>    
                    <div className='login__form__submit'>
                        <input className='login__input__submit' name='submit'  type='submit' value='Enviar'></input>
                    </div>
                </form>
            </div>
        )
    }
}
