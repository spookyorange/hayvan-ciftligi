import './style/common.css';

const body = document.querySelector('body');

const overallController = (() => {
  const wrapper = document.createElement('div');

  const createWrapper = () => {
    wrapper.classList.add('wrapper');
    
    return wrapper
  }
  
  return { createWrapper }
})()

body.appendChild(overallController.createWrapper())