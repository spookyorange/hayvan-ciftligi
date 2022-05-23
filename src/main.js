import './style/common.css';
import { headerInitializer, headerTextInitializer } from './headerController';
import { footerInitializer } from './footerController';
import contentInitializer from './contentController';
import anime from 'animejs';

const body = document.querySelector('body');

const overallController = (() => {
  const wrapper = document.createElement('div');
  const header = headerInitializer();
  const headerText = headerTextInitializer();
  const content = contentInitializer();
  const footer = footerInitializer();


  const createWrapper = () => {
    wrapper.classList.add('wrapper');
    wrapper.appendChild(header);
    wrapper.appendChild(content);
    wrapper.appendChild(footer);
    header.appendChild(headerText);
    
    return wrapper
  }
  
  return { createWrapper }
})()

body.appendChild(overallController.createWrapper())
anime ({
  targets: body,
  keyframes: [
    {backgroundColor: '#BBF7D0'},
    {backgroundColor: '#86EFAC'},
    {backgroundColor: '#BBF7D0'}
  ],
  duration: 10000,
  easing: 'linear',
  loop: true
})