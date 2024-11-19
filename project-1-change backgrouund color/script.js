const colors = ['red','blue','green','yellow','purple','tomato']

const btn = document.querySelector('.btn')

const changecolor = document.querySelector('.changecolor')

const box = document.querySelector('.item')


btn.addEventListener('click',()=>{
    const randomNumber = getRandomNumber()
    // alert(randomNumber)
    // changecolor.innerHTML = colors[randomNumber]
    changecolor.innerHTML = '#'+randomNumber
    box.style.backgroundColor = '#'+randomNumber
    document.body.style.backgroundColor = '#'+(randomNumber+1)
})

const getRandomNumber = ()=>{
    // return Math.floor(Math.random() * colors.length)
    return Math.floor(Math.random() * 1000000)
}