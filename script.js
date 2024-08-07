const convertButton = document.querySelector('.convert-button')
const currencySelect = document.querySelector('.select-two')


async function convertValues() {
    const inputCurrencyValue = document.querySelector('.valor').value
    const currencyValueToConvert = document.querySelector('.p-valor-para-converter')
    const currencyValueConverted = document.querySelector('.p-valor-convertido')

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL").then(resp => resp.json())

    const dolarToday = data.USDBRL.high
    const euroToday = data.EURBRL.high
    const libraToday = data.GBPBRL.high
    const bitcoinToday = data.BTCBRL.high

    if (currencySelect.value == 'dolar') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrencyValue / dolarToday)

    }

    if (currencySelect.value == 'euro') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'

        }).format(inputCurrencyValue / euroToday)

    }

    if (currencySelect.value == 'libra') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP'

        }).format(inputCurrencyValue / libraToday)

    }

    if (currencySelect.value == 'bitcoin') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('es-ES', {
            style: 'currency',
            currency: 'BTC'

        }).format(inputCurrencyValue / bitcoinToday)

    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputCurrencyValue)

}

function changeCurrency() {
    const currencyName = document.getElementById('p-moeda-baixo')
    const currencyImg = document.querySelector('.imagem-moeda-convertida')

    if (currencySelect.value == 'dolar') {

        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = './assets/dolar.png'
    }

    if (currencySelect.value == 'euro') {

        currencyName.innerHTML = "Euro"
        currencyImg.src = './assets/euro.png'
    }

    if (currencySelect.value == 'libra') {

        currencyName.innerHTML = "Libra"
        currencyImg.src = './assets/libra.png'
    }

    if (currencySelect.value == 'bitcoin') {

        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = './assets/bitcoin.png'
    }

    convertValues()

}


currencySelect.addEventListener('change', changeCurrency)
convertButton.addEventListener('click', convertValues)