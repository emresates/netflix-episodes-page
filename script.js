const ep1 = document.querySelector(".episodes")
const ep2 = document.querySelector(".episodes2")
const epDOM = document.querySelector(".episode-dom")

const ep1Btn = document.querySelector("#b1")
const ep2Btn = document.querySelector("#b2")



ep1Btn.onclick = () => {
    if (ep1.style.display == "block") {
        ep2.style.display = "none"
    } else {
        ep2.style.display = "none"
        ep1.style.display = "block"
        scroll()
    }
}

ep2Btn.onclick = () => {
    if (ep2.style.display == "block") {
        ep1.style.display = "none"
    } else {
        ep2.style.display = "block"
        ep1.style.display = "none"
        scroll()
    }
}

function scroll() {
    epDOM.scrollTo({ top: 0, behavior: "smooth" })
    console.log("Working")
}


var myList = document.querySelector("#myList")

myList.addEventListener("click", () => {
    if (myList.innerHTML != "My List") {
        myList.innerHTML = "My List"
        myList.style.fontSize = "18px"
    } else {
        myList.innerHTML = "&#10003;"
        myList.style.fontSize = "30px"
    }
})



// Watch Trailer Button
var video = document.getElementById("video");
var videoBox = document.querySelector('.videoBox')
var background = document.querySelector('.background-opacity')

function videoBox_open() {
    window.scrollTo({ top: 0, behavior: "smooth" })
    videoBox.style.display = 'block';
    background.style.display = 'block';
    video.play();
}

function videoBox_close() {
    videoBox.style.display = 'none';
    background.style.display = 'none';
    video.pause();
}