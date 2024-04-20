// const a=document.getElementById('btn')

// a.addEventListener('mouseleave',()=>{
//     console.log('Mouse leave')
// })

// a.addEventListener('mouseover',()=>{
//     console.log('Mouse over')
// })

// a.addEventListener('click',()=>{
//     console.log('Clicked')
// })
const error = document.getElementById('error')
const fname = document.getElementById('fname')
const password = document.getElementById('password')
const form = document.getElementById('form')
const a = document.getElementById('btn')

form.addEventListener('submit', (e) => {
    let message = []

    if (fname.value == '' || password.value == '' ) {
        message.push('Plzz enter name and password')
    }

    if (password.value.length < 6) {
        message.push('Password length must be greater than 6')
    }

    if (!password.value.includes('@') || !password.value.includes('$')) {
        message.push('Password Must contain special characters')
    }

    if (message.length > 0) {
        e.preventDefault()
        error.innerHTML = message
        error.style.color = 'red'
    }
})
