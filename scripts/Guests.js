import { getGuests } from "./database.js"


const guests = getGuests()


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("area")) {
            const [,areaId] = itemClicked.id.split("--")

            let guestCount = 0;
            for (const guest of guests) {
                if (guest.areaId === parseInt(areaId)) {
                    guestCount++
                }
            }

            window.alert(`This area has ${guestCount} guests.`)

        }
    }
)

export const Guests = () => {
    let html = "<ul>"

    for (const guest of guests) {
        html += `<li id="guest--${guest.id}">${guest.name}</li>`
    }

    html += "</ul>"

    return html
}