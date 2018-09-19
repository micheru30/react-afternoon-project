import React, { Component } from 'react';

class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            price: '',
            image: ''
        }
    }
handleName(name){
    this.setState({
        name: name
    })
}
handleDescription(description){
    this.setState({
        description: description
    })
}
handlePrice(price){
    this.setState({
        price: price
    })
}
handleImage(image){
    this.setState({
        image: image
    })
}
submit(){
    const newItem  = {
      name: this.state.name,
      description: this.state.description,
      price: this.state.price,
      image: this.state.image
    }
    this.props.submit(newItem)
}
render(){
    const {name, description, price, image} = this.state;
    return(
        <div>
            <p>Name: </p>
            <input 
            onChange = {e=>this.handleName(e.target.value)}
            value = {name} />
            <p>Description: </p>
            <input onChange = {e=>this.handleDescription(e.target.value)}
            value = {description} />
            <p>Price: </p>
            <input onChange={e=>this.handlePrice(e.target.value)}
            value = {price} />
            <p>Image: </p>
            <input onChane = {e=>this.handleImage(e.target.value)}
            value ={image} />
            
            <button onClick={()=>{this.submit()}}>Submit</button>
        </div>
    )
}

}

export default AddProduct;