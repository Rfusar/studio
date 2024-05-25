import GSAP_INIT from '../../gsap/siteHome.js'
import {animateText} from '../../index.js'
import codici from './consts.js'

GSAP_INIT()
for (let i in codici){
  if(i == 0){continue}
  animateText(codici[i]["elemento"], codici[i]["codice"], 30)
}
