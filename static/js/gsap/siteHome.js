import {animateText} from '../index.js'
import codici from '../pagine/siteHome/consts.js'

export default function GSAP_INIT(){
  if (window.innerWidth > 800){

    gsap.registerPlugin(ScrollTrigger)
    const tl = gsap.timeline()
  
    gsap.to("#codiceFlask", {
      scrollTrigger: {
          trigger: "#codiceFlask",
          start: "top center",
          onEnter: () => animateText(codici[0]["elemento"], codici[0]["codice"], 30),
          once: true
      }
    })
    gsap.to("#divHero", {
        x:100,
        duration: 1
    })
    gsap.to("#cardHeroCodice", {
      x: -150,
      duration: 1.5
    })
    gsap.to(".itemHeroTech", {
      duration: 1,
      opacity: 1,
      y: -40,
    })


    gsap.fromTo(".itemAnimation", 
      {
        x: 500,
        y: 70,
        rotation: 90,
      },
      {
        duration: 5,
        opacity: 1,
        x: 0,
        y: 5,
        rotation: 360,
        borderRadius: 7,
        repeat: 1,
        yoyo: true // Makes the animation reverse back and forth
      }, "+=2")
  
    tl.to("#wow", {
      delay: 8,
      y: -50,
      x: -1270,
      opacity: 1,
      rotation: 360,
      duration: 2,
    }).to("#wow", {delay: 2, opacity: 0, duration: 2})

    gsap.to(".logoLinguaggi", {
      delay: 15,
      duration: 3,
      opacity: 1
    })
  }
}
