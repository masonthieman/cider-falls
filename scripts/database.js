const database = {
    
    areas: [{
        id:1,
        name: "Chamfort River"

    },  {
        id: 2,
        name: "Lost Wolf Hiking Trail"

    },  {
        id: 3,
        name: "Lodge"

    },  {
        id: 4,
        name: "Gander River"

    },  {
        id: 5,
        name: "Campgrounds"

    },  {
        id: 6,
        name: "Pine Bluffs Trails"

    }],

    services: [{
            id:1,
            name: "Rafting"

    },  {
        id: 2,
        name: "Canoeing"

    },  {
        id: 3,
        name: "Fishing"

    },  {
        id: 4,
        name: "Hiking"

    },  {
        id: 5,
        name: "Picknicking"

    },  {
        id: 6,
        name: "Rock Climbing"

    },  {
        id: 7,
        name: "Lodging"

    },  {
        id: 8,
        name: "Parking"

    },  {
        id: 9,
        name: "Information"

    },  {
        id: 10,
        name: "Zip Lines"

    }],

    guests: [{
        id:1,
        name:"Yogi Bear",
        areaId: 1
    },  {
        id: 2,
        name: "Homer Simpson",
        areaId: 4

    },  {
        id: 3,
        name: "Mason Thieman",
        areaId: 2
    }, {
        id: 4,
        name:"John Smith",
        areaId: 6

    },  {
        id: 5,
        name: "Marlon Howard",
        areaId: 4

    },  {
        id: 6,
        name: "Peter Griffin",
        areaId: 3
    }, {
        id: 7,
        name:"Lisa Stewart",
        areaId: 5

    },  {
        id: 8,
        name: "Sarah Jessica Parker",
        areaId: 5

    },  {
        id: 9,
        name: "David Johnson",
        areaId: 6
    },  {
        id:10,
        name:"Jacob Johnson",
        areaId: 6
    },  {
        id: 11,
        name: "Andre Mason",
        areaId: 4

    },  {
        id: 12,
        name: "Grace Hartman",
        areaId: 1
    }, {
        id: 13,
        name:"Hi'iliei Kapu",
        areaId: 1

    },  {
        id: 14,
        name: "Wes Thieman",
        areaId: 5

    },  {
        id: 15,
        name: "Christian Morein",
        areaId: 5
    }, {
        id: 16,
        name:"Clay Gerlach",
        areaId: 3

    },  {
        id: 17,
        name: "Madeline Bell",
        areaId: 6

    },  {
        id: 18,
        name: "Gabriel Kapu",
        areaId: 3
    }],

    servicesInAreas: [{
        serviceId: 1,
        areaId: 1

    },  {
        serviceId: 2,
        areaId: 1,
    
    },  {
        serviceId: 3,
        areaId: 1

    },  {
        serviceId: 4,
        areaId: 2,

    },  {
        serviceId: 5,
        areaId: 2

    },  {
        serviceId: 6,
        areaId: 2

    },  {
        serviceId: 7,
        areaId: 3

    },  {
        serviceId: 8,
        areaId: 3

    },  {
        serviceId: 9,
        areaId: 3

    }, {
        serviceId: 10,
        areaId: 3

    },  {
        serviceId: 3,
        areaId: 4,

    },  {
        serviceId: 4,
        areaId: 4

    },  {
        serviceId: 9,
        areaId: 5

    },  {
        serviceId: 7,
        areaId: 5

    },  {
        serviceId: 8,
        areaId: 5

    },  {
        serviceId: 4,
        areaId: 6

    },  {
        serviceId: 5,
        areaId: 6

    },  {
        serviceId: 10,
        areaId: 6

    }
    ]
}

export const getAreas = () => {
    return database.areas.map(area => ({...areas}))

}

export const getServices = () => {
    return database.services.map(service => ({...services}))
}

export const getGuests = () => {
    return database.guests.map(guest => ({...guests}))
}

export const getServicesInAreas = () => {
    return database.servicesInAreas.map(serviceInArea => ({...servicesInAreas}))
}