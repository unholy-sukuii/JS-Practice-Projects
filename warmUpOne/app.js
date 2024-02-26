// Make a rectangle and when we move mouse on that rectangle on the left side we want to gradually change the color of that rectangle to red and when we move mouse to the right side  we want to change the color to blue.

let div = document.querySelector("#center");


// first know whether the mouse is inside the rectangle or not 


div.addEventListener("mousemove",(dts) => {
    var rect = div.getBoundingClientRect()
    var mouse = dts.clientX - rect.left;
    if(mouse < rect.width/2){
        let a = gsap.utils.mapRange(-0.5,250,1,0,mouse)
        div.style.backgroundColor = `rgba(255,0,0,${a})`
        console.log(a)
    }else{
        let b = gsap.utils.mapRange(250,499.5,0,1,mouse)
        div.style.backgroundColor = `rgba(0,0,254,${b})`
    }
    

}) 

// console.log()