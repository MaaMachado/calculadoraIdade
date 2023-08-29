import { ValidData, fieldIsNaN, showAge } from './requerer.js'

const form = document.querySelector('form')
const dayOfBirth = document.querySelector('#day')
const monthOfBirth = document.querySelector('#month')
const yearOfBirth = document.querySelector('#year')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    try {
        const getDate = new Date()

        const getYear = getDate.getFullYear()
        const getMonth = getDate.getMonth() + 1
        const getDay = getDate.getDay()

        const birthday = parseInt(dayOfBirth.value)
        const birthdayMonth = parseInt(monthOfBirth.value)
        const yearOfBirthValue = parseInt(yearOfBirth.value)

        let currentAge = getYear - yearOfBirthValue

        if (fieldIsNaN(currentAge, birthday, birthdayMonth)) {
            throw new Error(ValidData.isRequired())
        }

        if (birthday < 1 || birthday > 31 || birthdayMonth < 1 || birthdayMonth > 12 || currentAge > getYear || yearOfBirthValue > getYear || yearOfBirthValue < 1900) {
            throw new Error(ValidData.isValidAge())
        }

        if (getMonth < birthdayMonth || (getMonth === birthdayMonth && getDay < birthday)) {
            currentAge--;
        }

        showAge(currentAge, birthday, birthdayMonth)
    } catch (error) {
        return error.message
    }
})