const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
buttons.forEach((button)=>{
    button.addEventListener('click', (e)=>{
        switch(e.target.id){
            case 'yellow' :
                body.style.backgroundColor = 'yellow';
                break;
            case 'orange' :
                body.style.backgroundColor = 'orange';
                break;
            case 'grey' :
                body.style.backgroundColor = 'grey';
                break;
            default :
                body.style.backgroundColor = 'blue'
        }
    })
})