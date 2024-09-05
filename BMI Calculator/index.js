const form = document.querySelector('form');
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');
    const message = document.querySelector('#message');

    if(height==='' || height<0 || isNaN(height))
    {
        result.innerHTML='Please give valid input';
    }
    else if(weight==='' || weight<0 || isNaN(weight))
    {
            result.innerHTML='Please give valid input';
    }
    else
    {
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        result.innerHTML = `Your BMI is ${bmi}`;
        if(bmi<18.6)
        {
            message.innerHTML = 'You are underweight';
        }
        else if(bmi>=18.6 && bmi<24.6){
            message.innerHTML = 'You are normal weight';
        }
        else{
            message.innerHTML = 'You are overweight';
        }
    }
    

})