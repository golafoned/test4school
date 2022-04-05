function set_image() {
    let img_style = `
    width: 100%;
    margin-top: 0%;
    overflow: hidden;
    height: 53vw;
    box-sizing: border-box;
    animation: appear_img 2s;
    @keyframes appear_img {
        from {opacity: 0;}
        to {opacity: 1;}	
    }`
    let div = document.querySelector('#pic')
    let img_js = document.createElement("img")
    img_js.setAttribute('src', 'images/bg1.png')
    img_js.setAttribute('style', img_style)
    div.prepend(img_js)
    setInterval(() => {
        console.log(img_js.getAttribute("src"))
        img_js.remove()
        if (img_js.getAttribute("src") == "images/bg1.png") {
            
            img_js.setAttribute('src', 'images/bg2.png')
            img_js.setAttribute('style', img_style)
            console.log(img_js)
            div.prepend(img_js)
            return
    
        }
        if (img_js.getAttribute("src") == "images/bg2.png") {
            img_js.setAttribute('src', 'images/bg3.png')
            img_js.setAttribute('style', img_style)
            div.prepend(img_js)
            return
        }
        if (img_js.getAttribute("src") == "images/bg3.png") {
            img_js.setAttribute('src', 'images/bg1.png')
            img_js.setAttribute('style', img_style)
            div.prepend(img_js)
            return
        }
    }, 3000);

}

set_image()
let time = document.querySelector('#glock')

setInterval(()=>{
    let date = new Date()
    let hours = date.getHours()
    let min = date.getMinutes()
    let sex = date.getSeconds()
    if (Number(hours) < 10) {
        hours = '0'+hours
    } 
    if (Number(min) < 10) {
        min = '0'+min
    } 
    if (Number(sex) < 10) {
        sex = '0'+sex
    } 
    time.innerHTML = `${hours}:${min}:${sex}`
}, 1000)


