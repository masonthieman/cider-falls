import { getAreas } from "./database.js"

const areas = getAreas()


export const Areas = () => {
    let html = ""

    for (const area of areas) {
        html += `<h4 id="area--${area.id}">${area.name}</h4>`
    }
    return html
} 