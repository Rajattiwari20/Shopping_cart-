import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {

    constructor(){
        super();

        this.state = {
            products : [
                {
                    price : 99,
                    title : "Watch",
                    qty : 1,
                    id : 1, 
                },
                {
                    price : 999,
                    title : "Mobile Phone",
                    qty : 2,
                    id : 2, 
                },
                {
                    price : 99999,
                    title : "Laptop",
                    qty : 1,
                    id : 3, 
                },

            ]
        }
    }

    handelIncreaseQuantity = (product) => {

        const{products} = this.state;
        const index = products.indexOf(product);
        products[index].qty += 1;

        this.setState({
          products 
        })
    }

    handelDecreaseQuantity = (product) => {

        const {products} = this.state;
        const index = products.indexOf(product);
        if(products[index].qty === 0){
            return;
        }
        products[index].qty -= 1;

        this.setState({
            products
        })

    }

    handelDelete = (id) => {
        const {products} = this.state;
        const items = products.filter((item) => item.id !== id);

        this.setState ({
            products : items
        })
    }

    render (){

        const{products} = this.state;

        return (
            <div className= "cart">
            
        
            {products.map((product) => {
                return <CartItem product = {product} 
                key = {product.id}
                OnIncreaseQuantity = {this.handelIncreaseQuantity}
                OnDecreaseQuantity = {this.handelDecreaseQuantity}
                OnDelete = {this.handelDelete}
            
                /> 

    
            })}
                
        
            </div>
            
            
        );
    }
}





export default Cart;