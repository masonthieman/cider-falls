import { getServices, getServicesInAreas, getAreas } from "./database.js"

const services = getServices()
const servicesInAreas = getServicesInAreas()
const areas = getAreas()



const getAreaNames = (oneAreaId) => {
    
    let outputString = ""
    for (const area of areas) {
        if (area.id === oneAreaId.areaId) {
            
            outputString += `${area.name}`
        }
    }

    return outputString
}
const matchAreaToService = (servId) => {

    let matchingIdArray = []
    for (const oneServiceInArea of servicesInAreas) {
        if (oneServiceInArea.serviceId === servId) {
            matchingIdArray.push(oneServiceInArea)
        }
    }

    return matchingIdArray
}

const findServiceName = (servId) => {

    for (const oneService of services) {
        if (oneService.id === servId) {
            return oneService.name
        }
    }
}

export const Services = () => {

    let html = " "
    let delimiter = ", "
    for (const service of services) {
        if (service.id === 10) {
            delimiter = "."
        }
        html += `<span class="service" id="service--${service.id}"> ${service.name}${delimiter}</span>`
    }

    return html
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("service")) {
            const [,servId] = itemClicked.id.split("--")

            let matchingAreaIds = matchAreaToService(parseInt(servId))

            let alertString = `${findServiceName(parseInt(servId))} is available in`
            
            let areaCount = 0;
            for (const oneAreaId of matchingAreaIds) {
                if (areaCount > 0) {
                    alertString += " and"
                }
                alertString += ` ${getAreaNames(oneAreaId)}`
                areaCount++
            }
            window.alert(` ${alertString}.`)
        }

        
    }
)