import { getServices } from "./database.js"

const services = getServices()

export const Services = () => {

    let html = ""

    for (const service of services) {
        html += `${service.name}`
    }

    return html
}