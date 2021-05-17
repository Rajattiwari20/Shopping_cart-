import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase/app';
import 'firebase/firestore';


class App extends React.Component {

  constructor(){
    super();

    this.state = {
        products : [],
        loading :true
    }

     this.db = firebase
    .firestore()
}

componentDidMount(){
  this.db
    .collection('Products')
    .onSnapshot((snapshot)=>{
      const products = snapshot.docs.map((doc) => {
        const data = doc.data();
        data['id'] = doc.id;
        return data;
      })

      this.setState({
        products,
        loading : false
      })
    })

}

// addProduct = () =>{
//   this.db
//   .collection('Products')
//   .add(
//     {
//       // img : "data:image/jpeg;base64,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",
//       price: 799,
//       title : "Earphone",
//       qty : 1,
//       img :""

//     }
//     ,
//     {
//       img : "",
//       price: 1999,
//       title : "Mouse",
//       qty : 1
//     }
//     ,{
//       img : "",
//       price: 3999,
//       title : "Headphones",
//       qty : 1
//     }
  
    
//   )
//   .then((docRef) =>{
//       console.log(docRef)
//   }).catch((error)=>{
//     console.log(error)
//   })
// }

handelIncreaseQuantity = (product) => {

    const{products} = this.state;
    const index = products.indexOf(product);
    
    const docRef = this.db.collection('Products').doc(products[index].id);
    docRef
    .update({
      qty : products[index].qty + 1
    })
    .then(()=>{
      console.log("Updated")
    })
    .catch((error)=>{
      console.log("Error : " , error)
    })
}

handelDecreaseQuantity = (product) => {

    const {products} = this.state;
    const index = products.indexOf(product);
    if(products[index].qty === 0){
        return;
    }

    const docRef = this.db.collection("Products").doc(products[index].id);
    docRef
    .update({
      qty : products[index].qty -1
    })
    .then(()=>{
      console.log("Updated")
    })
   .catch((error)=>{
      console.log("Error : " , error)
   })
}

handelDelete = (id) => {
    const {products} = this.state;
    const docRef = this.db.collection("Products").doc(id);
    docRef
    .delete()
    .then(()=>{
      console.log("De")
    })
   .catch((error)=>{
      console.log("Error : " , error)
   })

}

getCount = () =>{

  const {products} = this.state;

  let count = 0;

  products.forEach((product) => {
    count += product.qty;
  })


  return count;


}

getTotalPrice = () => {

  const {products} = this.state;

  let price = 0;

  products.map((product) => {

    price += product.qty * product.price;
  } )
 

  return price;
}

  render(){

    const {products , loading} = this.state;

  return (
    <div className="App">
        <Navbar count = {this.getCount()}/>
        {/* <button onClick = {this.addProduct} style = {{fontSize : 20 , padding :20}}>Add Product</button> */}
        <Cart 
                products = {products}
                OnIncreaseQuantity = {this.handelIncreaseQuantity}
                OnDecreaseQuantity = {this.handelDecreaseQuantity}
                OnDelete = {this.handelDelete}/>
                {loading && <h1>Loading Products ...</h1>}
                <div style = {{padding : 20 , fontFamily : "sans-serif" , fontSize: 30 }}>
                    Total Price : {this.getTotalPrice()}
                </div>
    </div>
  );
}
}

export default App;
