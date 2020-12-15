const loadText = document.querySelector(".loading-text")
const background = document.querySelector(".bg")

let load = 0;

let int = setInterval (blurring, 40)


function blurring() {
    load++
    if(load > 99){
        clearInterval(int)

        loadText.innerText = `"Let's keep working and let's believe." - Simona Halep`
        loadText.style.cssText = "background-color: rgba(88, 24, 69, 0.6);color: white; transition: 1s ease; padding:15px; border-radius: 10px; text-align:center"
    }else {
    
    loadText.innerText = `${load}%`
    loadText.style.opacity =  scale(load, 0, 100, 1, 0)
    background.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
    }
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}