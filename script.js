
const number = document.querySelector('#seconds')
const hero = document.querySelector('.hero')

let count = 30

const interval = setInterval(function () {

    if (count > 0) {
        number.textContent = count
        count--
    }
    else if (count == 0) {
        number.textContent = count
        clearInterval(interval)

        hero.classList.add('is-war')
    }

}, 1000)
