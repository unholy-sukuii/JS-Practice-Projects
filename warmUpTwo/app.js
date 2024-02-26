// create a rectangle inside a rectangle and make the inside rectangle follow the cursor when it is inside the rectange.

// basically create an element inside a div that follows the curson when the curson is inside the div. however the speed of the element should lower when reaching the farthest sides along with the cursor

let cursor = document.querySelector('#cursor')
let width = cursor.getBoundingClientRect().width;
console.log(width + width/2)
// console.log(main)
// console.log(cursor)





window.addEventListener('mousemove', (el) => {
    let position = gsap.utils.mapRange(0,window.innerWidth,el.clientX + width/2, el.clientX - (width+width/2), el.clientX);
    let positionY = gsap.utils.mapRange(0,window.innerHeight,el.clientY + width/2, el.clientY - (width+width/2), el.clientY)
    gsap.to(cursor,{
        left: position,
        top:positionY,
        ease: Bounce,

    })
})
