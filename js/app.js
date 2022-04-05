let div = document.querySelector('#pic')
let img_js = document.createElement("img")
img_js.setAttribute('src', 'images/bg2.png')
img_js.setAttribute('style', `width: 100%;
margin-top: 0%;
overflow: hidden;
height: 53vw;
box-sizing: border-box;
animation: appear_img 2s;
@keyframes appear_img {
	from {opacity: 0;}
	to {opacity: 1;}	
}`)
div.prepend(img_js)

setInterval(() => {
    // console.log(document.querySelector("#bg12").getAttribute("src") == "images/bg1.png")
    if (img_js.getAttribute("src") == "images/bg1.png") {
        // document.querySelector("#bg12").setAttribute('src', 'images/bg2.png')
        img_js.setAttribute('src', 'images/bg2.png')
        img_js.setAttribute('style', `
width: 100%;
margin-top: 0%;
overflow: hidden;
height: 53vw;
box-sizing: border-box;
animation: appear_img 2s;
@keyframes appear_img {
	from {opacity: 0;}
	to {opacity: 1;}	
}`)
        div.prepend(img_js)
        img_js.remove()

    }
    if (img_js.getAttribute("src") == "images/bg2.png") {
        // document.querySelector("#bg12").setAttribute('src', 'images/bg3.png')
        img_js.setAttribute('src', 'images/bg3.png')
        img_js.setAttribute('style', `width: 100%;
margin-top: 0%;
overflow: hidden;
height: 53vw;
box-sizing: border-box;
animation: appear_img 2s;
@keyframes appear_img {
	from {opacity: 0;}
	to {opacity: 1;}	
}`)
        div.prepend(img_js)
        img_js.remove()
    }
    if (img_js.getAttribute("src") == "images/bg3.png") {
        // document.querySelector("#bg12").setAttribute('src', 'images/bg1.png')
        img_js.setAttribute('src', 'images/bg1.png')
        img_js.setAttribute('style', `width: 100%;
margin-top: 0%;
overflow: hidden;
height: 53vw;
box-sizing: border-box;
animation: appear_img 2s;
@keyframes appear_img {
	from {opacity: 0;}
	to {opacity: 1;}	
}`)
        div.prepend(img_js)
        img_js.remove()
    }
}, 3000);
setInterval(()=>{

}, 1)
let time = document.querySelector('#glock')

// console.log(hours , min, sex)
setInterval(()=>{
    let date = new Date()
let hours = date.getHours()
let min = date.getMinutes()
let sex = date.getSeconds()

    time.innerHTML = `${hours} ${min} ${sex}`
    console.log(sex)
}, 1000)


