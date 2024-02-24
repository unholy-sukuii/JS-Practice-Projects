let body = document.querySelector('body');

let button = document.querySelector('.slider')

let count = true;

button.addEventListener('click',() => {
    if(count){
        let check = button.classList;
        for(let i =0; i<= check.length;i++){
            if(check[i] === 'clickback'){
                button.classList.remove('clickback')
            }else{
                button.classList.add("click")
                count = false;

            }
        }
    
    }else{
        button.classList.replace('click','clickback')
        count = true;


        
    }
})