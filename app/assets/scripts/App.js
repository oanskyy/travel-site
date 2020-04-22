import '../styles/styles.css'
import 'lazysizes'
import RevealOnScroll from './modules/RevealOnScroll'
import MobileMenu from './modules/MobileMenu' 
import StickyHeader from './modules/StickyHeader'

let revealOnScroll = new RevealOnScroll();
new StickyHeader();
new MobileMenu();
let modal

document.querySelectorAll('.open-modal').forEach( el => { 
  el.addEventListener('click', e => { 
    e.preventDefault() 
    if (typeof modal == 'undefined') { 
      import(/* webpackChunkName:'modal' */ './modules/Modal').then(x => { 
        modal = new x.default()
        setTimeout(() => modal.openTheModal(), 20)
      }).catch(() => console.log("there was a problem"))
    } else { 
      modal.openTheModal()
    }

  })
})

if(module.hot) { 
  module.hot.accept()
}

/* Lesson example code below this line */

