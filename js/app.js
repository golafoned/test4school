let img = document.querySelector("#bg12")
setInterval(() => {
    console.log(1)
    if (document.querySelector("#bg12").getAttribute("src") == "images/bg1.png") {
        document.querySelector("#bg12").setAttribute('style', '')
        document.querySelector("#bg12").setAttribute('style', "animation: show 1s 1")
        document.querySelector("#bg12").setAttribute('src', 'images/bg2.png');
        return
    }
    if (document.querySelector("#bg12").getAttribute("src") == "images/bg2.png") {
        document.querySelector("#bg12").setAttribute('src', 'images/bg3.png');
        return
    }
    if (document.querySelector("#bg12").getAttribute("src") == "images/bg3.png") {
        document.querySelector("#bg12").setAttribute('src', 'images/bg1.png');
        return
    }
}, 4000);
