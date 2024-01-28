const navMobile = document.querySelector('.nav__mobile')
const navBtn = document.querySelector('.hamburger')
const allNavsItem = document.querySelectorAll('.nav__item')
const navLinksActice = document.querySelector('.is-active')
const footerYear = document.querySelector('.footer__year')

const username = document.querySelector('#name')
const email = document.querySelector('#mail')
const massage = document.querySelector('#msg')
const sendBtn = document.querySelector('.contact__form-btn')


const showError = (input, msg) => {
    const formBox = input.parentElement
    const errorMsg = formBox.querySelector('.error-text')

    formBox.classList.add('error')
    errorMsg.textContent = msg
}

const clearError = (input) => {
    const formBox = input.parentElement
    formBox.classList.remove('error')
}

const checkForm = (input) => {
    input.forEach(el => {
        if(el.value === ''){
            showError(el, el.name)
        }   else{
            clearError(el)
        }
    })
}

const checkMail = (email) => {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if(re.test(email.value)){
        clearError(email)
    }   else{
        showError(email, 'E-mail jest niepoprawny')
    }
}


const handleNav = () => {
    navBtn.classList.toggle('is-active')
    navMobile.classList.toggle('nav__mobile--active')

    allNavsItem.forEach((item) =>{
        item.addEventListener('click', () =>{
           navMobile.classList.remove('nav__mobile--active')
        })
    })

    allNavsItem.forEach((item) =>{
        item.addEventListener('click', () =>{
           navBtn.classList.remove('is-active')
        })
    })

}

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
    footerYear.innerText = year;
};

handleCurrentYear();
navBtn.addEventListener('click', handleNav)

sendBtn.addEventListener('click', e => {
    e.preventDefault();

    checkForm([username,email,massage])
    checkMail(email)
})


