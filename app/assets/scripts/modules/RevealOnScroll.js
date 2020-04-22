import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'

class RevealOnScroll { 
  constructor() { 
    this.itemsToReveal = document.querySelectorAll('.feature-item') 
    this.browserHeight = window.innerHeight
    this.hideInitially()
    this.scrollThrottle = throttle(this.calcCaller, 200).bind(this)
    this.events()
  }

  events() { 
    window.addEventListener('scroll', this.scrollThrottle)
    window.addEventListener('resize', debounce( () => { 
      this.browserHeight = window.innerHeight 
    }, 333))
  }

  calcCaller() { 
    console.log("scroll function ran")
    this.itemsToReveal.forEach( el => { 
      if(el.isRevealed == false) { 
        this.calculateIfScrolledTo(el)
      }
    })
  }

  calculateIfScrolledTo(el) { 
    if (window.scrollY + this.browserHeight) {
      console.log('element was calculated')
      let scrollPercent = (el.getBoundingClientRect().y / this.browserHeight) * 100
      if (scrollPercent < 75) { 
        el.classList.add('reveal-item--is-visible')
        el.isRevealed = true 
        if (el.isLastItem) { 
          window.removeEventListener('scroll', this.scrollThrottle)
        }
      }
    }
  }

  hideInitially() { 
    this.itemsToReveal.forEach( el => { 
      el.classList.add('reveal-item') 
      el.isRevealed = false
    })
    this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true
  }
}

export default RevealOnScroll