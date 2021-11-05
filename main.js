import './style.css'

//--- KEYBORAD

var vco
var vca

// Do
const c = 261.63
// Ré bemol
const cb = 277.18
// Ré
const d = 293.66
// Mi bémol
const db = 311.13
// Mi
const e = 329.63
// Fa
const f = 349.23
// Sol bémol
const fb = 369.99
// Sol
const g = 392.00
// La bémol
const gb = 415.30
// La
const a = 440.00
// Si bémol
const ab = 466.16
// Si
const b = 493.88


document.getElementById("button").addEventListener("click", event => {
  var context = new AudioContext()
  
  // VCO = outil qui met la fréquence
  vco = context.createOscillator();
  vco.type = "sine";
  vco.start(0);

  // VCA = outil qui met le volume
  vca = context.createGain();
  vca.gain.value = 0;

  // Connection entre la fréquence et le volume
  vco.connect(vca);
  vca.connect(context.destination);
})


document.addEventListener("keydown", event => {
  if (event.key === "a") {
    vco.frequency.value = c
    vca.gain.value = 1
    document.getElementById("c").classList.add(`colorWhite`)
  } else if (event.key === "z") {
    vco.frequency.value = d
    vca.gain.value = 1
    document.getElementById("d").classList.add(`colorWhite`)
  } else if (event.key === "e") {
    vco.frequency.value = e
    vca.gain.value = 1
    document.getElementById("e").classList.add(`colorWhite`)
  } else if (event.key === "r") {
    vco.frequency.value = f
    vca.gain.value = 1
    document.getElementById("f").classList.add(`colorWhite`)
  } else if (event.key === "t") {
    vco.frequency.value = g
    vca.gain.value = 1
    document.getElementById("g").classList.add(`colorWhite`)
  } else if (event.key === "y") {
    vco.frequency.value = a
    vca.gain.value = 1
    document.getElementById("a").classList.add(`colorWhite`)
  } else if (event.key === "u") {
    vco.frequency.value = b
    vca.gain.value = 1
    document.getElementById("b").classList.add(`colorWhite`)
  } else if (event.key === "q"){
    vco.frequency.value = cb
    vca.gain.value = 1
    document.getElementById("cs").classList.add(`colorBlack`)
  } else if (event.key === "s") {
    vco.frequency.value = db
    vca.gain.value = 1
    document.getElementById("ds").classList.add(`colorBlack`)
  } else if (event.key === "d") {
    vco.frequency.value = fb
    vca.gain.value = 1
    document.getElementById("fs").classList.add(`colorBlack`)
  } else if (event.key === "f") {
    vco.frequency.value = gb
    vca.gain.value = 1
    document.getElementById("gs").classList.add(`colorBlack`)
  } else if (event.key === "g") {
    vco.frequency.value = ab
    vca.gain.value = 1
    document.getElementById("as").classList.add(`colorBlack`)
  } else {
    vca.gain.value = 0
  }
})

document.addEventListener("keyup", event => {
  vca.gain.value = 0;
  document.getElementById("a").classList.remove(`colorWhite`)
  document.getElementById("b").classList.remove(`colorWhite`)
  document.getElementById("c").classList.remove(`colorWhite`)
  document.getElementById("d").classList.remove(`colorWhite`)
  document.getElementById("e").classList.remove(`colorWhite`)
  document.getElementById("f").classList.remove(`colorWhite`)
  document.getElementById("g").classList.remove(`colorWhite`)
  document.getElementById("cs").classList.remove(`colorBlack`)
  document.getElementById("ds").classList.remove(`colorBlack`)
  document.getElementById("fs").classList.remove(`colorBlack`)
  document.getElementById("gs").classList.remove(`colorBlack`)
  document.getElementById("as").classList.remove(`colorBlack`)
})
