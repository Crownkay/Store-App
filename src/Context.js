import React, { Component } from 'react'
import {storeProducts, detailsProduct} from './data'
const ProductContext = React.createContext()

class ProductProvider extends Component {
    state = {
        products: [],
        detailsProduct: detailsProduct
    }
    componentDidMount(){
        this.setProducts();
    }
    setProducts = ()=> {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem];
        });
        this.setState(() => {
            return {products: tempProducts};
        });
    };

    getItem = id => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }

    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(()=> {
            return { detailsProduct : product }
        })  
    };
    addToCart = id => {
        console.log(`hello from add to cart.id is clicked ${id}`);
        
    };
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}
const ProductConsumer = ProductContext.Consumer

export { ProductProvider, ProductConsumer }