import { getWalkers } from "./database.js"

const walkers = getWalkers()                //#1


export const CityList = () => {
    let citiesHTML = "<ul>"

    for (const walker of walkers) {
        citiesHTML += `<li>${walker.city}</li>`     //#2
    }

    citiesHTML += "</ul>"

    return citiesHTML
}

