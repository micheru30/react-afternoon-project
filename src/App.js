import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './Components/product';
import CartItem from './Components/Cart';
import axios from 'axios';
import AddProduct from './Components/AddProduct';

class App extends Component {
  constructor() {
    super();
    this.state = {
      apiKey: '5bf6be61',
      input: '',
      cart: [],
      hats: [],
      swag: [],
      shirt: [],
      coldweather:[],
      mouses: [{
        id: 101,
        image: 'https://d4kkpd69xt9l7.cloudfront.net/sys-master/images/h64/hff/8856978817054/RZ01-01360100-R3M1.png_300Wx300H',
        name: 'Razer Mouse',
        price: 60.95,
        description: 'Badass Mouse to improve your game!'
      }],
      keyboards: [{
        id: 102,
        image: 'https://assets.razerzone.com/eeimages/products/17557/razer-blackwidow-ultimate-gallery-03.png',
        name: 'Razer Keyboard',
        price: 99.95,
        description: 'Badass keyboard, Click Clicky! What else do you need?'
      }],
      computers: [{
        id: 103,
        image: 'https://sta3-nzxtcorporation.netdna-ssl.com/uploads/product_section/image/529/xlarge_c58899c5cec668ef.png',
        name: 'Gaming Pc',
        price: 1699.95,
        description: 'PC gaming, the next big thing.'
      }]
    }
    this.addToCart = this.addToCart.bind(this);
    this.submit = this.submit.bind(this);
  }
  componentDidMount() {
    axios.get(`http://104.248.178.153/products/catalog?key=${this.state.apiKey}`)
      .then(response => {response.data.forEach((item) => {item.quantity = 0});
        let hats = response.data.filter(item => item.category === 'hat');
        let shirt = response.data.filter(item => item.category === 'shirt');
        let swag = response.data.filter(item => item.category === 'swag');
        let coldweather = response.data.filter(item => item.category === 'cold weather');
        this.setState({
          hats: hats,
          shirt: shirt,
          swag: swag,
          coldweather: coldweather
        })
      })
  }
  updateInput(event) {
    this.setState({ input: event.target.value })
  }
  addToCart(item) {
    axios.post(`http://104.248.178.153/products/catalog${this.state.apiKey}`)
    .then(cartResponse=>this.setstate({cart: cartResponse.data}))
  }
  checkOut() {
    this.setState({
      cart: []
    })
    alert('Purchase is complete!')
  }
  submit(product){
    axios.post(`http://104.248.178.153/products/catalog${this.state.apiKey}`)
    .then(response => {response.data.forEach((item) => {item.quantity = 0});
    let hats = response.data.filter(item => item.category === 'hat');
    let shirt = response.data.filter(item => item.category === 'shirt');
    let swag = response.data.filter(item => item.category === 'swag');
    let coldweather = response.data.filter(item => item.category === 'cold weather');
    this.setState({
      hats: hats,
      shirt: shirt,
      swag: swag,
      coldweather: coldweather
    })
  })
  }
  render() {
    return (
      <div className="App">
        <section className='products'>
          <h1>Products</h1>
          <input type='text' value={this.state.input} onChange={this.updateInput.bind(this)} />
          <h2>Hats</h2>
          {this.state.hats.map((item) => (
            <Product key={item.id} item={item} addToCart={this.addToCart} />
          ))}
          <h2>Shirts</h2>
          {this.state.shirt.map((item) => (
            <Product key={item.id} item={item} addToCart={this.addToCart} />
          ))}
          <h2>Swag</h2>
          {this.state.swag.map((item) => (
            <Product key={item.id} item={item} addToCart={this.addToCart} />
          ))}
          <h2>Cold Weather</h2>
          {this.state.coldweather.map((item) => (
            <Product key={item.id} item={item} addToCart={this.addToCart} />
          ))}
          <h2>Mouses</h2>
          {this.state.mouses.map((item) => (
            <Product key={item.id} item={item} addToCart={this.addToCart} />
          ))}
          <h2>Keyboards</h2>
          {this.state.keyboards.map((item) => (
            <Product key={item.id} item={item} addToCart={this.addToCart} />
          ))}
          <h2>Computers</h2>
          {this.state.computers.map((item) => (
            <Product key={item.id} item={item} addToCart={this.addToCart} />
          ))}
        </section>

        <section className='cart'>
          <h1>Cart</h1>
          <h2>
            Total: ${this.state.cart.reduce((totalPrice, product) => {
              return totalPrice += product.price
            }, 0)}
          </h2>
          <button onClick={() => { this.checkOut() }}>Checkout</button>

          {this.state.cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </section>
    <section className='app-component'>
    <AddProduct submit={this.submit}/>
    </section>
      </div>
    )
  }
}

export default App;
