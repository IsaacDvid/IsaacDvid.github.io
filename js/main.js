const $ = (selector) => document.getElementById(selector)

const wrapper = $("wrapper")
const card = $("card")


const {width,height} = wrapper.getBoundingClientRect()

const halfWidth = width / 2
const halfHeight= height / 2

 window.addEventListener('mousemove', event =>{
  const {offsetX, offsetY} = event

  const rotationX = ((offsetX - halfWidth) / halfWidth ) * 5
  
  const rotationY = ((offsetY - halfHeight) / halfHeight ) * 5

  card.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`

 })



