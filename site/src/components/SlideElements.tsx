// src/SlidingElements.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AboutWalletsModal from './AboutWalletsModal';
import NoWalletModal from './NoWalletModal';
import InstallWalletModal from './InstallWalletModal';
import ConnectingWalletModal from './ConnectingWalletModal';
import SwitchChainsModalView from './SwitchChainsModalView';
const SlidingElements = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000, // Slide animation speed in milliseconds
    slidesToShow: 3, // Number of items to show at once
    slidesToScroll: 1, // Number of items to scroll
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Autoplay speed in milliseconds
    pauseOnHover: false, // Pause autoplay on hover
    arrows: false, // Hide the left and right controls
  };

  return (
    <div className="">
      <Slider {...settings}>
  
          <div>
           <AboutWalletsModal  />
          </div>
          <div>
           <NoWalletModal />
          </div>
          <div>
            <InstallWalletModal />
          </div>
          <div>
       <ConnectingWalletModal  />
          </div>
          <div>
          <SwitchChainsModalView  />
          </div>
          
          
    
      </Slider>
    </div>
  );
};

export default SlidingElements;
