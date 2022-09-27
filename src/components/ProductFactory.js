class ProductFactory {
    constructor(nome, preco, img) {
        this.nome = nome;
        this.preco = preco;
        this.img = img;
}
}


//adicionando produto a lista StarWars
let product1Lista1 = new ProductFactory("ProdutoXYZ", 60.00, require('../assets/img/img_produtos/starwars/produto-1.jpg'))
let product2Lista1 = new ProductFactory("ProdutoXYZ", 60.00, require('../assets/img/img_produtos/starwars/produto-2.jpg'))
let product3Lista1 = new ProductFactory("ProdutoXYZ", 60.00, require('../assets/img/img_produtos/starwars/produto-3.jpg'))
let product4Lista1 = new ProductFactory("ProdutoXYZ", 60.00, require('../assets/img/img_produtos/starwars/produto-4.jpg'))
let product5Lista1 = new ProductFactory("ProdutoXYZ", 60.00, require('../assets/img/img_produtos/starwars/produto-5.jpg'))
let product6Lista1 = new ProductFactory("ProdutoXYZ", 60.00, require('../assets/img/img_produtos/starwars/produto-6.jpg'))

//adicionando produto a lista Console
let product1Lista2 = new ProductFactory("ProdutoXYZ", 60.00, require('../assets/img/img_produtos/consoles/produto-1.jpg'))
let product2Lista2 = new ProductFactory("ProdutoXYZ", 60.00, require('../assets/img/img_produtos/consoles/produto-2.jpg'))
let product3Lista2 = new ProductFactory("ProdutoXYZ", 60.00, require('../assets/img/img_produtos/consoles/produto-3.jpg'))
let product4Lista2 = new ProductFactory("ProdutoXYZ", 60.00, require('../assets/img/img_produtos/consoles/produto-4.jpg'))
let product5Lista2 = new ProductFactory("ProdutoXYZ", 60.00, require('../assets/img/img_produtos/consoles/produto-5.jpg'))
let product6Lista2 = new ProductFactory("ProdutoXYZ", 60.00, require('../assets/img/img_produtos/consoles/produto-6.jpg'))

//adicionando produto a lista Diversos
let product1Lista3 = new ProductFactory("ProdutoXYZ", 60.00, require('../assets/img/img_produtos/diversos/produto-1.jpg'))
let product2Lista3 = new ProductFactory("ProdutoXYZ", 60.00, require('../assets/img/img_produtos/diversos/produto-2.jpg'))
let product3Lista3 = new ProductFactory("ProdutoXYZ", 60.00, require('../assets/img/img_produtos/diversos/produto-3.jpg'))
let product4Lista3 = new ProductFactory("ProdutoXYZ", 60.00, require('../assets/img/img_produtos/diversos/produto-4.jpg'))
let product5Lista3 = new ProductFactory("ProdutoXYZ", 60.00, require('../assets/img/img_produtos/diversos/produto-5.jpg'))
let product6Lista3 = new ProductFactory("ProdutoXYZ", 60.00, require('../assets/img/img_produtos/diversos/produto-6.jpg'))

export const productSet = {
    produtosLista1: [product1Lista1, product2Lista1, product3Lista1, product4Lista1, product5Lista1, product6Lista1],
    produtosLista2: [product1Lista2, product2Lista2, product3Lista2, product4Lista2, product5Lista2, product6Lista2],
    produtosLista3: [product1Lista3, product2Lista3, product3Lista3, product4Lista3, product5Lista3, product6Lista3],
};