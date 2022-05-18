import './style/common.css';
import headerInitializer from './headerController';
import footerInitializer from './footerController';
import contentInitializer from './contentController';

const body = document.querySelector('body');

const overallController = (() => {
  const wrapper = document.createElement('div');

  const createWrapper = () => {
    wrapper.classList.add('wrapper');
    wrapper.appendChild(headerInitializer());
    wrapper.appendChild(contentInitializer());
    wrapper.appendChild(footerInitializer());
    
    return wrapper
  }
  
  return { createWrapper }
})()

body.appendChild(overallController.createWrapper())