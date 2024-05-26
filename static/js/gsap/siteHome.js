import {animateText} from '../index.js'
import {codici} from '../pagine/siteHome/consts.js'

export default function GSAP_INIT(){
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
        xPercent: 5,
        duration: 1
    })
    gsap.to("#cardHeroCodice", {
      xPercent: -20,
      duration: 1.5
    })
    gsap.to(".itemHeroTech", {
      duration: 1,
      opacity: 1,
      y: -40,
    })


    gsap.fromTo(".itemAnimation", 
      {
        xPercent: 700,
        yPercent: 70,
        rotation: 90,
      },
      {
        duration: 5,
        opacity: 1,
        xPercent: 0,
        yPercent: 2,
        rotation: 360,
        borderRadius: 7,
        repeat: 1,
        yoyo: true // Makes the animation reverse back and forth
      }, "+=2")
  
    tl.to("#wow", {
      delay: 8,
      y: -50,
      xPercent: -430,
      opacity: 1,
      rotation: 360,
      duration: 2,
    }).to("#wow", {delay: 2, opacity: 0, duration: 2})

    gsap.to(".logoLinguaggi", {
      delay: 15,
      duration: 3,
      opacity: 1
    })
    const imgTendina = document.querySelector("#imgTendina")
    let click=false
    imgTendina.addEventListener("click", ()=>{
      if (click == false){
        gsap.to("#menuTendinaSiteHome", {
          duration: 0.5,
          height: "100vh",
        })
      }
      else{
        gsap.to("#menuTendinaSiteHome", {
          duration: 0.5,
          height: 0,
        })
      }
      click = !click
    })
}
