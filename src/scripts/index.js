function tempConversion(c, temp) {
    if (typeof c !== "number") return
    if (typeof temp !== 'string') return
    switch (temp) {
        case 'f':
            return 9 / 5 * c + 32
        case 'r':
            return 4 / 5 * c
        case 'k':
            return c + 273
        default:
            return 'input salah'
    }
}

const title = document.getElementById('title')
const celsius = document.getElementById('celsius')
const fahrenheit = document.querySelector('p:nth-child(3)')
const kelvin = document.querySelector('p:nth-child(4)')
const reamur = document.querySelector('p:nth-child(5)')

const initCelsius = 50

title.innerText = 'Program Konversi Suhu'
celsius.innerText = `Suhu Celsius: ${initCelsius}\u00B0 C`
fahrenheit.innerText = `Hasil konversi ke suhu Fahrenheit adalah ${tempConversion(initCelsius, 'f')}\u00B0 F`
kelvin.innerText = `Hasil konversi ke suhu Kelvin adalah ${tempConversion(initCelsius, 'k')}\u00B0 K`
reamur.innerText = `Hasil konversi ke suhu reamur adalah ${tempConversion(initCelsius, 'r')}\u00B0 R`