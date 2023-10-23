// let reklama = document.getElementById("reklama")
// let reklama2 = document.getElementById("reklama2")

// function closeFunc(){
//     reklama.style.display = "none"
// }

// function closeFunc2(){
//     let a = prompt()
//     if (a == 1234) {
//         reklama2.style.display = "none"
//     }else{
//         alert("incorrect Password");
//     }
// }

// function colorFunc(){
//     let color = prompt("rangni kriting")
//     document.body.style = `color: ${color}`
// }

// function fontFunc(){
//     anime.style.animationName = "MyAnime"
// }

// misol 1

let powderblue = document.getElementById("main1")

function colorFunc(){
    powderblue.style.backgroundColor = "powderblue"
}
let cadetblue = document.getElementById("main1")
function colorFunc2(){
    cadetblue.style.backgroundColor = "cadetblue"
}


let purple = document.getElementById("main1")
function colorFunc3(){
    purple.style.backgroundColor = "rgb(97, 95, 160)"
}

// misol 2
let mode = false
let x = document.getElementById("main2")
function darkFunc(){
    if (mode == false) {
        x.style.display = "none"
    }else{
        x.style.display = "block"
        
    }

    mode = !mode
}

// misol 4
let mode2 = false
let x2 = document.getElementById("main3")
function closeFunc(){
    if (mode2 == false) {
        x2.style.display = "none"
    }else{
        x2.style.display = "block"
        
    }

    mode2 = !mode2
}
let close = document.getElementById("main4")
function closeFunc2(){
        let a = prompt()
        if (a == 1503) {
            close.style.display = "none"
        }else{
            alert("incorrect Password");
        }
    }


// let size1 = document.getElementById("main5")
// let color1 = document.getElementById("main5")
// function colorFunc(){
//     let color = prompt("rangni kriting")
//     let size = prompt("size ni kriting")
//     color1.style = `background-color: ${color}`
//     size1.style = `width: ${size} + "px"`
// }