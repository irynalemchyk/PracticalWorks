import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import FallingStars from './FallingStars'; // Шлях до вашого нового компонента

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: [],
      cardsData: [
        {
          id: 1,
          imageSrc: './imgbox/backpack1.jpg',
          title: 'Backpack Terra Incognita 60',
          text: 'Some text about the backpack.'
        },
        {
          id: 2,
          imageSrc: './imgbox/backpack2.jpg',
          title: 'Backpack Terra Incognita 60',
          text: 'Some text about the backpack.'
        },
        {
          id: 3,
          imageSrc: './imgbox/backpack6.jpg',
          title: 'Backpack Terra Incognita 60',
          text: 'Some text about the backpack.'
        },
        {
          id: 4,
          imageSrc: './imgbox/backpack3.jpg',
          title: 'Backpack Terra Incognita 60',
          text: 'Some text about the backpack.'
        },
        {
          id: 5,
          imageSrc: './imgbox/backpack4.jpg',
          title: 'Backpack Terra Incognita 60',
          text: 'Some text about the backpack.'
        },
        {
          id: 6,
          imageSrc: './imgbox/backpack1.jpg',
          title: 'Backpack Terra Incognita 60',
          text: 'Some text about the backpack.'
        },
        {
          id: 7,
          imageSrc: './imgbox/backpack6.jpg',
          title: 'Backpack Terra Incognita 60',
          text: 'Some text about the backpack.'
        },
        {
          id: 8,
          imageSrc: './imgbox/backpack2.jpg',
          title: 'Backpack Terra Incognita 60',
          text: 'Some text about the backpack.'
        },
        {
          id: 9,
          imageSrc: './imgbox/backpack6.jpg',
          title: 'Backpack Terra Incognita 60',
          text: 'Some text about the backpack.'
        },
        {
          id: 10,
          imageSrc: './imgbox/backpack3.jpg',
          title: 'Backpack Terra Incognita 60',
          text: 'Some text about the backpack.'
        },
        {
          id: 11,
          imageSrc: './imgbox/backpack4.jpg',
          title: 'Backpack Terra Incognita 60',
          text: 'Some text about the backpack.'
        },
        {
          id: 12,
          imageSrc: './imgbox/backpack1.jpg',
          title: 'Backpack Terra Incognita 60',
          text: 'Some text about the backpack.'
        },
        {
          id: 13,
          imageSrc: './imgbox/backpack2.jpg',
          title: 'Backpack Terra Incognita 60',
          text: 'Some text about the backpack.'
        },
        {
          id: 14,
          imageSrc: './imgbox/backpack6.jpg',
          title: 'Backpack Terra Incognita 60',
          text: 'Some text about the backpack.'
        },
      ],
    };
    this.addToOrder = this.addToOrder.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleUserInteraction);
    document.addEventListener('mousemove', this.handleUserInteraction);
    document.addEventListener('touchstart', this.handleUserInteraction);
    document.addEventListener('scroll', this.handleUserInteraction);
    this.startInactivityTimer();
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleUserInteraction);
    document.removeEventListener('mousemove', this.handleUserInteraction);
    document.removeEventListener('touchstart', this.handleUserInteraction);
    document.removeEventListener('scroll', this.handleUserInteraction);
    clearTimeout(this.inactivityTimeout);
  }

  handleUserInteraction = () => {
    this.resetInactivityTimer();
  };

  startInactivityTimer = () => {
    this.inactivityTimeout = setTimeout(() => {
      this.setState({ isInactive: true });
    }, 10000); // 10 seconds
  };

  resetInactivityTimer = () => {
    clearTimeout(this.inactivityTimeout);
    this.setState({ isInactive: false });
    this.startInactivityTimer();
  };

  addToOrder(cardsData) {
    const newStarPosition = {
      top: Math.random() * window.innerHeight + 'px',
      left: Math.random() * window.innerWidth + 'px',
    };
    this.setState({ order: [...this.state.order, newStarPosition] });
    this.resetInactivityTimer(); // Reset inactivity timer when adding a new star
  }

  render() {
    return (
      <>
        <Header />
        <FallingStars />
        {this.state.order.map((orderItem, index) => (
          <FallingStars key={index} style={{ top: orderItem.top, left: orderItem.left }} />
        ))}
        <Footer />
      </>
    );
  }
}

export default App;