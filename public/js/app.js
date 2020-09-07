console.log('client side javascript is loaded')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const message1 = document.querySelector('#message-1')
const message2 = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value

    message1.innerText = 'Loading...'
    message2.innerText = ''

    fetch(`/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                message1.innerText = data.error
            } else {
                message1.innerText = data.location
                message2.innerText = data.forecast
            }
        })
    })
})
