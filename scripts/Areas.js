import { getAreas } from "./database.js"

const areas = getAreas()

export const Areas = () => {
    let html = ""

    for (const area of areas) {
        html += `<h4>${area.name}</h4>`
    }
    return html
} 