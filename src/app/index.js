let currenciesRates

document.addEventListener("DOMContentLoaded", async () => {
    try {
        currenciesRates = await getApi()
    } catch (e) {
        console.log(e)
    }

    let date = new Date(currenciesRates.Date).toLocaleString('en-GB')
    let previousDate = new Date(currenciesRates.PreviousDate).toLocaleString('en-GB')

    for ([key, value] of Object.entries(currenciesRates.Valute)) {
        let option = document.createElement('option')
        option.text = `${value.ID} - ${value.Name}`
        option.value = key
        document.getElementById('select').appendChild(option)
    }

    document.getElementById('select').onchange = function () {

        let valute = this.value
        let ratesValute = currenciesRates.Valute
        let idRates = document.getElementById('idRates')
        let nameRates = document.getElementById('nameRates')
        let CharCodeRates = document.getElementById('CharCodeRates')
        let dateRates = document.getElementById('date')
        let previousDateRates = document.getElementById('previousDate')

        idRates.textContent = ratesValute[valute].ID
        nameRates.textContent = ratesValute[valute].Name
        CharCodeRates.textContent = ratesValute[valute].CharCode
        dateRates.textContent = `${date} - ${ratesValute[valute].Value}`
        previousDateRates.textContent = `${previousDate} - ${ratesValute[valute].Previous}`
    }
})




