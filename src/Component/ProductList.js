import React, { Component, Fragment } from 'react'
import Product from "./Products"
import Title from "./Title"
import { storeProducts } from "../data"
import {ProductConsumer} from '../Context'
 

export default class ProductList extends Component {
    render() {       
        return (
           <Fragment>
               <div className='py-5'>
                   <div className='container'>
                        <Title name="our" title="products" />

                       <div className='row'>
                        <ProductConsumer>
                            {value => {
                                return value.products.map(product => {
                                    return <Product key={product.id} product={product} />
                                });
                                
                            }}
                        </ProductConsumer>
                       </div>
                   </div>

               </div>
           </Fragment>
        )
    }
}
