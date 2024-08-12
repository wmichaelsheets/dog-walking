import { getWalkers } from "./database.js"      //#1

const walkers = getWalkers()


export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li>${walker.name}</li>`         //#3
    }

    walkerHTML += "</ul>"

    return walkerHTML                       //#2
}

