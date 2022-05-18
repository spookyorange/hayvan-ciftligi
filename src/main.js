import './style/common.css';
import headerInitializer from './headerController';
import footerInitializer from './footerController';

const body = document.querySelector('body');

const overallController = (() => {
  const wrapper = document.createElement('div');

  const createWrapper = () => {
    wrapper.classList.add('wrapper');
    wrapper.appendChild(headerInitializer());
    wrapper.appendChild(footerInitializer())
    
    return wrapper
  }
  
  return { createWrapper }
})()

body.appendChild(overallController.createWrapper())