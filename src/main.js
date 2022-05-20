import './style/common.css';
import { headerInitializer, headerTextInitializer } from './headerController';
import footerInitializer from './footerController';
import contentInitializer from './contentController';

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
