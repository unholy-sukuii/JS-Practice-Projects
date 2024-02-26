// create a div everytime mouse moves over the element which is div in this scenario
// make the position of div absolute and keep the overflow hidden
// give the div a height, width and add a image inside it 
// move the image down the y axis so that it vanishes from it 
// now animate the image to pop up 





// throttling means reducing the number of execution of any function or code


let center = document.querySelector("#center")


//  Throttling Function
const btn = document.querySelector("#throttle");
const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();


        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}



center.addEventListener("mousemove",
    throttleFunction((dts) => {
        console.log("worked")
        // your throttled code here //
        var div = document.createElement('div')
        setTimeout(() => {
            div.remove();
        }, 1000);
        div.classList.add("imagediv")
        document.body.appendChild(div)
        div.style.left = dts.clientX +'px'
        div.style.top = dts.clientY + 'px'


        var img = document.createElement('img')
        img.setAttribute("src","heroimg.png")
        img.classList.add("image")
        div.appendChild(img);

        gsap.to(img,{
            y:"0",
            ease: Bounce,
            duration:.2

        } )
        gsap.to(img,{
            y:"100",
            delay:.8,
            ease: Bounce,
            duration: .5
        })

    }, 400));