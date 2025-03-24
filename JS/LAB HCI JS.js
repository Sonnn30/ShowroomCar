const form = document.getElementById('form')
const errorElement = document.getElementById('error')

function isContainCapital(s) {
    return /[A-Z]/.test(s);
}

function isContainNumeric(s) {
    return /[0-9]/.test(s);
}

function isContainLowercase(s) {
    return /[a-z]/.test(s);
}

const handleFormEvent = (event) => {
    event.preventDefault()

    const fullNameElement = document.getElementById('full-name')
    const emailElement = document.getElementById('email')
    const phoneElement = document.getElementById('phone')
    const passwordElement = document.getElementById('password')
    const confirmPasswordElement = document.getElementById('confirm-password')

    if(
        fullNameElement.value === '' || 
        emailElement.value === '' || 
        phoneElement.value === '' ||
        passwordElement.value === '' || 
        confirmPasswordElement.value === ''  
    ) {
        errorElement.innerHTML = 'Every field is required :)'
        return
    }

    const splittedFullName = fullNameElement.value.split(' ')

    if(splittedFullName.length < 2) {
        errorElement.innerHTML = 'Name must at least contain 2 words'
        return
    }

    const keongIndex = emailElement.value.indexOf('@')
    const dotIndex = emailElement.value.indexOf('.')

    if(keongIndex === -1) {
        errorElement.innerHTML = 'Email must contain @'
        return
    }

    if(dotIndex === -1) {
        errorElement.innerHTML = 'Email must contain .'
        return
    }

    if(dotIndex < keongIndex) {
        errorElement.innerHTML = '. must be after @'
        return   
    }

    // Validasi nomor telepon
    const phoneValue = phoneElement.value.trim();
    if(phoneValue.length < 10 || !/^\d+$/.test(phoneValue)) {
        errorElement.innerHTML = 'Phone number must be exactly 10 digits and contain only numbers'
        return
    }

    if(confirmPasswordElement.value !== passwordElement.value) {
        errorElement.innerHTML = 'Password does not match Confirm Password'
        return   
    }

    if(
        !isContainCapital(passwordElement.value) ||
        !isContainLowercase(passwordElement.value) ||
        !isContainNumeric(passwordElement.value) 
    ) {
        errorElement.innerHTML = 'Password must contain at least one lowercase, uppercase, and number'
        return
    }

    // Jika semua validasi berhasil
    errorElement.innerHTML = ''
    window.location.href = "homePage.html"
}

form.addEventListener('submit', handleFormEvent)

