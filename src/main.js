import './style/common.css';

const body = document.querySelector('body');

const overallController = (() => {

  const createWrapper = () => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper')
    
    return wrapper
  }
  
  return { createWrapper }
})()

body.appendChild(overallController.createWrapper())