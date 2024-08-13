import { getWalkers } from "./database.js"

const walkers = getWalkers()                //#1

document.addEventListener(
    "click",
    (clickEvt) => {
        const cityTarget = clickEvt.target

        if (cityTarget.dataset.type === "city" ) {
            window.alert(`${cityTarget.dataset.walkername} is servicing this city`)
        }
        
    }

)

export const CityList = () => {
    let citiesHTML = "<ul>"                 //#3

    for (const walker of walkers) {
        citiesHTML += `<li data-type="city" data-walkername="${walker.name}">${walker.city}</li>`     //#2
    }

    citiesHTML += "</ul>"

    return citiesHTML
}

