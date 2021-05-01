import React from 'react';

class CartItem extends React.Component {

    constructor(){
        super();
        this.state = {
            price : 78999,
            title : "Phone",
            qty : 1
        }
    }

    increaseQuantity = () =>{

        this.setState((prevState) => {
            return {
                qty : prevState.qty + 1,
            }
        })
    }

    decreaseQuantity = () =>{
        
        this.setState((prevState) => {
            return {
                qty : prevState.qty - 1,
            }
        })
    }

    render (){

        const {price , title , qty} = this.state;

        return (
            

            <div className= "cart-item">

                <div className= "left-block">

                    <img style = {style.image}/>

                </div>

                <div className= "right-block">
                    <div style = { {fontSize : 25} }>{title}</div>
                    <div style = { {color : '#777'} }>{price}</div>
                    <div style = { {color : '#777'} }>{qty}</div>
                    <div className = "cart-item-actions">
                        {/* Button */}
                        
                        <img alt= "increase" 
                        className ="action-icons" 
                        src= "https://www.flaticon.com/premium-icon/icons/svg/3303/3303893.svg"
                        onClick = {this.increaseQuantity}
                        />

                        <img alt= "decrease" 
                        className ="action-icons" 
                        src= "https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1619837188~hmac=4737c7481c9017f006fc9800ab2d364c"
                        onClick = {this.decreaseQuantity}
                        />

                        <img alt= "delete"
                        className ="action-icons" 
                        src= "https://www.flaticon.com/svg/vstatic/svg/1214/1214428.svg?token=exp=1619837125~hmac=c9f95a75515c2017eb2215af052530a7">
                        </img>

                    </div>
                </div>
            </div>

        );
    }
}


const style = {
    image : {
        height : 110,
        width : 110,
        boderRadius : 4,
        background : '#ccc'
    }
}


export default CartItem;