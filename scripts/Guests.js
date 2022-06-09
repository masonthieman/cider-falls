import { getGuests } from "./database.js"

const guests = getGuests()

export const Guests = () => {
    let html = "<ul>"

    for (const guest of guests) {
        html += `<li>${guest.name}</li>`
    }

    html += "</ul>"
    
    return html
}