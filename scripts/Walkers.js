import { getWalkers } from "./database.js"      //#1

const walkers = getWalkers()

document.addEventListener(
    "click",
    (theClickEvent) => {
        const whatWasClickedOn = theClickEvent.target
        
        if (whatWasClickedOn.dataset.type ==="walker") {
            window.alert(`This walker works in ${whatWasClickedOn.dataset.city}`)
        }

        
    }
)


export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {                                         //#3, below
        walkerHTML += `<li data-id="${walker.id}"
                            data-city="${walker.city}"
                            data-type="walker"
                            >${walker.name}
                            </li>`         
    }

    walkerHTML += "</ul>"

    return walkerHTML                       //#2
}

