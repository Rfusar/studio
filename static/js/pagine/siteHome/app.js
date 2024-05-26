import GSAP_INIT from '../../gsap/siteHome.js'
import {animateText} from '../../index.js'
import {codici, links} from './consts.js'

GSAP_INIT()
for (let i in codici){
  if(i == 0){continue}
  animateText(codici[i]["elemento"], codici[i]["codice"], 30)
}
for(const l of links){
  l["elemento"].setAttribute("href", l["url"])
  l["elemento"].setAttribute("target", "_blank")
}


