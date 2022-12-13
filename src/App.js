import logo from './logo.svg';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'Monstera Split-Leaf',
          img: 'split-leaf.jpg',
          description: 'Native to the tropical forests of Central and South America, these plants have glossy, heart shaped leaves which develops its unique splits in its maturity.',
          category: 'plant',
          price: '22.99'
        },
        {
          id: 2,
          title: 'Philodendron Silver Sword',
          img: 'silver-sword.jpg',
          description: 'With leaves that are light green to silvery with dark-green veins. Each heart-shaped leaf stands on an upright stem.',
          category: 'plant',
          price: '34.99'
        },
        {
          id: 3,
          title: 'Spathiphyllum Peace Lily',
          img: 'peace-lily.jpg',
          description: 'This evergreen perennial is a popular flowering houseplant native to tropical Southeastern Asia.',
          category: 'plant',
          price: '26.99'
        },
        {
          id: 4,
          title: 'Desert Ceramic Planter',
          img: 'desert-cer-planter.jpg',
          description: 'The minimalistic style of these desert planters are a perfect match for any of your houseplants!',
          category: 'planter',
          price: '32.99'
        },
        {
          id: 5,
          title: 'Morandi Ceramic Planter',
          img: 'marandi-cer-planter.jpg',
          description: 'These Morandi Ceramic Planters are the perfect match for any of your plants, including succulents and cactus!',
          category: 'planter',
          price: '59.99'
        },
        {
          id: 6,
          title: 'Terrazzo Ceramic Planter',
          img: 'terrazzo-cer-planter.jpg',
          description: 'With a modern terrazzo finish, this collection is designed to add a more vivid vibe to your garden.',
          category: 'planter',
          price: '18.99'
        },
      ]
    }
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
  }


  render() {
      return (
        <div className='wrapper'>
          <Header orders={this.state.orders} onDelete={this.deleteOrder} />
          <Items items={this.state.items} onAdd={this.addToOrder} />
          <Footer />
        </div>
    );
  }

  addToOrder(item) {
    this.setState({ orders: [...this.state.orders, item] })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

}

export default App;
