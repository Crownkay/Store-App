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

    handleDetail = ()=> {
        console.log('hello from details');
        
    };
    addCart = () => {
        console.log('hello from cart');
        
    };
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addCart: this.addCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}
const ProductConsumer = ProductContext.Consumer

export { ProductProvider, ProductConsumer }