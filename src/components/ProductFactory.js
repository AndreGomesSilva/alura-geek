import React from "react";
import { v4 as uuidv4 } from 'uuid';
import '../style/addproduct.css';



const productList1 = [
    { name: "ProdutoXYZ", price: 60.00, image: require('../assets/img/img_produtos/starwars/produto-1.jpg'), category: 'starwars' },
    { name: "ProdutoXYZ", price: 60.00, image: require('../assets/img/img_produtos/starwars/produto-2.jpg'), category: 'starwars' },
    { name: "ProdutoXYZ", price: 60.00, image: require('../assets/img/img_produtos/starwars/produto-3.jpg'), category: 'starwars' },
    { name: "ProdutoXYZ", price: 60.00, image: require('../assets/img/img_produtos/starwars/produto-4.jpg'), category: 'starwars' },
    { name: "ProdutoXYZ", price: 60.00, image: require('../assets/img/img_produtos/starwars/produto-5.jpg'), category: 'starwars' },
    { name: "ProdutoXYZ", price: 60.00, image: require('../assets/img/img_produtos/starwars/produto-6.jpg'), category: 'starwars' },
]
const productList2 = [
    { name: "ProdutoXYZ", price: 60.00, image: require('../assets/img/img_produtos/consoles/produto-1.jpg'), category: 'consoles' },
    { name: "ProdutoXYZ", price: 60.00, image: require('../assets/img/img_produtos/consoles/produto-2.jpg'), category: 'consoles' },
    { name: "ProdutoXYZ", price: 60.00, image: require('../assets/img/img_produtos/consoles/produto-3.jpg'), category: 'consoles' },
    { name: "ProdutoXYZ", price: 60.00, image: require('../assets/img/img_produtos/consoles/produto-4.jpg'), category: 'consoles' },
    { name: "ProdutoXYZ", price: 60.00, image: require('../assets/img/img_produtos/consoles/produto-5.jpg'), category: 'consoles' },
    { name: "ProdutoXYZ", price: 60.00, image: require('../assets/img/img_produtos/consoles/produto-6.jpg'), category: 'consoles' },
]
const productList3 = [
    { name: "ProdutoXYZ", price: 60.00, image: require('../assets/img/img_produtos/diversos/produto-1.jpg'), category: 'diversos' },
    { name: "ProdutoXYZ", price: 60.00, image: require('../assets/img/img_produtos/diversos/produto-2.jpg'), category: 'diversos' },
    { name: "ProdutoXYZ", price: 60.00, image: require('../assets/img/img_produtos/diversos/produto-3.jpg'), category: 'diversos' },
    { name: "ProdutoXYZ", price: 60.00, image: require('../assets/img/img_produtos/diversos/produto-4.jpg'), category: 'diversos' },
    { name: "ProdutoXYZ", price: 60.00, image: require('../assets/img/img_produtos/diversos/produto-5.jpg'), category: 'diversos' },
    { name: "ProdutoXYZ", price: 60.00, image: require('../assets/img/img_produtos/diversos/produto-6.jpg'), category: 'diversos' },
]


const options = [{ value: 'consoles', label: 'Consoles' }, { value: 'starwars', label: 'StarWars' }, { value: 'diversos', label: 'Diversos' }]

export default class ProductFactory extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: '',
            image: '',
            category: 'Select',
            description: '',
            id: uuidv4(),
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {


        this.setState({
            [event.target.name]: event.target.value

        });

    }


    handleSubmit(event) {

        if (this.state.category === 'starwars') {
            productList1.concat(this.state)
        }
        if (this.state.category === 'consoles') {
            productList2.concat(this.state)
        }
        if (this.state.category === 'diversos') {
            productList3.concat(this.state)
        }
        console.log(this.state);
        alert('Produto Criado: ' + this.state.name)
        event.preventDefault();
        this.setState({
            name: '',
            image: '',
            price: '',
            description: '',
        });

    }


    render() {
        return (
            <div className="addProduct">
                <form className='addProduct__form' onSubmit={this.handleSubmit}>
                    <h2 className='addProduct__form__title'>Adicionar novo produto</h2>
                    <div className='addProduct__form__input'>
                        <div className="addProduct__input">
                            <label>Url da Imagem
                                <input className='add__product__image' name='image' type='url' value={this.state.image} onChange={this.handleChange} />
                            </label>
                        </div>
                        <div className="addProduct__input">
                            <label>Categoria
                                <select className='add__product__category' name='category' value={this.state.category} onChange={this.handleChange}>
                                    {options.map(option => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}

                                </select>
                            </label>
                        </div>
                        <div className="addProduct__input">
                            <label>Nome do Produto
                                <input className='add__product__name' name='name' type='text' value={this.state.name} onChange={this.handleChange} />
                            </label>
                        </div>
                        <div className="addProduct__input">
                            <label>Preço
                                <input className='add__product__price' name='price' type="text" pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$" placeholder="R$60,00" min="1" step="any" value={this.state.price} onChange={this.handleChange} />
                            </label>
                        </div>
                        <textarea className='add__product__description' rows={5} placeholder='Escreva sua descrição' name='description' value={this.state.message} onChange={this.handleChange} />
                    </div>
                    <div className='addProduct__form__submit'>
                        <input className='addProduct__input__submit' name='submit' type='submit' value='Adicionar Produto'></input>
                    </div>
                </form>
            </div>
        )
    }
}



export const productSet = {
    productList1, productList2, productList3
}

