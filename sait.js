function menuNavbar() {
    let clickedState = 1

    let hamburger = document.querySelector('.menu-hamburger')
    let navMid = document.querySelector('.nav-mid')
    let navRight = document.querySelector('.nav-right')

    hamburger.addEventListener('click', function() {
        clickedState++
        hamburger.innerHTML = '&#10006'
        navMid.style.height = '10rem'
        navMid.style.width = '100%'

        navRight.style.height = '6.2rem'
        navRight.style.width = '100%'


        if (clickedState % 2 ===1) {
            hamburger.innerHTML = '&#9776'

            navMid.style.height = '0rem'
            navMid.style.width = '0%'
            navRight.style.height = '0rem'
            navRight.style.width = '0%'
        }
    })
}
menuNavbar()


let sliderState = false
let sliderCounter = 0
function userReviewSlider() {

    if (!sliderState) {
        sliderState = true
    }

    let userReviews = document.querySelectorAll('.slider')
    let prevBtn = document.querySelector('.prev-btn')
    let nextBtn = document.querySelector('.next-btn')

    function displayOneSlider(state) {
        userReviews.forEach( review => {
            review.style.display = 'none'
        })
        
        userReviews[state].style.display = 'block'
    }

    if (sliderState) {
        displayOneSlider(0)
    }
    
    nextBtn.addEventListener('click', function() {
        if (sliderCounter > 1) {
            sliderCounter = -1
        }

        sliderCounter++
        displayOneSlider(sliderCounter)

        
    })

    prevBtn.addEventListener('click', function() {
        if (sliderCounter < 1) {
            sliderCounter = 3
        }

        sliderCounter--
        displayOneSlider(sliderCounter)

        
    })


} 
userReviewSlider()
