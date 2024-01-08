import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const fallingStarsAnimation = keyframes`
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(100vh) rotate(720deg);
    opacity: 0;
  }
`;

const Star = styled.div`
  width: 20px;
  height: 20px;
  background-color: yellow;
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  position: absolute;
  animation: ${fallingStarsAnimation} 5s linear infinite;
`;

const FallingStarsContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

class FallingStars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stars: [],
      isInactive: false,
      isAnimating: false,
    };
    this.inactivityTimeout = null;
  }

  componentDidMount() {
    this.startInactivityTimer();
    document.addEventListener('click', this.handleUserInteraction);
    document.addEventListener('mousemove', this.handleUserInteraction);
    document.addEventListener('touchstart', this.handleUserInteraction);
    document.addEventListener('scroll', this.handleUserInteraction);
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
      this.setState({ isInactive: true, isAnimating: true }, () => {
        this.generateStars();
      });
    }, 10000); // 10 seconds
  };

  resetInactivityTimer = () => {
    clearTimeout(this.inactivityTimeout);
    this.setState({ isInactive: false, isAnimating: false });
    this.startInactivityTimer();
  };

  generateStars = () => {
    const stars = [];
    for (let i = 0; i < 50; i++) {
      stars.push({
        top: Math.random() * window.innerHeight + 'px',
        left: Math.random() * window.innerWidth + 'px',
      });
    }
    this.setState({ stars });
  };

  render() {
    const { isInactive, isAnimating, stars } = this.state;

    return (
      <>
        {isInactive && isAnimating && (
          <FallingStarsContainer onClick={this.resetInactivityTimer}>
            {stars.map((star, index) => (
              <Star key={index} style={{ top: star.top, left: star.left }} />
            ))}
          </FallingStarsContainer>
        )}
      </>
    );
  }
}

export default FallingStars;
