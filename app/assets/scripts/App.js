import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu' 
import StickyHeader from './modules/StickyHeader'
import Modal from './modules/Modal'

new Modal();
let stickyHeader = new StickyHeader();
let mobileMenu = new MobileMenu();


if(module.hot) { 
  module.hot.accept()
}

/* Lesson example code below this line */

