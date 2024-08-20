#Project 1
```Javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function(button) {
    console.log(button);
    button.addEventListener('click' , function(e){
        console.log(e);
        console.log(e.target);
        if (e.target.id ==='grey') {
            body.style.backgroundColor = e.target.id;
                }
        if (e.target.id ==='white') {
            body.style.backgroundColor = e.target.id;
                }
        if (e.target.id ==='blue') {
            body.style.backgroundColor = e.target.id;
                }
        if (e.target.id ==='yellow') {
            body.style.backgroundColor = e.target.id;
                }
        if (e.target.id ==='purple') {
            body.style.backgroundColor = e.target.id;
                }
        
    })
    
})

#Project 2
```Javascript
const form = document.querySelector('form')
const body = document.querySelector('body')
const container = document.querySelector('.container')
body.style.backgroundColor = 'grey'
body.style.paddingLeft = '400px '
body.style.paddingRight = '400px '
body.style.alignItems = 'center'

container.style.backgroundColor = 'white'
container.style.border = '15px solid lightgreen'
// this usecase will give you empty value because it takes value at start.
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit' , function(s){
    s.preventDefault()
    //parseInt converts any string argument to an integer.
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')
    

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please give a valid Height ${height}`
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please give a valid Weight ${weight}`
    } else {
        const BMI = (weight / ((height*height) / 10000)).toFixed(2)
        //show the results
        result.textContent = `${BMI}`;
    }
   

})