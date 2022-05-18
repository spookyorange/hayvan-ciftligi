import './style/common.css';
import headerInitializer from './headerController';

const body = document.querySelector('body');

const overallController = (() => {
  const wrapper = document.createElement('div');

  const createWrapper = () => {
    wrapper.classList.add('wrapper');
    wrapper.appendChild(headerInitializer());
    
    return wrapper
  }
  
  return { createWrapper }
})()

body.appendChild(overallController.createWrapper())